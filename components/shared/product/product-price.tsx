import { cn } from "@/lib/utils";

const ProductPrice = ({
  price,
  className,
}: {
  price: string;
  className?: string;
}) => {
  const stringPrice = Number(price).toFixed(2);
  const [intValue, floatValue] = stringPrice.split(".");
  return (
    <>
      <p className={cn("text-2xl", className)}>
        <span className="text-xs align-super">$</span>
        {intValue}
        <span className="text-xs align-super">.{floatValue}</span>
      </p>
    </>
  );
};

export default ProductPrice;
