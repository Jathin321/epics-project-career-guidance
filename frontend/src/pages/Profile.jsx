import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  let navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("authtoken");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  const [user, setUsers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:9999/api/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    const curr_email = localStorage.getItem("userEmail");
    console.log(response[0])
    const curr_user = response.filter((user) => user.email == curr_email);
    console.log(curr_user)
    setUsers(curr_user[0]);
    setFavorites(curr_user[0].favorites);
    // console.log(response[0],response[1]);
    // console.log(response[0][1].name)
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-r p-3 py-5 flex flex-col items-center">
            <img
              className="rounded-full mt-5"
              width="150"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-bold">{user.name}</span>
            <span className="text-gray-500">{user.email}</span>
          </div>
          <div className="border-r p-3 py-5">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-right text-3xl mb-4">Your Profile</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  {user.name}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Surname
                </label>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  {user.surname}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  {user.phone}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address Line 1
                </label>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  ADDRESS LINE 1
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address Line 2
                </label>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  ADDRESS LINE 2
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Postcode
                </label>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  530046
                </div>
              </div>
              {/* <div>
                            <label className="block text-sm font-medium text-gray-700">State</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                NAME
                            </div>
                        </div> */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Area
                </label>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  Visakhapatnam
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email ID
                </label>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  {user.email}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Education
                </label>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  NAME
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  {user.country}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State/Region
                </label>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  {user.state}
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <button
                className="sm:inline-flex ml-5 text-white bg-gradient-to-br from-pink-500 to-violet-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3 shadow-md hover:scale-[1.22] transition-transform"
                type="button"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="p-3 py-5 ml-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-right text-3xl mb-4">Your Favorites</h1>
              </div>
            </div>
            {favorites.map((item) => (
              <Link to={`/role_desc/${item.role}`} key={item.role}>
              <div className="mt-4" key={item}>
                <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4">
                  <div className="flex items-center">
                    <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-violet-500 rounded-lg">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-shrink-0 ml-3">
                      <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                        {item.role}
                      </span>
                      <h3 className="text-base font-normal text-gray-500">
                        {item.field}
                      </h3>
                    </div>
                    {/* <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
                      +16%
                      <svg
                        className="w-5 h-5 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
