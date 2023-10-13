import { useEffect, useState } from "react";

import { BsFillArchiveFill } from "react-icons/bs";
import Search from "./Search";

const AppointmentList = ({ data }) => {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const [isClick, setisClick] = useState("ownerName");
  const [sortBy, setSortBy] = useState("asc");
  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const asc = () => {
    let info = [...data];
    if (info.length > 0) {
      setSortedData(info.sort((a, b) => a.id - b.id));
    }
    setSortBy("asc");
  };

  const Owner = () => {
    let info = [...data];
    console.log(info);
    if (info.length > 0) {
      setSortedData(
        info.sort((a, b) => a.ownerName.localeCompare(b.ownerName))
      );
    }
    setisClick("ownerName");
  };

  const petName = () => {
    let info = [...data];
    if (info.length > 0) {
      setSortedData(info.sort((a, b) => a.petName.localeCompare(b.petName)));
    }
    setisClick("petName");
  };
  const desc = () => {
    let info = [...data];
    if (info.length > 0) {
      setSortedData(info.sort((a, b) => b.id - a.id));
    }
    setSortBy("desc");
  };
  const date = () => {
    let info = [...data];
    if (info.length > 0) {
      setSortedData(info.sort((a, b) => a.aptDate.localeCompare(b.aptDate)));
    }
    setisClick("date");
  };

  const deleteValue = (value) => {
    setSortedData((oldValues) => {
      return oldValues.filter((sortedData) => sortedData !== value);
    });
  };

  return (
    <div>
      <Search
        onChange={(e) => setSearch(e.target.value)}
        data={data}
        Owner={Owner}
        isClick={isClick}
        petName={petName}
        asc={asc}
        sortBy={sortBy}
        desc={desc}
        date={date}
      />
      <ul className="mt-10 pl-10 pr-10">
        {sortedData
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.ownerName.toLowerCase().includes(search) ||
                  item.petName.toLowerCase().includes(search) ||
                  item.aptDate.toLowerCase().includes(search) ||
                  item.aptNotes.toLowerCase().includes(search);
          })
          .map((item) => (
            <div key={item.id}>
              <li className="border-b-2">
                <div className="flex items-center justify-between ">
                  <div className="flex gap-1">
                    <button
                      onClick={() => deleteValue(item)}
                      className="bg-red-500 px-2 py-1 rounded text-sm text-slate-50 hover:bg-red-600 hover:text-white"
                    >
                      <BsFillArchiveFill size={20} />
                    </button>

                    <div className="text-xl font-semibold flex gap-1">
                      {item.petName}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    {item.aptDate}
                  </div>
                </div>
                <div className=" justify-center text-center py-4">
                  <p>
                    <span className="text-blue-500 font-semibold">Owner:</span>
                    {item.ownerName}
                  </p>

                  <div className=" font-sans">{item.aptNotes}</div>
                </div>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
