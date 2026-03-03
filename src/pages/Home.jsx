import ProductCardContainer from "../components/common/ProductCardContainer"
import PageLayout from "../layouts/PageLayout"
import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"

const Home = () => {
        const { productsData } = useContext(ProductContext)
    return (
        <PageLayout>
            <ProductCardContainer productsData={productsData}/>
        </PageLayout>
    )
}

export default Home
