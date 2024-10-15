"use client";

import { useAppContext } from "@/app/context";
import Logo from "@/components/Logo";
import { Loader2, Menu } from "lucide-react";
import { Link } from "next-view-transitions";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import numeral from "numeral";
import { useState } from "react";
import ChainSelection from "./ChainSelection";
import { getCurrency } from "./NextPayments/Card";
import ProfileMenu from "./ProfileMenu";
import Wallet from "./Wallet";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

export default function Header({ agree }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { loading, btcValue } = useAppContext();

  const items: any = [
    // {
    //   title: "Stake",
    //   path: "/",
    // },
    // {
    //   title: "Activity",
    //   path: "/activity",
    // },
    // {
    //   title: "Trade",
    //   path: "https://marketplace.allo.xyz",
    //   external: true,
    // },
    // {
    //   title: "Tokenize",
    //   path: "https://tokenize.allo.xyz",
    //   external: true,
    // },
    // {
    //   title: "Borrow",
    //   path: "/borrow",
    // },
    // {
    //   title: "Withdrawals",
    //   path: "/withdrawals",
    //   isDisabled: true,
    // },
    // {
    //   title: "Rewards",
    //   path: "/rewards",
    //   isDisabled: true,
    // },
  ];

  const handleItemClick = () => setIsSidebarOpen(false);

  return (
    <header className="flex gap-8 items-center justify-between py-4 px-8 lg:px-6 lg:py-4">
      <div className="flex items-center gap-8">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="lg:hidden p-0"
              aria-label="Open Menu"
            >
              <Menu className="w-[24px]" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 border-none">
            <SheetHeader className="p-8">
              <Logo />
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4">
              {items.map((item) => (
                <Link
                  href={item.path ? item.path : "/"}
                  key={item.title}
                  onClick={handleItemClick}
                  className={`border-b border-white border-opacity-10 p-2 hover:bg-white hover:bg-opacity-10 hover:rounded-lg`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Logo />
        <div className="hidden lg:flex items-center gap-4">
          {items.map((item) =>
            item.external ? (
              <NextLink
                key={item.title}
                href={item.path}
                rel="noopener noreferrer"
                onClick={handleItemClick}
                className={`${
                  item.isDisabled ? "opacity-50 pointer-events-none" : ""
                } ${
                  pathname === item.path
                    ? "text-black"
                    : "text-gray-400 hover:text-black"
                } `}
              >
                {item.title}
              </NextLink>
            ) : (
              <Link
                href={item.path ? item.path : "/"}
                key={item.title}
                aria-disabled={item.isDisabled}
                className={`${
                  item.isDisabled ? "opacity-50 pointer-events-none" : ""
                } ${
                  pathname === item.path
                    ? "text-black"
                    : "text-gray-400 hover:text-black"
                } `}
              >
                {item.title}
              </Link>
            )
          )}
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <div className="hidden md:flex gap-2">
          <div className="flex items-center py-1 px-2 bg-white rounded-lg min-w-[100px] shadow-sm">
            <span className="text-neutral-400">{getCurrency("BTC")}</span>
            {loading ? (
              <Loader2 size="18px" className="animate-spin ml-2" />
            ) : (
              <p className="font-semibold ml-1 text-sm">
                {numeral(btcValue?.usd || 56450).format("$0,0")}
              </p>
            )}
          </div>
          <ChainSelection />
          <div className={`${agree ? "" : "opacity-50 pointer-events-none"}`}>
            <Wallet />
          </div>
        </div>
        <ProfileMenu />
      </div>
    </header>
  );
}
