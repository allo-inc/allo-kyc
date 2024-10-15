import dayjs from "dayjs";
import numeral from "numeral";
import { useState } from "react";

export const useHelpers = () => {
  const [data, setData] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selected, setSelected] = useState<any>(undefined);
  const [errors, setErrors] = useState<string[]>([]);
  const [endAt, setEndAt] = useState<number>(18);
  const [success, setSuccess] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  const calculateTotalAmount = (data: any) => {
    if (!data) return 0;
    return data.reduce((total: number, obj: any) => {
      if (!obj) return 0;
      if (obj.amount !== null && !isNaN(obj.amount)) {
        return total + obj.amount;
      } else {
        return total;
      }
    }, 0);
  };

  const getNumberFormat = (amount = 0) => {
    const hasDecimal = amount % 1 !== 0;
    if (hasDecimal) {
      return numeral(amount).format("0,0.000000");
    }
    return numeral(amount).format("0,0");
  };

  const getDollars = (amount = 0) => {
    const hasDecimal = amount % 1 !== 0;
    if (hasDecimal) {
      return numeral(amount).format("$0,0.00");
    }
    return numeral(amount).format("$0,0");
  };

  const getValues = (amount = 0) => {
    let numericValue = Number(amount);
    if (isNaN(numericValue)) {
      numericValue = 0;
    }
    if (Math.abs(numericValue) < 1e-10) {
      numericValue = 0;
    }
    const hasDecimal = numericValue % 1 !== 0;
    if (hasDecimal) {
      return numeral(numericValue).format("0,0.000000");
    }
    return numeral(numericValue).format("0,0");
  };

  const openUrl = (link: string) => {
    if (!link) return;
    if (process.browser) window.open(link, "_blank");
  };

  function trimString(str: string, limit = 22) {
    if (!str) return;
    return str.length <= limit ? str : `${str.slice(0, limit)}...`;
  }

  function toDate(date: Date) {
    return dayjs(date.toString()).format("D MMMM YYYY");
  }

  function shortenTx(tx: string) {
    if (typeof tx !== "string" || !tx.startsWith("0x") || tx.length < 11) {
      return "Invalid input";
    }

    const prefix = tx.slice(0, 6);
    const suffix = tx.slice(-6);

    return prefix + "..." + suffix;
  }

  function convertToDay(seconds: string) {
    const day = Math.floor(Number(seconds) / 86400);
    // const hours = Math.floor((Number(seconds) % 86400) / 3600);
    // const minutes = Math.floor((Number(seconds) % 3600) / 60);
    // const secondsLeft = Math.floor(Number(seconds) % 60);
    return `${day} days`;
  }

  return {
    openUrl,
    show,
    setShow,
    errors,
    setErrors,
    data,
    setData,
    showAlert,
    setShowAlert,
    selected,
    setSelected,
    disabled,
    setDisabled,
    open,
    setOpen,
    loading,
    setLoading,
    success,
    setSuccess,
    endAt,
    setEndAt,
    trimString,
    btnLoading,
    getNumberFormat,
    setBtnLoading,
    toDate,
    shortenTx,
    calculateTotalAmount,
    getDollars,
    getValues,
    convertToDay,
  };
};
