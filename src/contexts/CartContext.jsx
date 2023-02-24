import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const total = cart.reduce((acc, cur) => {
            return acc + cur.fees * cur.amount;
        }, 0);
        setTotal(total);
    });

    useEffect(() => {
        const amount = cart.reduce((acc, cur) => {
            return acc + cur.amount;
        }, 0);
        setAmount(amount);
    });

    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };
        const cartItem = cart.find((item) => {
            return item.id === id;
        });

        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    const removeCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };
    const clearCart = () => {
        setCart([]);
    };

    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
    };

    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if (cartItem.amount < 2) {
            removeCart(id);
        }
    };

    return (
        <CartContext.Provider
            value={{ amount, total, cart, addToCart, removeCart, clearCart, increaseAmount, decreaseAmount }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

// const cartItem = cart.find((item) => {
//     return item.id === id;
// });
// if (cartItem) {
//     const newCart = [...cart].map((item) => {
//         if (item.id === id) {
//             return { ...item, amount: cartItem.amount + 1 };
//         } else {
//             return item;
//         }
//     });
//     setCart(newCart);
// } else {
//     setCart([...cart, newItem]);
// }
