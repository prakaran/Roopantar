"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="space-y-4">
        <Image
          src={images![current]}
          height={1000}
          width={1000}
          alt="Hero Image"
          className="min-h-[300px] object-cover object-center"
        />
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "border mr-2 cursor-pointer hover:border-orange-600",
                current === index && "border-orange-500"
              )}
            >
              <Image src={image} height={150} width={150} alt="Images" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImages;
