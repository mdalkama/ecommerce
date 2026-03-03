import ProductCard from "./ProductCard";

const ProductCardContainer = ({ productsData = [] }) => {
    return (
        <div className="w-full grid grid-cols-4">
            {productsData.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductCardContainer;
