import React, { useRef } from "react";
import { Input } from "./ui/input";

interface PercentageInputProps {
  value: number;
  onChange: (value: number) => void;
  required?: boolean;
}

const PercentageInput: React.FC<PercentageInputProps> = ({
  value,
  onChange,
  required,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9.]/g, "");

    if (inputValue === "") {
      onChange(NaN);
      return;
    }
    let parsedValue = parseFloat(inputValue);

    if (parsedValue < 0) {
      parsedValue = 0;
    } else if (parsedValue > 100) {
      parsedValue = 100;
    }
    onChange(parsedValue);

    if (inputRef.current) {
      const { selectionStart, selectionEnd } = inputRef.current;
      const formatted = formattedValue.length;
      setTimeout(() => {
        inputRef.current?.setSelectionRange(
          selectionStart! + formatted - formattedValue.length,
          selectionEnd! + formatted - formattedValue.length
        );
      }, 0);
    }
  };

  const handleFocus = () => {
    if (inputRef.current) {
      const length = formattedValue.length;
      inputRef.current.setSelectionRange(length, length);
    }
  };

  const formattedValue =
    isNaN(value) || !value
      ? ""
      : `${value % 1 !== 0 ? value.toFixed(2) : value}%`;

  return (
    <Input
      type="text"
      value={formattedValue}
      onChange={handleChange}
      onFocus={handleFocus}
      placeholder="0%"
      min="0"
      max="100"
      ref={inputRef}
      required={required}
    />
  );
};

export default PercentageInput;
