import React from "react";
import IconWarning from "../assets/icon/warning";
import IconClose from "../assets/icon/close";
export default function NotifDelete({ show, name, onClick, closeClick }) {
  return (
    <div
      className={`rounded-xl bg-white shadow-1xl p-8 fixed z-10 bottom-10 left-8 w-1/2 transform duration-200 transition-all ${
        show ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex items-center">
        <p className="font-bold text-base mr-4">Are you sure?</p>
        <IconWarning />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-normal text-sm">
          Delete the category{" "}
          <span className="font-semibold text-green-mantis">{name}</span> this
          action cannot be undone
        </p>
        <button
          onClick={onClick}
          className="bg-red-dragon text-white rounded-md px-4 py-2"
        >
          Delete
        </button>
      </div>
      <IconClose
        onClick={closeClick}
        className="absolute top-5 right-5 cursor-pointer"
      />
    </div>
  );
}
