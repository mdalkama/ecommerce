import PageLayout from "../layouts/PageLayout";
import useCart from "../hooks/useCart";
import CartItems from "../components/cart/CartItems";
import CartBilling from "../components/cart/CartBilling";
import EmptyPage from "../components/common/EmptyPage";
import useOrders from "../hooks/useOrders";

const Cart = () => {
  const { cartItems, cartLength, subTotal, deliveryFee, tax, totalPayable, clearCart } = useCart();
  const { placeOrder } = useOrders();

const handlePlaceOrder = () => {
  const order = {
    id: Date.now(),
    items: cartItems,
    subTotal,
    deliveryFee,
    tax,
    totalPayable,
    date: new Date().toISOString(),
  };

  placeOrder(order);
  clearCart();
};

  return (
    <PageLayout>
      <div className="flex flex-col gap-5 px-5">
        {!cartLength == 0 ? (
          <div className="flex gap-5">
            <CartItems cartLength={cartLength} cartItems={cartItems} />
            <CartBilling subTotal={subTotal} deliveryFee={deliveryFee} tax={tax} totalPayable={totalPayable} handlePlaceOrder={handlePlaceOrder}/>
          </div>
        ) : (
          <EmptyPage>
            Your Cart is empty
          </EmptyPage>
        )}
      </div>
    </PageLayout>
  );
};

export default Cart;
