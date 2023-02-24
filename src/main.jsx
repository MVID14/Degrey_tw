import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CartProvider from './contexts/CartContext';
import SidebarProvider from './contexts/SidebarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <SidebarProvider>
        <CartProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </CartProvider>
    </SidebarProvider>,
);
