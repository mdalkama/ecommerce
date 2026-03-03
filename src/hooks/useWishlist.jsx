import { useContext } from "react"
import { WishlistContext } from "../contexts/WishlistContext"
import { setStorageItem } from "../utils/storage"


const useWishlist = () => {
    const { wishlistItems, setWishlistItems } = useContext(WishlistContext)
    const wishlistLength = wishlistItems.length

const toggleWishlist = (product) => {
    const existingItem = wishlistItems.find((item) => item.id === product.id);

    let updatedWishlist;

    if (existingItem) {
        updatedWishlist = wishlistItems.filter((item) => item.id !== product.id);
    }   else {
        updatedWishlist = [...wishlistItems, product];
    }

    setWishlistItems(updatedWishlist);
    setStorageItem("v_shop_wishlist", updatedWishlist);
};

const hasInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
}

    return { toggleWishlist, wishlistItems, wishlistLength, hasInWishlist }
}

export default useWishlist
