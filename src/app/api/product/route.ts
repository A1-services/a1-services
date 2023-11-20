import { fetchProduct } from "@/types";
import CMS from "@/util/Content";
import { NextResponse } from "next/server";

export const GET = async () => {
  const productUrl = new CMS().productsUrl();
  const response = await fetch(productUrl, { cache: "no-store" });
  const data: fetchProduct = await response.json();
  return NextResponse.json(data);
};
