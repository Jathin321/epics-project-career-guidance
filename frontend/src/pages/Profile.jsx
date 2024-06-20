import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {

    let navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem("authtoken");
        navigate("/login");
      }

      const [user, setUsers] = useState([]);

      const loadData = async () => {
        let response = await fetch("http://localhost:9999/api/getuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        response = await response.json();
        const curr_email = localStorage.getItem("userEmail")
        // console.log(curr_email,response[0][0].email)
        const curr_user = response[0].filter((user) => (user.email == curr_email) )
        // console.log(curr_user[0])
        setUsers(curr_user[0]);
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
                    <span className="text-gray-500">edogaru@mail.com.my</span>
                </div>
                <div className="border-r p-3 py-5">
                    <div className="flex justify-between items-center mb-3">
                        <h1 className="text-right text-3xl mb-4">Your Profile</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                NAME
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Surname</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                LAST NAME
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                PHONE NUMBER
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                               EMAIL ADDRESS
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                ADDRESS LINE 2
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Postcode</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                NAME
                            </div>
                        </div>
                        {/* <div>
                            <label className="block text-sm font-medium text-gray-700">State</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                NAME
                            </div>
                        </div> */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Area</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                NAME
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email ID</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                NAME
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Education</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                NAME
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                NAME
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">State/Region</label>
                            <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                NAME
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <button
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={handleLogOut}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
                <div className="p-3 py-5 mx-8">
                    <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center mb-3">
                        <h1 className="text-right text-3xl mb-4">Your Favorites</h1>
                    </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Experience in Designing</label>
                        <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                NAME
                            </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Additional Details</label>
                        <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                NAME
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
