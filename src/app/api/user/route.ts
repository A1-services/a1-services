import { supabaseClient } from "@/util/supabase";
import { NextResponse } from "next/server";

type Sent = Partial<{
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}>;

export const POST = async (req: Request) => {
  try {
    const { firstName, lastName, password, email }: Sent =
      await req.json();

    // Check for phone number
    if (email === undefined)
      return new NextResponse("Email value is missing", { status: 401 });

    if (firstName === undefined) {
      return new NextResponse("First Name value is missing", { status: 401 });
    }

    if (lastName === undefined) {
      return new NextResponse("Last Name value is missing", { status: 401 });
    }

    if (password === undefined) {
      return new NextResponse("Password value is missing", { status: 401 });
    }

    const data = await supabaseClient.signUp({
      email,
      password
    })

    if (data !== null) {
      return NextResponse.json(data);
    } else throw new Error("There was an error in creating the user");
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 500 });
  }

  // return NextResponse.json(user);
};
