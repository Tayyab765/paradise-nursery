# Paradise Nursery

Paradise Nursery is a dynamic shopping cart web application for an online plant shop, built with React and Redux Toolkit. Users can browse houseplants organized into categories, view plant details (thumbnail, name, description, price), add plants to a shopping cart, and manage cart items — adjusting quantities, removing items, and viewing the running total.

## Features

- **Landing Page** — Company introduction, background image, and a "Get Started" button that leads into the store.
- **About Us** — Section describing Paradise Nursery's mission and team.
- **Product Listing Page** — Plants grouped into categories (Air Purifying Plants, Aromatic Plants, Succulents), each with a thumbnail, name, description, and price. "Add to Cart" buttons add items to the cart, disable once clicked, and update the cart icon count in real time.
- **Navigation Bar** — Present on both the Product Listing and Cart pages, with links to Home, Plants, and Cart, plus a live cart item counter.
- **Shopping Cart Page** — Displays each item's thumbnail, name, and unit price; lets users increase/decrease quantity or delete an item; shows a per-item subtotal and the total cart amount; includes a "Continue Shopping" button back to the product listing and a "Checkout" button showing a "Coming Soon" message.

## Tech Stack

- React (Vite)
- Redux Toolkit / React-Redux for cart state management
- Plain CSS for styling

## Project Structure

```
src/
  App.jsx           # Landing page + view routing
  App.css           # Landing page styles & background image
  AboutUs.jsx        # Company details section
  ProductList.jsx     # Product listing page with categories, navbar, cart icon
  ProductList.css
  CartItem.jsx        # Shopping cart page
  CartItem.css
  CartSlice.jsx        # Redux slice for cart state
  store.js            # Redux store configuration
  plantsData.js        # Plant catalog data
  main.jsx             # App entry point, Redux Provider
```

## Getting Started

```bash
npm install
npm run dev
```

## Author

Tayyab "Bob" Attiq — Final Project for Paradise Nursery Shopping Application.
