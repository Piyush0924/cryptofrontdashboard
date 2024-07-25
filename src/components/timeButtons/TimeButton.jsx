import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Importing useDispatch hook from React-Redux
import { setTime } from "../../features/timeSlice"; // Importing setTime action from timeSlice

const TimeButton = () => {
  const dispatch = useDispatch(); // Initialize dispatch function from Redux
  const [activeButton, setActiveButton] = useState("7"); // State to track active button

  // Handle click event for time buttons
  const handleClick = (e) => {
    const value = e.target.value;
    setActiveButton(value); // Set active button state
    dispatch(setTime(value)); // Dispatch setTime action with the selected value
  };

  return (
    <div className="w-full bg-blue-500 px-4 md:px-8 lg:px-24"> {/* Container with padding */}
      <div className="flex justify-between items-center h-20 gap-2"> {/* Flex container for buttons */}
        {/* Individual time selection buttons */}
        <button
          className={`w-2/6 sm:w-1/5 h-10 sm:h-12 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base cursor-pointer ${
            activeButton === "1" ? "bg-blue-300" : "bg-blue-100 hover:bg-blue-300"
          }`}
          data-testid="button1" // Test ID for testing purposes
          value={"1"} // Value corresponding to 1 day
          onClick={handleClick} // Handle click event with handleClick function
        >
          1d {/* Button label */}
        </button>
        {/* Similar buttons for other time intervals */}
        <button
          className={`w-2/6 sm:w-1/5 h-10 sm:h-12 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base cursor-pointer ${
            activeButton === "7" ? "bg-blue-300" : "bg-blue-100 hover:bg-blue-300"
          }`}
          value={"7"}
          onClick={handleClick}
        >
          7d
        </button>
        <button
          className={`w-2/6 sm:w-1/5 h-10 sm:h-12 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base cursor-pointer ${
            activeButton === "14" ? "bg-blue-300" : "bg-blue-100 hover:bg-blue-300"
          }`}
          value={"14"}
          onClick={handleClick}
        >
          2w
        </button>
        {/* Additional buttons for other time intervals */}
        <button
          className={`w-2/6 sm:w-1/5 h-10 sm:h-12 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base cursor-pointer ${
            activeButton === "30" ? "bg-blue-300" : "bg-blue-100 hover:bg-blue-300"
          }`}
          value={"30"}
          onClick={handleClick}
        >
          1m
        </button>
        <button
          className={`w-2/6 sm:w-1/5 h-10 sm:h-12 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base cursor-pointer ${
            activeButton === "180" ? "bg-blue-300" : "bg-blue-100 hover:bg-blue-300"
          }`}
          value={"180"}
          onClick={handleClick}
        >
          6m
        </button>
        <button
          className={`w-2/6 sm:w-1/5 h-10 sm:h-12 border border-gray-200 rounded-md p-2 sm:p-3 text-sm sm:text-base cursor-pointer ${
            activeButton === "365" ? "bg-blue-300" : "bg-blue-100 hover:bg-blue-300"
          }`}
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
