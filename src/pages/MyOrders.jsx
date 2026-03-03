import useOrders from "../hooks/useOrders";
import PageLayout from "../layouts/PageLayout";

const MyOrders = () => {
    const { orders } = useOrders();

    return (
        <PageLayout>
            <div className="w-full mx-auto px-6 py-8">

                {/* Title */}
                <h1 className="text-3xl font-semibold mb-8 border-b pb-4">
                    My Orders
                </h1>

                {orders.length === 0 ? (
                    <div className="text-center text-gray-500 text-lg py-20">
                        You haven’t placed any orders yet.
                    </div>
                ) : (
                    <div className="flex flex-col gap-10">

                        {orders.reverse().map((order) => (
                            <div
                                key={order.id}
                                className="border border-gray-300 p-8 flex flex-col gap-6"
                            >

                                {/* Header */}
                                <div className="flex justify-between items-start border-b pb-4">
                                    <div>
                                        <p className="text-xl font-semibold">
                                            Order #{order.id}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Placed on{" "}
                                            {new Date(order.date).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <span className="text-sm px-3 py-1 border border-black">
                                        Delivered
                                    </span>
                                </div>

                                {/* Items */}
                                <div className="flex flex-col gap-6">

                                    {order.items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex gap-6 items-center"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-24 h-24 object-cover"
                                            />

                                            <div className="flex flex-col gap-1 flex-1">
                                                <p className="font-medium text-lg">
                                                    {item.title}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Quantity: {item.quantity}
                                                </p>
                                            </div>

                                            <p className="font-semibold text-lg">
                                                ₹{item.offeredPrice * item.quantity}
                                            </p>
                                        </div>
                                    ))}

                                </div>

                                {/* Footer */}
                                <div className="border-t pt-4 flex justify-between items-center">
                                    <p className="text-gray-600">
                                        {order.items.length} item(s)
                                    </p>

                                    <p className="text-xl font-bold">
                                        Total Paid: ₹{order.totalPayable}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                )}
            </div>
        </PageLayout>
    );
};

export default MyOrders;