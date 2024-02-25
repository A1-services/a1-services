import { supabaseClient } from "@/util/supabase";
import { NextResponse } from "next/server";

type Sent = Partial<{
  firstName: string;
  lastName: string;
  password: number;
  phoneNumber: number;
}>;

export const POST = async (req: Request) => {
  try {
    const { firstName, lastName, password, phoneNumber }: Sent =
      await req.json();

    // Check for phone number
    if (phoneNumber === undefined)
      return new NextResponse("phoneNumber value is missing", { status: 401 });

    if (firstName === undefined) {
      return new NextResponse("First Name value is missing", { status: 401 });
    }

    if (lastName === undefined) {
      return new NextResponse("Last Name value is missing", { status: 401 });
    }

    if (password === undefined) {
      return new NextResponse("Password value is missing", { status: 401 });
    }

    console.log({
      phoneNumber,
      password,
      lastName,
      firstName
    })

    const data = await supabaseClient.signUp({
      phoneNumber,
      password,
      lastName,
      firstName
    })

    if (data !== null) {
      return new NextResponse("successfull");
    } else throw new Error("There was an error in creating the user");
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 500 });
  }

  // return NextResponse.json(user);
};
