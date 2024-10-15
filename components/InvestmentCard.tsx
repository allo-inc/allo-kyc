import Image from "next/image";
import React from "react";

interface InvestmentCardProps {
  data: {
    title: string;
    token?: string;
    amount?: number;
    daysLeft?: number;
    minting?: number;
    image: any;
  };
  onClick?: () => void;
}

const InvestmentCard = ({ data, onClick }: InvestmentCardProps) => {
  const { title, token, amount, minting, daysLeft, image } = data;

  // console.log("data: ", data);

  return (
    <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:translate-y-[-10px] hover:bg-white hover:bg-opacity-5 hover:">
      <Image src={image} alt={`${title}`} className="w-full bg-cover" />
      <div className="flex flex-col p-6 bg-white bg-opacity-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-50">{token}</p>
        <div className="flex justify-between mt-2">
          {amount && (
            <div>
              <p className="text-gray-400">Available</p>
              <p className="text-sm">${amount.toLocaleString()}</p>
            </div>
          )}
          <div>
            <p className="text-gray-400">{daysLeft ? "Deadline" : "Minting"}</p>
            <p className="text-sm">{`${daysLeft || minting} days left`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
