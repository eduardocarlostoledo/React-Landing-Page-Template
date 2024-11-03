import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="section-title mb-8">
          <h2 className="text-3xl font-bold text-gray-800">NOS ESPECIALIZAMOS EN</h2>
        </div>
        <div className="row flex flex-wrap justify-center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="w-full sm:w-1/2 md:w-1/4 p-4">
                  <i className={`${d.icon} text-4xl text-orange-500 mb-4`}></i>
                  <h3 className="text-xl font-semibold text-gray-700">{d.title}</h3>
                  <p className="text-gray-600 mt-2">{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

// import React from "react";

// export const Features = (props) => {
//   return (
//     <div id="features" className="text-center">
//       <div className="container">
//         <div className="col-md-10 col-md-offset-1 section-title">
//           <h2>NOS ESPECIALIZAMOS EN</h2>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
//                   {" "}
//                   <i className={d.icon}></i>
//                   <h3>{d.title}</h3>
//                   <p>{d.text}</p>
//                 </div>
//               ))
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };
