import BNB from "@/public/BNB_Chain.svg";

export const POLYGON_MAINNET_CHAIN_ID = 137;
export const ETHEREUM_MAINNET_CHAIN_ID = 1;
export const BNB_MAINNET_CHAIN_ID = 56;
export const BNB_TESTNET_CHAIN_ID = 97;

export const NETWORKS = [
  // {
  //   title: "Polygon",
  //   icon: Polygon,
  // },
  // {
  //   title: "Polygon Amoy",
  //   icon: Polygon,
  // },
  {
    title: "BNB Chain",
    icon: BNB,
    chainId: BNB_MAINNET_CHAIN_ID,
  },
  {
    title: "BNB Chain Testnet",
    icon: BNB,
    chainId: BNB_TESTNET_CHAIN_ID,
  },
];
