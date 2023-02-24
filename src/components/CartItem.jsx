import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
    const { id, fees, destTitle, imgSrc, amount } = item;
    const { removeCart, increaseAmount, decreaseAmount } = useContext(CartContext);
    return (
        <div className="flex gap-x-4 py-4 lg:px-6 border-b border-gray-200 w-full font-light">
            <div className=" w-full min-h-[160px] flex items-center gap-x-2">
                <Link to={'/'}>
                    <img className="max-w-[100px]" src={imgSrc} alt="" />
                </Link>
                <div className="flex flex-col w-full">
                    <div className="flex text-sm flex-1 w-40">{destTitle}</div>
                    <div className="flex  justify-between mb-2 mt-4">
                        <div className="flex gap-x-3 justify-center text-base border h-10 items-center p-2 ">
                            <div
                                onClick={() => {
                                    decreaseAmount(id);
                                }}
                                className="text-lg flex items-center justify-center cursor-pointer"
                            >
                                <AiOutlineMinus />
                            </div>
                            <div className="text-lg flex items-center justify-center">{amount}</div>
                            <div
                                onClick={() => {
                                    increaseAmount(id);
                                    console.log(fees);
                                }}
                                className="text-lg flex items-center justify-center cursor-pointer"
                            >
                                <AiOutlinePlus />
                            </div>
                        </div>
                        <div className="text-sm font-semibold flex items-center justify-center text-gray-500">
                            $ {fees}
                        </div>
                        <div className="text-sm font-semibold flex items-center justify-center">{`$ ${parseFloat(
                            amount * fees,
                        )}`}</div>
                    </div>
                </div>
                <div
                    onClick={() => {
                        removeCart(id);
                    }}
                    className="hover:text-red-500 cursor-pointer text-xl rounded-full h-full  w-6  flex justify-center  text-primary "
                >
                    <AiOutlineClose />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
