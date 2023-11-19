import ProductGrid from "@/components/Products/ProductGrid";
import HomeCarousel from "./HomeCarousel";
import CMS from "@/util/Content";

export type Product = {
  title: string;
  image: string;
  id: string;
  price: number;
};

async function getProducts() {
  const domian = process.env.NEXT_URL
  const bestResponse = await fetch(domian + "/api/best");
  const productResponse = await fetch(domian + "/api/product");

  const [bestInfo, productInfo] = await Promise.all([
    bestResponse,
    productResponse,
  ]);
  const [bestData, productData]: { result: Product[] }[] = await Promise.all([
    bestInfo.json(),
    productInfo.json(),
  ]);

  return { bestData, productData };
}

async function Home() {
  const { bestData, productData } = await getProducts();
  return (
    <main className="w-full flex flex-col gap-3">
      <HomeCarousel featuredItems={bestData.result} />
      <ProductGrid items={productData.result} />
    </main>
  );
}

export default Home;
