import { createContext, useState, useEffect } from "react";

export const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const storedCartItems = localStorage.getItem("cartItems");
  const initialCartItems: string[] = storedCartItems
    ? JSON.parse(storedCartItems)
    : [];

  const [cartItems, setCartItems] = useState<string[]>(initialCartItems);

  const addToCart = (item: any) => {
    const isItemInCart = cartItems.find(
      (cartItem: any) => cartItem.id === item.id
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem: any) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: any) => {
    if (item.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem: any) => cartItem.id !== item.id)
      );
    } else {
      setCartItems(
        cartItems.map((cartItem: any) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};