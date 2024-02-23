import { signInResponse } from "@/types/signin";
import { createClient } from "@supabase/supabase-js";

class Supabase {
  private url: string;
  private key: string;

  constructor(url: string, key: string) {
    this.url = url;
    this.key = key;
  }

  async signUp({email, password}: { email: string; password: string }) {
    const url = this.url + "/auth/v1/signup";
    const body = `{ "email": "${email}", "password": "${password}" }`
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("apikey", this.key);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };

    const response = await fetch(url, requestOptions);
    const data: signInResponse = await response.json();
    console.log(data);

    if (response.ok) {
      return data;
    } else {
      return null;
    }
  }

  async logIn({email, password}: { email: string; password: string }) {
    const url = this.url + "/auth/v1/token?grant_type=password";
    const body = `{ "email": "${email}", "password": "${password}" }`
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("apikey", this.key);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };

    const response = await fetch(url, requestOptions);
    const data: signInResponse = await response.json();

    if (response.ok) {
      return data;
    } else {
      return null;
    }
  }
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseClient = new Supabase(url, key);
export const supaClient = createClient(url, key)

export default Supabase;
