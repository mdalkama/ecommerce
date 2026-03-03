import { createContext, useState } from "react";
import { getStorageItem } from "../utils/storage";
import {products} from "../data/productsData";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productsData, setProductsData] = useState(getStorageItem('v_shop_products') || products);

    return (
        <ProductContext.Provider value={{ productsData, setProductsData }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
