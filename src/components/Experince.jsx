import React from "react";
import Cpp from "../assets/cpp.png"
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import rest from "../assets/rest.png"
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import docker from "../assets/docker.png"
import github from "../assets/github.png";
const Experince = () => {
    const techs = [
        {
            id:1,
            source:Cpp,
            title:'C++',
            style:'shadow-blue-700'
        },
        {
            id:2,
            source:python,
            title:'Python',
            style:'shadow-yellow-300'
        },
        {
            id:3,
            source:reactImage,
            title:'React',
            style:'shadow-blue-400'
        },
        {
            id:4,
            source:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:5,
            source:rest,
            title:'Rest API',
            style:'shadow-orange-500'
        },
        {
            id:6,
            source:mysql,
            title:'MySQL',
            style:'shadow-blue-300'
        },
        {
            id:7,
            source:mongodb,
            title:'MongoDB',
            style:'shadow-green-500'
        },
        {
            id:8,
            source:docker,
            title:'Docker',
            style:'shadow-white'
        },
        {
            id:9,
            source:github,
            title:'GitHub',
            style:'shadow-gray-400'
        },
    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black text-white w-full md:h-screen ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6 ">these are the technologies i have worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {
                techs.map(({id,source,title,style}) =>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={source} alt="" className="w-20 mx-auto"/>
                    <p className="mt-4">{title}</p>
                  </div>
                ))
            }
        
        </div>
      </div>
    </div>
  );
};

export default Experince;
