"use client";

import React from "react";
import Card from "./Card";
import RewardBanner from "./RewardBanner";

const NextPayments = () => {
  const items = [
    {
      amount: 2750,
      deadline: "Due in 15 days",
      date: "4 Oct",
      year: 2024,
    },
    {
      amount: 2500,
      deadline: "Due in 20 days",
      date: "9 Oct",
      year: 2024,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg md:text-[24px] font-semibold">Next payments</p>
      <div className="grid gap-4">
        {items.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <RewardBanner />
    </div>
  );
};

export default NextPayments;
