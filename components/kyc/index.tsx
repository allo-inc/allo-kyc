"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import countries from "@/countries.json";
import ButtonComponent from "../Button";
import Upload from "../Upload";
import { Globe } from "lucide-react";

export const CustomInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  readonly,
}: any) => (
  <div>
    <label htmlFor={name} className="text-sm">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <Input
      id={name}
      readOnly={readonly}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

const KycPage = () => {
  const [profile, setProfile] = useState<any>({});
  const acceptedDocuments = [
    {
      name: "Passport",
      icon: <Globe />,
    },
    {
      name: "Driving License",
      icon: <Globe />,
    },
    {
      name: "National ID",
      icon: <Globe />,
    },
    {
      name: "Residence permit",
      icon: <Globe />,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Personal information</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <CustomInput
          label="First name"
          name="first_name"
          value={profile?.first_name}
          onChange={(e: any) =>
            setProfile({ ...profile, first_name: e.target.value })
          }
          placeholder="Enter first name"
          required
        />
        <CustomInput
          label="Last name"
          name="last_name"
          value={profile?.last_name}
          onChange={(e: any) =>
            setProfile({ ...profile, last_name: e.target.value })
          }
          placeholder="Enter last name"
          required
        />
        <CustomInput
          type="date"
          label="Date of birth"
          name="date_of_birth"
          value={profile?.date_of_birth}
          onChange={(e: any) =>
            setProfile({ ...profile, date_of_birth: e.target.value })
          }
          required
        />
      </div>
      <h3 className="text-xl font-semibold">Country of Citizenship</h3>
      <div className="md:col-span-2">
        <p className="text-sm font-semibold mb-1">
          Country <span className="text-red-500">*</span>
        </p>
        <Select
          value={profile?.country || ""}
          onValueChange={(value) => setProfile({ ...profile, country: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((item: any) => (
              <SelectItem key={item.code} value={item.code}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <h3 className="text-xl font-semibold">Accepted documents</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {acceptedDocuments.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex items-center gap-4"
          >
            <div className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
              {item.icon}
            </div>
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-semibold">Upload documents</h3>
      <Upload data={[]} onFilesChange={(files) => console.log(files)} />
      <ButtonComponent>Submit</ButtonComponent>
    </div>
  );
};

export default KycPage;
