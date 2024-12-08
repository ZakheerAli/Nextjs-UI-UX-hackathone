export default function HomeContent() {
  return (
    <div>
      <div className="md:px-40 font-[Inter] ">
        <div className="w-full  xs:h-[500px]  md:h-[750px] md:px-6 bg-[#F0F2F3] flex justify-center items-center xs:flex-col md:flex-row">
          <div className="  xs:w-full md:w-[50%] xs:px-5 xs:space-y-20">
            <div className=" xs:w-full md:w-[427px] xs:h-[450px] md:h-[337px] flex flex-col justify-center  md:space-y-2xs:space-y-10 gap-8">
              <p className="text-sm font-normal">Welcome to chairy</p>
              <h1 className="xs:text-5xl md:text-6xl font-bold leading-[66px]">
                Best Furniture Collection for your interior.
              </h1>
              <button className="w-[171px] h-[52px] bg-[#029FAE] text-white rounded-lg hover:text-[#029FAE] hover:bg-black">
                Shop Now <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
          <div className="xs:hidden md:flex w-[50%]  justify-center">
            <div className="w-[414px] h-[544px]  flex justify-center">
              <img src="./hero chair.png" alt="Hero image" />
            </div>
          </div>
        </div>
        <div className="h-[139px] mt-10">
          <div className="md:flex md:items-center md:justify-between gap-6 xs:grid xs:grid-rows-2 grid-cols-3 xs:space-x-2 xs:items-center xs:px-7">
            <img src="/Logo.png" alt="logo1" className="h-[87px] w-[85px]" />
            <img
              src="/Logo (1).png"
              alt="Logo2"
              className="h-[109px] w-[107px]"
            />
            <img
              src="/Logo (2).png"
              alt=" logo3"
              className="h-[139px] w-[135px]"
            />
            <img src="/Logo (3).png" alt="Logo4" className="h-[65] w-[63]" />
            <img src="/Logo (4).png" alt="Logo5" className="h-[101] w-[98]" />
            <img src="/Logo (5).png" alt="Logo6" className="h-[115] w-[113]" />
          </div>
        </div>
        <div className=" xs:[1000px]:h-[]md:h-[461px] w-full xs:mt-40 md:mt-5  md:mb-10">
          <div className="w-full h-[58px] flex items-center justify-between xs:gap-6 xs:px-6 xs:mt-9">
            <p className="text-[32px] font-normal">Featured Products</p>
          </div>
          <div className="w-full  md:h-[377px] flex justify justify-between  xs:gap-1 xs:mt-16 xs:flex-col md:flex-row xs:space-y-20 md:space-y-2">
            <div className="md:w-[312px] h-[322px] flex flex-col gap-3 xs:px-10 md:px-2 ">
              <img
                src="./Image.png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              {/* <div className="flex justify-between">
             <div className=" w-full">
                <h3>Gucci duffle bag</h3>
                <div className="flex">
                  <p className="text-red-500">$20 </p>
                </div>
                <div><i className="ri-shopping-cart-2-line"></i></div>
             </div>
              </div> */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
            <div className="md:w-[312px] h-[377px] flex flex-col gap-3 xs:px-10 md:px-2">
              <img
                src="./Image (1).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
            <div className="xs:w-full md:w-[312px] h-[377px] flex flex-col gap-3 md:px-2 xs:px-10">
              <img
                src="./Image (2).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
            <div className="md:w-[312px] h-[377px]  flex-col gap-3 md:px-2 xs:px-12">
              <img
                src="./Image (3).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  xs:h-[1000px] md:h-[508px] xs:space-y-10 flex justify-center items-center md:mt-20 relative xs:flex-col  ">
          <div className="w-full h-[58px] flex items-center justify-between xs:gap-6 xs:px-6 xs:mt-9">
            <p className="text-[32px] font-normal">Top Categories</p>
          </div>
          <div className="flex items-center justify-center xs:px-5 xs:flex-col md:flex-row">
            <div className="md:w-[410px]  xs:h-[300px] xs:w-[300px]  md:h-[424px] flex flex-col gap-3 xs:px-10 md:px-2  relative">
              <img
                src="./Image (4).png"
                alt="Image5"
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="bg-black text-white  xs:w-[60%] md:w-[95%] xs:h-[70px] md:h-[85px] opacity-70 absolute xs:top-[50%]  md:top-[70%] px-4 py-3 ">
                <h1 className="text-[20px] ">Wing Chair</h1>
                <p className="text-[16px]">3,584 Products</p>
              </div>
            </div>
            <div className="md:w-[410px]  xs:h-[300px] xs:w-[300px]  md:h-[424px] flex flex-col gap-3 xs:px-10 md:px-2  relative">
              <img
                src="./Image (5).png"
                alt="Image5"
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="bg-black text-white xs:w-[60%] md:w-[95%] xs:h-[70px] md:h-[85px] opacity-70 absolute  xs:top-[50%] md:top-[70%] px-4 py-3 ">
                <h1 className="text-[20px]">Wooden Chair</h1>
                <p className="text-[16px]"> 157 Products</p>
              </div>
            </div>
            <div className=" md:w-[410px] xs:hidden md:block  xs:h-[300px] xs:w-[300px]  md:h-[424px] flex flex-col gap-3 md:px-2 xs:px-10  relative">
              <img
                src="./Image (6).png"
                alt="Image6"
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="bg-black text-white w-[95%] h-[85px] opacity-70 absolute xs:top-[50%] md:top-[70%] px-4 py-3 ">
                <h1 className="text-[20px]">Desk Chair</h1>
                <p className="text-[16px]">154 Products</p>
              </div>
            </div>
          </div>
        </div>
<hr />
        <div className="w-full  md:mt-32 xs:h-[900px] md:h-[648px] bg-blue flex items-center justify-center space-x-2 xs:px-4 md:px-0 ">
          <div className="flex w-[100%] md:h-[548px] space-x-2 xs:flex-col md:flex-row">
            <div className="h-full md:w-[448px] flex items-center justify-center relative">
              <div>
                <img
                  src="./Image (2).png"
                  alt=""
                  className=" md:h-[548px] object-cover hover:scale-105 duration-150 cursor-pointer rounded-md"
                />
                <div className="-rotate-90 md:w-[648px] bg-white  xs:text-[18px] xs:w-[350px] xs:top-[40%] xs:right-[40%] md:text-[28px] px-2 py-2 font-normal  xs:h-[50px] md:h-[58px] absolute md:top-[36%]  md:right-[27%]">EXPLORE NEW AND POPULAR STYLES </div>
              </div>
            </div>
            <div className="h-full md:w-[548px] flex flex-col xs:px-3 space-y-2 xs:mt-5">
              <div className="w-full h-[50%] flex space-x-2  ">
                <div className="w-[50%] h-full">
                  <img
                    src="./Image (3).png"
                    alt=""
                    className="hover:scale-105 duration-150 cursor-pointer"
                  />
                </div>
                <div className="w-[50%] h-full">
                  <img
                    src="./silver (2).png"
                    alt=""
                    className="hover:scale-105 duration-150 cursor-pointer rounded-md"
                  />
                </div>
              </div>
              <div className="w-full h-[50%] space-x-2  bg-red- flex">
                <div className="w-[50%] h-full">
                  <img
                    src="./silver (1).png"
                    alt=""
                    className="hover:scale-105 duration-150 cursor-pointer rounded-md "
                  />
                </div>
                <div className="w-[50%] h-full">
                  <img
                    src="./silver (2).png"
                    alt=""
                    className="hover:scale-105 duration-150 cursor-pointer rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" xs:[700px]:h-[] md:h-[461px] w-full xs:mt-40 md:mt-5  md:mb-[500px] ">
          <div className="w-full h-[58px] flex items-center justify-center xs:gap-6 xs:px-6 xs:mt-9">
            <p className="text-[32px] font-normal">Our Products</p>
          </div>
          <div className="w-full  md:h-[377px] flex justify justify-between  xs:gap-1 xs:mt-16 xs:flex-col md:flex-row xs:space-y-20 md:space-y-2">
            <div className="md:w-[312px] h-[322px] flex flex-col gap-3 xs:px-10 md:px-2 ">
              <img
                src="./Image.png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              {/* <div className="flex justify-between">
             <div className=" w-full">
                <h3>Gucci duffle bag</h3>
                <div className="flex">
                  <p className="text-red-500">$20 </p>
                </div>
                <div><i className="ri-shopping-cart-2-line"></i></div>
             </div>
              </div> */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
            <div className="md:w-[312px] h-[377px] flex flex-col gap-3 xs:px-10 md:px-2">
              <img
                src="./Image (1).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
            <div className="xs:w-full md:w-[312px] h-[377px] flex flex-col gap-3 md:px-2 xs:px-10">
              <img
                src="./Image (2).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
            <div className="md:w-[312px] h-[377px]  flex-col gap-3 md:px-2 xs:px-12">
              <img
                src="./Image (3).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  md:h-[377px] flex justify justify-between  xs:gap-1 xs:mt-16 xs:flex-col md:flex-row xs:space-y-20 md:space-y-2">
            <div className="md:w-[312px] h-[322px] flex flex-col gap-3 xs:px-10 md:px-2 ">
              <img
                src="./Image (8).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              {/* <div className="flex justify-between">
             <div className=" w-full">
                <h3>Gucci duffle bag</h3>
                <div className="flex">
                  <p className="text-red-500">$20 </p>
                </div>
                <div><i className="ri-shopping-cart-2-line"></i></div>
             </div>
              </div> */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
            <div className="md:w-[312px] h-[377px] flex flex-col gap-3 xs:px-10 md:px-2">
              <img
                src="./silver (1).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
            <div className="xs:w-full md:w-[312px] h-[377px] flex flex-col gap-3 md:px-2 xs:px-10  xs:hidden md:block">
              <img
                src="./Image (7).png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
            <div className="md:w-[312px] h-[377px]  flex-col gap-3 md:px-2 xs:px-12  xs:hidden md:block">
              <img
                src="./Image.png"
                alt=""
                className="hover:scale-105 duration-150 cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h2>
                  <p className="text-[18px]">$20</p>
                </div>
                <div className="h-[30px] w-[30px] bg-[#007580] p-1 rounded-md cursor-pointer hover:bg-white">
                  <i className="ri-shopping-cart-2-line text-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
