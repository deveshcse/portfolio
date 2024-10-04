import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaSquarePhone,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import profileImage from "../assets/DeveshProfileImage.jpeg";

const Home = () => {
  return (
    <div className=" grid md:grid-cols-2 gap-2 m-2 p-1 md:p-12">
      <div className=" m-2 p-2 flex flex-col justify-center">
        <h3 className="font-poppins text-gray-600 text-lg mt-5">
          Hello👋, my name is{" "}
        </h3>
        <h2 className="font-semibold text-2xl text-gray-600">Devesh Mishra</h2>
        <h1 className="font-Fjalla font-medium text-5xl">
          I’m a full stack developer, specilised in frontend development of web
          applications using React, Next.js, Node.js & more
        </h1>

        <a
          href="/DeveshMishra_1YOE_FrontendDeveloper.pdf"
          download="DeveshMishra-Resume"
          className="block my-3 p-4 border  border-gray-900 rounded-lg bg-gray-100 font-semibold text-center"
        >
          <button>
            Download Resume
          </button>
        </a>

        <div className="flex justify-between items-center flex-wrap gap-5  p-1">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/deveshcse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-1">
              <FaLinkedin size={34} color="#0077B5" />
            </button>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/deveshcse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-1">
              <FaGithub size={34} color="#333" />
            </button>
          </a>

          {/* Gmail */}
          <a href="mailto:d.mishra56603@gmail.com">
            <button className="p-1">
              <SiGmail size={34} color="#EA4335" />
            </button>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+91-7380406929"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-500 rounded-full p-1">
              <FaWhatsapp size={32} color="white" />
            </button>
          </a>

          {/* Phone */}
          <a href="tel:+91-7380406929">
            <button className="flex items-center gap-1 font-poppins">
              <FaSquarePhone size={36} color="#075E54" />
            </button>
          </a>
        </div>
      </div>
      <div className="m-2 p-2 rounded-full md:p-12">
        <div>
          <img
            className="rounded-full"
            src={profileImage}
            alt="ProfileImage"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
