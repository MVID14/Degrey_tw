import React from 'react';

import { IoIosCall } from 'react-icons/io';
import { SlArrowDown } from 'react-icons/sl';
import { FiPhoneCall } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import { AiOutlineGooglePlus } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className=" mx-auto w-full bg-black mt-4">
            <div className="mx-auto h-full container justify-between flex items-center py-12  ">
                <div className="text-white grid grid-flow-col gap-12 sm:hidden lg:grid">
                    <div className="">
                        <div className="text-xl text-stone-600 font-semibold">Về DEGREY</div>
                        <div className="mt-2 pr-4">
                            Cái tên Degrey được tạo ra rất ngẫu hứng, xuất phát từ “Chuỗi ngày u buồn về sự nghiệp,
                            tương lai trong quá khứ của chính mình” – theo lời chia sẻ của Degrey’s founder.
                        </div>
                    </div>
                    <div>
                        <div className="text-md font-semibold mb-2 mt-6">Địa chỉ</div>
                        <div>
                            <div className="text-sm font-semibold my-2">- Sài Gòn:</div>
                            <div className="text-sm mr-2 ">
                                43 Huỳnh Văn Bánh P.17 Q.Phú Nhuận 1041 Luỹ Bán Bích P.Tân Thành Q.Tân Phú
                            </div>
                            <div className="text-sm mr-2">26 Lý Tự Trọng Q.1 - The New Playground</div>
                            <div className="text-sm font-semibold my-2">- Đà Lạt:</div>
                            <div className="text-sm my-2">11 Khu Hoà Bình P.1</div>
                            <div className="font-semibold text-sm mb-2">
                                Điện thoại: <span className="font-normal"> 0336311117</span>
                            </div>
                            <div className="font-semibold text-sm ">
                                Email: <span className="font-normal">degrey.vn@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-xl font-semibold text-stone-600 mt-6">Hỗ trợ khách hàng</div>
                        <ul className="text-white flex flex-col justify-center gap-y-2 mt-6">
                            <li className="text-sm font-normal hover:text-stone-500 cursor-pointer">
                                Hệ thống cửa hàng
                            </li>
                            <li className="text-sm font-normal hover:text-stone-500 cursor-pointer">
                                Hướng dẫn đặt hàng
                            </li>
                            <li className="text-sm font-normal hover:text-stone-500 cursor-pointer">
                                Chính sách và quy định
                            </li>
                            <li className="text-sm font-normal hover:text-stone-500 cursor-pointer">
                                Chính sách bảo mật
                            </li>
                            <li className="text-sm font-normal hover:text-stone-500 cursor-pointer">
                                Thông tin sở hữu
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-xl font-semibold text-stone-600 mt-6">Chăm sóc khách hàng</div>
                        <div className="flex gap-x-4 mt-4">
                            <div className="flex items-center text-[40px]">
                                <FiPhoneCall />
                            </div>
                            <div className=" flex flex-col gap-x-2">
                                <div className="text-2xl text-stone-500 font-semibold">0336311117</div>
                                <div className="underline decoration-2">degrey.vn@gmail.com</div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="text-xl font-semibold text-stone-400">Follow Us</div>
                            <div className="flex gap-x-2 text-2xl mt-2 ">
                                <FaFacebookF className="w-8 h-8 border p-1 cursor-pointer " />
                                <AiOutlineInstagram className="w-8 h-8 border p-1 cursor-pointer" />
                                <CiTwitter className="w-8 h-8 border p-1 cursor-pointer" />
                                <AiOutlineGooglePlus className="w-8 h-8 border p-1 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:flex sm:flex lg:hidden text-white  justify-between text-[13px]">
                    <div>
                        <div>Bán hàng 9:00 - 22:00</div>
                        <div className="flex gap-x-1">
                            <div className="flex justify-center items-center">
                                <IoIosCall />
                            </div>
                            <div>0336311117</div>
                        </div>
                    </div>
                    <div>
                        <div>Khiếu nại 9:00 - 21:30</div>
                        <div className=" flex gap-x-1">
                            <div className="flex justify-center items-center">
                                <IoIosCall />
                            </div>
                            <div>0775913335</div>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <div>
                            <div>Xem thêm</div>
                            <div> thông tin</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <SlArrowDown />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
