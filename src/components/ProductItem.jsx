import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../contexts/CartContext';
const ProductItem = ({ product }) => {
    const { id, fees, destTitle, imgSrc } = product;
    const { addToCart } = useContext(CartContext);
    return (
        <div>
            <div className=" flex justify-center items-center object-cover hover:cursor-pointer">
                <img className=" max-w-[300px] md:max-w-[240px] lg:max-w-[240px] " src={imgSrc} alt="" />
            </div>
            <div className="text-sm font-normal text-primary mt-2">{destTitle}</div>
            <div className="flex justify-between items-center mt-4 ">
                <div className="font-semibold text-lg">{fees}</div>
                <button
                    onClick={(id) => {
                        addToCart(product, id);
                    }}
                >
                    <div className=" hover:cursor-pointer">
                        <AiOutlineShoppingCart className="text-2xl" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
