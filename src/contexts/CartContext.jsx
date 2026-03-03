import {createContext, useState } from "react"
import { getStorageItem } from "../utils/storage"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(getStorageItem('v_shop_cart') || [])

    return (
        <CartContext.Provider value={{ cartItems , setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}