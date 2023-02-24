import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import NavbarRespon from './NavbarRespon';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
    const { isOpen, setIsOpen, isActive, setIsActive } = useContext(SidebarContext);
    const { amount } = useContext(CartContext);
    const [isAction, setIsAction] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.screenY > 60 ? setIsAction(true) : setIsAction(false);
        });
    });
    return (
        <header
            className={`${
                isAction ? 'bg-white shadow-2xl py-4' : 'bg-white py-6 shadow-xl'
            } fixed z-10 transition-all w-full`}
        >
            <div className="mx-auto h-full container justify-between flex items-center ">
                <div className="flex items-center gap-2">
                    <div
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                    >
                        <AiOutlineMenu className="text-[30px]  lg:hidden hover:cursor-pointer  " />
                    </div>
                    <div className="text-2xl ">
                        <Link to={'/'}>Degrey</Link>
                    </div>
                </div>
                <div>
                    <div className="lg:hidden">
                        <NavbarRespon />
                    </div>
                    <div className="flex gap-x-10">
                        <div className="hover:border-b-[1px] p-4   ">
                            <Link to={'/'}>Trang chủ</Link>
                        </div>
                        <div>
                            <Link to={'/'}>Sản phẩm</Link>
                        </div>
                        <div>
                            <Link to={'/'}>Giới thiệu</Link>
                        </div>
                        <div>
                            <Link to={'/'}>Hỗ trợ</Link>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className="relative"
                >
                    <AiOutlineShoppingCart className="text-[30px]" />
                    <div className="absolute top-0 -right-2 w-4 h-4 bg-red-500 text-white rounded-full flex justify-center items-center">
                        {amount}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
