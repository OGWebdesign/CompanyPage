import { motion } from "framer-motion";

export const EmployeeCard = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center ">

        <div className="w-full z-30 desktop:max-w-[80rem] items-center flex flex-col cursor-none duration-300  rounded-2xl p-6 justify-center font-mono border-white">
          {/* Left Side */}

          <div className=" flex rounded-xl laptop:flex-row group mobile:justify-center mobile:items-center mobile:flex-col-reverse mt-[10%] duration-500">
            <div className="text-slate-200 w-full p-5">
              <p className="font-mono font-bold text-[3rem] text-[#98f144] ">
                Hi, I'm Nils.
              </p>
              <motion.p className="text-[1rem] mt-[1.5rem]">
                Informatics has fascinated me ever since. I always wanted to
                understand how computers and programs work on them. The world of
                the web, in particular, captivates me. Almost nothing is
                impossible, and the possibilities are becoming increasingly
                diverse. Max and I met during our studies and decided to start a
                company together to realize our ideas and visions. Whether it's
                large or small websites/web apps, consulting, bots, or AI
                interfaces, we are here for you.
              </motion.p>
              <div className="w-[8rem] text-[#151515] text-center cursor-none select-none border-none bg-[#98f144] font-semibold mt-8 py-2 px-4 rounded-lg hover:bg-[#6ba039] font-mono transition duration-300 ease-in-out">
                My skills
              </div>
            </div>
            <div className="relative w-full flex justify-end items-center p-5"> 
              {/** ------------------------------PLACE KOSMONAUT HERE------------------------------ */}
              
              <img
                src="/graphics/nils.jpg"
                alt="Astronaut"
                className=" z-50 w-[20rem] rounded-xl shadow-[0_20px_50px_rgba(39.22,25.49,64.71,_0.7)] border-white"
              />
              <div className="w-[20.5rem] h-[15rem] top-0 right-[1rem] animate-spotUp  z-30  bg-[#29e36d] absolute rounded-[30rem] blur-xl "></div>
              <div className="w-[20.5rem] h-[15rem] bottom-0 right-[1rem] animate-spotDown  z-30  mt-[20rem] bg-[#6f27eb] absolute rounded-[30rem] blur-xl"></div>
            </div>
          </div> 

          {/* Right Side */}
          <div className=" flex laptop:flex-row group mobile:flex-col mobile:justify-center mobile:items-center duration-500 mt-[10%]">
          <div className="relative w-full flex justify-start items-center p-5"> 
              {/** ------------------------------PLACE KOSMONAUT HERE------------------------------ */}
              <img
                src="/graphics/max.jpg"
                alt="Astronaut"
                className=" z-50 w-[21rem] rounded-xl shadow-[0_20px_50px_rgba(8,_152,_184,_0.7)]  border-white"
              />
              <div className="w-[20.5rem] h-[15rem] animate-spotUp top-0 left-[2rem] z-30  bg-[#29e36d] absolute rounded-[30rem] blur-xl "></div>
              <div className="w-[20.5rem] h-[15rem] animate-spotDown bottom-0 left-[2rem] z-30  mt-[20rem] bg-[#6f27eb] absolute rounded-[30rem] blur-xl"></div>
            </div>
            <div className="text-slate-200 w-full p-5 z-30">
              <p className="font-mono font-bold text-[3rem] text-[#98f144] ">
                Hi, I'm Max.
              </p>
              <motion.p className="text-[1rem] mt-[1.5rem]">
              I am a passionate programmer and after my active service as a
                soldier I decided to study computer science and start my own
                business in web and application development. I have a lot of
                experience in web applications and frontend development, but I
                am also familiar with bot networks and interfaces for artificial
                intelligence. Be it React, Typescript, Java or C#. We have
                extensive experience in various front- and back-end technologies
                and have programmed everything from small web applications or
                websites to cooperative app development projects with the
                healthcare sector.
              </motion.p>
              <div className="w-[8rem] text-[#151515] text-center cursor-none select-none border-none bg-[#98f144] font-semibold mt-8 py-2 px-4 rounded-lg hover:bg-[#6ba039] font-mono transition duration-300 ease-in-out">
                My skills
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
};
