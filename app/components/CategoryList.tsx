import { Link, useFetcher } from "remix";

// Display each category as a tag
const CategoryItem = ({
    category
}: { category: string }) => {
    return (
        <Link to={`/product?category=${category}`} className="category-item">
            {category}
        </Link>
    );
};

// Fetch and display categories only if requested, using useFetcher and /categories resource route
const CategoryList = () => {
    const categoryFetcher = useFetcher();

    // The submit method of the fetcher object can be used as an alternative to the fetcher Form
    const fetchCategories = () => {
        categoryFetcher.submit({}, { method: 'get', action: '/categories' });
    };

    return (
        <div id='category-container'>
            {
                categoryFetcher.submission
                    ? <div className="text-white" id='category-loader'>Loading categories...</div>
                    : categoryFetcher.data
                        ?
                        <div>
                            {
                                categoryFetcher.data.map((category: string) => (
                                    <CategoryItem
                                        key={category}
                                        category={category}
                                    />
                                ))
                            }
                        </div>
                        :
                        <categoryFetcher.Form
                            method="get"
                            action="/categories"
                        >
                            <button
                                // onClick={fetchCategories}
                            >
                                Search product by categories
                            </button>
                        </categoryFetcher.Form>
            }
        </div>
    );
};

export default CategoryList;