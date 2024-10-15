import { alloAPIUrl } from "@/config";
import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import { ethers } from "ethers";
import { customAlphabet } from "nanoid";
import numeral from "numeral";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher(
  url: string,
  method = "GET",
  body?: any,
  headers?: Record<string, string>
) {
  const isFormData = body instanceof FormData;
  const host = alloAPIUrl;

  const fetchHeaders = {
    Accept: "application/json",
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...(headers || {}),
  };

  try {
    const response = await fetch(`${host}/v4${url}`, {
      method,
      headers: fetchHeaders,
      body: isFormData ? body : JSON.stringify(body),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse?.error || errorResponse?.message || "Something went wrong"
      );
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export const identityValidation = z.discriminatedUnion("type", [
  z.object({
    address_line_1: z.string().min(1, "Address is Required"),
    city: z.string().min(1, "City is Required"),
    country: z.string().min(1, "Country is Required"),
    country_of_residency: z.string().optional().nullable(),
    date_of_formation: z.string().min(1, "Birth Date is Required"),
    legal_name: z.string().min(1, "Legal Name is Required"),
    postal_code: z.string().min(1, "Postal Code is Required"),
    region: z.string().min(1).nullable(),
    tax_id: z.string().nullable(),
    tax_id_type: z.string().min(1, "Tax ID Type is Required"),
    type: z.literal("Individual"),
  }),
  z.object({
    address_line_1: z.string().min(1, "Address is Required"),
    city: z
      .string({ invalid_type_error: "City is Required" })
      .min(1, "City is Required"),
    country: z.string().min(1, "Country is Required"),
    country_of_residency: z.string().optional().nullable(),
    date_of_formation: z
      .string()
      .min(1, "Date of Entity Formation is Required"),
    entity_type: z.string().min(1, "Entity Type is Required"),
    legal_name: z.string().min(1, "Legal Name is Required"),
    postal_code: z.string().min(1, "Postal Code is Required"),
    region: z.string().min(1).nullable(),
    tax_id: z.string().nullable(),
    tax_id_type: z
      .string({ invalid_type_error: "Tax ID Type is Required" })
      .min(1, "Tax ID Type is Required"),
    type: z.literal("Entity"),
  }),
]);

export const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const isIdentityValid = (identity: any) => {
  return identityValidation.safeParse(identity);
};

export const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);

export function generateCode() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letter1 = letters.charAt(Math.floor(Math.random() * letters.length));
  const letter2 = letters.charAt(Math.floor(Math.random() * letters.length));
  const numbers = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  const code = `${letter1}${letter2}-` + numbers;
  return code;
}

export const handleFileDownload = async (fileUrl: string, fileName: string) => {
  try {
    const response = await fetch(fileUrl, {
      headers: {
        "Content-Type": "application/pdf",
      },
    });
    if (!response.ok) {
      throw new Error(
        `Failed to download file. HTTP status ${response.status}`
      );
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error: any) {
    toast.error("Error downloading file", error.message);
  }
};

export const getCurrentDate = () => {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  let month: number | string = today.getMonth() + 1;
  let day: number | string = today.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
};

export const exportToCSV = (
  data: any[],
  fileName: string,
  headers: { label: string; key: string }[]
) => {
  try {
    if (data.length === 0) return;
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [
        headers.map((header) => header.label).join(","),
        ...data.map((row) =>
          headers.map((header) => row[header.key] ?? "").join(",")
        ),
      ].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${fileName}.csv`);
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error("Error exporting CSV:", error);
  }
};

export const flattenObject = (
  obj: Record<string, any>
): Record<string, any> => {
  const result: Record<string, any> = {};
  const recurse = (current: Record<string, any>) => {
    for (const key in current) {
      if (current.hasOwnProperty(key)) {
        if (
          typeof current[key] === "object" &&
          current[key] !== null &&
          !Array.isArray(current[key])
        ) {
          recurse(current[key]);
        } else {
          result[key] = current[key];
        }
      }
    }
  };
  recurse(obj);
  return result;
};

export const fetchFileFromUrl = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const filename = url.split("/").pop();
  const file = new File([blob], filename);
  return file;
};

export const transformWord = (name: string) => {
  if (!name) return;
  return name
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/(?<=\s)./g, (str) => str.toLowerCase());
};

export const formatBalance = (balance: any): string => {
  if (!balance) return "0.00";

  const formattedBalance = ethers.utils.formatUnits(balance, 6);
  return parseFloat(formattedBalance).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

// Function to calculate the per-second interest rate from APY
export const calculatePerSecondRate = (apy: number): number => {
  const apyDecimal = apy / 100; // Convert APY to decimal
  const secondsPerYear = 365 * 24 * 60 * 60; // Number of seconds in a year
  const perSecondRate = Math.pow(1 + apyDecimal, 1 / secondsPerYear) - 1;
  return perSecondRate;
};

// Function to calculate accrued yield based on per-second rate
export const calculateAccruedYield = (
  initialAmount: number,
  apy: number,
  depositDate: string,
  currentDate: string
): number => {
  const perSecondRate = calculatePerSecondRate(apy);
  const startDate = dayjs(depositDate);
  const endDate = dayjs(currentDate);
  const secondsHeld = endDate.diff(startDate, "second");
  const accruedYield =
    initialAmount * Math.pow(1 + perSecondRate, secondsHeld) - initialAmount;
  return accruedYield;
};

export const formatValue = (value, isCurrency = false) => {
  const numericValue = Number(value);
  if (isNaN(numericValue)) {
    return isCurrency ? "$0" : "0";
  }
  return numericValue % 1 === 0
    ? numeral(numericValue).format(isCurrency ? "$0,0" : "0,0")
    : numeral(numericValue).format(
        isCurrency ? "$0,0.[000000]" : "0,0.[000000]"
      );
};
