import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <div className=" grid md:grid-cols-2 gap-2 m-2 p-1 md:p-12">
      <div className=" m-2 p-2 flex flex-col justify-center">
        <h3 className="font-poppins text-gray-600 text-lg mt-5">Hello👋, my name is </h3>
        <h2 className="font-semibold text-2xl ">Devesh Mishra</h2>
        <h1 className="font-Fjalla font-medium text-5xl">
          I’m a full stack developer, specilised in frontend development of web
          applications using React, Next.js, Node.js & more
        </h1>
        
        <button className="block my-3 p-4 border  border-gray-900 rounded-lg bg-gray-100 font-semibold">Download Resume</button>
        
        
        <div className="flex justify-between flex-wrap gap-5  p-1">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/deveshcse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
            <FaLinkedin size={32} /></button>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/deveshcse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button><FaGithub size={32} /></button>
          </a>

          {/* Gmail */}
          <a href="mailto:d.mishra56603@gmail.com">
            <button><SiGmail size={32} />
           </button>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+91-7380406929"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button><FaWhatsapp size={32} />
            </button>
          </a>

          {/* Phone */}
          <a href="tel:+91-7380406929">
            <button className="flex items-center gap-1 font-poppins"><FaSquarePhone size={32} />
            </button>
          </a>
        </div>
      </div>
      <div className="m-2 p-2 rounded-full md:p-12">
        <div>
          <img className="rounded-full" src="src\assets\DeveshProfileImage.jpeg" alt="ProfileImage"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
