import React, { useState } from "react";
import { HiOutlineUserAdd, HiOutlineUserRemove } from "react-icons/hi";

const AddAppointment = ({ onSubmit, formValue, handleInput }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="px-5 py-5 max-w-6xl m-auto grid gap-5 font-Quicksand">
      <div>
        <button
          onClick={() => setToggle(!toggle)}
          className={`bg-blue-400 text-white text-left px-5 py-3 font-medium w-full hover:bg-blue-600 flex items-center gap-2 active:text-black ${
            !toggle ? "rounded-xl" : "rounded-t-xl"
          }`}
        >
          {toggle ? <HiOutlineUserRemove /> : <HiOutlineUserAdd />} Add
          Appoinment
        </button>
      </div>
      {toggle && (
        <form method="post" onSubmit={onSubmit}>
          <div className="grid border rounded">
            <div className="grid gap-1 px-3 py-2 md:flex md:items-center md:gap-4">
              <label
                htmlFor="ownerName"
                className="min-w-max text-center font-sans"
              >
                Owner Name:
              </label>
              <input
                type="text"
                name="ownerName"
                value={formValue.ownerName}
                onChange={handleInput}
                className="border-b-2 focus:border-none focus:outline-none focus:ring-2 w-full px-2 py-1 font-medium text-sm"
              ></input>
            </div>
            <div className="grid gap-1 px-3 py-2 md:flex md:items-center md:gap-4">
              <label
                htmlFor="petName"
                className="min-w-max text-center font-sans"
              >
                Pet Name:
              </label>
              <input
                type="text"
                name="petName"
                value={formValue.petName}
                onChange={handleInput}
                className="border-b-2 focus:border-none focus:outline-none focus:ring-2 w-full px-2 py-1 font-medium text-sm"
              ></input>
            </div>
            <div className="grid gap-1 px-3 py-2 md:flex md:items-center md:gap-4">
              <label
                htmlFor="aptDate"
                className="min-w-max text-center font-sans"
              >
                Apt Date:
              </label>
              <input
                type="date"
                name="aptDate"
                value={formValue.aptDate}
                onChange={handleInput}
                className="border-b-2 focus:border-none focus:outline-none focus:ring-2 w-full px-2 py-1 font-medium text-sm"
              ></input>
            </div>
            <div className="grid gap-1 px-3 py-2 md:flex md:items-center md:gap-4">
              <label
                htmlFor="aptTime"
                className="min-w-max text-center font-sans"
              >
                Apt Time:
              </label>
              <input
                type="time"
                name="aptTime"
                value={formValue.aptTime}
                onChange={handleInput}
                className="border-b-2 focus:border-none focus:outline-none focus:ring-2 w-full px-2 py-1 font-medium text-sm"
              ></input>
            </div>
            <div className="grid gap-1px-3 py-2 md:flex md:items-center md:gap-4">
              <label
                htmlFor="aptNotes"
                className="min-w-max text-center font-sans"
              >
                Appointment Note:
              </label>
              <textarea
                type="note"
                name="aptNotes"
                value={formValue.aptNotes}
                onChange={handleInput}
                rows={2}
                className="border-b-2 focus:border-none focus:outline-none focus:ring-2 w-full px-2 py-1 font-medium text-sm"
                placeholder="detailed comments about condition"
              ></textarea>
            </div>
            <div className="grid justify-end pb-4 px-3">
              <button
                type="submit"
                className="bg-blue-500 py-2 px-6 text-sm font-medium text-white rounded-md cursor-pointer hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddAppointment;
