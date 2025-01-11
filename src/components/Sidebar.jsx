import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="px-6">
        <div className="flex justify-start items-center gap-4 font-bold text-[22px] px-6 pt-2 mb-2 border-b-2 border-teal-600">
          <FontAwesomeIcon icon={faUser} className="text-[18px]" />
          Username
        </div>
        <div>
          <ul className="flex flex-col justify-start px-6 gap-2 pt-4 text-[16px]">
            <li>Grocery Shopping</li>
            <li>Work Tasks</li>
            <li>Fitness Goals</li>
            <li>Home Maintenance</li>
            <li>Travel Plans</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <button
            type="button"
            className="px-4 py-2 mt-4 text-[12px] text-white font-semibold bg-teal-500 w-full rounded-full hover:text-teal-500 hover:bg-white transition-all duration-200"
          >
            Add task
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
