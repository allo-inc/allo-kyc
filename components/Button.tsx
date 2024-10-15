"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export default function ButtonComponent({
  loading,
  disabled,
  onClick,
  label,
  children,
  variant,
  className,
}: any) {
  return (
    <Button
      variant={variant}
      disabled={loading || disabled}
      className={`${
        variant !== "link" ? "bg-[#F7931A]" : "border-2 rounded"
      } w-full transition h-auto lg:h-[40px] font-[600] text-[13px] flex gap-2 dark:text-white hover:border hover:border-[#F7931A] hover:bg-white hover:text-[#F7931A] ${className}`}
      onClick={onClick}
    >
      {!loading && (
        <>
          {children}
          {label}
        </>
      )}
      {loading && <Loader2 className="animate-spin" />}
    </Button>
  );
}
