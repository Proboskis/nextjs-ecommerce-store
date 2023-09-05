import {Product} from "@/types";
import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId: string;
  colorId: string;
  sizeId: string;
  isFeatured: boolean;
}

const getProducts = async (Query: Query): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      colorId: queryString.colorId,
      sizeId: queryString.sizeId,
      categoryId: queryString.categoryId,
      isFeatured: queryString.isFeatured
    }
  });

  const response = await fetch(url);

  return response.json();
};

export default getProducts;