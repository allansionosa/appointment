import React from "react";
import { HiArchive } from "react-icons/hi";

const Header = () => {
  return (
    <div className="px-5 py-5 max-w-6xl m-auto grid gap-5 font-Quicksand">
      <div className="flex gap-3 justify-center items-center text-3xl font-bold mb-5 text-blue-500">
        <div>
          <HiArchive size={50} color="red" />
        </div>
        <h1>Your Appointment</h1>
      </div>
    </div>
  );
};

export default Header;
