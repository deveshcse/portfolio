import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const handleMenu = () => {
    console.log("clicked");
    const navDialog = document.getElementById("nav-dialog");
    navDialog.classList.toggle("hidden");
  };
  return (
    <div className="border-b-2">
      <nav>
        <div className="hidden md:flex gap-20 justify-center items-center p-4 text-xl font-medium">
          <a href="/about">About</a>
          <a href="/skills">Skills</a>
          <a href="projects">Projects</a>
          <a href="experience">Experience</a>
          <a href="contact">Contact</a>
        </div>

        <button className="p-2 md:hidden" onClick={handleMenu}>
          <FaBars size={28} className="text-gray-900" />
        </button>

        <div
          id="nav-dialog"
          className="fixed z-10 md:hidden bg-white inset-0 hidden"
        >
          <button className="md:hidden p-2" onClick={handleMenu}>
            <IoMdClose size={28} className="text-gray-900" />
          </button>

          <div className="mt-6">
            <a
              href="#about"
              className="font-medium text-lg m-3 p-1 hover:bg-gray-200 block rounded-lg"
            >
              About
            </a>
            <a
              href="#skills"
              className="font-medium text-lg m-3 p-1 hover:bg-gray-200 block rounded-lg"
            >
              Skills
            </a>
            <a
              href="#project"
              className="font-medium text-lg m-3 p-1 hover:bg-gray-200 block rounded-lg"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="font-medium text-lg m-3 p-1 hover:bg-gray-200 block rounded-lg"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="font-medium text-lg m-3 p-1 hover:bg-gray-200 block rounded-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

//className="flex bg-white justify-between items-center"
