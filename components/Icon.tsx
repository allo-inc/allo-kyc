"use client";
// gradient--allo--bg--tr
export default function Icon({
  backgroundColor = undefined,
  size = "54px",
  small,
  logo_url = undefined,
}: any) {
  return (
    <div
      className={`${
        !backgroundColor ? "bg-neutral-700" : backgroundColor
      } rounded-lg`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px",
        minWidth: small ? "44px" : size,
        minHeight: small ? "44px" : size,
      }}
    >
      {!logo_url && (
        <div
          style={{
            minWidth: small ? "40px" : size,
            minHeight: small ? "40px" : size,
            backgroundImage: logo_url || "",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />
      )}
      {logo_url && (
        <span className="text-white text-[24px] font-[500] capitalize">
          {logo_url[0]}
        </span>
      )}
    </div>
  );
}
