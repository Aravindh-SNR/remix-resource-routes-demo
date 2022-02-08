import { Link, useLocation } from "remix";
import { Product } from "~/types";

// Link to nested route /slug inside /product

export default function ProductItem ({
    product
}: { product: Product }) {
    const { search } = useLocation();

    return (
        <Link to={`${product.id}${search}`} className="product-item">
            <h6>{product.title}</h6>
            <img src={product.image} alt={product.title} />
        </Link>
    );
};