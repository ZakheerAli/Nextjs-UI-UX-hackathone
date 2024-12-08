import 'remixicon/fonts/remixicon.css'
export default function Cart(){
    return(
        <div>
            <div className="xs:px-12 md:px-52 py-10">
 <div className="xs:h-[900px] md:h-[632px] w-full gap-8 mt-20 flex font-[Inter] xs:flex-col  md:flex-row">
    <div className="md:w-[70%] h-full -600">
        <p className=" xs:text-[32px] font-medium mb-8">Bag</p>
        <div className="w-full md:h-[211px]  gap-5 flex items-center justify-center xs:px-2 md:px-1">
            <div className=" xs:w-[20%] md:w-[30%] h-full ">
                <img src="./orange.png" alt="" />
            </div>
            <div className="w-[70%] h-full  ">
                <div className="md:h-[70%] w-full  px-4 py-5 justify-between flex space-y-3 ">
                    <div>
                        <p className=" xs:text-[12px] md:text-[16px] font-normal">Library Stool Chair</p>
                        <p className=" xs:text-[10px] md:text-[16px] text-[#757575]">Ashen Slate/Cobalt Bliss</p>
                        <div className=" xs:text-[10px] md:text-[16px] text-[#757575] flex gap-6"><p>Size L</p>
                        <p> Quantity 1</p></div>
                    </div>
                    <p className='md:text-[16px] xs:text-[10px]'>MRP: $99</p>

                </div>
                <div className="md:h-[30%] w-full  flex gap-6 text-xl px-4 py-2">
                <i className="ri-heart-3-line"></i>
                <i className="ri-delete-bin-line"></i>
                </div>
            </div>
        </div>
        <hr />
        <div className="w-full h-[211px]  gap-5  flex items-center justify-center xs:mt-10">
            <div className="w-[30%] h-full ">
                <img src="./Image (8).png" alt="" />
            </div>
            <div className="w-[70%] h-full  ">
                <div className="md:h-[70%] w-full  px-4 py-5 justify-between flex space-y-3 ">
                    <div>
                        <p className="xs:text-[12px] md:text-[16px] font-normal">Library Stool Chair</p>
                        <p className=" xs:text-[10px] md:text-[16px] text-[#757575]">Ashen Slate/Cobalt Bliss</p>
                        <div className=" xs:text-[10px] md:text-[16px] text-[#757575] flex gap-6"><p>Size L</p>
                        <p> Quantity 1</p></div>
                    </div>
                    <p className='md:text-[16px] xs:text-[10px]'>MRP: $99</p>

                </div>
                <div className="md:h-[30%] w-full  flex gap-6 text-xl px-4 py-2">
                <i className="ri-heart-3-line"></i>
                <i className="ri-delete-bin-line"></i>
                </div>
            </div>
        </div>
    </div>
    <div className="md:w-[30%] h-full pt-10 px-4 space-y-5  ">
        <p className='text-[21px] font-normal'>Summary</p>
        <div className='flex justify-between text-[15px]'>
            <p>Subtotal</p>
            <p>$198.00</p>
        </div>
        <div className='flex justify-between text-[15px]'>
            <p>Estimated Delivery & Handling</p>
            <p> Free</p>
        </div>
        <br />
        <hr />
        <div className='flex justify-between text-[15px]'>
            <p>Total</p>
            <p>$198.00</p>
        </div>
        <button className='w-full h-[60px] rounded-full bg-[#029FAE] hover:bg-black text-white'>Member Checkout</button>
    </div>
 </div>
            </div>
        </div>
    )
}