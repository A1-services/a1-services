"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Product } from "@/types";

const setCart: Dispatch<SetStateAction<Product[]>> = () => {};

const initial: {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
} = {
  cart: [],
  setCart,
};

export const cartContext = createContext(initial);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};
