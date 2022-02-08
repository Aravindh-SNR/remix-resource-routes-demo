import { Link } from "remix";
import { Product } from "~/types";

export default function ProductItem ({
    product
}: { product: Product }) {
    return (
        <Link to={`${product.id}`} className="product-item">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
        </Link>
    );
};