import { Children, createContext, useState } from "react";
import { getStorageItem } from "../utils/storage";

export const WishlistContext = createContext()

export const WishlistProvider = ({ children })=>{

    const [wishlistItems, setWishlistItems] = useState(getStorageItem('v_shop_wishlist') || [])


    return <WishlistContext.Provider value={{ wishlistItems , setWishlistItems}}>
        {children}
    </WishlistContext.Provider>
}
