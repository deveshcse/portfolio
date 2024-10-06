const Skills = () => {
  return (
    <div>
      <div className="m-2 p-2 grid grid-rows-3 gap-2">
        <div className="row-span-1 gap-2 md:flex justify-center ">
          <div className=" bg-red-700 inline-block ">
            <span className="text-xl bg-slate-900 font-medium  text-white">
              Front-end
            </span>
            <div className="h-1 bg-blue-900"></div>
          </div>
          <div className="">
            <h2 className="text-4xl font-semibold my-2">JavaScript</h2>
            <div className="text-xl font-medium flex flex-wrap gap-4">
              <span className=" pr-2 border-b-2 border-rose-400">React</span>
              <span className="pr-2 border-b-2 border-rose-400">Next.js</span>
              <span className="pr-2 border-b-2 border-rose-400">
                TypeScript
              </span>
              <span className="pr-2 border-b-2 border-rose-400">Redux</span>
              <span className="pr-2 border-b-2 border-rose-400">
                Framer Motion
              </span>
            </div>

            <h2 className="text-4xl font-semibold my-2">HTML & CSS </h2>
            <div className="text-xl font-medium flex flex-wrap gap-4">
              <span className="pr-2 border-b-2 border-rose-400">
                TailwindCSS
              </span>
              <span className="pr-2 border-b-2 border-rose-400">Bootstrap</span>
              <span className="pr-2 border-b-2 border-rose-400">
                MaterialUI
              </span>
              <span className="pr-2 border-b-2 border-rose-400">Shadcn/ui</span>
            </div>
          </div>
        </div>
        <div className="mt-2 row-span-1 gap-2 md:flex justify-center ">
          <div className=" bg-red-700 inline-block ">
            <span className="text-xl bg-slate-900 font-medium  text-white">
              Back-end
            </span>
            <div className="h-1 bg-blue-900"></div>
          </div>
          <div className="">
            <div className="mt-2 text-xl font-medium flex flex-wrap gap-4">
              <span className=" pr-2 border-b-2 border-rose-400">Node.js</span>
              <span className="pr-2 border-b-2 border-rose-400">Express.js</span>
              <span className="pr-2 border-b-2 border-rose-400">
                MySQL
              </span>
              <span className="pr-2 border-b-2 border-rose-400">Firebase</span>
              <span className="pr-2 border-b-2 border-rose-400">
                MongoDB
              </span>

              <span className="pr-2 border-b-2 border-rose-400">
                Amazon Web Services (AWS)
              </span>
              <span className="pr-2 border-b-2 border-rose-400">Flask (Python)</span>

            </div>


              
          
          </div>
        </div>



      </div>
    </div>
  );
};

export default Skills;
