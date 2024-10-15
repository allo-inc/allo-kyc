"use client";

export default function Tag({
  small,
  label = "live",
}: {
  small?: boolean;
  label: string;
}) {
  const getBackgroundColor = () => {
    if (!label) return;
    switch (label.toLowerCase()) {
      case "success":
        return "bg-green-50 text-green-500 border-green-600";
      case "failed":
        return "bg-red-50 text-red-500 border-red-600";
      default:
        return "bg-orange-50 text-orange-500 border-orange-600";
    }
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full text-sm border border-opacity-30 gap-1 inline-flex dark:bg-transparent px-2 ${getBackgroundColor()} ${
        small ? "text-[9px]" : "text-[12px]"
      }`}
    >
      {label}
    </div>
  );
}
