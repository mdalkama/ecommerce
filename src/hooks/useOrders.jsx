import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";
import { setStorageItem } from "../utils/storage";

const useOrders = () => {
    const { orders, setOrders } = useContext(OrderContext);

    const placeOrder = (order) => {
        const updatedOrders = [...orders, order];
        setOrders(updatedOrders);
        setStorageItem("v_shop_orders", updatedOrders);
    }

    const getOrder = (orderId) => {
        return orders.find((order) => order.id === orderId);
    }

    return { orders, setOrders, getOrder, placeOrder };
}

export default useOrders
