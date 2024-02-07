import { Order } from "@/types";
import prisma from "@/util/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const data: Partial<Order> = await req.json();
    const { phoneNumbers, price, cart } = data;

    if (phoneNumbers === undefined) {
      return new NextResponse("Phone number is value missing", { status: 401 });
    }
    if (cart === undefined) {
      return new NextResponse("Cart is value missing", { status: 401 });
    }
    if (price === undefined) {
      return new NextResponse("Price is value missing", { status: 401 });
    }
    if (cart.length === 0) {
      return new NextResponse("There are no items in cart", { status: 401 });
    }

    const user = await prisma.user.findFirst({
      select: { id: true },
      where: { phoneNumber: +phoneNumbers },
    });

    // console.log(user);

    if (user === null) {
      return new NextResponse("User does not exist", { status: 401 });
    }
    const products = JSON.stringify(cart);
    console.log(price, products);

    const order = await prisma.order.create({
      data: { price, products, userId: user.id },
    });

    // console.log(order);
    const mutations = cart.map((item) => {
      const avaliableQty = item.avaliableQty as number;
      return {
        patch: { id: item.id, set: { quantity: avaliableQty - item.quantity } },
      };
    });

    const body = JSON.stringify({ mutations });

    const CmsMutateUrl = process.env.CmsMutateUrl as string;
    const token = process.env.SANITY_KEY as string;
    const changeResponse = await fetch(CmsMutateUrl, {
      headers: { authorization: `Bearer ${token}` },
      body,
    });

    if (changeResponse.ok) {
      return NextResponse.json(order);
    } else {
      throw new Error("Was not able to change qty in cms")
    }

  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
};
