"use client";

import Header from "@/components/Header";
import { coingeckoUrl } from "@/config";
import { useHelpers } from "@/hooks/useHelpers";
import { ethers } from "ethers";
import { ViewTransitions } from "next-view-transitions";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Toaster } from "sonner";

const AppContext = createContext<any>(undefined);

export function AppWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [agree, setAgree] = useState(false);
  const [btcValue, setBtcValue] = useState<number>();
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(
    null
  );
  const { loading, setLoading } = useHelpers();

  const fetchBTCValue = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${coingeckoUrl}/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
      );
      const data = await res.json();
      setBtcValue(data?.bitcoin);
    } catch (error) {
      console.error("Error fetching BTC value", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBTCValue();
  }, []);

  useEffect(() => {
    if (window?.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setProvider(provider);
      setSigner(signer);
    } else {
      console.log(
        "Metamask is not installed or accessible. Please install Metamask extension."
      );
    }
  }, []);

  return (
    <ViewTransitions>
      <AppContext.Provider
        value={{
          btcValue,
          setBtcValue,
          loading,
          signer,
          provider,
          agree,
          setAgree,
        }}
      >
        <main className="relative min-h-screen flex items-start w-full">
          <Toaster position="top-right" richColors />
          <div className="w-full">
            <Header {...{ agree, setAgree }} />
            <div className="px-8">{children}</div>
          </div>
        </main>
      </AppContext.Provider>
    </ViewTransitions>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
