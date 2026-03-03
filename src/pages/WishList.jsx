import EmptyPage from "../components/common/EmptyPage";
import ProductCardContainer from "../components/common/ProductCardContainer";
import useWishlist from "../hooks/useWishlist";
import PageLayout from "../layouts/PageLayout";

const WishList = () => {
  const { wishlistItems, wishlistLength } = useWishlist();
  return (
    <PageLayout>
      {wishlistLength !== 0 ? (
        <ProductCardContainer productsData={wishlistItems} />
      ) : (
        <EmptyPage>
            Your wishlist is empty
        </EmptyPage>
      )}
    </PageLayout>
  );
};

export default WishList;
