import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="z-10 bg-black mix-blend-overlay pb-2 sticky">
      <div className="flex justify-between items-center">
        <div className="p-5 flex text-4xl font-semibold py-1 ml-2 mt-2 rounded-full">
          <img className="w-10" src={logo} alt="logo" />
          <span className="pl-3 text-white">Career Guide</span>
        </div>
        <div className="space-x-5 text-2xl cursor-pointer font-semibold ">
          <Link to="/">
            <a className=" text-white text-2xl mt-7 py-1 px-4 rounded-full ">
              Home
            </a>
          </Link>
          <a className=" text-white text-2xl mt-7 py-1 px-4 rounded-full ">
            Learn
          </a>
          <Link to="/about">
          <a className=" text-white text-2xl mt-7 py-1 px-4 rounded-full ">
            About Us
          </a>
          </Link>
        </div>
        <div className="space-x-4 text-2xl cursor-pointer font-semibold mr-12 ">
          {!localStorage.getItem("authtoken") ? (
            <Link to="/login">
              <button className="bg-blue-500 text-white text-2xl py-1 px-4 rounded-md mt-2">
                Sign In
              </button>
            </Link>
          ) : (
            <Link to="/profile">
              <button className="bg-blue-500 text-white text-2xl py-1 px-4 rounded-md mt-2 flex">
                <h3 className="pr-3 pt-1">Profile</h3>
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
                    stroke="#ffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.34"
                    d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
                    stroke="#ffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#ffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
