import React, { useState } from "react";
import { Product } from "@/types";
import { Image } from "@nextui-org/react";
import { Button, Input } from "@nextui-org/react";
import { FaTrash } from "react-icons/fa";
import TitleItem from "./TitleItem";

type Props = {
  order: Product;
  removeItemCart: () => void;
  changeQty: (qty: number) => void;
};

const Item = ({ order, removeItemCart, changeQty }: Props) => {
  const [qty, SetQty] = useState(order.quantity);
  return (
    <div className="flex gap-3 rounded p-3 shadow justify-between flex-grow">
      <Image src={order.image} alt={order.title} className="w-[200px]" />
      <div className="flex flex-col gap-4">
        <TitleItem title={order.title} removeItem={removeItemCart} />
        <label htmlFor="qty_input">
          Qty:
          <Input
            id="qty_input"
            type="number"
            value={qty.toString()}
            onChange={(e) => {
              const value = +e.target.value;
              changeQty(value);
              SetQty(value);
            }}
            min={1}
          />
        </label>
      </div>
    </div>
  );
};

export default Item;
