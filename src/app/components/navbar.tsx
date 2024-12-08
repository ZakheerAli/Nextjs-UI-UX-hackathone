"use client"
import 'remixicon/fonts/remixicon.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const menuBtn = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className="h-[203px] w-full">
                <div className="xs:h-[50px] md:h-[45px] bg-[#272343]  md:px-52 flex xs:flex-col md:flex-row text-[#ffffff] xs:py-1 md:justify-between items-center text-[13px] font-[Inter] font-normal">
                    <p><i className="ri-check-fill"></i>Free shipping on all orders over $50</p>
                    <div className="h-[17px] w-[230px] flex gap-6">
                        <p>Eng<i className="ri-arrow-down-wide-line"></i></p>
                        <p>Faqs</p>
                        <p><i className="ri-question-line"></i>Need Help</p>
                    </div>
                </div>
                <div className='h-[84px] w-full bg-[#F0F2F3] xs:px-12 md:px-52 flex justify-between items-center xs:text-center'>
                    <div className='h-10 w-[116px] flex gap-2 '>
                        <img src="./logo Icon.png" alt="Logo" />
                        <h2 className=' xs:text-lg md:text-[26px] font-medium font-[Inter]'>Comforty</h2>
                    </div>
                    <div className=' xs:h-[35px] md:h-[44px]  xs:w-[100px] md:w-[130px] bg-white flex text-black text-xs font-[Inter] font-medium py-[11px] md:px-4 gap-4 rounded-lg items-center'>
                        <Link href="/cart" className='flex items-center hover:text-lg '><i className="ri-shopping-cart-2-line text-lg"></i>
                        <p>Cart</p></Link>
                        
                        <div className='h-5 w-5 rounded-full bg-green-700 flex items-center justify-center text-white'>2</div>
                    </div>
                </div>
                <div className='h-[74px] w-full  xs:px-14 md:px-52 flex items-center justify-between'>
                    <div className='h-4 w-[339px] font-[Inter] text-sm font-medium flex justify-between'>
                        {/* Hamburger Menu for Small Screens */}
                        <button
                            className="block md:hidden xs:ml-3"
                            onClick={menuBtn}
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>

                        {/* Links */}
                        <div
                            className={`${
                                open ? "block" : "hidden"
                            } md:flex space-y-4 md:space-y-0 md:space-x-6 md:items-center`}
                        >
                            <Link href="/" className="block px-4 py-2 hover:underline hover:font-bold">
                                Home
                            </Link>
                            <Link
                                href="./shop"
                                className="block px-4 py-2 hover:underline hover:font-bold"
                            >
                                Shop
                            </Link>
                            <Link
                                href="/product"
                                className="block px-4 py-2 hover:underline hover:font-bold"
                            >
                                Product
                            </Link>
                            <Link
                                href="/pages"
                                className="block px-4 py-2 hover:underline hover:font-bold"
                            >
                                Pages
                            </Link>
                            <Link
                                href="/about"
                                className="block px-4 py-2 hover:underline hover:font-bold"
                            >
                                About
                            </Link>
                        </div>
                    </div>
                    <div className=' xs:w-full md:w-[168px]'>
                        <Link href="/contact"> <p className='font-[Inter] xs:text-[10px] md:text-sm font-normal hover:font-bold hover:underline'>Contact: <span className='font-medium'>(808-555-011)</span></p></Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}
