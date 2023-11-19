"use client"
import { Product } from "@/app/page";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

type Props = {
  item: Product;
};

const ProductCard = ({ item: { id, title, price, image } }: Props) => {
  return (
    <Card>
      <CardBody className="flex flex-col">
        <Image src={image} alt={title} className="h-full"/>
      </CardBody>
      <CardFooter className="flex-col">
        <div className="flex w-full justify-between">
          <p className="text-primary">{title}</p>
          <p className="text-accent">{price.toLocaleString()}</p>
        </div>
        <Button className="bg-accent w-full text-white font-bold">Buy</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
