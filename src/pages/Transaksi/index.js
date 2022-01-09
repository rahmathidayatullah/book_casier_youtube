import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconSearch from "../../assets/icon/search";
import IconDelete from "../../assets/icon/delete";
import IconEdit from "../../assets/icon/edit";
import IconTransaksi from "../../assets/icon/transaksidetail";
import ImgCategory from "../../assets/img/empty_Category.png";
import ImgEmptyListDetailTS from "../../assets/img/empty_list_detail_transaksi.png";
import {
  fetchAllTransaction,
  getSingleTransaction,
  searchByKeyword,
} from "../../features/transaction/actions";
import moment from "moment";
import { CLEAR_STATE } from "../../features/transaction/constants";
export default function Transaksi() {
  const dispatch = useDispatch();
  const transaction = useSelector((state) => state.transaction);
  console.log("transaction", transaction);
  const [keyword, setKeyword] = useState("");

  const sortirByKeyword = (value) => {
    setKeyword(value);
    dispatch(searchByKeyword(value));
  };

  const handleGetSingle = (id) => {
    console.log("id transaction", id);
    dispatch(getSingleTransaction(id));
  };

  useEffect(() => {
    dispatch(fetchAllTransaction());

    return dispatch({
      type: CLEAR_STATE,
    });
  }, [dispatch, transaction.keyword]);
  return (
    <div>
      <div className="ml-32 grid grid-cols-5">
        <div className="col-span-5 2xl:col-span-3">
          <div className="h-full 2xl:h-screen pt-9 overflow-scroll px-5">
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
                  value={keyword}
                  onChange={(e) => sortirByKeyword(e.target.value)}
                />
                <IconSearch className="absolute right-4 top-1/2 transform -translate-y-1/2" />
              </div>
              <ul className="mt-8">
                {transaction.status === "idle"
                  ? "idle"
                  : transaction.status === "process"
                  ? "process"
                  : transaction.status === "success" && !transaction.data.length
                  ? "data kosong"
                  : transaction.status === "success"
                  ? transaction.data.map((items, index) => {
                      return (
                        <li key={index}>
                          <div className="shadow-1xl flex items-center justify-between py-4 px-6 rounded-lg">
                            <p className="font-base">id :{items.invoice} </p>

                            <div className="h-8 w-1 bg-gray-culture"></div>
                            <p
                              className="font-base text-ellipsis overflow-hidden w-56 whitespace-nowrap"
                              style={{ maxWidth: "227px" }}
                            >
                              {items.detailTransaction.map((itm) => {
                                return `${itm.titleProduct},`;
                              })}
                              {/* Book 01, Book 02, Book 03 ... */}
                            </p>

                            <div className="h-8 w-1 bg-gray-culture"></div>
                            <p className="font-base">
                              {moment(items.date).format("DD MMMM YY hh:ss a")}
                              {/* 16 November 2021, 00:18 AM */}
                            </p>
                            <IconTransaksi
                              className="cursor-pointer"
                              onClick={() => handleGetSingle(items.id)}
                            />
                          </div>
                        </li>
                      );
                    })
                  : "error fetching data"}
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
              className={`flex flex-col h-full 2xl:h-69vh overflow-scroll mt-10 px-5`}
            >
              <p className="text-base">Detail transaction</p>
              {!transaction.dataSingle.length ? (
                <div
                  className={`flex items-center justify-center h-69vh overflow-scroll w-full mt-10`}
                >
                  {/* img empty cart */}
                  <img src={ImgEmptyListDetailTS} alt="img-empty-cart" />
                </div>
              ) : (
                <div className="shadow-1xl p-6 mt-4">
                  <div className="flex items-center justify-between border-b-2 border-x-gray-100 pb-4">
                    <p className="text-base">
                      ID : {transaction.dataSingle[0]?.invoice}
                    </p>
                    <p className="text-base">
                      {moment(transaction.dataSingle[0]?.date).format(
                        "DD MMMM YYYY"
                      )}
                    </p>
                  </div>
                  <p className="text-base font-bold text-violet-purple mt-4">
                    ${" "}
                    {transaction?.dataSingle[0]?.detailTransaction?.reduce(
                      (sum, items) => {
                        return sum + items.priceProduct * items.quantity;
                      },
                      0
                    )}
                  </p>
                  <ul className="mt-20">
                    {transaction.dataSingle[0].detailTransaction.map(
                      (itm, idx) => {
                        return (
                          <li key={idx}>
                            <div className="flex items-end justify-between pb-3 border-b-2 border-x-gray-100">
                              <div>
                                <p className="font-bold">{itm.titleProduct}</p>
                                <p className="text-gray-culture">
                                  ${itm.priceProduct} x {itm.quantity}
                                </p>
                              </div>
                              <p className="text-gray-culture">
                                ${itm.priceProduct * itm.quantity}
                              </p>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                  <div className="flex items-center justify-between mt-8">
                    <p className="text-base font-bold text-red-dragon">Total</p>
                    <p className="text-base font-bold text-red-dragon">
                      $
                      {transaction?.dataSingle[0]?.detailTransaction?.reduce(
                        (sum, items) => {
                          return sum + items.priceProduct * items.quantity;
                        },
                        0
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* end ketika data kosong */}

            {/* btn action */}

            {/* <div className="static 2xl:absolute bottom-0 w-full">
              <button className="flex items-center justify-center mt-4 bg-soft-purple p-5 text-white w-full rounded-xl">
                <p className="font-bold">Submit</p>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
