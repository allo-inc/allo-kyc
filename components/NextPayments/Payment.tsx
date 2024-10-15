import React, { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import Image from "next/image";
import CurrencyInput from "react-currency-input-field";
import numeral from "numeral";
import USDT from "@/assets/icons/usdt_cr.svg";
import BNBChain from "@/assets/icons/bnbChain.svg";
import ButtonComponent from "../Button";

const Payment = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [amount, setAmount] = useState(0);

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent>
        <h2>Payment</h2>
        <div className="flex flex-col gap-1">
          <p>Amount to pay</p>
          <div className="flex justify-between p-2">
            <CurrencyInput
              value={amount}
              className="input--currency text-[1.2rem] border border-[#F7931A]"
              placeholder="0"
              defaultValue={numeral(amount).format("$0,0.00")}
              min={0}
              decimalsLimit={2}
            />
            <div className="flex gap-2">
              <Image
                src={USDT}
                alt="USDT"
                width={20}
                height={20}
                className="inline-block
              ml-2"
              />
              <p>USDT</p>
            </div>
          </div>
        </div>
        <ButtonComponent>Pay</ButtonComponent>
        <div className="flex gap-4 justify-center">
          <p className="font-semibold">Powered by</p>
          <Image src={BNBChain} alt="BNB Chain" height={25} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Payment;
