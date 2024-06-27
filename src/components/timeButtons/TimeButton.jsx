import React from "react";
import { useDispatch } from "react-redux";
import { setTime } from "../../features/timeSlice";

const TimeButton = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setTime(e.target.value));
  };

  return (
    <div className="w-full bg-blue-500 px-4 md:px-8 lg:px-24">
      <div className="flex justify-between items-center h-20">
        <button
          className="w-2/6 sm:w-1/5 h-10 sm:h-12 bg-blue-100 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base hover:bg-blue-300 cursor-pointer"
          data-testid="button1"
          value={"1"}
          onClick={handleClick}
        >
          1d
        </button>
        <button
          className="w-2/6 sm:w-1/5 h-10 sm:h-12 bg-blue-100 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base hover:bg-blue-300 cursor-pointer"
          value={"7"}
          onClick={handleClick}
        >
          7d
        </button>
        <button
          className="w-2/6 sm:w-1/5 h-10 sm:h-12 bg-blue-100 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base hover:bg-blue-300 cursor-pointer"
          value={"14"}
          onClick={handleClick}
        >
          2w
        </button>
        <button
          className="w-2/6 sm:w-1/5 h-10 sm:h-12 bg-blue-100 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base hover:bg-blue-300 cursor-pointer"
          value={"30"}
          onClick={handleClick}
        >
          1m
        </button>
        <button
          className="w-2/6 sm:w-1/5 h-10 sm:h-12 bg-blue-100 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base hover:bg-blue-300 cursor-pointer"
          value={"180"}
          onClick={handleClick}
        >
          6m
        </button>
        <button
          className="w-2/6 sm:w-1/5 h-10 sm:h-12 bg-blue-100 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base hover:bg-blue-300 cursor-pointer"
          value={"365"}
          onClick={handleClick}
        >
          1y
        </button>
      </div>
    </div>
  );
};

export { TimeButton };
