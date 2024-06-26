import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconSearch from "../../assets/icon/search";
import ImgEmptyCart from "../../assets/img/empty_cart.png";
import IconDelete from "../../assets/icon/delete";
import {
  fetchAllProduct,
  searchByCategory,
  searchByKeyword,
} from "../../features/manageProduct/actions";
import ImgCategory from "../../assets/img/empty_Category.png";
import { config } from "../../config";
import moment from "moment";
import {
  activeSelectCategory,
  fetchCategory,
} from "../../features/category/actions";
import {
  addProductToCart,
  checkoutCart,
  clearAllItemsCart,
  minItemCart,
  plusItemCart,
  removeItemCart,
} from "../../features/listProductCheckout/actions";
import NotifSukses from "../../components/notifSukses";
import { CLEAR_STATUS } from "../../features/listProductCheckout/constants";
export default function ListProduct() {
  const [notif, setNotif] = useState({
    sukses: false,
    delete: false,
  });
  const manageProduct = useSelector((state) => state.manageProduct);
  const categories = useSelector((state) => state.categories);
  const listProductCheckout = useSelector((state) => state.listProductCheckout);
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const searchByKey = (value) => {
    setKeyword(value);
    dispatch(searchByKeyword(value));
  };

  const handleAddProductToCart = (data) => {
    dispatch(addProductToCart({ ...data, quantity: 1 }));
  };

  const handleSortirByCategory = (id) => {
    dispatch(searchByCategory(id));
    dispatch(activeSelectCategory(id));
  };

  useEffect(() => {
    dispatch(fetchAllProduct());
    dispatch(fetchCategory());
  }, [dispatch, manageProduct.keyword]);

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch, manageProduct.category]);

  useEffect(() => {
    if (listProductCheckout.statusCheckout === "success") {
      dispatch(fetchAllProduct());
      setNotif({ ...notif, sukses: true });
      setTimeout(() => {
        setNotif({ ...notif, sukses: false });
        localStorage.setItem("cart", JSON.stringify([]));
        dispatch({
          type: CLEAR_STATUS,
        });
      }, 5000);
    }
  }, [listProductCheckout.statusCheckout]);

  return (
    <div>
      <NotifSukses name="Checkout" text="transaction" show={notif.sukses} />
      <div className="ml-32 grid grid-cols-5">
        <div className="col-span-5 xl:col-span-3">
          <div className="h-full xl:h-screen pt-9 overflow-scroll px-5">
            {/* category */}
            <div>
              <ul className="flex items-center overflow-scroll">
                {categories?.dataForListCategory?.map((items, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleSortirByCategory(items.id)}
                      className="ml-7 group cursor-pointer"
                    >
                      <div
                        className={`text-base pb-3 group-hover:text-black duration-300  ${
                          items.isSelect ? "text-black" : "text-gray-400"
                        } whitespace-nowrap`}
                      >
                        {items.name}
                      </div>
                      <div
                        className={`w-full group-hover:bg-violet-purple duration-300 ${
                          items.isSelect ? "bg-violet-purple" : "bg-transparent"
                        } h-2 rounded-xl`}
                      ></div>
                    </li>
                  );
                })}
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
            <div className="grid grid-cols-6 mt-8 gap-5 pb-10">
              {/* item card */}
              {manageProduct.status === "idle" ? (
                "idle"
              ) : manageProduct.status === "process" ? (
                "process"
              ) : manageProduct.status === "success" &&
                !manageProduct.data
                  .length /* ketika data product buku kosong */ ? (
                <div>
                  <div className="flex flex-col items-center justify-center h-full xl:h-80vh">
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
        <div className="col-span-5 xl:col-span-2">
          <div className="h-full xl:h-screen pt-9 xl:overflow-scroll mx-7 relative">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">
                Codeathome <span className="font-normal">BookStore</span>
              </h2>
              <span
                onClick={() => dispatch(clearAllItemsCart())}
                className="font-medium cursor-pointer"
              >
                Clear all
              </span>
            </div>
            {/* start ketika data kosong */}
            <div className={`flex h-full xl:h-69vh overflow-scroll mt-10 px-3`}>
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
                              <button
                                className="bg-violet-purple text-white w-5 h-5 rounded-full relative"
                                onClick={() => dispatch(minItemCart(items.id))}
                              >
                                <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  -
                                </span>
                              </button>
                              <span className="mx-7 text-sm">
                                {items.quantity}
                              </span>
                              <button
                                className="bg-violet-purple text-white w-5 h-5 rounded-full relative"
                                onClick={() => dispatch(plusItemCart(items.id))}
                              >
                                <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  +
                                </span>
                              </button>
                            </div>
                          </div>

                          {/* icon delete */}
                          <IconDelete
                            onClick={() => dispatch(removeItemCart(items.id))}
                            className="absolute cursor-pointer top-5 right-5"
                          />
                        </div>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
            {/* end ketika data kosong */}

            {/* btn action */}

            <div className="static xl:absolute bottom-0 w-full">
              <div className="flex items-center justify-between bg-gray-culture rounded-xl p-5 text-white">
                <p className="font-bold">Total payment</p>
                <p className="">
                  ${" "}
                  {listProductCheckout?.data?.reduce((sum, items) => {
                    return sum + items.price * items.quantity;
                  }, 0)}
                </p>
              </div>
              <button
                disabled={listProductCheckout.data.length ? false : true}
                className={`flex items-center justify-center mt-4 ${
                  listProductCheckout.data.length
                    ? "bg-violet-purple"
                    : "bg-soft-purple cursor-not-allowed"
                } p-5 text-white w-full rounded-xl`}
                onClick={() => dispatch(checkoutCart())}
              >
                <p className="font-bold">
                  Checkout{" "}
                  <span className="font-normal">
                    ({listProductCheckout?.data?.length} Book)
                  </span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
