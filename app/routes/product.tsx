import { Outlet, useLoaderData, useLocation } from 'remix';
import type { LinksFunction, LoaderFunction } from 'remix';
import { getAllProducts } from '~/api/index.server';
import CategoryList from '~/components/CategoryList';
import DownloadSpreadsheet from '~/components/DownloadSpreadsheet';
import ProductItem from '~/components/ProductItem';
import styles from '~/styles/global.css';
import { Product } from '~/types';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css',
      integrity: 'sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  return await getAllProducts(category);
};

// UI route for displaying the list of products

export default function Index() {
  const { search } = useLocation();
  const products = useLoaderData<Product[]>();

  return (
    <div key={search}>
      <div id='header'>
        <h1 className='text-white'>Online Shopping Store</h1>
        {/* <button>+ Add Product</button> */}
      </div>

      <div id='fetchers'>
        <CategoryList />
        <DownloadSpreadsheet />
      </div>

      <div id='container'>
        {
          products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))
        }
      </div>

      <Outlet />
    </div>
  );
}