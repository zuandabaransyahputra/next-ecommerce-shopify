import { ProductConnection } from "../schema";
import { Product } from "@common/types/product";
import {
  fetchApi,
  getAllProductQuery,
  normalizeProduct,
} from "@framework/utils";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductQuery,
  });

  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? [];

  return products;
};

export default getAllProducts;
