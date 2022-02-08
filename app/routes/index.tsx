import { LoaderFunction, redirect } from "remix";

// I needed a nested route insde the /product route, so I've created routes/product and routes/product/$slug
// The index route has no UI associated and will simply redirect to the /product route
// Thus, the index route also becomes a resource route
// This is also how webhooks can be consumed, you receive the webhook event, do something with it, and redirect if required

export const loader: LoaderFunction = () => {
    return redirect('/product');
};