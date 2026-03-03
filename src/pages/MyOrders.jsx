import EmptyPage from "../components/common/EmptyPage";
import OrderCard from "../components/my-orders/OrderCard";
import useOrders from "../hooks/useOrders";
import PageLayout from "../layouts/PageLayout";

const MyOrders = () => {
    const { orders } = useOrders();

    return (
        <PageLayout>
            {orders.length === 0 ? (
                <EmptyPage>You haven’t placed any orders yet.</EmptyPage>
            ) : (
                <div className="w-full mx-auto px-6 py-8">
                    <div className="flex flex-col gap-10">
                        {/* Title */}
                        <h1 className="text-3xl font-semibold mb-8 border-b pb-4">
                            My Orders
                        </h1>
                        {orders.reverse().map((order) => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </div>
                </div>
            )}
        </PageLayout>
    );
};

export default MyOrders;
