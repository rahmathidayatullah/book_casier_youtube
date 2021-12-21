import React from "react";
import IconCasier from "../assets/icon/casier";
import IconDashbaord from "../assets/icon/dashboard";
import IconCategory from "../assets/icon/category";
import IconBookManagement from "../assets/icon/bookManagement";
import IconListProduct from "../assets/icon/listProduct";
import IconLogout from "../assets/icon/logout";
import IconTransaksi from "../assets/icon/transaksi";
import { NavLink } from "react-router-dom";
export default function Layout({ children }) {
  return (
    <div>
      {/* sidebar */}
      <div
        style={{ width: "102px", minWidth: "102px" }}
        className="fixed top-0 left-0 bottom-0 shadow-1xl"
      >
        {/* icon casier */}
        <div className="flex items-center justify-center mt-9">
          <NavLink to={"/list_product"}>
            <IconCasier />
          </NavLink>
        </div>

        {/* list icon */}
        <div>
          <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <li>
              <div>
                <NavLink to={"/dashboard"}>
                  <IconDashbaord />
                </NavLink>
              </div>
            </li>
            <li className="mt-7">
              <div>
                <NavLink to={"/list_product"}>
                  <IconListProduct />
                </NavLink>
              </div>
            </li>
            <li className="mt-7">
              <div>
                <NavLink to={"/book_management"}>
                  <IconBookManagement />
                </NavLink>
              </div>
            </li>
            <li className="mt-7">
              <div>
                <NavLink to={"/category"}>
                  <IconCategory />
                </NavLink>
              </div>
            </li>
            <li className="mt-7">
              <div>
                <NavLink to={"/transaksi"}>
                  <IconTransaksi />
                </NavLink>
              </div>
            </li>
          </ul>
        </div>

        {/* icon logout */}

        {/* icon casier */}
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2">
          <NavLink to={"/"}>
            <IconLogout />
          </NavLink>
        </div>
      </div>

      {children}
    </div>
  );
}
