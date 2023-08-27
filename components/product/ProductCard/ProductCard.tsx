import { Product } from "@common/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}
const placeholderImage = "/product-image-placeholder.svg";

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <h3>
          <span>{product.name}</span>
        </h3>
        <span>14 $</span>
      </div>
      {product.images && (
        <Image
          alt={product.name ?? "Product image"}
          src={product.images[0].url ?? placeholderImage}
          height={540}
          width={540}
          quality="85"
          layout="responsive"
        />
      )}
    </Link>
  );
};

export default ProductCard;
