import { useFetcher } from "remix";

const CategoryItem = ({
    category
}: { category: string }) => {
    return (
        <span className="category-item">{category}</span>
    );
};

const CategoryList = () => {
    const categoryFetcher = useFetcher();

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
                        
                            <button
                                onClick={fetchCategories}
                            >
                                Search product by categories
                            </button>
            }
        </div>
    );
};

export default CategoryList;