import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconSearch from "../../assets/icon/search";
import ImgProduct1 from "../../assets/img/listproduct/img1.png";
import ImgEmptyCart from "../../assets/img/empty_cart.png";
import IconDelete from "../../assets/icon/delete";
import {
  fetchAllProduct,
  searchByKeyword,
} from "../../features/manageProduct/actions";
import ImgCategory from "../../assets/img/empty_Category.png";
import { config } from "../../config";
import moment from "moment";
import { fetchCategory } from "../../features/category/actions";
import { addProductToCart } from "../../features/listProductCheckout/actions";
export default function ListProduct() {
  const manageProduct = useSelector((state) => state.manageProduct);
  const categories = useSelector((state) => state.categories);
  const listProductCheckout = useSelector((state) => state.listProductCheckout);
  console.log("page listProductCheckout", listProductCheckout);
  console.log("manageProduct page list product", manageProduct);
  console.log("manageProduct page list categories", categories);
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const searchByKey = (value) => {
    setKeyword(value);
    dispatch(searchByKeyword(value));
  };

  const handleAddProductToCart = (data) => {
    console.log("function pages data", data);

    dispatch(addProductToCart({ ...data, quantity: 1 }));
  };

  useEffect(() => {
    dispatch(fetchAllProduct());
    dispatch(fetchCategory());
  }, [dispatch, manageProduct.keyword]);

  return (
    <div>
      <div className="ml-32 grid grid-cols-5">
        <div className="col-span-5 2xl:col-span-3">
          <div className="h-full 2xl:h-screen pt-9 overflow-scroll px-5">
            {/* category */}
            <div>
              <ul className="flex items-center overflow-scroll">
                <li className="cursor-pointer">
                  <div className="text-base pb-3 whitespace-nowrap">All</div>
                  <div className="w-full bg-violet-purple h-2 rounded-xl"></div>
                </li>
                {categories.status === "idle" ? (
                  "idle"
                ) : categories.status === "process" ? (
                  <span className="pl-6">process</span>
                ) : categories.status === "success" &&
                  !categories.data.length ? (
                  "category tidak ada"
                ) : categories.status === "success" ? (
                  categories.data.map((items, index) => {
                    return (
                      <li className="ml-7 group cursor-pointer">
                        <div className="text-base pb-3 group-hover:text-black duration-300 text-gray-400 whitespace-nowrap">
                          {items.name}
                        </div>
                        <div className="w-full group-hover:bg-violet-purple duration-300 bg-transparent h-2 rounded-xl"></div>
                      </li>
                    );
                  })
                ) : (
                  "error fetching category"
                )}
              </ul>
            </div>
            {/* search */}
            <div className="relative mt-12">
              <input
                type="text"
                name="search"
                placeholder="Search.."
                value={keyword}
                onChange={(e) => searchByKey(e.target.value)}
                className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
              />
              <IconSearch className="absolute right-4 top-1/2 transform -translate-y-1/2" />
            </div>
            {/* list card */}
            <div className="grid grid-cols-6 mt-8 gap-5">
              {/* item card */}
              {manageProduct.status === "idle" ? (
                "idle"
              ) : manageProduct.status === "process" ? (
                "process"
              ) : manageProduct.status === "success" &&
                !manageProduct.data
                  .length /* ketika data product buku kosong */ ? (
                <div>
                  <div className="flex flex-col items-center justify-center h-full 2xl:h-80vh">
                    <img src={ImgCategory} alt="category-empty" />
                    <p className="font-medium text-xl mt-2 text-violet-purple">
                      Book is Empty!
                    </p>
                  </div>
                </div>
              ) : manageProduct.status === "success" ? (
                manageProduct.data.map((items, index) => {
                  return (
                    <div
                      key={index}
                      className="col-span-6  sm:col-span-3 lg:col-span-2 relative"
                    >
                      <div
                        className="card"
                        onClick={() => handleAddProductToCart(items)}
                      >
                        <span>Add to card</span>
                      </div>
                      <div className="shadow-1xl rounded-lg px-6 py-3 relative">
                        <div className="flex items-center justify-center border-b-2 border-gray-300 p-10">
                          <img
                            src={config.api_image + items.cover}
                            alt="img-1"
                          />
                        </div>
                        <p className="mt-3 font-medium text-gray-400">
                          Stock : {items.stock}
                        </p>
                        <p className="font-bold text-base">{items.title}</p>
                        <div className="flex items-center mt-1">
                          <p className="font-medium text-xs text-green-mantis mr-2">
                            Published at
                          </p>
                          <p className="bg-green-mantis px-2 py-1 rounded-lg text-white font-medium text-xs">
                            {moment(items.published).format("DD/MM/YYYY")}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-7">
                          <p className="font-medium text-gray-400">
                            Author : {items.auhtor}
                          </p>
                          <p className="font-medium text-gray-500">
                            ${items.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                "error"
              )}
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
              className={`flex border h-full 2xl:h-69vh overflow-scroll mt-10 px-3`}
            >
              {/* <div
              className={`flex items-center justify-center border h-69vh overflow-scroll mt-10`}
            > */}
              {/* img empty cart */}

              <ul className="w-full">
                {!listProductCheckout.data.length ? (
                  <div className="flex items-center justify-center pt-20">
                    <img src={ImgEmptyCart} alt="img-empty-cart" />
                  </div>
                ) : (
                  listProductCheckout.data.map((items, index) => {
                    return (
                      <li key={index} className="mt-5">
                        <div className="shadow-1xl p-4 rounded-xl flex items-center relative">
                          {/* img box */}
                          <div className="min-w-110px w-110px h-110px rounded-xl overflow-hidden mr-4">
                            <img
                              className="h-full w-full"
                              src={config.api_image + items.cover}
                              alt="img-card"
                            />
                          </div>
                          {/* text */}
                          <div>
                            <p className="text-base font-bold">{items.title}</p>
                            <p className="font-medium text-gray-500 text-sm mt-1">
                              ${items.price}
                            </p>
                            <p className="font-medium text-gray-400 text-sm mt-1">
                              Stock : {items.stock}
                            </p>
                            {/* plus minus */}
                            <div className="flex items-center mt-5">
                              <button className="bg-violet-purple text-white w-5 h-5 rounded-full relative">
                                <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  -
                                </span>
                              </button>
                              <span className="mx-7 text-sm">
                                {items.quantity}
                              </span>
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
                    );
                  })
                )}
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
