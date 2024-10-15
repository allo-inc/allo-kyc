import BTC from "@/assets/icons/bitcoin.svg";
import BTCB from "@/assets/icons/btcb.svg";
import USDT from "@/assets/icons/usdt_cr.svg";
import BNB from "@/assets/icons/bnb.svg";
import Image from "next/image";
import numeral from "numeral";
import { useState } from "react";
import Payment from "./Payment";

export const getCurrency = (title: string) => {
  const getImg: any = () => {
    switch (title) {
      case "USDT":
        return USDT;
      case "BTCB":
        return BTCB;
      case "BTC":
        return BTC;
      case "BNB Chain":
        return BNB;
      default:
        return USDT;
    }
  };

  return (
    <div className="flex items-center gap-1">
      <Image src={getImg()} alt="USDT" className="w-5 h-5" />
      <p className="text-sm font-semibold">{title}</p>
    </div>
  );
};

interface Props {
  item: {
    amount: number;
    deadline: string;
    date: string;
    year: number;
  };
}

const Card = ({ item }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="card p-4 w-full cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="flex items-center gap-2 text-lg font-semibold">
              {numeral(item.amount).format("0,0")} {getCurrency("USDT")}
            </p>
            <p className="text-sm">{item.deadline}</p>
          </div>
          <div className="bg-gray-500 bg-opacity-5 p-2 rounded-lg">
            <p className="text-sm font-semibold">{item.date}</p>
            <p className="text-sm text-center">{item.year}</p>
          </div>
        </div>
      </div>
      <Payment open={open} setOpen={setOpen} />
    </>
  );
};

export default Card;
