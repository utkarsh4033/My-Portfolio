import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Recent Computer Science graduate with strong programming skills and a
          passion for problem-solving. Committed to learning new technologies
          and driving impactful results. Eager to contribute to software
          development teams, leveraging a solid foundation in algorithms and
          software design
        </p>
        <p classname="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ullam
          obcaecati pariatur eius voluptatum eum corporis ipsam alias, tempora
          doloribus praesentium. Et quis fugit eaque ex, modi, quo deleniti iste
          vitae pariatur odit labore distinctio, nemo sequi sed nihil eum quidem
          iusto! Qui delectus rerum fuga placeat consequatur molestiae odit.
        </p>
      </div>
    </div>
  );
};

export default About;
