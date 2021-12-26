import React from "react";
import IconSearch from "../../assets/icon/search";
import IconDelete from "../../assets/icon/delete";
import IconEdit from "../../assets/icon/edit";
import IconTransaksi from "../../assets/icon/transaksidetail";
import ImgCategory from "../../assets/img/empty_Category.png";
import ImgEmptyListDetailTS from "../../assets/img/empty_list_detail_transaksi.png";
export default function Transaksi() {
  return (
    <div>
      <div className="ml-32 grid grid-cols-5">
        <div className="col-span-5 2xl:col-span-3">
          <div className="h-full 2xl:h-screen pt-9 overflow-scroll">
            <h2 className="text-xl">Transaction </h2>
            {/* ketika data category kosong */}
            {/* <div>
              <div className="flex flex-col items-center justify-center h-full 2xl:h-80vh">
                <img src={ImgCategory} alt="category-empty" />
                <p className="font-medium text-xl mt-2 text-violet-purple">
                  Transaksi is Empty!
                </p>
              </div>
            </div> */}

            {/* ketika category terisi */}
            <div>
              <div className="relative mt-12">
                <input
                  type="text"
                  name="search"
                  placeholder="Search.."
                  className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
                />
                <IconSearch className="absolute right-4 top-1/2 transform -translate-y-1/2" />
              </div>
              <ul className="mt-8">
                <li>
                  <div className="shadow-1xl flex items-center justify-between py-4 px-6 rounded-lg">
                    <p className="font-base">id : 3489563</p>

                    <div className="h-8 w-1 bg-gray-culture"></div>
                    <p className="font-base">Book 01, Book 02, Book 03 ...</p>

                    <div className="h-8 w-1 bg-gray-culture"></div>
                    <p className="font-base">16 November 2021, 00:18 AM</p>
                    <IconTransaksi />
                  </div>
                </li>
              </ul>
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
              className={`flex flex-col border h-full 2xl:h-69vh overflow-scroll mt-10`}
            >
              {/* <div
                className={`flex items-center justify-center border h-69vh overflow-scroll w-full mt-10`}
              > */}
              {/* img empty cart */}
              {/* <img src={ImgEmptyListDetailTS} alt="img-empty-cart" /> */}

              <p className="text-base">Detail transaction</p>
              <div className="shadow-1xl p-6 mt-4">
                <div className="flex items-center justify-between border-b-2 border-x-gray-100 pb-4">
                  <p className="text-base">ID : 044565656KK</p>
                  <p className="text-base">16 November 2021</p>
                </div>
                <p className="text-base font-bold text-violet-purple mt-4">
                  $35.00 Payment
                </p>
                <ul className="mt-20">
                  <li>
                    <div className="flex items-end justify-between pb-3 border-b-2 border-x-gray-100">
                      <div>
                        <p className="font-bold">Book 01</p>
                        <p className="text-gray-culture">$2.70 x 2</p>
                      </div>
                      <p className="text-gray-culture">$5.40</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-end justify-between pb-3 border-b-2 border-x-gray-100">
                      <div>
                        <p className="font-bold">Book 01</p>
                        <p className="text-gray-culture">$2.70 x 2</p>
                      </div>
                      <p className="text-gray-culture">$5.40</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-end justify-between pb-3 border-b-2 border-x-gray-100">
                      <div>
                        <p className="font-bold">Book 01</p>
                        <p className="text-gray-culture">$2.70 x 2</p>
                      </div>
                      <p className="text-gray-culture">$5.40</p>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center justify-between mt-8">
                  <p className="text-base font-bold text-red-dragon">Total</p>
                  <p className="text-base font-bold text-red-dragon">$35.00</p>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* end ketika data kosong */}

            {/* btn action */}

            <div className="static 2xl:absolute bottom-0 w-full">
              <button className="flex items-center justify-center mt-4 bg-soft-purple p-5 text-white w-full rounded-xl">
                <p className="font-bold">Submit</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
