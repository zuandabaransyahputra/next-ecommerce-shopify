import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid } from "@components/ui";
import { getConfig } from "@framework/api/config";
import getAllProducts from "@framework/products/get-all-products";
import type { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </>
  );
}

Home.Layout = Layout;
