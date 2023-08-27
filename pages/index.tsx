import { Layout } from "@components/common";
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
  return <div>{JSON.stringify(products)}</div>;
}

Home.Layout = Layout;
