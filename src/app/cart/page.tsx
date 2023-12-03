"use client"
import {useContext} from "react"
import { cartContext } from "@/context/cart";
import {Button, Image, Divider} from "@nextui-org/react"
import { useSession } from "next-auth/react"

function CartPage() {
    const {cart, removeItemCart} = useContext(cartContext)
    const {data: session, status} = useSession()

    console.log(status)

    return <>
    <h1 className="text-3xl text-primary font-semibold">Cart</h1>
    <Divider />
    <div className="mt-4 flex flex-col gap-3">
        {cart.map((p) => (
            <div className="grid grid-cols-3 justify-between items-center" key={p.id}>
                <Button className="bg-red-600 p-3 rounded text-white w-fit" onClick={() => removeItemCart(p.id)}>X</Button>
                <p className="text-text">{p.title}</p>
                <Image className="w-[100px] h-[100px]" src={p.image} alt="Product"/>
                <p className="text-accent">Price: R{p.price}</p>
                {/* <div className="flex gap-3">
                    <label htmlFor=""></label>
                    <input type="text" />
                </div> */}
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