import React from "react";

// const About = () => {
//   return (
//     <div
//       name="about"
//       className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             About
//           </p>
//         </div>
//         <p className="text-xl mt-20">
//           Recent Computer Science graduate with strong programming skills and a
//           passion for problem-solving. Committed to learning new technologies
//           and driving impactful results. Eager to contribute to software
//           development teams, leveraging a solid foundation in algorithms and
//           software design
//         </p>
//         <p classname="text-xl">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ullam
//           obcaecati pariatur eius voluptatum eum corporis ipsam alias, tempora
//           doloribus praesentium. Et quis fugit eaque ex, modi, quo deleniti iste
//           vitae pariatur odit labore distinctio, nemo sequi sed nihil eum quidem
//           iusto! Qui delectus rerum fuga placeat consequatur molestiae odit.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
// import React from 'react';

const About = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 md:pr-6 mb-6">
            <p className="text-lg text-white justify-center">
              Recent Computer Science graduate with strong programming skills
              and a passion for problem-solving. Committed to learning new
              technologies and driving impactful results. Eager to contribute
              to software development teams, leveraging a solid foundation in
              algorithms and software design.
            </p>
          </div>

          <div className="md:w-1/2 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Certifications
              </h3>
              <ul className="list-disc list-inside">
                <li className="mb-1">
                  certified Web Developor in HTML, CSS, JavaScript from IBM
                </li>
                <li className="mb-1">Certified in JavaScript from LinkedIn</li>
                <li className="mb-1">c++ certified from Coding Ninjas</li>
                {/* Add more certifications as needed */}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Qualifications
              </h3>
              <ul className="list-disc list-inside">
                <li className="mb-1">
                  B.Tech in Computer Science and Engineering- MMDU, 2020-2024
                </li>
                <li className="mb-1">
                Intermediate - Mukand Lal Public School - 2019-2020
                </li>
                {/* Add more qualifications as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
