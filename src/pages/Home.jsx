import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <Hero />
            <section>
                <div className="container mx-auto">
                    <div>
                        <Products />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
