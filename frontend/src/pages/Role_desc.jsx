import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/LandingPage/Navbar";

export default function Role_desc() {
    const { role } = useParams();

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
    console.log(response[0])
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
      <section className=" bg-gray-900 px-4 text-gray-600 antialiased">
        {/* <Field /> */}
        <div className="bg-white p-8 m-4">
          <h1 className="mt-2 text-6xl font-bold">Electrical engineer</h1>

          <header className="mt-2 flex text-sm font-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-2 h-6 w-6 rotate-90"
              viewBox="0 0 24 24"
              stroke="#1A202C"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
            <p>Field Service Engineer</p>
          </header>

          {/* Description */}
          <h3 className="mt-8 text-xl font-bold">Statement</h3>
          <p className="font-light">
            Provides technical support, troubleshooting, and maintenance
            services for electrical equipment and systems in the field, ensuring
            uptime and reliability
          </p>
          {/* Description */}
          <h3 className="mt-8 text-xl font-bold">Salary</h3>
          <p className="font-light">
            The average salary of a Field Service Engineer in India ranges from
            INR 3.5 lakhs to INR 6 lakhs per annum, depending on factors such as
            experience, location, and the employer.",
          </p>
        </div>
        {/* <Basic /> */}
        <div className="bg-white p-8 m-4">
          {/* Description */}
          <h3 className="mt-8 text-xl font-bold">Basic</h3>
          <p className="font-light">
            " a bachelor's degree in electrical engineering or a related field."
          </p>
        </div>
        {/* <Course /> */}
        <div className="bg-white p-8 m-4">
          {/* Description */}
          <div>
            <h2 className="text-3xl text-black font-bold sm:text-4xl">
              Course
            </h2>
          </div>
          <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shadow-lg rounded-2xl cursor-pointer transition ease-in duration-500 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div className="flex items-center mr-auto">
                <div className="inline-flex w-12 h-12 relative">
                  <img
                    src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                    alt="aji"
                    className="relative w-12 h-12 object-cover rounded-full"
                  />
                  <span className="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-full border-green-400 opacity-75"></span>
                </div>

                <div className="flex flex-col ml-3">
                  <div className="font-medium leading-none text-gray-100">
                    Aji
                  </div>
                  <p className="text-sm text-gray-500 leading-none mt-1">
                    UI/UX Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Certificates /> */}
        <div className="text-black px-4 py-8 bg-white  sm:px-6 sm:py-12 lg:px-8 lg:py-16 m-4">
          <header className="border-b border-gray-100 px-5 ">
            <h2 className="text-3xl font-bold sm:text-4xl">Certificates</h2>{" "}
          </header>
          <div className="border-b px-5 py-4">
            <div className="overflow-x-auto">
              <ul className="list-disc space-y-4 pl-5 font-sans text-lg text-gray-800">
                <li className="rounded border border-gray-300 bg-gray-100 p-3 transition duration-300 hover:bg-gray-200">
                  "Certifications in electrical safety,
                </li>
                <li className="rounded border border-gray-300 bg-gray-100 p-3 transition duration-300 hover:bg-gray-200">
                  equipment troubleshooting,
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <SkillsReq /> */}
        <div className="text-black px-4 py-8 bg-white  sm:px-6 sm:py-12 lg:px-8 lg:py-16 m-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">skills_req</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <div>
                <h2 className="text-lg font-bold">
                  {" "}
                  "troubleshooting expertise",
                </h2>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div>
                <h2 className="text-lg font-bold">
                  {" "}
                  "equipment maintenance proficiency",
                </h2>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div>
                <h2 className="text-lg font-bold">
                  "advanced knowledge of electrical systems and components."
                </h2>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div>
                <h2 className="text-lg font-bold">
                  //Troubleshooting Expertise
                </h2>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div>
                <h2 className="text-lg font-bold">
                  // extraTroubleshooting Expertise
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* <Companies /> */}
        <div className="text-black px-4 py-8 bg-white  sm:px-6 sm:py-12 lg:px-8 lg:py-16 m-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xlz">Companies</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <p className="text-xl font-medium text-slate-700 mt-3">
                  "Siemens",
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Team BrainEdge education is a bunch of highly focused,
                  energetic set of people.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <p className="text-xl font-medium text-slate-700 mt-3">
                  "Schneider Electric",
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Team BrainEdge education is a bunch of highly focused,
                  energetic set of people.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <p className="text-xl font-medium text-slate-700 mt-3">
                  "General Electric (GE)",
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Team BrainEdge education is a bunch of highly focused,
                  energetic set of people.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <p className="text-xl font-medium text-slate-700 mt-3">
                  // extra "Emerson Electric Co.",
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Team BrainEdge education is a bunch of highly focused,
                  energetic set of people.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </section>
    </>
  )
}

