import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/LandingPage/Navbar";

export default function Role_desc() {
  const { role } = useParams();

  const [roles, setRoles] = useState({});
  const [rdetails, setRdetails] = useState({});
  // const [courses, setCourses] = useState({});
  const [certifications, setCertifications] = useState([]);
  const [skills, setSkills] = useState([]);
  const [companies, setCompanies] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:9999/api/rolesdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log("response is :  ",response[0][0].field);
    // console.log(response[0])
    const final_role = response[0].filter((item) => item.role.toLowerCase() == role.toLocaleLowerCase());

    setRoles(final_role[0]);
    setRdetails(final_role[0].rdetails);
    // setCourses(final_role[0].rdetails.courses_avaliable);
    setCertifications(final_role[0].rdetails.certifications_req || []);
    setSkills(final_role[0].rdetails.skills_req);
    setCompanies(final_role[0].companies || []);
    // console.log(final_role[0].companies)
    // console.log(final_role[0].rdetails.courses_avaliable.Udemy);
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
      <Navbar />
      <div className="bg-gray-900">
        <section className=" bg-gray-900 px-4 text-gray-600 antialiased py-8">
          {/* <Field /> */}

          <div className="bg-white p-8 mx-4">
            <div className="mt-4">
              <h1 className="mt-2 text-6xl font-bold">{roles.role}</h1>

              <header className=" mt-3 flex text-sm font-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-2 h-6 w-6 rotate-90 mt-2"
                  viewBox="0 0 24 24"
                  stroke="#1A202C"
                >
                  <path
                    className="mt-10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  />
                </svg>
                <h2 className=" text-3xl font-bold">{roles.field}</h2>
              </header>
            </div>
            {/* Description */}
            <h3 className="mt-8 text-2xl font-bold">Statement</h3>
            <p className="font-light text-lg">{rdetails.statement}</p>
            {/* Description */}
          </div>
          {/* salary */}
          <div className="bg-white p-8 m-4">
            <h3 className="mt-4 text-2xl font-bold">Salary</h3>
            <p className="font-light text-lg">{rdetails.salary}</p>
          </div>
          {/* <Basic /> */}
          <div className="bg-white p-8 m-4">
            {/* Description */}
            <h3 className="mt-4 text-xl font-bold">Basic Requirements</h3>
            <p className="font-light">{rdetails.basic_req}</p>
          </div>
          {/* <Course /> */}
          <div className="bg-white p-8 m-4">
            {/* Description */}
            <div>
              <h2 className="text-3xl text-black font-bold sm:text-4xl">
                Courses Available
              </h2>
            </div>
            <div className="mt-4 flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shadow-lg rounded-2xl cursor-pointer transition ease-in duration-500 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <div className="flex items-center mr-auto">
                  <div className="inline-flex w-12 h-12 relative">
                    <img
                      src="https://www.21twelveinteractive.com/wp-content/uploads/2020/05/Udemy.jpg"
                      alt="aji"
                      className="relative w-12 h-12 object-cover rounded-full"
                    />
                    <span className="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-full border-green-400 opacity-75"></span>
                  </div>

                  <div className="flex flex-col ml-3">
                    <div className="font-medium leading-none text-gray-100">
                      Udemy
                    </div>
                    <p className="text-sm text-gray-500 leading-none mt-1"></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shadow-lg rounded-2xl cursor-pointer transition ease-in duration-500 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <div className="flex items-center mr-auto">
                  <div className="inline-flex w-12 h-12 relative">
                    <img
                      src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/77/43/39/77433980-f70f-e4a3-6343-1d2a45d5de2a/AppIcon-0-1x_U007epad-0-0-0-0-0-0-0-85-220-0.png/1200x630wa.png"
                      alt="aji"
                      className="relative w-12 h-12 object-cover rounded-full"
                    />
                    <span className="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-full border-green-400 opacity-75"></span>
                  </div>

                  <div className="flex flex-col ml-3">
                    <div className="font-medium leading-none text-gray-100">
                      {/* {rdetails.courses_avaliable.Udemy} */}Coursera
                    </div>
                    <p className="text-sm text-gray-500 leading-none mt-1"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Certificates /> */}
          <div className="text-black px-4 py-8 bg-white  sm:px-6 sm:py-12 lg:px-8 lg:py-16 m-4">
            <header className="border-b border-gray-100 px-5 ">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Certifications Required
              </h2>{" "}
            </header>
            <div className="border-b px-5 py-4">
              <div className="overflow-x-auto">
                <ul className="list-disc space-y-4 pl-5 font-sans text-lg text-gray-800">
                  { 
                  certifications.map((item) => (
                    // <li className="rounded border border-gray-300 bg-gray-100 p-3 transition duration-300 hover:bg-gray-200">
                    //   {item}
                    // </li>

                    <div className="mt-4 flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shadow-lg rounded-2xl cursor-pointer transition ease-in duration-500 transform hover:scale-105">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center mr-auto">

                          <div className="flex flex-col ml-3">
                            <div className="font-medium leading-none text-gray-100">
                              {item}
                            </div>
                            <p className="text-sm text-gray-500 leading-none mt-1"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* <SkillsReq /> */}
          <div className="text-black px-4 py-8 bg-white  sm:px-6 sm:py-12 lg:px-8 lg:py-16 m-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Skills Required
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {skills.map((item) => (
                //   <div className="flex items-start gap-4">
                //   <div>
                //     <h2 className="text-lg font-bold">
                //       {" "}
                //       {item}
                //     </h2>
                //   </div>
                // </div>

                <p
                  href="#"
                  className="block py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          {/* <Companies /> */}
          <div className="text-black px-4 py-8 bg-white  sm:px-6 sm:py-12 lg:px-8 lg:py-16 m-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xlz">Companies</h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {
              companies.map((item) => (
                <div className="flex items-start gap-4">
                  <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                    <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
                      {/* <svg
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
                      </svg> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 2l-8 5v10l8 4 8-4V7l-8-5zM8 12v6M12 12v6M16 12v6"
                        />
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                      </svg>
                    </span>
                    <p className="text-xl font-medium text-slate-700 mt-3">
                      {item}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      Team BrainEdge education is a bunch of highly focused,
                      energetic set of people.
                    </p>
                  </div>
                </div>

                // <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                //   <div className="mb-8">
                //     <span className="text-5xl font-extrabold text-white">
                //       {item}
                //     </span>
                //   </div>
                //   <ul className="mb-8 space-y-4 text-gray-400">
                //     <li className="flex items-center">
                //       <svg
                //         className="h-6 w-6 text-green-500 mr-2"
                //         xmlns="http://www.w3.org/2000/svg"
                //         fill="none"
                //         viewBox="0 0 24 24"
                //         stroke="currentColor"
                //       >
                //         <path
                //           stroke-linecap="round"
                //           stroke-linejoin="round"
                //           stroke-width="2"
                //           d="M5 13l4 4L19 7"
                //         />
                //       </svg>
                //       <span>100+ employees</span>
                //     </li>
                //     <li className="flex items-center">
                //       <svg
                //         className=" w-6 text-green-500 mr-2"
                //         xmlns="http://www.w3.org/2000/svg"
                //         fill="none"
                //         viewBox="0 0 24 24"
                //         stroke="currentColor"
                //       >
                //         <path
                //           stroke-linecap="round"
                //           stroke-linejoin="round"
                //           stroke-width="2"
                //           d="M5 13l4 4L19 7"
                //         />
                //       </svg>
                //       <span>18 LPA aveg salary</span>
                //     </li>
                //     <li className="flex items-center">
                //       <svg
                //         className="h-6 w-6 text-green-500 mr-2"
                //         xmlns="http://www.w3.org/2000/svg"
                //         fill="none"
                //         viewBox="0 0 24 24"
                //         stroke="currentColor"
                //       >
                //         <path
                //           stroke-linecap="round"
                //           stroke-linejoin="round"
                //           stroke-width="2"
                //           d="M5 13l4 4L19 7"
                //         />
                //       </svg>
                //       <span>Standard support</span>
                //     </li>
                //   </ul>
                //   <a
                //     href="#"
                //     className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                //   >
                //     Get Started
                //   </a>
                // </div>
              )) }
            </div>
          </div>
          {/* end */}
        </section>
      </div>
    </>
  );
}
