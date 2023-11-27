export type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
};

export type fetchProduct = {
  result: Product[];
};

export type Category = { id: string; name: string };
export type fetchCatgory = { result: Category[] };

export type idProduct = {
  id: string;
  title: string;
  images: string[];
  price: number;
  category: string
}
export type fetchIdProduct = {result: idProduct[]}
