import { fetchProduct } from "@/types";
import CMS from "@/util/Content";
import { NextResponse } from "next/server";

export const GET = async () => {
  const bestUrl = new CMS().bestProductsUrl();
  const response = await fetch(bestUrl);
  const data: fetchProduct = await response.json();
  return NextResponse.json(data);
};
