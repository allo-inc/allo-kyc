"use client";

import { useAppContext } from "@/app/context";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import Wallet from "./Wallet";
import { User2 } from "lucide-react";

const ProfileMenu = () => {
  const { user } = useAppContext();

  return (
    <Menubar className="md:hidden rounded-full p-0 border-none h-0">
      <MenubarMenu>
        <MenubarTrigger className="bg-[#F7931A] rounded-full capitalize overflow-hidden p-[1px] w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer font-[800]">
          <div className="text-white w-full h-full rounded-full flex items-center justify-center text-xl">
            <User2 />
          </div>
        </MenubarTrigger>
        <MenubarContent className="border-none">
          <div className="flex flex-col justify-center items-center p-4">
            <User2 />
            <p className="text-sm text-[#737373] mt-2">{user?.email}</p>
          </div>
          <div className="flex flex-col gap-2 md:hidden pb-4">
            <Wallet />
          </div>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ProfileMenu;
