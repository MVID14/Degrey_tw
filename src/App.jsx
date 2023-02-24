import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="overflow-hidden ">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/product/:id" element={<ProductDetail />}></Route>
                </Routes>
                <Sidebar />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
