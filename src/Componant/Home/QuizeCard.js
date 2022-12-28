import React from "react";
import { Link } from "react-router-dom";

const QuizeCard = ({ quizeData, i }) => {
  const { logo, name, total, id } = quizeData;
  return (
    <div className="  bg-white  border-gray 200 rounded-lg shadow-md mb-2">
      <Link>
        <img
          className="rounded-t-lg h-[40vh] w-[100%] object-fill"
          src={
            i === 3
              ? "https://www.freecodecamp.org/news/content/images/2022/07/git-github.png"
              : logo
          }
          alt=""
        />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
          {name}
        </h5>
        <p className=" text-black pb-2">Do you want to start the quiz?</p>
        <Link
          to={`/home/quize/${id}`}
          className="text-white rounded bg-blue-600 w-fit px-[8px] py-[4px] text-[16px] flex items-center  font-semibold"
        >
          Start Quiz<i class="fa-solid ml-2 fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default QuizeCard;
