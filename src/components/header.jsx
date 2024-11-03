import React from "react";

export const Header = (props) => {
  return (
    <header id="header" className="relative bg-gray-800 text-white py-16 text-center">
      <div className="intro">
        <div className="overlay bg-black bg-opacity-50 p-4">
          <div className="container mx-auto flex justify-center items-center min-h-[300px]">
            <div className="row w-full md:w-3/4 lg:w-1/2 px-4">
              <div className="intro-text space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold">
                  {props.data ? props.data.title : "Loading"}
                </h1>
                <p className="text-base md:text-lg">
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <a
                  href="#features"
                  className="btn btn-custom bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300 text-sm md:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
