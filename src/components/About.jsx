import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2 m-2 p-1">
      <div className="bg-yellow-100 m-2 p-2">
        <h3>Hello👋, my name is </h3>
        <h1>Devesh Mishra</h1>
        <h2>
          I'm a full stack developer, specilised in frontend development of web
          applications using React, Next.js, Node.js & more
        </h2>
        <button>Download Resume</button>
        <div className="flex flex-wrap gap-5">
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
      <div className="bg-blue-100 m-2 p-2">profile image</div>
    </div>
  );
};

export default About;
