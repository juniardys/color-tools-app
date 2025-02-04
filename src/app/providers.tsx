'use client';

import { WalletProvider } from "@/providers/WalletProvider";
import { PropsWithChildren } from "react";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <WalletProvider>
        {children}
      </WalletProvider>
    </>
  )
}

export default Providers;
