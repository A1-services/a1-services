"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { Product } from "@/types";
import {
  getCart,
  addToCart as add,
  removeItemCart as remove,
} from "@/util/Cart";
import toast from "react-hot-toast";

const cart: Product[] = [];
const setCart: Dispatch<SetStateAction<Product[]>> = () => {};
const addToCart = (product: Product) => {};
const removeItemCart = (id: string) => {};

const initial = {
  cart,
  setCart,
  addToCart,
  removeItemCart,
};

export const cartContext = createContext(initial);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const cartStorage = getCart();
    const loadedCart = cartStorage !== "No Items" ? cartStorage.cartItems : [];
    setCart(loadedCart);
  }, []);

  const addToCart = (product: Product) => {
    const found  = cart.find((p) => p.id === product.id)

    if (found) {
      toast((t) => (<span>
        Product is already in cart
      </span>))
      return
    }

    add(product);
    setCart((prev) => {
      return [...prev, product];
    });

    toast.success("Added to Cart")
  };

  const removeItemCart = (id: string) => {
    remove(id);
    setCart((prev) => prev.filter((p) => p.id !== id));
    toast.success("Item was removed")
  };

  return (
    <cartContext.Provider
      value={{ cart, setCart, addToCart, removeItemCart }}
    >
      {children}
    </cartContext.Provider>
  );
};
