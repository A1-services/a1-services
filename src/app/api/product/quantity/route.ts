import CMS from "@/util/Content";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
    const ids: string[] = await req.json()
    const url = new CMS().getProductsQty(ids)
    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data.result)
} 