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
        <h1 className="text-5xl">
          I’m a frontend developer, with background in AI/ML and full stack development of web
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
            <button className="p-1 flex flex-col items-center font-semibold">
              <FaLinkedin size={34} color="#0077B5" /> <span> LinkedIn </span>
            </button>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/deveshcse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-1 flex flex-col items-center font-semibold">
              <FaGithub size={34} color="#333" /> <span>Github</span>
            </button>
          </a>

          {/* Gmail */}
          <a href="mailto:d.mishra56603@gmail.com">
            <button className="p-1 flex flex-col items-center font-semibold">
              <SiGmail size={34} color="#EA4335" /> <span>Email</span>
            </button>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+91-7380406929"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-1 flex flex-col items-center font-semibold">
              <FaWhatsapp size={32} color="white"  className="bg-green-500 rounded-full "/> <span>WhatsApp</span>
            </button>
          </a>

          {/* Phone */}
          <a href="tel:+91-7380406929">
            <button className="flex flex-col items-center font-semibold p-1">
              <FaSquarePhone size={36} color="#075E54" /> <span>Phone</span>
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
