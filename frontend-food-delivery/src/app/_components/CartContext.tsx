"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type CartItemType = {
  id: string;
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
  qty: number;
};

type CartContextType = {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType, qty: number) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemsTotal: number;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

const storageKey = "OrderItemDetail";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  const syncCart = (updatedCart: CartItemType[]) => {
    setCartItems(updatedCart);
    localStorage.setItem(storageKey, JSON.stringify(updatedCart));
  };

  const addToCart = (item: CartItemType, qty: number) => {
    const existingIndex = cartItems.findIndex((i) => i.id === item.id);
    let newCart;

    if (existingIndex !== -1) {
      newCart = [...cartItems];
      newCart[existingIndex].qty += qty;
    } else {
      newCart = [...cartItems, { ...item, qty }];
    }

    syncCart(newCart);
  };

  const removeFromCart = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id);
    syncCart(updated);
  };

  const increaseQty = (id: string) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    syncCart(updated);
  };

  const decreaseQty = (id: string) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    syncCart(updated);
  };

  const clearCart = () => {
    syncCart([]);
  };

  //   const grandTotal = cartTotal + deliveryFee;

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const cartItemsTotal = cartItems.reduce((sum, item) => sum + item.qty, 0);
  console.log(cartItemsTotal);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        cartTotal,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
