"use client";

import { fetchIdProduct, idProduct } from "@/types";
import { Button, Image } from "@nextui-org/react";
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
              <h1 className="text-4xl text-accent">{data.title}</h1>
              <div className="md:flex md:gap-3 md:flex-row-reverse">
                <div className="mx-auto">
                  <Image
                    className="h-[400px] sm:h-[500px]"
                    src={data.images[indexImage]}
                    alt={data.title}
                  />
                </div>
                <p className="text-text md:hidden">Images</p>
                <div className="flex gap-3 md:flex-col">
                  {data.images.map((i, num) => (
                    <button
                      className={`rounded-full p-3 font-bold text-white w-fit ${
                        indexImage === num ? "bg-primary" : "bg-accent"
                      }`}
                      key={i}
                      onClick={() => setIndex(num)}
                    >
                      {num + 1}
                    </button>
                  ))}
                </div>
              </div>
              <Button className="bg-accent text-xl font-bold text-white">
                Buy R {data.price.toLocaleString()}
              </Button>
            </>
          )}
        </>
      )}
    </main>
  );
}

export default ProductPage;
