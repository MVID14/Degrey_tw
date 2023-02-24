import React from 'react';
import Data from '../mock-data/Data';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const Products = ({ title, link }) => {
    const filteredBalo = Data.filter((item) => {
        return item.category == 'Balo';
    });
    const filterTshirt = Data.filter((item) => {
        return item.category == 'Tshirt';
    });
    const filterJacket = Data.filter((item) => {
        return item.category == 'Jacket';
    });

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <h3 className="font-semibold text-xl uppercase ">{title}</h3>
                <Link to={'/'}>{link}</Link>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="text-2xl font-semibold mb-5">BALO | BLACKPACKS</div>
                <div>
                    <Link>Xem tất cả</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[80px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {filteredBalo.map((product) => {
                    return <ProductItem product={product} key={product.id} />;
                })}
            </div>
            <div className=" flex justify-center items-center text-xs w-full mt-4">
                <Link className="bg-stone-900  uppercase text-white px-14 py-3  transition-all hover:text-black hover:duration-500 ">
                    XEM THEM SẢN PHẨM TẠI BALO | BLACKPACKS
                </Link>
            </div>
            <div className="flex justify-between mt-10">
                <div className="text-2xl font-semibold">Tshirt | Áo thun</div>
                <div>
                    <Link>Xem tất cả</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[80px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {filterTshirt.map((product) => {
                    return <ProductItem product={product} key={product.id} />;
                })}
            </div>
            <div className=" flex justify-center items-center text-xs w-full mt-4">
                <Link className="bg-stone-900  uppercase text-white px-14 py-3  transition-all hover:text-black hover:duration-500 ">
                    XEM THEM SẢN PHẨM TẠI Tshirt | Áo thun
                </Link>
            </div>

            <div className="flex justify-between mt-10">
                <div className="text-2xl font-semibold">Jacket | Áo Khoác</div>
                <div>
                    <Link>Xem tất cả</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[80px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {filterJacket.map((product) => {
                    return <ProductItem product={product} key={product.id} />;
                })}
            </div>
            <div className=" flex justify-center items-center text-xs w-full mt-4">
                <Link className="bg-stone-900  uppercase text-white px-14 py-3  transition-all hover:text-black hover:duration-500 ">
                    XEM THEM SẢN PHẨM TẠI Jacket | Áo Khoác
                </Link>
            </div>
        </div>
    );
};

export default Products;
