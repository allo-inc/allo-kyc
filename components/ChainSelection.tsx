"use client";
import { NETWORKS } from "@/lib/constants";
import { useSwitchChain, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const ChainSelection = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(NETWORKS[0]?.title);
  const switchNetwork = useSwitchChain();
  const address = useAddress();

  // Function to get the current network from the provider
  const getCurrentNetwork = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const providerChainId = await window.ethereum.request({
          method: "eth_chainId",
        });

        // Find network title by chainId
        const currentNetwork = NETWORKS.find(
          (n) => n.chainId === parseInt(providerChainId, 16)
        );

        if (currentNetwork) {
          setSelectedNetwork(currentNetwork.title);
        }
      } catch (error) {
        console.error("Error fetching chain ID from provider:", error);
      }
    }
  };

  useEffect(() => {
    getCurrentNetwork();
  }, []);

  const handleNetworkChange = (networkTitle: string) => {
    setSelectedNetwork(networkTitle);
    try {
      const network = NETWORKS.find((n) => n.title === networkTitle);
      if (network && switchNetwork && address) {
        switchNetwork(network?.chainId);
      }
    } catch (error) {
      console.error("Error switching network:", error);
    }
  };

  return (
    <div className="shadow-sm">
      <Select value={selectedNetwork} onValueChange={handleNetworkChange}>
        <SelectTrigger id="asset-location" className="border-none w-[200px]">
          <SelectValue placeholder="Select Chain" />
        </SelectTrigger>
        <SelectContent className="border-none">
          <SelectItem value="Select Chain" disabled>
            <p className="text-sm">Select Chain</p>
          </SelectItem>
          {NETWORKS?.map((option: any) => (
            <SelectItem
              key={option.title}
              value={option.title}
              disabled={option.isDisabled}
            >
              <div className="flex gap-2 items-center">
                <Image src={option.icon} alt="" width={20} height={20} />
                {option.title}
                {option.isDisabled && <span>Coming soon</span>}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ChainSelection;
