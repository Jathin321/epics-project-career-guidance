import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/LandingPage/Navbar";
import Footer from "../components/LandingPage/Footer";

export default function Fields() {
  const [fields, setFields] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:9999/api/fieldsdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFields(response[0]);
    // console.log("response is :  ",response[0]);
    // console.log("fields is :  ",fields);
    // console.log(response[0],response[1]);
    // console.log(response[0][1].name)
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar/>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Choose Your  <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Career Field</span></h1>

            {/* <p className="max-w-lg mx-auto mt-4 text-gray-500">
              Salami mustard spice tea fridge authentic Chinese food dish salt
              tasty liquor. Sweet savory foodtruck pie.
            </p> */}
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {fields != [] ? (
              fields.map((data) => {
                return (
                  <Link to={`/roles/${data.field_name}`} key={data._id}>
                    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                      <img
                        alt=""
                        src={data.field_image}
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                          <time
                            datetime="2022-10-10"
                            className="block text-xs text-white/90"
                          >
                            {" "}
                            {/* 10th Oct 2022{" "} */}
                          </time>

                          <a href="#">
                            <h3 className="mt-0.5 text-2xl text-white">
                              {data.field_name}
                            </h3>
                          </a>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            {data.field_desc}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })
            ) : (
              <div>No such Items</div>
            )}

            {/* Repeat the above structure for each blog post */}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
