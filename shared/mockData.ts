export const stakeActivity = {
  totalStaked: "5.5 BTC",
  totalStakedUSD: "$17,3876.49",
  transactions: [
    {
      type: "Stake",
      amount: "+3.00",
      currency: "BTC",
      structure_type: "Stake",
      created_at: "2025-01-14",
      transaction_hash:
        "0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838",
    },
    {
      type: "Stake",
      amount: "+2.5",
      currency: "BTCB",
      structure_type: "Stake",
      created_at: "2024-06-14",
      transaction_hash:
        "0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838",
    },
  ],
};

export const borrowActivity = {
  totalBorrowed: "100,000",
  transactions: [
    {
      amount: "70,000",
      available: "30,000",
      status: "Success",
      created_at: "4 Sep 2024",
      transaction_hash:
        "0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838",
    },
    {
      amount: "30,000",
      available: "30,000",
      status: "Success",
      created_at: "4 Aug 2024",
      transaction_hash:
        "0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838",
    },
  ],
};

export const historyActivity = [
  {
    amount: "20,000",
    type: "Withdrawal",
    status: "In process",
    created_at: "4 Sep 2024",
    transaction_hash:
      "0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838",
  },
  {
    amount: "15,000",
    type: "Deposit",
    status: "Success",
    created_at: "4 Aug 2024",
    transaction_hash:
      "0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838",
  },
  {
    amount: "2,000",
    type: "Deposit",
    status: "Success",
    created_at: "4 Jul 2024",
    transaction_hash:
      "0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838",
  },
  {
    amount: "2,000",
    type: "Withdrawal",
    status: "Failed",
    created_at: "4 Jul 2024",
    transaction_hash:
      "0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838",
  },
];
