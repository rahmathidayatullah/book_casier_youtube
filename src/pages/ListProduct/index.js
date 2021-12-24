import React from "react";
import IconSearch from "../../assets/icon/search";
import ImgProduct1 from "../../assets/img/listproduct/img1.png";
import ImgEmptyCart from "../../assets/img/empty_cart.png";
import IconDelete from "../../assets/icon/delete";
export default function ListProduct() {
  return (
    <div>
      <div className="ml-32 grid grid-cols-5">
        <div className="col-span-5 2xl:col-span-3">
          <div className="h-full 2xl:h-screen pt-9 overflow-scroll">
            {/* category */}
            <div>
              <ul className="flex items-center overflow-scroll">
                <li className="cursor-pointer">
                  <div className="text-base pb-3 whitespace-nowrap">All</div>
                  <div className="w-full bg-violet-purple h-2 rounded-xl"></div>
                </li>
                <li className="ml-7 group cursor-pointer">
                  <div className="text-base pb-3 group-hover:text-black duration-300 text-gray-400 whitespace-nowrap">
                    Business & Economict
                  </div>
                  <div className="w-full group-hover:bg-violet-purple duration-300 bg-transparent h-2 rounded-xl"></div>
                </li>
                <li className="ml-7 group cursor-pointer">
                  <div className="text-base pb-3 group-hover:text-black duration-300 text-gray-400 whitespace-nowrap">
                    Art & Design
                  </div>
                  <div className="w-full group-hover:bg-violet-purple duration-300 bg-transparent h-2 rounded-xl"></div>
                </li>
                <li className="ml-7 group cursor-pointer">
                  <div className="text-base pb-3 group-hover:text-black duration-300 text-gray-400 whitespace-nowrap">
                    Financial
                  </div>
                  <div className="w-full group-hover:bg-violet-purple duration-300 bg-transparent h-2 rounded-xl"></div>
                </li>
                <li className="ml-7 group cursor-pointer">
                  <div className="text-base pb-3 group-hover:text-black duration-300 text-gray-400 whitespace-nowrap">
                    Humanities
                  </div>
                  <div className="w-full group-hover:bg-violet-purple duration-300 bg-transparent h-2 rounded-xl"></div>
                </li>
              </ul>
            </div>
            {/* search */}
            <div className="relative mt-12">
              <input
                type="text"
                name="search"
                placeholder="Search.."
                className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
              />
              <IconSearch className="absolute right-4 top-1/2 transform -translate-y-1/2" />
            </div>
            {/* list card */}
            <div className="grid grid-cols-6 mt-8 gap-5">
              {/* item card */}
              <div className="col-span-6  sm:col-span-3 lg:col-span-2">
                <div className="shadow-1xl rounded-lg px-6 py-3">
                  <div className="flex items-center justify-center border-b-2 border-gray-300 p-10">
                    <img src={ImgProduct1} alt="img-1" />
                  </div>
                  <p className="mt-3 font-medium text-gray-400">Stock : 12</p>
                  <p className="font-bold text-base">Faktor Lattes </p>
                  <div className="flex items-center mt-1">
                    <p className="font-medium text-xs text-green-mantis mr-2">
                      Published at
                    </p>
                    <p className="bg-green-mantis px-2 py-1 rounded-lg text-white font-medium text-xs">
                      02/07/2021
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-7">
                    <p className="font-medium text-gray-400">
                      Author : David Bach
                    </p>
                    <p className="font-medium text-gray-500">$21.01</p>
                  </div>
                </div>
              </div>
              {/* item card */}
              <div className="col-span-6  sm:col-span-3 lg:col-span-2">
                <div className="shadow-1xl rounded-lg px-6 py-3">
                  <div className="flex items-center justify-center border-b-2 border-gray-300 p-10">
                    <img src={ImgProduct1} alt="img-1" />
                  </div>
                  <p className="mt-3 font-medium text-gray-400">Stock : 12</p>
                  <p className="font-bold text-base">Faktor Lattes </p>
                  <div className="flex items-center mt-1">
                    <p className="font-medium text-xs text-green-mantis mr-2">
                      Published at
                    </p>
                    <p className="bg-green-mantis px-2 py-1 rounded-lg text-white font-medium text-xs">
                      02/07/2021
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-7">
                    <p className="font-medium text-gray-400">
                      Author : David Bach
                    </p>
                    <p className="font-medium text-gray-500">$21.01</p>
                  </div>
                </div>
              </div>
              {/* item card */}
              <div className="col-span-6  sm:col-span-3 lg:col-span-2">
                <div className="shadow-1xl rounded-lg px-6 py-3">
                  <div className="flex items-center justify-center border-b-2 border-gray-300 p-10">
                    <img src={ImgProduct1} alt="img-1" />
                  </div>
                  <p className="mt-3 font-medium text-gray-400">Stock : 12</p>
                  <p className="font-bold text-base">Faktor Lattes </p>
                  <div className="flex items-center mt-1">
                    <p className="font-medium text-xs text-green-mantis mr-2">
                      Published at
                    </p>
                    <p className="bg-green-mantis px-2 py-1 rounded-lg text-white font-medium text-xs">
                      02/07/2021
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-7">
                    <p className="font-medium text-gray-400">
                      Author : David Bach
                    </p>
                    <p className="font-medium text-gray-500">$21.01</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 2xl:col-span-2">
          <div className="h-full 2xl:h-screen pt-9 xl:overflow-scroll mx-7 relative">
            <h2 className="font-bold">
              Codeathome <span className="font-normal">BookStore</span>
            </h2>
            {/* start ketika data kosong */}
            <div
              className={`flex border h-full 2xl:h-69vh overflow-scroll mt-10`}
            >
              {/* <div
              className={`flex items-center justify-center border h-69vh overflow-scroll mt-10`}
            > */}
              {/* img empty cart */}
              {/* <img src={ImgEmptyCart} alt="img-empty-cart" /> */}
              <ul className="w-full">
                <li className="mt-5">
                  <div className="shadow-1xl p-4 rounded-xl flex items-center relative">
                    {/* img box */}
                    <div className="min-w-110px w-110px h-110px rounded-xl overflow-hidden mr-4">
                      <img
                        className="h-full w-full"
                        src={ImgProduct1}
                        alt="img-card"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <p className="text-base font-bold">Faktor Lattes </p>
                      <p className="font-medium text-gray-500 text-sm mt-1">
                        $21.01
                      </p>
                      <p className="font-medium text-gray-400 text-sm mt-1">
                        Stock : 0
                      </p>
                      {/* plus minus */}
                      <div className="flex items-center mt-5">
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            -
                          </span>
                        </button>
                        <span className="mx-7 text-sm">2</span>
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            +
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* icon delete */}
                    <IconDelete className="absolute cursor-pointer top-5 right-5" />
                  </div>
                </li>
                <li className="mt-5">
                  <div className="shadow-1xl p-4 rounded-xl flex items-center relative">
                    {/* img box */}
                    <div className="min-w-110px w-110px h-110px rounded-xl overflow-hidden mr-4">
                      <img
                        className="h-full w-full"
                        src={ImgProduct1}
                        alt="img-card"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <p className="text-base font-bold">Faktor Lattes </p>
                      <p className="font-medium text-gray-500 text-sm mt-1">
                        $21.01
                      </p>
                      <p className="font-medium text-gray-400 text-sm mt-1">
                        Stock : 0
                      </p>
                      {/* plus minus */}
                      <div className="flex items-center mt-5">
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            -
                          </span>
                        </button>
                        <span className="mx-7 text-sm">2</span>
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            +
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* icon delete */}
                    <IconDelete className="absolute cursor-pointer top-5 right-5" />
                  </div>
                </li>
                <li className="mt-5">
                  <div className="shadow-1xl p-4 rounded-xl flex items-center relative">
                    {/* img box */}
                    <div className="min-w-110px w-110px h-110px rounded-xl overflow-hidden mr-4">
                      <img
                        className="h-full w-full"
                        src={ImgProduct1}
                        alt="img-card"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <p className="text-base font-bold">Faktor Lattes </p>
                      <p className="font-medium text-gray-500 text-sm mt-1">
                        $21.01
                      </p>
                      <p className="font-medium text-gray-400 text-sm mt-1">
                        Stock : 0
                      </p>
                      {/* plus minus */}
                      <div className="flex items-center mt-5">
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            -
                          </span>
                        </button>
                        <span className="mx-7 text-sm">2</span>
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            +
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* icon delete */}
                    <IconDelete className="absolute cursor-pointer top-5 right-5" />
                  </div>
                </li>
                <li className="mt-5">
                  <div className="shadow-1xl p-4 rounded-xl flex items-center relative">
                    {/* img box */}
                    <div className="min-w-110px w-110px h-110px rounded-xl overflow-hidden mr-4">
                      <img
                        className="h-full w-full"
                        src={ImgProduct1}
                        alt="img-card"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <p className="text-base font-bold">Faktor Lattes </p>
                      <p className="font-medium text-gray-500 text-sm mt-1">
                        $21.01
                      </p>
                      <p className="font-medium text-gray-400 text-sm mt-1">
                        Stock : 0
                      </p>
                      {/* plus minus */}
                      <div className="flex items-center mt-5">
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            -
                          </span>
                        </button>
                        <span className="mx-7 text-sm">2</span>
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            +
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* icon delete */}
                    <IconDelete className="absolute cursor-pointer top-5 right-5" />
                  </div>
                </li>
                <li className="mt-5">
                  <div className="shadow-1xl p-4 rounded-xl flex items-center relative">
                    {/* img box */}
                    <div className="min-w-110px w-110px h-110px rounded-xl overflow-hidden mr-4">
                      <img
                        className="h-full w-full"
                        src={ImgProduct1}
                        alt="img-card"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <p className="text-base font-bold">Faktor Lattes </p>
                      <p className="font-medium text-gray-500 text-sm mt-1">
                        $21.01
                      </p>
                      <p className="font-medium text-gray-400 text-sm mt-1">
                        Stock : 0
                      </p>
                      {/* plus minus */}
                      <div className="flex items-center mt-5">
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            -
                          </span>
                        </button>
                        <span className="mx-7 text-sm">2</span>
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            +
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* icon delete */}
                    <IconDelete className="absolute cursor-pointer top-5 right-5" />
                  </div>
                </li>
                <li className="mt-5">
                  <div className="shadow-1xl p-4 rounded-xl flex items-center relative">
                    {/* img box */}
                    <div className="min-w-110px w-110px h-110px rounded-xl overflow-hidden mr-4">
                      <img
                        className="h-full w-full"
                        src={ImgProduct1}
                        alt="img-card"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <p className="text-base font-bold">Faktor Lattes </p>
                      <p className="font-medium text-gray-500 text-sm mt-1">
                        $21.01
                      </p>
                      <p className="font-medium text-gray-400 text-sm mt-1">
                        Stock : 0
                      </p>
                      {/* plus minus */}
                      <div className="flex items-center mt-5">
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            -
                          </span>
                        </button>
                        <span className="mx-7 text-sm">2</span>
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            +
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* icon delete */}
                    <IconDelete className="absolute cursor-pointer top-5 right-5" />
                  </div>
                </li>
                <li className="mt-5">
                  <div className="shadow-1xl p-4 rounded-xl flex items-center relative">
                    {/* img box */}
                    <div className="min-w-110px w-110px h-110px rounded-xl overflow-hidden mr-4">
                      <img
                        className="h-full w-full"
                        src={ImgProduct1}
                        alt="img-card"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <p className="text-base font-bold">Faktor Lattes </p>
                      <p className="font-medium text-gray-500 text-sm mt-1">
                        $21.01
                      </p>
                      <p className="font-medium text-gray-400 text-sm mt-1">
                        Stock : 0
                      </p>
                      {/* plus minus */}
                      <div className="flex items-center mt-5">
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            -
                          </span>
                        </button>
                        <span className="mx-7 text-sm">2</span>
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            +
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* icon delete */}
                    <IconDelete className="absolute cursor-pointer top-5 right-5" />
                  </div>
                </li>
                <li className="mt-5">
                  <div className="shadow-1xl p-4 rounded-xl flex items-center relative">
                    {/* img box */}
                    <div className="min-w-110px w-110px h-110px rounded-xl overflow-hidden mr-4">
                      <img
                        className="h-full w-full"
                        src={ImgProduct1}
                        alt="img-card"
                      />
                    </div>
                    {/* text */}
                    <div>
                      <p className="text-base font-bold">Faktor Lattes </p>
                      <p className="font-medium text-gray-500 text-sm mt-1">
                        $21.01
                      </p>
                      <p className="font-medium text-gray-400 text-sm mt-1">
                        Stock : 0
                      </p>
                      {/* plus minus */}
                      <div className="flex items-center mt-5">
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            -
                          </span>
                        </button>
                        <span className="mx-7 text-sm">2</span>
                        <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                          <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            +
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* icon delete */}
                    <IconDelete className="absolute cursor-pointer top-5 right-5" />
                  </div>
                </li>
              </ul>
            </div>
            {/* end ketika data kosong */}

            {/* btn action */}

            <div className="static 2xl:absolute bottom-0 w-full">
              <div className="flex items-center justify-between bg-gray-culture rounded-xl p-5 text-white">
                <p className="font-bold">Total payment</p>
                <p className="">$0</p>
              </div>
              <button className="flex items-center justify-center mt-4 bg-soft-purple p-5 text-white w-full rounded-xl">
                <p className="font-bold">
                  Checkout <span className="font-normal">(0 Book)</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
