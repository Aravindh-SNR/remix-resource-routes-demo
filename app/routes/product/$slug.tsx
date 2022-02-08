import { useLoaderData, useParams } from "remix";
import type { LoaderFunction } from 'remix';
import { getOneProduct } from "~/api/index.server";
import { Product } from "~/types";
import ProductDetails from "~/components/ProductDetails";

export const loader: LoaderFunction = async ({ params: { slug } }) => {
    return await getOneProduct(Number(slug));
};

export default function ProductDetail() {
    const product = useLoaderData<Product>();
    const { slug } = useParams();

    return <ProductDetails product={product} key={slug} />;
}