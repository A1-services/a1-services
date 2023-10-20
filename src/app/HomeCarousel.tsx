"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill as ArrowRight,
  BsFillArrowLeftCircleFill as ArrowLeft,
} from "react-icons/bs";
import Button from "@/components/Button";

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

  const showMapping = featuredItems.map((item, num) => (
    <button
      className={`w-[16px] h-[16px] rounded-full ${
        currentIndex === num ? "bg-primary" : "bg-accent"
      }`}
      onClick={() => setIndex(num)}
      key={num}
    />
  ));

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
      <Image
        className="w-full h-[300px] bg-cover bg-no-repeat"
        src={image}
        alt={title}
        width={300}
        height={300}
      />
      <div className="flex justify-between items-center">
        <Button onClick={handleBack}>
          <ArrowLeft className="text-white" />
        </Button>

        <div className="flex gap-3">{showMapping}</div>

        <Button onClick={handleNext}>
          <ArrowRight className="text-white" />
        </Button>
      </div>
    </div>
  );
}

export default HomeCarousel;
