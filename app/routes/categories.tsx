import type { LoaderFunction } from "remix";
import { getCategories } from "~/api/index.server";

export const loader: LoaderFunction = async () => {
    return await getCategories();
};