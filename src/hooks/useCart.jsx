import { useContext, useMemo } from "react";
import { CartContext } from "../contexts/CartContext";
import { setStorageItem } from "../utils/storage";

const useCart = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

    const cartLength = cartItems.length;

    const subTotal = useMemo(() => {
        return cartItems.reduce((total, item) => {
            return total + item.offeredPrice * item.quantity;
        }, 0);
    }, [cartItems]);

    const deliveryFee = useMemo(() => {
        return subTotal >= 10000 ? 0 : 100;
    }, [subTotal]);

    const tax = useMemo(() => {
        return (subTotal * 5) / 100;
    }, [subTotal]);

    const totalPayable = useMemo(() => {
        return subTotal + deliveryFee + tax;
    }, [subTotal, deliveryFee, tax]);


    
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        let updatedCart;

        if (existingItem) {
            updatedCart = cartItems.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            );
        } else {
            updatedCart = [...cartItems, { ...product, quantity: 1 }];
        }

        setCartItems(updatedCart);
        setStorageItem("v_shop_cart", updatedCart);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);

        setCartItems(updatedCart);
        setStorageItem("v_shop_cart", updatedCart);
    };

    const updateCartItemQuantity = (productId, delta) => {
        const isQuantityZero =
            cartItems.find((item) => item.id === productId)?.quantity === 1 &&
            delta === -1;

        if (isQuantityZero) {
            removeFromCart(productId);
            return;
        }

        const updatedCart = cartItems.map((item) => {
            if (item.id === productId) {
                return {
                    ...item,
                    quantity: item.quantity + delta,
                };
            }
            return item;
        });

        setCartItems(updatedCart);
        setStorageItem("v_shop_cart", updatedCart);
    };

    const clearCart = () => {
        setCartItems([]);
        setStorageItem("v_shop_cart", []);
    };

    return {
        cartItems,
        cartLength,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        subTotal,
        deliveryFee,
        tax,
        totalPayable,
        clearCart
    };
};

export default useCart;
