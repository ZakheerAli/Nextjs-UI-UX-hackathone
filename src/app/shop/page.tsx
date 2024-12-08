export default function Shop() {
  return (
    <div>
      <div className="md:px-32 xs:px-2 py-10">
        <div className="w-full xs:h-[1000px] md:h-[507px]  flex items-center justify-between gap-14 xs:flex-col md:flex-row xs:px-6">
          <div className="md:w-[507px] xs:w-[300px] xs:h-[300px] md:h-[507px] xs:px-10">
            <img src="./Image (1).png" alt="chair" className="w-full h-full" />
          </div>
          <div className="xs:w-full md:w-[50%] h-full font-[Inter] xs:text-center md:text-left py-5 px-3 space-y-5">
            <h1 className="xs:text-3xl md:text-6xl font-bold">Library Stool Chair</h1>
            <p className="w-[144px] h-[44px] rounded-full text-white bg-[#029FAE] p-2 px-5">
              $20.00 USD
            </p>
            <hr />
            <p className="text-xl font-normal text-[#272343]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
            <button className="w-[212px] h-[63px] hover:bg-black text-white  bg-[#029FAE] rounded-lg text-[22px]">
              {" "}
              <i className="ri-shopping-cart-2-line text-lg"></i>Add To Cart
            </button>
          </div>
        </div>
        <div className="md:h-[409px] w-full md:mt-20 xs:px-10 md:px-0">
          <div className="w-full h-[58px] flex items-center justify-between xs:gap-6 xs:px-6 xs:mt-9">
            <p className="text-[32px] font-bold">Featured Products</p>
            <button className="text-[22px] underline hover:font-bold">View All</button>
          </div>
          <div className="w-full  md:h-[377px] flex justify-between  xs:gap-1 xs:mt-16 xs:flex-col md:flex-row xs:space-y-20 md:space-y-2">
            <div className="md:w-[312px] h-[322px] flex flex-col gap-3 xs:px-10 md:px-2 space-y-3 ">
              <img
                src="./Image.png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
             <div className="flex items-center justify-between">
                <div className="flex justify-between gap-4">
                  <h2 className="text-[16px] font-normal text-[#272343]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$99</p>
                </div>
               
              </div>
            </div>
            <div className="md:w-[312px] h-[377px] flex flex-col gap-3 xs:px-10 md:px-2 xs:space-y-7 md:space-y-3">
              <img
                src="./Image (1).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div className="flex justify-between gap-4">
                  <h2 className="text-[16px] font-normal text-[#272343]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$99</p>
                </div>
               
              </div>
            </div>
            <div className="xs:w-full md:w-[312px] h-[377px] flex flex-col gap-3 md:px-2 xs:px-10 space-y-3 xs:hidden md:block">
              <img
                src="./Image (7).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
             <div className="flex items-center justify-between">
                <div className="flex justify-between gap-4">
                  <h2 className="text-[16px] font-normal text-[#272343]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$99</p>
                </div>
               
              </div>
            </div>
            <div className="md:w-[312px] h-[377px]  flex-col gap-3 md:px-2 xs:px-12 space-y-3">
              <img
                src="./Image (3).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div className="flex justify-between gap-4">
                  <h2 className="text-[16px] font-normal text-[#272343]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$99</p>
                </div>
               
              </div>
            </div>
            <div className="md:w-[312px] h-[377px]  flex-col gap-3 md:px-2 xs:px-12 space-y-3 xs:hidden md:block">
              <img
                src="./Image (9).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div className="flex justify-between gap-4">
                  <h2 className="text-[16px] font-normal text-[#272343]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$99</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
