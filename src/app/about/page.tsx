export default function About() {
  return (
    <div>
      <div className="md:px-52 py-10">
        <div className=" xs:h-[400px] md:h-[378px] w-full flex gap-10 font-[Inter] xs:flex-col md:flex-row">
          <div className="md:w-[50%] h-full bg-[#007580] text-white p-8 space-y-12 xs:p-11">
            <div className="space-y-3">
              <h2 className="  xs:text-[22px] md:text-[32px] font-bold">About Us - Comforty</h2>
              <p className="xs:text-[16px] md:text-[18px] font-normal">
                At Comforty, we believe that the right chair can transform your
                space and elevate your comfort. Specializing in ergonomic
                design, premium materials, and modern aesthetics, we craft
                chairs that seamlessly blend style with functionality.{" "}
              </p>
            </div>
            <button className=" xs:w-[120px] md:w-[179px] xs:text-[12px]   md:text-[16px] xs:h-[50px] md:h-[59px] bg-[#F9F9F926] rounded-lg hover:bg-black">
              View Collection
            </button>
          </div>
          <div className="xs:hidden md:block md:w-[50%] h-full ">
            <img src="./Image.png" alt="Chair" className="w-full h-full " />
          </div>
        </div>
        <div className="w-full h-[330px]text-center flex items-center justify-between flex-col md:mt-20 xs:px-5 md:px-2">
          <div>
            <p className="xs:text-[22px] xs:mt-20 md:mt-5 md:text-[32px] font-normal">
              What makes our Brand Different
            </p>
          </div>
          <div className="w-full xs:h-[700px] md:h-[244px] flex gap-4 mt-6 xs:flex-col md:flex-row ">
            <div className="md:w-[25%] h-full bg-[#F9F9F9] flex items-center justify-center px-3 hover:scale-110 cursor-pointer">
              <img src="./f1.png" alt="" />
            </div>
            <div className="md:w-[25%] h-full bg-[#F9F9F9] flex items-center justify-center px-3 hover:scale-110 cursor-pointer">
              {" "}
              <img src="./f2.png" alt="" />
            </div>
            <div className="md:w-[25%] h-full bg-[#F9F9F9] flex items-center justify-center px-3 hover:scale-110 cursor-pointer">
              {" "}
              <img src="./f3.png" alt="" />
            </div>
            <div className="md:w-[25%] h-full bg-[#F9F9F9] flex items-center justify-center px-3 hover:scale-110 cursor-pointer">
              {" "}
              <img src="./f4.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full h-[58px] flex items-center  xs:gap-6 xs:px-6 xs:mt-9 ">
          <p className="text-[32px] font-bold">Our Popular Products</p>
        </div>
        <div className=" xs:h-[1300px] md:h-[462px] w-full flex gap-5 xs:flex-col md:flex-row xs:px-6 xs:space-y-8 md:space-y-0">
            <div className="md:w-[50%] text-[#2A254B] ">
                <img src="big.png" alt="" className="md:h-[335px] md:hover:scale-110 cursor-pointer" />
                <p className="xs:text-[15px] md:text-[20px] font-normal">The Poplar suede sofa</p>
                <p className="xs:text-[15px] md:text-[20px]">$99.00</p>
            </div>
            <div className="md:w-[25%] text-[#2A254B] xs:px-3 md:px-0 ">
            <img src="Parent.png" alt="" className="md:h-[335px] md:hover:scale-110 cursor-pointer" />
            <p className="xs:text-[15px] md:text-[20px] font-normal"> The Dandy chair</p>
            <p className="xs:text-[15px] md:text-[20px]">$99.00</p>
            </div>
            <div className="md:w-[25%]  text-[#2A254B] xs:px-3 md:px-0 ">
            <img src="Parent (1).png" alt=""  className="md:h-[335px] md:hover:scale-110 cursor-pointer" />
            <p className="xs:text-[15px] md:text-[20px] font-normal"> The Dandy chair</p>
            <p className="xs:text-[15px] md:text-[20px]">$99.00</p>
            </div>
        </div>
        
      </div>
    </div>
  );
}
