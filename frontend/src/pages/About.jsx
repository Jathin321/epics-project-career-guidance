import React from "react";

export default function About() {
  return (
    <div>
      <div className="bg-gray-100 py-0 px-12">
        <div className="max-w-screen-xl mx-auto py-20">
          <p className="text-4xl font-bold text-center mb-8">Our Team</p>
          
          <div className="flex flex-wrap justify-center">
            <div className="swiper team-swiper">
              <div className="swiper-wrapper">


                <div className="swiper-slide mt-5 w-full">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-48 h-48 mx-auto">
                      <img
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png"
                        className="object-cover w-full h-full rounded-full mt-8"
                        alt="Team Member"
                      />
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-xl font-bold text-center mb-2">
                        Moksha
                      </p>
                      <p className="text-green-600 text-center mb-4">
                        Team Lead
                      </p>
                      <p className="text-gray-500 text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna
                      </p>
                    </div>
                  </div>
                </div>


                <div className="swiper-slide mt-5">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-48 h-48 mx-auto">
                      <img
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png"
                        className="object-cover w-full h-full rounded-full mt-8"
                        alt="Team Member"
                      />
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-xl font-bold text-center mb-2">
                        Jathin
                      </p>
                      <p className="text-green-600 text-center mb-4">
                        Team Member
                      </p>
                      <p className="text-gray-500 text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna
                      </p>
                    </div>
                  </div>
                </div>


                <div className="swiper-slide mt-5">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-48 h-48 mx-auto">
                      <img
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png"
                        className="object-cover w-full h-full rounded-full mt-8"
                        alt="Team Member"
                      />
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-xl font-bold text-center mb-2">
                        Bangarraju
                      </p>
                      <p className="text-green-600 text-center mb-4">
                        Team Member
                      </p>
                      <p className="text-gray-500 text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna
                      </p>
                    </div>
                  </div>
                </div>


                <div className="swiper-slide mt-5">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-48 h-48 mx-auto">
                      <img
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png"
                        className="object-cover w-full h-full rounded-full mt-8"
                        alt="Team Member"
                      />
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-xl font-bold text-center mb-2">
                        Monica
                      </p>
                      <p className="text-green-600 text-center mb-4">
                        Team Member
                      </p>
                      <p className="text-gray-500 text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna
                      </p>
                    </div>
                  </div>
                </div>


                <div className="swiper-slide mt-5">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-48 h-48 mx-auto">
                      <img
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw41.png"
                        className="object-cover w-full h-full rounded-full mt-8"
                        alt="Team Member"
                      />
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-xl font-bold text-center mb-2">
                         Shamjith Ram
                      </p>
                      <p className="text-green-600 text-center mb-4">
                        Team Member
                      </p>
                      <p className="text-gray-500 text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna
                      </p>
                    </div>
                  </div>
                </div>


                {/* Repeat for other team members */}
              </div>
              <div className="swiper-pagination mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
