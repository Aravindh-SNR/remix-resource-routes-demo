import type { LoaderFunction } from "remix";
import { getCategories } from "~/api/index.server";

// Resource route for fetching list of categories
// This is a contrived example but in real-world apps which have computationally expensive APIs, it's better to fetch
// data only when required rather than fetching all the data at a time.
// A real-world scenario might be to fetch the list of districts based on the city selected in a form
// if the number of cities and districts is too big

export const loader: LoaderFunction = async () => {
    return await getCategories();
};