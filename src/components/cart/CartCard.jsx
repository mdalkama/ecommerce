import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import useCart from "../../hooks/useCart";

const CartCard = ({ product }) => {
    const { updateCartItemQuantity, removeFromCart } = useCart();

    return (
        <div className="w-full flex gap-5 pt-5 border-t-2 border-gray-300">
            <img className="h-50" src={product.image} alt="" />
            <div className="pt-5 flex flex-col gap-5">
                <p className="text-xl text-bold">{product.title}</p>
                <p className="flex w-full text-xs px-2.5 gap-2.5">
                    <span className="line-through">₹{product.mainPrice}</span>
                    <span>₹{product.offeredPrice}</span>
                    <span className="text-red-500">{product.discount}</span>
                </p>
                <div className="flex items-center">
                    <GoPlus
                        onClick={() => {
                            updateCartItemQuantity(product.id, +1);
                        }}
                        className="w-8 h-8 bg-black text-white"
                    />
                    <p className="h-8 px-5 border-y border-gray-300 flex select-none items-center">
                        {product.quantity}
                    </p>
                    <FiMinus
                        onClick={() => {
                            updateCartItemQuantity(product.id, -1);
                        }}
                        className="w-8 h-8 bg-black text-white"
                    />
                </div>
                <button
                    onClick={() => {
                        removeFromCart(product.id);
                    }}
                    className="h-8 border border-gray-300 select-none w-fit px-10"
                >
                    Remove From Cart
                </button>
            </div>
        </div>
    );
};

export default CartCard;
