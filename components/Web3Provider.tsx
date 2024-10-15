"use client";

import { thirdwebClientID } from "@/config";
import {
  Arbitrum,
  Binance,
  Ethereum,
  Mumbai,
  Polygon,
} from "@thirdweb-dev/chains";
import { ThirdwebProvider, en, metamaskWallet } from "@thirdweb-dev/react";
import { ReactNode } from "react";

interface Web3ProviderProps {
  children?: ReactNode;
}

export default function Web3Provider({
  children,
}: Readonly<Web3ProviderProps>) {
  return (
    <ThirdwebProvider
      supportedChains={[Binance, Ethereum, Arbitrum, Polygon, Mumbai]}
      clientId={thirdwebClientID}
      locale={en()}
      supportedWallets={[metamaskWallet()]}
    >
      {children}
    </ThirdwebProvider>
  );
}
