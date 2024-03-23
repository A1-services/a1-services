import { fetchProduct } from "@/types";
import CMS from "@/util/Content";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const url = req.nextUrl;
    let productUrl = "";
    const query = url.searchParams.get("query");

    if (query !== null) {
      productUrl = new CMS().searchProductsUrl(query);
    } else {
      productUrl = new CMS().productsUrl();
    }

    const response = await fetch(productUrl, { cache: "no-store" });
    const data: fetchProduct = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse("Something wrong happend.", { status: 500 });
  }
};
