import React from "react";
import IconSearch from "../../assets/icon/search";
import IconDelete from "../../assets/icon/delete";
import IconEdit from "../../assets/icon/edit";
import ImgCategory from "../../assets/img/empty_Category.png";
export default function Category() {
  return (
    <div>
      <div className="ml-32 grid grid-cols-5">
        <div className="col-span-5 2xl:col-span-3">
          <div className="h-full 2xl:h-screen pt-9 overflow-scroll">
            <h2 className="text-xl">Category Managment</h2>
            {/* ketika data category kosong */}
            {/* <div>
              
              <div className="flex flex-col items-center justify-center h-full 2xl:h-80vh">
                <img src={ImgCategory} alt="category-empty" />
                <p className="font-medium text-xl mt-2 text-violet-purple">
                  Category is Empty!
                </p>
              </div>
            </div> */}

            {/* ketika category terisi */}
            <div>
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
              {/* list category */}
              <ul className="mt-8">
                <li>
                  <div className="shadow-1xl flex items-center justify-between py-4 px-6 rounded-lg">
                    <p className="font-base">Novel</p>
                    <div className="flex items-center">
                      <IconDelete
                        className="cursor-pointer mr-7"
                        stroke="#FF0000"
                      />
                      <IconEdit className="cursor-pointer" />

                      {/* icon */}
                    </div>
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
              className={`flex border h-full 2xl:h-69vh overflow-scroll mt-10`}
            >
              {/* <div
              className={`flex items-center justify-center border h-69vh overflow-scroll mt-10`}
            > */}
              {/* img empty cart */}
              {/* <img src={ImgEmptyCart} alt="img-empty-cart" /> */}
              <ul className="w-full">
                <li className="mt-5">
                  <input
                    type="text"
                    placeholder="Category name"
                    className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
                  />
                </li>
              </ul>
            </div>
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
