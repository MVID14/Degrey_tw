import React from 'react';
import Carousel from './Carousel';

const slides = [
    'https://file.hstatic.net/1000281824/file/e9dce8d2a33a7964202b_d50ff21bfee343f0b8c36e10aa2ff0e6.jpg',
    'https://file.hstatic.net/1000281824/file/1656a7546ee3b5bdecf2__1__7ca7e8721ade40eeb6498e0447de4e9f.jpg',
    'https://file.hstatic.net/1000281824/file/e9dce8d2a33a7964202b_d50ff21bfee343f0b8c36e10aa2ff0e6.jpg',
];

const Hero = () => {
    return (
        <div className="container mx-auto mt-20 lg:mt-24    ">
            <Carousel>
                {slides.map((s) => {
                    return <img src={s} alt="" />;
                })}
            </Carousel>
        </div>
    );
};

export default Hero;
