"use client";

import { fetchIdProduct, idProduct } from "@/types";
import { Image } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<idProduct | "notFound">();
  const [isloading, setLoading] = useState(true);
  const [indexImage, setIndex] = useState(0);

  useEffect(() => {
    const origin = window.location.origin;
    const load = async () => {
      const response = await fetch(origin + `/api/product/${id}`);
      const data: fetchIdProduct = await response.json();
      if (data.result.length !== 0) setData(data.result[0]);
      else setData("notFound");
      setLoading(false);
    };
    load();
  }, [id]);

  return (
    <main className="flex flex-col gap-3">
      {isloading && <>Loading ...</>}
      {data! && (
        <>
          {data === "notFound" && <>Not found</>}
          {data !== "notFound" && (
            <>
              <Image
                className="h-[400px] mx-auto"
                src={data.images[indexImage]}
                alt={data.title}
              />
              <h1 className="text-4xl text-accent underline">{data.title}</h1>
            </>
          )}
        </>
      )}
    </main>
  );
}

export default ProductPage;
