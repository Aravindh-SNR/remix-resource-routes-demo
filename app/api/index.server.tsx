const BASE_URL = process.env.BASE_URL;

export const getAllProducts = async () => {
    const products = await fetch(`${BASE_URL}`);
    return await products.json();
};

export const getOneProduct = async (id: number) => {
    const product = await fetch(`${BASE_URL}/${id}`);
    return await product.json();
};

export const getCategories = async () => {
    const categories = await fetch(`${BASE_URL}/categories`);
    return await categories.json();
};