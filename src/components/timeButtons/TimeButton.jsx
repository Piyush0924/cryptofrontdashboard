import React from "react";
import { useDispatch } from "react-redux"; // Importing useDispatch hook from React-Redux
import { setTime } from "../../features/timeSlice"; // Importing setTime action from timeSlice

const TimeButton = () => {
  const dispatch = useDispatch(); // Initialize dispatch function from Redux

  // Handle click event for time buttons
  const handleClick = (e) => {
    dispatch(setTime(e.target.value)); // Dispatch setTime action with the selected value
  };

  return (
    <div className="w-full bg-blue-500 px-4 md:px-8 lg:px-24"> {/* Container with padding */}
      <div className="flex justify-between items-center h-20"> {/* Flex container for buttons */}
        {/* Individual time selection buttons */}
        <button
          className="w-2/6 sm:w-1/5 h-10 sm:h-12 bg-blue-100 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base hover:bg-blue-300 cursor-pointer"
          data-testid="button1" // Test ID for testing purposes
          value={"1"} // Value corresponding to 1 day
          onClick={handleClick} // Handle click event with handleClick function
        >
          1d {/* Button label */}
        </button>
        {/* Similar buttons for other time intervals */}
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
        {/* Additional buttons for other time intervals */}
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
