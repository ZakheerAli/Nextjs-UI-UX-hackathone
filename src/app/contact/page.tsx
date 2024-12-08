export default function Contact(){
    return(
        <div>
            <div className="xs:px-8 md:px-52 py-10">
                <div className="w-full text-center font-[Inter] xs:px-7 md:px-0">
                    <h2 className=" xs:text-[25px] md:text-[36px] font-semibold mt-11">Get In Touch With Us</h2>
                    <p className="text-[#9F9F9F] xs:text-[14px] md:text-[24px] leading-10">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                    <div className="w-full h-[923px] flex mt-24 xs:flex-col md:flex-row">
                        <div className="md:w-[40%] h-[573px] px-5 py-6 space-y-6">
                            <div className="text-left">
                                <p className="flex gap-5 font-bold"><img src="./Vector.png" alt="" />Address</p>
                                <p className="text-[16px]">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                            <div className="text-left">
                            <p className="flex gap-5 font-bold"><img src="./Vector (1).png" alt="" />Address</p>
                            <p className="text-[16px]">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                            <div className="text-left">
                            <p className="flex gap-5 font-bold"><img src="./Vector (1).png" alt="" />Address</p>
                            <p className="text-[16px]">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div  className=" md:w-[60%] h-full py-6 px-4 text-left space-y-5">
                            <p>Your Name</p>
                            <input type="text"  placeholder="abc" className="px-5 text-[#9F9F9F]  xs:h-[50px]  md:h-[75px] w-full  rounded-xl  border-2 border-black"/>
                            <p>Email Address</p>
                            <input type="text"  placeholder="abc@gmail.com" className="px-5 text-[#9F9F9F]  xs:h-[50px]  md:h-[75px] w-full  rounded-xl border-2 border-black" />
                            <p>Subject</p>
                            <input type="text"  placeholder="This is an optional" className="px-5 text-[#9F9F9F]  xs:h-[50px]  md:h-[75px] w-full rounded-xl  border-2 border-black"/>
                            <p>Message</p>
                            <input type="text"   placeholder="Hi! i’d like to ask about " className="px-5 text-[#9F9F9F]  xs:h-[50px]  md:h-[85px] w-full  rounded-xl border-2 border-black"/>
                            <button className="w-[237px] h-[55px] rounded-lg bg-[#029FAE] text-white hover:bg-black">Submit</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}