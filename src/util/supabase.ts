import { signInResponse } from "@/types/signin";
import { loginResponse } from "@/types/login";
import bcrypt from "bcrypt";
import { Product } from "@/types";

class Supabase {
  private url: string;
  private key: string;

  constructor(url: string, key: string) {
    this.url = url;
    this.key = key;
  }

  async signUp({
    phoneNumber,
    password,
    lastName,
    firstName,
  }: {
    phoneNumber: number;
    password: number;
    firstName: string;
    lastName: string;
  }) {
    try {
      const url = this.url + "/rest/v1/Users";
      const hashedPassword = await bcrypt.hash(password.toString(), 2);
      const body = `{\"firstName\":\"${firstName}\",\"lastName\":\"${lastName}\",\"phoneNumber\":${phoneNumber},\"password\":"${hashedPassword}"}`;
      const myHeaders = new Headers();
      console.log("🚀 ~ Supabase ~ body:", body);
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("apikey", this.key);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const response = await fetch(url, requestOptions);
      const data: signInResponse = await response.json();
      console.log(data);

      console.log(response.ok);
      if (response.ok) {
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async logIn({
    phoneNumber,
    password,
  }: {
    phoneNumber: string;
    password: string;
  }) {
    const url = this.url + `/rest/v1/Users?phoneNumber=eq.${phoneNumber}`;
    const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    myHeaders.append("apikey", this.key);

    const requestOptions = {
      headers: myHeaders,
    };

    const response = await fetch(url, requestOptions);
    const data: loginResponse[] = await response.json();

    if (response.ok) {
      return data[0];
    } else {
      return null;
    }
  }

  async createOrder(order: {
    products: Product[];
    price: number;
    user: number;
  }) {
    const url = this.url + `/rest/v1/Order`;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("apikey", this.key);

    const body = JSON.stringify(order)

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };

    const response = await fetch(url, requestOptions);
    const data: loginResponse[] = await response.json();

    if (response.ok) {
      return data[0];
    } else {
      return null;
    }
  }
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseClient = new Supabase(url, key);

export default Supabase;
