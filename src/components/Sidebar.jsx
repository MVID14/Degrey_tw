import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BiArrowBack } from 'react-icons/bi';
import { CartContext } from '../contexts/CartContext';

//import icon
import { BsTrash } from 'react-icons/bs';
import CartItem from './CartItem';

const Sidebar = () => {
    const { isOpen, handleOpen } = useContext(SidebarContext);
    const { cart, clearCart, total } = useContext(CartContext);
    return (
        <div
            className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full  bg-white
        fixed top-0 md:max-w-[45vw] xl:max-w-[30vw] lg:max-w-[35vw] px-4 z-20
        transision-all duration-300 shadow-2xl`}
        >
            <div className="flex justify-between border-b-2 py-4">
                <div className="font-semibold text-xl flex items-center ">Shopping bag (0) </div>
                <div
                    onClick={() => {
                        handleOpen();
                    }}
                >
                    <div>
                        <BiArrowBack className="text-xl flex items-center w-6 h-6 mt-2 hover:cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-2 h-[380px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b ">
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />;
                })}
            </div>
            <div className="flex justify-between items-center my-3 py-2 border-b-[1px]">
                <div className="">
                    Total: <span className="ml-3 font-semibold">$ {total}</span>
                </div>
                <div
                    onClick={() => {
                        clearCart();
                    }}
                    className="cursor-pointer text-xl rounded bg-red-500 w-12 h-12 flex justify-center items-center text-white"
                >
                    <BsTrash />
                </div>
            </div>
            <div>
                <div className="cursor-pointer w-full h-full bg-gray-200 px-2 py-2 flex justify-center items-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    Check Cart
                </div>
                <div className=" cursor-pointer w-full h-full bg-primary px-2 py-2 flex justify-center items-center text-white mt-2 hover:bg-stone-500 hover:text-primary transition-all duration-300">
                    Payment
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
