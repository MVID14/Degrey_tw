import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import NavbarRespon from './NavbarRespon';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

import { RxMagnifyingGlass } from 'react-icons/rx';

const Header = () => {
    const { isOpen, setIsOpen, isActive, setIsActive } = useContext(SidebarContext);
    const { amount } = useContext(CartContext);
    const [isAction, setIsAction] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsAction(true) : setIsAction(false);
        });
    });
    return (
        <header className={`${isAction ? 'bg-white shadow-2xl py-4' : 'bg-none py-4 shadow-xl'} fixed z-20 w-full `}>
            <div className="mx-auto h-full container justify-between flex items-center ">
                <div className="flex items-center gap-4">
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
                <div className="flex ">
                    <div className="lg:hidden">
                        <NavbarRespon />
                    </div>
                    <div className="lg:flex gap-x-10 hidden">
                        <div className=" border-b-2 hover:border-b-black border-white ">
                            <Link to={'/'}>Trang chủ</Link>
                        </div>
                        <div className=" border-b-2 hover:border-b-black border-white">
                            <Link to={`/Page-product`}>Sản phẩm</Link>
                        </div>
                        <div className=" border-b-2 hover:border-b-black border-white ">
                            <Link to={'/'}>Giới thiệu</Link>
                        </div>
                        <div className=" border-b-2 hover:border-b-black border-white ">
                            <Link to={'/'}>Hỗ trợ</Link>
                        </div>
                    </div>
                </div>
                <div className="flex border  rounded-full px-4 py-1 ">
                    <div className="text-xl flex justify-center ">
                        <RxMagnifyingGlass />
                    </div>
                    <input
                        type="text"
                        className="mx-2 text-base flex items-center justify-center outline-none "
                        placeholder="Tìm kiếm"
                    />
                </div>
                <div
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className="relative cursor-pointer"
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
