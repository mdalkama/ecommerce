import CartCard from "./CartCard";

const CartItems = ({ cartLength, cartItems = [] }) => {
    return (
        <div className="grow h-full border-2 border-gray-300 p-5 flex flex-col">
            <p className="w-full text-xl mb-2 font-medium">My Cart ({cartLength})</p>
            <div className="w-full h-[calc(100vh-200px)] overflow-y-scroll flex flex-col gap-5 grow">
                {cartItems.map((product) => {
                    return <CartCard key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};

export default CartItems;
