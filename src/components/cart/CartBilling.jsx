const CartBilling = ({ subTotal, deliveryFee, tax, totalPayable, handlePlaceOrder }) => {
    return (
        <div className="w-100 h-[calc(100vh-120px)] p-5 justify-between overflow-y-scroll flex flex-col  border-2 border-gray-300">
            <div className="flex flex-col gap-2.5">
                <p className=" text-xl flex justify-between font-bold border-b border-gray-300  pb-2.5">
                    Your Order
                </p>
                <p className=" text-md flex justify-between">
                    Sub Total <span>₹{subTotal}</span>
                </p>
                <p className=" text-md flex justify-between">
                    Delivery Fee <span>₹{deliveryFee}</span>
                </p>
                <p className=" text-md flex justify-between">
                    Tax (5%) <span>₹{tax}</span>
                </p>
            </div>
            <div className="flex flex-col gap-2.5">
                <p className="font-bold text-xl flex justify-between">
                    Total Payable <span>₹{totalPayable}</span>
                </p>
                <button onClick={handlePlaceOrder} className="p-2.5 w-full rounded  bg-black text-white">
                    Proceed to checkout
                </button>
                {subTotal > 10000 && (
                    <p className="w-full text-center text-green-900">
                        🎉 You unlocked free shipping!
                    </p>
                )}
            </div>
        </div>
    )
}

export default CartBilling
