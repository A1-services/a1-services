"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useState } from "react";

interface Props {
  featuredItems: {
    title: string;
    image: string;
    url: string;
  }[];
}

function HomeCarousel({ featuredItems }: Props) {
  const [currentIndex, setIndex] = useState(0);

  const { image, url, title } = featuredItems[currentIndex];
  const lastIndex = featuredItems.length - 1;

  const handleNext = () => {
    if (currentIndex === lastIndex) setIndex(0);
    else setIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentIndex === 0) setIndex(lastIndex);
    else setIndex((prev) => prev - 1);
  };
  return (
    <div className="grid grid-cols-1 gap-3">
      <Image className="w-full h-[300px] bg-cover bg-no-repeat" src={image} alt={title} width={300} height={300} />
      <div className="flex justify-between">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}

export default HomeCarousel;
