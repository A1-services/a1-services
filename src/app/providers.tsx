// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { CartProvider } from "@/context/cart";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextUIProvider>
        <CartProvider>{children}</CartProvider>
      </NextUIProvider>
      <Toaster />
    </>
  );
}
