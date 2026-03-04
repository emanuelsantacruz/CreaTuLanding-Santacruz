import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const updatedCart = cart.map(prod => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== itemId);
        setCart(cartWithoutItem);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};
