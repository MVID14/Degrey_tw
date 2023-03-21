import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import icon
import { AiOutlineSortAscending, AiFillCaretDown } from 'react-icons/ai';
import { BsFunnel } from 'react-icons/bs';
import { GrDown } from 'react-icons/gr';
//import data
import Data from '../mock-data/Data';
import ProductItem from '../components/ProductItem';

const PageProducts = () => {
    const [products, setProducts] = useState(Data);

    // fllter price
    const [sortOrder, setSortOrder] = useState('asc');
    const sortProducts = (order) => {
        const sortedProducts = products.sort((a, b) => (order === 'asc' ? a.fees - b.fees : b.fees - a.fees));
        setProducts(sortedProducts);
        setSortOrder(order === 'asc' ? 'desc' : 'asc');
    };

    return (
        <section className="pt-20  container mx-auto ">
            <div className="flex flex-col gap-y-5">
                <div>
                    <div className="flex ">
                        <Link>Trang chủ </Link> <span>/</span> <div>Tất cả sản phẩm</div>
                    </div>
                    <div className="object-cover">
                        <img
                            src="https://file.hstatic.net/1000281824/file/z3533341777412_f5edd4a273a3ef5093b6567f1acd7b0f_1d288245ef874e9fab99f73c62539549.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-8 flex flex-col gap-y-5">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-[28px]">Tất cả sản phẩm</h1>
                        <div className="flex bordered border-2 border-primary px-8 py-1 items-center justify-between w-40px h-full hover:cursor-pointer ">
                            <div>
                                <AiOutlineSortAscending />
                            </div>
                            <div>Sắp xếp</div>
                            <div>
                                <AiFillCaretDown />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-10 w-full justify-start">
                        <div className="flex  w-40 h-8 items-center px-2 gap-x-2 text-lg font-medium  ">
                            <BsFunnel />
                            <div className="font-medium">Bộ lọc</div>
                        </div>
                        <div
                            onClick={() => {
                                sortProducts(sortOrder);
                            }}
                            className="flex border-2  w-40 h-8 items-center px-2 justify-between cursor-pointer "
                        >
                            <div className="font-medium">Lọc giá</div>
                            <GrDown className="text-sm" />
                        </div>
                        <div className="flex border-2  w-40 h-8 items-center px-2 justify-between  ">
                            <div className="font-medium">Màu sắc</div>
                            <GrDown className="text-sm" />
                        </div>
                        <div className="flex border-2  w-40 h-8 items-center px-2 justify-between  ">
                            <div className="font-medium">Kích thước</div>
                            <GrDown className="text-sm" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[80px] max-w-sm mx-auto md:max-w-none md:mx-0">
                    {products.map((product) => {
                        return <ProductItem product={product} key={product.id} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default PageProducts;
