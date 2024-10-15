"use client";
import Web3Provider from "@/components/Web3Provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "animate.css";
import { Suspense } from "react";
import { AppWrapper } from "./context";
import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Allo BTC lending & staking protocol</title>
        <meta
          name="description"
          content="Borrow, lend and stake BTC instantl"
        />
        <meta
          property="og:title"
          content="Allo BTC lending & staking protocol"
        />
        <meta
          property="og:description"
          content="Borrow, lend and stake BTC instantl"
        />

        <meta property="og:url" content="https://marketplace.allo.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/allo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Allo BTC lending & staking protocol"
        />
        <meta
          name="twitter:description"
          content="Borrow, lend and stake BTC instantl"
        />
        <meta name="twitter:image" content="/allo.png" />
      </head>
      <body>
        <Suspense>
          <Web3Provider>
            <AppWrapper>{children}</AppWrapper>
          </Web3Provider>
        </Suspense>
        <Analytics />
        <SpeedInsights />
        <script
          defer
          data-domain="btc.allo.xyz"
          src="https://plausible.io/js/script.js"
        ></script>
      </body>
    </html>
  );
}
