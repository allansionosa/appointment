import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

const Search = ({
  onChange,
  data,
  Owner,
  isClick,
  petName,
  asc,
  sortBy,
  desc,
  date,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex relative m-auto max-w-2xl w-full h-full bg-slate-50 rounded ">
      <div className="flex items-center w-full focus:border-b-4 focus:border-blue-500 border-b-4 border-blue-300 hover:border-b-4 hover:border-blue-500">
        <div className="px-2 text-blue-500 text-xl">
          <CiSearch size={30} color="blue" />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          onChange={onChange}
          placeholder="Search"
          className="bg-transparent w-full px-2 py-1 outline-0 font-medium"
        ></input>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="min-w-max font-medium text-sm bg-blue-500 px-3 text-white hover:bg-blue-600 h-full flex items-center gap-1 active:text-black"
        >
          Sort by
          {!isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
        {isOpen && (
          <div className="absolute top-10 bg-slate-50 shadow-lg right-0 w-60">
            <div className="py-2 text-slate-500">
              <div
                onChange={onChange}
                onClick={Owner}
                className="px-5 py-2 text-sm cursor-pointer hover:bg-slate-200 hover:text-slate-700 flex items-center justify-between "
              >
                Owner Name
                {isClick === "ownerName" && <BsCheck size={30} color="gray" />}
              </div>
              <div
                onClick={petName}
                className="px-5 py-2 text-sm cursor-pointer hover:bg-slate-200 hover:text-slate-700 flex items-center justify-between"
              >
                Pet name
                {/* {isClick && <BsCheck size={30} color="gray" />} */}
                {isClick === "petName" && <BsCheck size={30} color="gray" />}
              </div>
              <div
                onClick={date}
                className="px-5 py-2 text-sm cursor-pointer hover:bg-slate-200 hover:text-slate-700 flex items-center justify-between border-b-4"
              >
                Date
                {isClick === "date" && <BsCheck size={30} color="gray" />}
              </div>
              <div
                onClick={asc}
                className="px-5 py-2 text-sm cursor-pointer hover:bg-slate-200 hover:text-slate-700 flex items-center justify-between"
              >
                Asc
                {sortBy === "asc" && <BsCheck size={30} color="gray" />}
              </div>
              <div
                onClick={desc}
                className="px-5 py-2 text-sm cursor-pointer hover:bg-slate-200 hover:text-slate-700 flex items-center justify-between"
              >
                Desc
                {/* <BsCheck size={30} color="gray" /> */}
                {sortBy === "desc" && <BsCheck size={30} color="gray" />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
