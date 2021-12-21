import React from "react";
import IconSearch from "../../assets/icon/search";
export default function ListProduct() {
  return (
    <div>
      <div className="ml-32 grid grid-cols-5">
        <div className="col-span-3">
          <div className="h-screen pt-9">
            {/* category */}
            <div>
              <ul className="flex items-center">
                <li className="cursor-pointer">
                  <div className="text-base pb-3">All</div>
                  <div className="w-full bg-violet-purple h-2 rounded-xl"></div>
                </li>
                <li className="ml-7 group cursor-pointer">
                  <div className="text-base pb-3 group-hover:text-black duration-300 text-gray-400">
                    Business & Economict
                  </div>
                  <div className="w-full group-hover:bg-violet-purple duration-300 bg-transparent h-2 rounded-xl"></div>
                </li>
                <li className="ml-7 group cursor-pointer">
                  <div className="text-base pb-3 group-hover:text-black duration-300 text-gray-400">
                    Art & Design
                  </div>
                  <div className="w-full group-hover:bg-violet-purple duration-300 bg-transparent h-2 rounded-xl"></div>
                </li>
                <li className="ml-7 group cursor-pointer">
                  <div className="text-base pb-3 group-hover:text-black duration-300 text-gray-400">
                    Financial
                  </div>
                  <div className="w-full group-hover:bg-violet-purple duration-300 bg-transparent h-2 rounded-xl"></div>
                </li>
                <li className="ml-7 group cursor-pointer">
                  <div className="text-base pb-3 group-hover:text-black duration-300 text-gray-400">
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
          </div>
        </div>
        <div className="col-span-2">
          <div>right</div>
        </div>
      </div>
    </div>
  );
}
