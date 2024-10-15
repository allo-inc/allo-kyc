import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      label: "What is Babylon?",
      desc: "Babylon is a Shared Security Protocol that leverages Bitcoin to enhance the security of other Proof-of-Stake chains. By introducing the concept of Bitcoin staking, it allows Bitcoin holders to stake their bitcoins and earn yield while bolstering the security of PoS chains. To learn more about Babylon, you can refer to the document here.",
    },
    {
      label: "What is BTC staking?",
      desc: "BTC staking in the Babylon blockchain allows Bitcoin holders to stake their BTC to provide economic security to the Babylon chain and other Proof-of-Stake (PoS) blockchains. This process is trustless and self-custodial, meaning it doesn't require bridging, wrapping, third-party custody, or oracles.",
    },
    {
      label: "When is the next Babylon deadline?",
      desc: "Cap 1 (August 2024): Sold out in 60 minutes (1,000 BTC)\nCap 2 (October 2024): Coming soon",
    },
    {
      label: "How long is the lockup?",
      desc: "Babylon have advised that the staking lockup is 6 months.",
    },
    {
      label: "Has Babylon been audited?",
      desc: "Yes, Babylon has been audited by Zellic and Coinspect.",
    },
    {
      label: "Which custodian are you using?",
      desc: "Allo has partnered with Cobo ($200bn tx secured) for BTC custody - they were recommended by Babylon. Cobo is powering 60% of the top Babylon staking protocols.",
    },
    {
      label: "Which BTC assets do you accept?",
      desc: "BTC, BTCB.",
    },
    {
      label: "How does Bitcoin staking work?",
      desc: "BTC holders lock their BTC using the trustless and self-custodial Bitcoin Staking script for a predetermined time (timelock) in exchange for voting power in an underlying PoS protocol. In return, Bitcoin holders will earn PoS staking rewards. Finality providers perform the voting. A BTC staker can create a finality provider by itself and self-delegate or delegate its voting power to a third-party finality provider. If a finality provider attacks the PoS system, the BTCs behind the voting powers delegated to it will be subject to protocol slashing.",
    },
    // {
    //   label: "Have you audited the alloBTC smart contracts?",
    //   desc: "Committed to security and transparency, we are collaborating with Zellic.io on auditing our systems, following their recommendations for the Lorenzo protocol. You can review the audit report here.",
    // },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto md:w-[600px]">
      <h3 className="font-semibold mb-4 text-sm md:text-2xl m-0">FAQ</h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer "
              onClick={() => handleToggle(index)}
            >
              <h4 className="text-sm font-medium">{item.label}</h4>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-sm mt-2 text-gray-600">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
