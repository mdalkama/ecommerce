# 🛒 E-Commerce Web Application (React + Context API)

A modern frontend e-commerce web application built using **React.js**, **Context API**, and **Tailwind CSS**.  
The application allows users to browse products, manage cart and wishlist, and place orders with persistent storage using `localStorage`.

---

## 🚀 Features

### 🏬 Product System
- Product listing page
- Product card with image, pricing & discount
- Add to Cart
- Add to Wishlist

### 🛒 Cart System
- Add to cart
- Remove from cart
- Increase / Decrease quantity
- Auto subtotal calculation
- 5% tax calculation
- Delivery fee logic
- Free shipping above ₹10000
- Persistent cart using localStorage

### ❤️ Wishlist System
- Toggle wishlist (add/remove)
- Separate wishlist state
- Stored in localStorage

### 📦 Order System
- Place order from cart
- Order history page
- Order date tracking
- Total paid display
- Order items breakdown

---

## 🛠 Technologies Used

- React.js
- Context API
- React Router DOM
- Tailwind CSS
- Vite
- LocalStorage

---

## 📂 Project Structure

```
src/
│
├── assets/
│
├── components/
│   ├── cart/
│   │   ├── CartBilling.jsx
│   │   ├── CartCard.jsx
│   │   └── CartItems.jsx
│   │
│   ├── common/
│   │   ├── EmptyPage.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductCardContainer.jsx
│   │
│   ├── my-orders/
│   │   └── OrderCard.jsx
│   │
│   └── Navbar.jsx
│
├── contexts/
│   ├── CartContext.jsx
│   ├── OrderContext.jsx
│   ├── ProductContext.jsx
│   └── WishlistContext.jsx
│
├── data/
│   └── productsData.js
│
├── hooks/
│   ├── useCart.jsx
│   ├── useOrders.jsx
│   └── useWishlist.jsx
│
├── layouts/
│   └── PageLayout.jsx
│
├── pages/
│   ├── Cart.jsx
│   ├── Home.jsx
│   ├── MyOrders.jsx
│   ├── WishList.jsx
│   └── NotFoundPage.jsx
│
└── utils/
    └── storage.js
```

---

## 🧠 Architecture Overview

This project follows a modular architecture:

- UI Layer → components/
- State Layer → contexts/
- Logic Layer → hooks/
- Data Layer → data/
- Utility Layer → utils/

### Data Flow

```
Page → Component → Hook → Context → LocalStorage
```

---

## 💰 Cart Calculation Logic

```
SubTotal = Σ (price × quantity)
Tax = 5% of SubTotal
Delivery Fee = ₹100 (Free above ₹10000)
Total Payable = SubTotal + Tax + Delivery Fee
```

---

## 💾 Persistent Storage

The application uses localStorage for data persistence.

### Storage Keys

```
v_shop_cart
v_shop_wishlist
v_shop_orders
```

On state update:
- Data is saved to localStorage.

On app load:
- State is hydrated from localStorage.

---

## 📦 Installation & Setup

1. Clone the repository

```
git clone https://github.com/mdalkama/ecommerce.git
```

2. Navigate into the project

```
cd ecommerce
```

3. Install dependencies

```
npm install
```

4. Run development server

```
npm run dev
```
---
