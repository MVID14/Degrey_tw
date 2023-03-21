import React, { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';
import { useParams } from 'react-router-dom';
import Data from '../mock-data/Data';

const ProductDetail = () => {
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    const product = Data.find((item) => {
        return item.id === parseInt(id);
    });
    const { fees, destTitle, imgSrc, discount } = product;

    return (
        <div className="w-full container h-full mt-20 mx-auto min-h-[500px]">
            <div className="flex gap-x-2 ">
                <div> Trang chủ / </div>
                <div>Phụ kiện /</div>
                <span className="text-gray-500 text-sm flex items-center ">{destTitle}</span>
            </div>
            <div className="flex justify-between mt-4 lg:flex-row flex-col">
                <div className="flex basis-1/2">
                    <div className="w-full flex items-center justify-center">
                        <img className=" max-w-[80%] " src={imgSrc} alt="" />
                    </div>
                </div>
                <div className=" basis-1/2 max-w-full">
                    <h1 className="text-2xl font-semibold mb-10">{destTitle}</h1>
                    <div className="flex gap-x-10 mb-10">
                        <div className="flex gap-x-5">
                            <div className="text-xl flex items-center font-bold text-primary  ">{fees} $</div>
                            {/* <div className="text-red-600 text-2xl font-bold">{fees - (fees * discount) / 100} $</div> */}
                        </div>
                        {/* <div className="uppercase text-white bg-red-500 flex items-center px-2 text-sm">15% giảm</div> */}
                    </div>
                    <div className="flex justify-start gap-x-20 mt-2 mb-10 ">
                        <div className="flex justify-center items-center gap-x-8 text-xl border-2 px-2 ">
                            <div className="text-2xl">-</div>
                            <div>1</div>
                            <div className="text-2xl flex ">+</div>
                        </div>
                        <div
                            className="bg-primary text-white px-20 py-2 sm:h-full whitespace-nowrap"
                            onClick={(id) => {
                                addToCart(product, product.id);
                            }}
                        >
                            <button className="">Add to cart</button>
                        </div>
                    </div>
                    <div className="flex w-full justify-between font-bold mb-5 gap-x-5">
                        <div className="flex items-center justify-center text-center">
                            Freeship đơn hàng giá trị trên 1 triệu đồng
                        </div>
                        <div className="flex items-center justify-center text-center">
                            Đổi hàng chưa qua sử dụng trong vòng 30 ngày
                        </div>
                    </div>
                    <div className="mt-10 gap-y-2 flex flex-col">
                        <div className="flex justify-between">
                            <div className="font-bold text-md">THÔNG TIN SẢN PHẨM</div>
                            <div className="text-[20px] font-bold">+</div>
                        </div>
                        <div className="flex justify-between ">
                            <div className="font-bold text-md">THÔNG TIN GiAO HÀNG</div>
                            <div className="text-[20px] font-bold">+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
