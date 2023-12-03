"use client"
import {useContext} from "react"
import { cartContext } from "@/context/cart";
import {Button, Image} from "@nextui-org/react"

function CartPage() {
    const {cart, removeItemCart} = useContext(cartContext)
    return <>
    <div className="flex flex-col gap-3">
        {cart.map((p) => (
            <div className="grid grid-cols-3 justify-between items-center" key={p.id}>
                <Button className="bg-red-600 p-3 rounded text-white w-fit" onClick={() => removeItemCart(p.id)}>X</Button>
                <p className="text-text">{p.title}</p>
                <Image className="w-[100px] h-[100px]" src={p.image} alt="Product"/>
                <div className="flex">
                    <p className="text-accent">Price: {p.price}</p>
                </div>
            </div>
        ))}
    </div>
    <div className="justify-start">
        <div className="flex gap-3 w-fit">
            <Button variant="light" color="danger">Cancel</Button>
            <Button color="primary">Buy</Button>
        </div>
    </div>
    </>
}

export default CartPage