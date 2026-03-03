import { createContext, useState } from "react";
import { getStorageItem } from "../utils/storage";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {

    const [orders, setOrders] = useState(getStorageItem("v_shop_orders") || [])

    return (
        <OrderContext.Provider value={{ orders, setOrders }}>
            {children}
        </OrderContext.Provider>
    )
}
