import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './contexts/ProductContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { WishlistProvider } from './contexts/WishlistContext.jsx'
import { OrderProvider } from './contexts/OrderContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <OrderProvider>
          <App />
          </OrderProvider>
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>
)
