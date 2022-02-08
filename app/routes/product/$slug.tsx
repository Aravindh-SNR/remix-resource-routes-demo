import { useLoaderData, useParams } from "remix";
import type { LoaderFunction } from 'remix';
import { getOneProduct } from "~/api/index.server";
import { Product } from "~/types";
import ProductDetails from "~/components/ProductDetails";

// Nested route for loading and displaying details of an individual product

// It can be tempting to toggle the visibility of a modal on and off using a boolean state
// and load a resource route to fetch details of an individual product to show the details inside the modal
// but that is not necessary at all when we can have a nested route, eliminate state management and toggling of modal
// and always render the modal whenever the nested route is visited

export const loader: LoaderFunction = async ({ params: { slug } }) => {
    return await getOneProduct(Number(slug));
};

export default function ProductDetail() {
    const product = useLoaderData<Product>();
    const { slug } = useParams();

    return <ProductDetails product={product} key={slug} />;
}