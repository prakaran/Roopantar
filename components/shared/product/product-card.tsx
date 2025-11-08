import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader className="p-0 justify-center items-center">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.images[0]}
              width={300}
              height={300}
              alt={product.name}
              priority={true}
              className="object-cover aspect-square rounded"
            />
          </Link>
        </CardHeader>
        <CardContent className="p-4 grid gap-4">
          <div className="text-xs">{product.brand}</div>
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-sm font-medium">{product.name}</h2>
          </Link>
          <div className="flex-between gap-4">
            <p>{product.rating} stars</p>
            {product.stock > 0 ? (
              <ProductPrice price={product.price} />
            ) : (
              <p className="text-destructive">Out of Stock</p>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
