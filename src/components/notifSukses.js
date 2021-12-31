import React from "react";
import IconSukses from "../assets/icon/success";
import IconClose from "../assets/icon/close";
export default function NotifSukses({ show, name, text }) {
  return (
    <div
      className={`rounded-xl bg-white shadow-1xl p-8 fixed z-30 bottom-10 left-8 w-1/2 transform duration-200 transition-all ${
        show ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex items-center">
        <p className="font-bold text-base mr-4">Successfully</p>
        <IconSukses />
      </div>
      <p className="font-normal text-sm">
        <span className="font-semibold text-green-mantis">{name}</span> has been
        successfully added into the {text} list
      </p>
      <IconClose className="absolute top-5 right-5 cursor-pointer" />
    </div>
  );
}
