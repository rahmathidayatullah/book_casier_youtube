import React from "react";
import IconCasier from "../assets/icon/casier";
import IconDashbaord from "../assets/icon/dashboard";
import IconCategory from "../assets/icon/category";
import IconBookManagement from "../assets/icon/bookManagement";
import IconListProduct from "../assets/icon/listProduct";
import IconLogout from "../assets/icon/logout";
import IconTransaksi from "../assets/icon/transaksi";
import { Navigate, NavLink } from "react-router-dom";
export default function Layout({ children }) {
  let auth = localStorage.getItem("auth");

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };
  return auth ? (
    <div>
      {/* sidebar */}
      <div
        style={{ width: "102px", minWidth: "102px" }}
        className="fixed top-0 left-0 bottom-0 shadow-1xl"
      >
        {/* icon casier */}
        <div className="flex items-center justify-center mt-9">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-violet-purple" : "text-gray-400"
            }
            to={"/list_product"}
          >
            <IconCasier />
          </NavLink>
        </div>

        {/* list icon */}
        <div>
          <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <li>
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-violet-purple" : "text-gray-400"
                  }
                  to={"/dashboard"}
                >
                  <IconDashbaord />
                </NavLink>
              </div>
            </li>
            <li className="mt-7">
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-violet-purple" : "text-gray-400"
                  }
                  to={"/list_product"}
                >
                  <IconListProduct />
                </NavLink>
              </div>
            </li>
            <li className="mt-7">
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-violet-purple" : "text-gray-400"
                  }
                  to={"/book_management"}
                >
                  <IconBookManagement />
                </NavLink>
              </div>
            </li>
            <li className="mt-7">
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-violet-purple" : "text-gray-400"
                  }
                  to={"/category"}
                >
                  <IconCategory />
                </NavLink>
              </div>
            </li>
            <li className="mt-7">
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-violet-purple" : "text-gray-400"
                  }
                  to={"/transaksi"}
                >
                  <IconTransaksi />
                </NavLink>
              </div>
            </li>
          </ul>
        </div>

        {/* icon logout */}

        {/* icon casier */}
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2">
          <button onClick={handleLogout}>
            <IconLogout />
          </button>
        </div>
      </div>
      {children}
    </div>
  ) : (
    <Navigate to="/" />
  );
}
