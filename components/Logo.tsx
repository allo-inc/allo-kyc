"use client";

import AlloLight from "@/assets/allo_logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <Image
      src={AlloLight}
      alt="allo"
      className="w-[120px] cursor-pointer"
      onClick={() => router.push("/")}
    />
  );
}
