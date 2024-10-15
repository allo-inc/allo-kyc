import React from "react";
import { Button } from "./ui/button";

const Announcement = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-2 px-4 bg-black text-white text-sm">
      <div />
      <p>
        Explore the Preview Demo Environment - Exclusive Pilot Version – Apply
        for Waitlist Today!
      </p>
      <Button variant="ghost" className="px-2 w-fit text-[#F7931A]">
        Apply for Waitlist
      </Button>
    </div>
  );
};

export default Announcement;
