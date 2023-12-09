import { NextResponse } from "next/server";
import prisma from "@/util/prisma";

type Sent = Partial<{
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
}>;

export const POST = async (req: Request) => {
  const { phoneNumber, firstName, lastName, password }: Sent = await req.json();

  // Check for phone number
  if (phoneNumber === undefined)
    return new NextResponse("Phone number value is missing", { status: 401 });
  else if (Number.isNaN(+phoneNumber)) {
    return new NextResponse("Phone number is not a number value", {
      status: 401,
    });
  }

  // Check for password
  if (password === undefined)
    return new NextResponse("Password value is missing", { status: 401 });
  else if (Number.isNaN(+password)) {
    return new NextResponse("Password is not a number value", {
      status: 401,
    });
  }

  // Check for password
  if (firstName === undefined)
    return new NextResponse("First name value is missing", { status: 401 });
  if (lastName === undefined)
    return new NextResponse("Last Name value is missing", { status: 401 });

  const user = await prisma.user.create({
    data: {
      phoneNumber: +phoneNumber,
      password,
      lastName,
      firstName,
    },
  });

  return NextResponse.json(user);
};
