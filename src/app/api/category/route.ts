import { fetchCatgory } from "@/types";
import CMS from "@/util/Content";
import { NextResponse } from "next/server";

export const GET = async () => {
  const categoriesUrl = new CMS().categoriesUrl();
  const response = await fetch(categoriesUrl);
  const data: fetchCatgory = await response.json();
  return NextResponse.json(data);
};
