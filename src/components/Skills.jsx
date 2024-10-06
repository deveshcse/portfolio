const Skills = () => {
  return (
    <div className="m-2 p-2 md:p-10 ">
      <div className="text-center mb-2">
        <h1 className="text-5xl font-bold  inline-block relative">
          Skills
          <span className="block h-1 bg-blue-900 mt-1 w-full"></span>
        </h1>
      </div>
      <div className=" flex flex-col items-start justify-center  gap-2">
        {/* grid grid-rows-3 */}

        <div className="gap-2 md:px-40 lg:px-60">
          <div>
            <div className=" bg-red-600 inline-block ">
              <span className="text-xl bg-slate-900 font-medium  text-white">
                Front-end
              </span>
              <div className="h-1 bg-blue-900"></div>
            </div>
          </div>
          <div className="">
            <h2 className="text-4xl font-semibold my-2">JavaScript</h2>
            <div className="text-xl font-medium flex flex-wrap gap-4">
              <span className=" pr-2 border-b-2 border-teal-800">React</span>
              <span className="pr-2 border-b-2 border-teal-800">Next.js</span>
              <span className="pr-2 border-b-2 border-teal-800">
                TypeScript
              </span>
              <span className="pr-2 border-b-2 border-teal-800">Redux</span>
              <span className="pr-2 border-b-2 border-teal-800">
                Framer Motion
              </span>
            </div>

            <h2 className="text-4xl font-semibold my-2">HTML & CSS </h2>
            <div className="text-xl font-medium flex flex-wrap gap-4">
              <span className="pr-2 border-b-2 border-teal-800">
                TailwindCSS
              </span>
              <span className="pr-2 border-b-2 border-teal-800">Bootstrap</span>
              <span className="pr-2 border-b-2 border-teal-800">
                MaterialUI
              </span>
              <span className="pr-2 border-b-2 border-teal-800">Shadcn/ui</span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}

        <div className="gap-2 mt-1 md:px-40 lg:px-60">
          <div>
            <div className="my-2 bg-red-600 inline-block ">
              <span className="text-xl bg-slate-900 font-medium  text-white">
                Back-end
              </span>
              <div className="h-1 bg-blue-900"></div>
            </div>
          </div>
          <div className="">
            <div className="my-2 text-xl font-medium flex flex-wrap gap-4">
              <span className=" pr-2 border-b-2 border-teal-800">Node.js</span>
              <span className="pr-2 border-b-2 border-teal-800">
                Express.js
              </span>
              <span className="pr-2 border-b-2 border-teal-800">MySQL</span>
              <span className="pr-2 border-b-2 border-teal-800">Firebase</span>
              <span className="pr-2 border-b-2 border-teal-800">MongoDB</span>
            </div>

            <div className="my-2 text-xl font-medium flex flex-wrap gap-4">
              <span className="pr-2 border-b-2 border-teal-800">
                Amazon Web Services (AWS)
              </span>
              <span className="pr-2 border-b-2 border-teal-800">
                Flask (Python)
              </span>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------- */}

        <div className="gap-2 mt-1 md:px-40 lg:px-60">
          <div>
            <div className="my-2 bg-red-600 inline-block ">
              <span className="text-xl bg-slate-900 font-medium  text-white">
                Others
              </span>
              <div className="h-1 bg-blue-900"></div>
            </div>
          </div>
          <div className="">
            <div className="my-2 text-xl font-medium flex flex-wrap gap-4">
              <span className=" pr-2 border-b-2 border-teal-800">Git</span>
              <span className="pr-2 border-b-2 border-teal-800">Github</span>
              <span className="pr-2 border-b-2 border-teal-800">Vite</span>
              <span className="pr-2 border-b-2 border-teal-800">Figma</span>
              <span className="pr-2 border-b-2 border-teal-800">
                Vector Database (FAISS)
              </span>
            </div>

            <div className="my-2 text-xl font-medium flex flex-wrap gap-4 text-wrap">
              <span className="pr-2 border-b-2 border-teal-800">C/C++</span>
              <span className="pr-2 border-b-2 border-teal-800">Python</span>
              <span className="pr-2 border-b-2 border-teal-800">Langchain</span>
              <span className="pr-2 border-b-2 border-teal-800">
                Huggingface
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
