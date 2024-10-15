"use client";

import { usePathname, useRouter } from "next/navigation";

import { useAppContext } from "@/app/context";
import { alloNotionURL, publicWebUrl } from "@/config";
import { LayoutDashboard, MessageCircleQuestion, X } from "lucide-react";
import { Link } from "next-view-transitions";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Logo from "./Logo";

export const items = [
  {
    name: "Dashboard",
    pageName: "/",
    icon: <LayoutDashboard className="w-6 h-6" />,
  },
];

const footerItems = [];

export default function Sidebar({
  onClose,
}: Readonly<{ onClose?: () => void }>) {
  const pathname = usePathname();
  const router = useRouter();
  const { demo, user } = useAppContext();

  const handleRoute = (route: string) => {
    router.push(route);
    if (onClose) onClose();
  };

  return (
    <aside
      className={`fixed h-screen flex flex-col py-4 gap-0 w-full min-w-[320px] max-w-[320px] z-40 bg-white`}
    >
      <X
        className="absolute flex lg:hidden top-4 right-4 cursor-pointer"
        onClick={() => {
          if (onClose) onClose();
        }}
      />
      {!demo && (
        <div className="px-6 py-4">
          <Logo />
        </div>
      )}
      <div className="flex flex-col overflow-y-auto py-2 px-4 h-full">
        <div className="grow">
          <ul className="grid gap-2">
            {items.map((item: any) => {
              const disabled = item.isDisabled ? item.isDisabled(user) : false;
              return (
                <TooltipProvider key={item.name}>
                  <Tooltip>
                    <TooltipTrigger>
                      <li
                        className={`p-2 text-base font-normal rounded relative transition duration-150 ease-in-out cursor-pointer ${
                          pathname === item.pageName
                            ? "font-semibold"
                            : "text-gray-500 hover:bg-neutral-100 dark:hover:bg-gray-800"
                        } ${disabled ? "opacity-50 pointer-events-none" : ""}`}
                        onClick={() => handleRoute(item.pageName)}
                      >
                        <Link
                          href={item.pageName}
                          className="flex gap-2 items-center "
                        >
                          {item.icon}
                          {item.name}
                          {item.suffixIcon && item.suffixIcon}
                        </Link>
                      </li>
                    </TooltipTrigger>
                    {disabled && item.tooltip && (
                      <TooltipContent>{item.tooltip}</TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </ul>
        </div>
        <ul className="grid gap-2">
          {footerItems.map((item: any) =>
            item.component ? (
              item.component
            ) : (
              <li
                key={item.name}
                className={`p-2 text-base font-normal rounded relative transition duration-150 ease-in-out cursor-pointer ${
                  pathname === item.pageName
                    ? "font-semibold"
                    : "text-gray-500 hover:bg-neutral-100 dark:hover:bg-gray-800"
                } ${item.isDisabled ? "opacity-50 pointer-events-none" : ""}`}
                onClick={() => window.open(item.pageName, "_blank")}
              >
                <div className="flex gap-2 items-center ">
                  {item.icon}
                  {item.name}
                </div>
              </li>
            )
          )}
        </ul>
        {!demo && (
          <div className="p-3 text-gray-500 text-sm pb-[60px]">
            &copy; 2024 Allo.xyz All Rights Reserved <br />
            <a
              href={`${publicWebUrl}/privacy-policy`}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href={`${publicWebUrl}/terms`}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Terms and conditions
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}
