"use client";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "@/context/cart";
import { Button, Image, Divider } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { Product } from "@/types";
import Item from "./components/Item";

export interface Order extends Product {
  quantity: number;
}

function CartPage() {
  const { cart, removeItemCart, changeItemQty } = useContext(cartContext);
  const [price, setPrice] = useState(0);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (cart.length > 0) {
      const newPrice = cart.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0,
      );
      setPrice(newPrice);
    }
  }, [cart]);

  const handleBuy = () => {
    if (status === "authenticated") {
      const user = session.user?.email as string
      const order = {
        price,
        user: +user,
        products: cart,
      }

      const fetchoptions = {
        method: "POST",
        body: JSON.stringify(order),
      }
      const sendOrder  = async () => {
        const response = await fetch("/api/order", fetchoptions)
      }
    }
  }

  return (
    <>
      <h1 className="text-3xl font-semibold text-primary">Cart</h1>
      <Divider className="my-4"/>
      {cart.length <= 0 && <>No items in cart</>}
      {cart.length > 0 && (
        <>
          <div className="flex flex-col gap-3">
            {cart.map((item) => (
              <Item
                key={item.id}
                order={item}
                removeItemCart={() => removeItemCart(item.id)}
                changeQty={(qty) => changeItemQty(item.id, qty)}
              />
            ))}
          </div>
          <Divider className="my-4"/>
          <div className="flex flex-col items-end gap-3">
            <p className="text-xl text-primary font-semibold">Price: R {price.toFixed(2)}</p>
            <div className="flex gap-3">
              <Button color="danger" variant="ghost">Cancel</Button>
              <Button color="success" variant="shadow">Buy</Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CartPage;
