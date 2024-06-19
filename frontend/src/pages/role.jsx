import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/LandingPage/Navbar";

export default function Role() {
  const { field } = useParams();

  const [roles, setRoles] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:9999/api/rolesdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setRoles(response[0]);
    // console.log("response is :  ",response[0][0].field);
    // console.log(field)
    // const fin = response[0].filter((item)=> (item.field === field))
    // console.log("roles are :  ",roles);
    // console.log(response[0],response[1]);
    // console.log(response[0][1].name)
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-10">
      <div className="text-center">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-blue md:text-5xl lg:text-6xl">
          Career Roles in{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {field}
          </span>
        </h1>
      </div>
      {roles != [] ? (
        roles
          .filter((item) => item.field === field)
          .map((role) => (
            <div className="flex flex-col top-0 z-10 my-11" id={role._id}>
              <div className="bg-gray-800 border border-gray-800 shadow-lg rounded-2xl p-4">
                <div className="flex-none sm:flex">
                  <div className="relative h-32 w-32 sm:mb-0 mb-3">
                    <img
                      src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                      alt="aji"
                      className="w-32 h-32 object-cover rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto sm:ml-5 justify-evenly">
                    <div className="flex items-center justify-between sm:mt-2">
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <div className="w-full flex-none text-4xl text-gray-200 font-bold leading-none mb-3">
                            {role.role}
                          </div>
                          <div className="flex-auto text-gray-400 my-3">
                            <span className="mr-3">
                              {role.rdetails.statement}
                            </span>
                            {/* <span className="mr-3 border-r border-gray-600 max-h-0"></span>
                    <span></span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-2 text-sm text-gray-400">
                      <div className="flex-1 inline-flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                        <p>1.2k Views</p>
                      </div>
                      <button className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                        FAVORITE
                      </button>
                      <Link to={`/role_desc/${role.role}`}>
                        <button className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                          KNOW MORE
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
      ) : (
        <div>no such items</div>
      )}
    </div>
    </>
  );
}
