import { LuShoppingCart, LuBookmark } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { AiOutlineProduct } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { WishlistContext } from "../contexts/WishlistContext";

const Navbar = () => {
    const {cartItems} = useContext(CartContext)
    const {wishlistItems} = useContext(WishlistContext)
    const navigate = useNavigate();
    const cartLength = cartItems.length
    const wishlistLength = wishlistItems.length
    return (
        <div className="w-full h-25 z-100 bg-white flex justify-between px-10 fixed top-0 left-0 items-center">

            <div className="flex gap-10 w-100">
                <p className="text-sm text-bold">MEN</p>
                <p className="text-sm text-bold">WOMEN</p>
                <p className="text-sm text-bold">KIDS</p>
                <p className="text-sm text-bold">FOOTWEAR</p>
            </div>

            <div className="h-15">
                <img
                    onClick={() => {
                        navigate("/");
                    }}
                    className="h-full"
                    src="https://thehouseofrare.com/cdn/shop/files/Frame_41820_250x.png?v=1720342909"
                    alt=""
                />
            </div>

            <div className="flex gap-5 w-100 justify-end">
                <BiSearch className="w-6 h-6" />

                <div className="relative ">
                    <LuBookmark
                        onClick={() => {
                            navigate("/wishlist");
                        }}
                        className="w-6 h-6"
                    />
                    <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] tra bg-red-500 text-xs h-5 rounded-full text-white flex items-center justify-center aspect-square">
                        {wishlistLength > 9 ? "9+" : wishlistLength}
                    </div>
                </div>

                <div className="relative ">
                    <LuShoppingCart
                        onClick={() => {
                            navigate("/cart");
                        }}
                        className="w-6 h-6"
                    />
                    <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] tra bg-red-500 text-xs h-5 rounded-full text-white flex items-center justify-center aspect-square">
                        {cartLength > 9 ? "9+" : cartLength}
                    </div>
                </div>

                <div className="relative ">
                    <AiOutlineProduct
                        onClick={() => {
                            navigate("/my-orders");
                        }}
                        className="w-6 h-6"
                    />
                </div>

            </div>
        </div>
    );
};

export default Navbar;
