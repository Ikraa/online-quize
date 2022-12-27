import React from "react";
import { Link } from "react-router-dom";

const QuizeCard = ({ quizeData, i }) => {
  const { logo, name, total, id } = quizeData;
  return (
    <div className="  bg-white  border-gray-200 rounded-lg shadow-md ">
      <Link>
        <img className="rounded-t-lg h-[40vh] w-100 " src={logo} alt="" />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
          {name}
        </h5>

        <Link
          to={`/home/quize/${id}`}
          className="text-white rounded bg-blue-600 w-fit px-[8px] py-[4px] text-[16px] flex items-center  font-semibold"
        >
          Read More<i class="fa-solid ml-2 fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default QuizeCard;
