import { motion } from "framer-motion";

export const EmployeeCard = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center ">

        <div className="w-full z-30 desktop:max-w-[80rem] items-center flex flex-col cursor-none duration-300  rounded-2xl p-6 justify-center font-mono border-white">
          {/* Left Side */}

          <div className=" flex rounded-xl laptop:flex-row group mobile:justify-center mobile:items-center mobile:flex-col-reverse mt-[10%] duration-500">
            <div className="text-slate-200 w-full py-5">
              <p className="font-mono font-bold text-[3rem] mobile:text-[2rem] text-[#98f144] ">
                Hi, I'm Nils.
              </p>
              <motion.p className="text-[1rem] mt-[1.5rem]">
              Informatik fasziniert mich schon seit jeher. Ich wollte immer verstehen, wie Computer und Programme darauf funktionieren. Besonders die Welt des Webs fesselt mich. Fast nichts ist unmöglich, und die Möglichkeiten werden immer vielfältiger. Max und ich haben uns während unseres Studiums kennengelernt und beschlossen, gemeinsam eine Firma zu gründen, um unsere Ideen und Visionen zu verwirklichen. Ob große oder kleine Webseiten/Web-Apps, Beratung, Bots oder KI-Schnittstellen – wir sind für Sie da.
              </motion.p>
            </div>
            <div className="relative w-full flex justify-end mobile:justify-center items-center ">
              {/** ------------------------------PLACE KOSMONAUT HERE------------------------------ */}

              <img
                src="/graphics/nils.jpg"
                alt="Astronaut"
                className=" z-50 w-[20rem] rounded-xl shadow-[0_20px_50px_rgba(39.22,25.49,64.71,_0.7)] border-white"
              />
              <div className="w-[20.5rem] h-[15rem] tablet:right-[30%] top-0 right-[1rem] animate-spotUp  z-30  bg-[#29e36d] absolute rounded-[30rem] blur-xl "></div>
              <div className="w-[20.5rem] h-[15rem] tablet:right-[30%] bottom-0 right-[1rem] animate-spotDown  z-30  mt-[20rem] bg-[#6f27eb] absolute rounded-[30rem] blur-xl"></div>
            </div>
          </div>

          {/* Right Side */}
          <div className=" flex laptop:flex-row group mobile:flex-col mobile:justify-center mobile:items-center duration-500 mt-[10%]">
            <div className="relative w-full flex justify-start mobile:justify-center items-center py-5">
              {/** ------------------------------PLACE KOSMONAUT HERE------------------------------ */}
              <img
                src="/graphics/max.jpg"
                alt="Astronaut"
                className=" z-50 w-[21rem] rounded-xl shadow-[0_20px_50px_rgba(8,_152,_184,_0.7)]  border-white"
              />
              <div className="w-[20.5rem] h-[15rem] tablet:left-[30%] animate-spotUp top-0 left-[2rem] z-30  bg-[#29e36d] absolute rounded-[30rem] blur-xl "></div>
              <div className="w-[20.5rem] h-[15rem] tablet:left-[30%] animate-spotDown bottom-0 left-[2rem] z-30  mt-[20rem] bg-[#6f27eb] absolute rounded-[30rem] blur-xl"></div>
            </div>
            <div className="text-slate-200 w-full py-5 z-30">
              <p className="font-mono font-bold text-[3rem] mobile:text-[2rem] text-[#98f144] ">
                Hi, I'm Max.
              </p>
              <motion.p className="text-[1rem] mobile:text- mt-[1.5rem]">
              Ich bin ein leidenschaftlicher Programmierer und habe nach meinem aktiven Dienst als Soldat beschlossen, Informatik zu studieren und mit Nils an meiner Seite unser eigenes Unternehmen in der Web- und Anwendungsentwicklung zu gründen. Ich habe viel Erfahrung mit Webanwendungen und Frontend-Entwicklung, bin aber auch mit Bot-Netzwerken und Schnittstellen für Künstliche Intelligenz vertraut. Ob React, TypeScript, Java oder C# – wir verfügen über umfangreiche Erfahrung in verschiedenen Frontend- und Backend-Technologien und haben alles programmiert, von kleinen Webanwendungen oder Websites bis hin zu kooperativen App-Entwicklungsprojekten im Gesundheitssektor.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
