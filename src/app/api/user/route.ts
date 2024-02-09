import { NextResponse } from "next/server";
import prisma from "@/util/prisma";
import supabase from "@/util/supabase";

type Sent = Partial<{
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}>;

export const POST = async (req: Request) => {
  const { phoneNumber, firstName, lastName, password, email }: Sent =
    await req.json();

  // Check for phone number
  if (phoneNumber === undefined)
    return new NextResponse("Phone number value is missing", { status: 401 });
  else if (Number.isNaN(+phoneNumber)) {
    return new NextResponse("Phone number is not a number value", {
      status: 401,
    });
  }

  // Check for phone number
  if (email === undefined)
    return new NextResponse("Email value is missing", { status: 401 });
  else {
    return new NextResponse("Email is not a number value", {
      status: 401,
    });
  }

  if (firstName === undefined) {
    return new NextResponse("First Name value is missing")
  }

  // return NextResponse.json(user);
};
