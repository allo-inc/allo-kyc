import Image from "next/image";
import numeral from "numeral";
import React from "react";
import Babylon from "@/assets/icons/babylon.svg";
import BannerBG from "@/assets/backgrounds/banner.png";

const RewardBanner = () => {
  return (
    <div
      className="card p-4 h-[200px] bg-cover"
      style={{
        backgroundImage: `url(${BannerBG.src})`,
      }}
    >
      <p className="uppercase text-lg opacity-60 font-semibold">
        Bitcoin Staking Rewards
      </p>
      <div className="flex justify-between items-center flex-col md:flex-row overflow-auto">
        <p className="text-[40px] font-semibold">
          {numeral(100000).format("0,0")}
        </p>
        <div className="flex gap-2">
          <Image src={Babylon} alt="Babylon" width={25} height={25} />
          <p>BABYLON</p>
        </div>
      </div>
    </div>
  );
};

export default RewardBanner;
