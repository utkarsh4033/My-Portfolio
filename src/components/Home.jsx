import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/heroImage.jpg";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xl font-bold text-white
          "
          >
            I am a Web developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Recent Computer Science graduate with strong programming skills and
            a passion for problem-solving. Committed to learning new
            technologies and driving impactful results. Eager to contribute to
            software development teams, leveraging a solid foundation in
            algorithms and software design
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdKeyboardArrowRight
                  size={25}
                  className="ml-1
                "
                />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full
          "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
