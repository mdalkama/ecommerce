import { GoPlus } from "react-icons/go";
import { CiBookmarkPlus, CiBookmarkMinus } from "react-icons/ci";
import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { toggleWishlist, hasInWishlist } = useWishlist();

    function handleAddToCart() {
        addToCart(product);
    }

    function handleAddToWishlist() {
        toggleWishlist(product);
    }

    return (
        <div className="w-full mb-5 relative">
            <button onClick={handleAddToWishlist} className="absolute right-5 top-5">
                {hasInWishlist(product.id) ? (
                    <CiBookmarkMinus className="text-2xl" />
                ) : (
                    <CiBookmarkPlus className="text-2xl" />
                )}
            </button>{" "}
            <img className="w-full" src={product.image} alt="" />
            <div className="w-full p-5">
                <div className="flex w-full justify-between">
                    <p className="text-sm">{product.title}</p>
                    <button onClick={handleAddToCart}>
                        <GoPlus className="text-2xl" />
                    </button>
                </div>
                <div className="flex gap-2.5">
                    <p className="text-xs line-through">₹{product.mainPrice}</p>
                    <p className="text-xs">₹{product.offeredPrice}</p>
                    <p className="text-xs text-red-600">{product.discount}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
