"use client";
import { ConnectWallet, lightTheme, useAddress } from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
interface WalletProps {
  variant?: "outline" | "filled";
}

const Wallet: React.FC<WalletProps> = ({ variant = "filled" }) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  let address = useAddress();
  address = address?.toLowerCase();
  const isOutline = variant === "outline";

  useEffect(() => {
    setIsConnected(!!address);
  }, [address]);

  const themeProperties = {
    colors: {
      primaryButtonBg: isOutline
        ? "transparent"
        : isConnected
        ? "#fff"
        : "#F7931A",
      primaryButtonText: isOutline ? "#F7931A" : isConnected ? "#000" : "#fff",
    },
  };

  return (
    <ConnectWallet
      showThirdwebBranding={false}
      hideBuyButton
      hideReceiveButton
      hideTestnetFaucet
      hideSendButton
      style={{
        borderRadius: "6px",
        border: `1px solid ${isOutline ? "#F7931A" : "transparent"}`,
        height: "35px",
        width: "100%",
      }}
      theme={lightTheme(themeProperties)}
      modalTitle={"Connect wallet"}
      modalTitleIconUrl={
        "https://lvfinjcwkocqwbatqlru.supabase.co/storage/v1/object/public/images/Logo/allo-btc.svg?t=2024-09-10T06%3A25%3A25.435Z"
      }
      auth={{ loginOptional: true }}
      welcomeScreen={{
        title: "Borrow, lend and stake BTC instant",
        img: {
          src: "https://lvfinjcwkocqwbatqlru.supabase.co/storage/v1/object/public/images/Logo/allo-btc.svg?t=2024-09-10T06%3A25%3A25.435Z",
          width: 200,
          height: 0,
        },
      }}
    />
  );
};

export default Wallet;
