import { fetchIdProduct } from "@/types";
import CMS from "@/util/Content";
import { NextResponse } from "next/server";

export const GET = async (
  _req: Request,
  { params }: { params: { id: string } },
) => {
    const productIdurl = new CMS().getIdProductUrl(params.id)
    const response = await fetch(productIdurl)
    const data: fetchIdProduct = await response.json()
    return NextResponse.json(data)
};
