import { EmailIcon } from "./Icons";

export const Impressum = () => {
  return (
    <div className="animate-fadeIn">
      
    
        <div className="w-full flex laptop:flex-row mobile:flex-col justify-center items-center h-full font-mono my-[15rem] ">
             {/* CARD UPPER LEFT */}
            <div className="w-[16rem] h-[28rem] bg-slate-200 shadow-lg rounded-lg transform mobile:-translate-y-0 laptop:-translate-y-10 z-10 
            flex flex-col items-center border-r border-r-[#151515] border-b border-b-[#151515]">
                <h1 className=" my-4 text-[1.5rem] text-[#151515] bg-[#98f144] p-1">Ich 1</h1>
                <div className="flex flex-col items-start px-5 py-2 ">

                    <p className="text-[#151515] text-[1rem] text-left w-full mb-2">
                        <span className="font-bold text-[1.1rem] border-b-2 border-b-[#98f144]">Name:</span> 
                        {" "} Nils-Ole Otto
                    </p>

                    <p className="text-[#151515] text-[1rem] text-center w-full mb-2">
                        <span className="font-bold text-[1.1rem] bg-[#98f144]">Adresse</span> 
                        <br/>
                        Puffstraße 18, 03046 Cottbus
                    </p>

                    <p className="text-[#151515] text-[1rem] text-left w-full mb-2">
                        <span className="font-bold text-[1.1rem] border-b-2 border-b-[#98f144]">Telefon:</span> 
                        {" "} 015570271669
                    </p>

                    <p className="text-[#151515] text-[1rem] text-center w-full mb-2">
                        <span className="font-bold text-[1.1rem] bg-[#98f144]">E-Mail</span> 
                        <br/> 
                        info@og-webdesign.de
                    </p>                  
                </div>

                <div className="w-[16rem] py-[3.2rem] bg-cover shadow-lg rounded-lg  flex justify-center items-center bg-[#151515]">
                        <div className="flex flex-col justify-center items-center ">
                        <EmailIcon className="w-16 h-16 opacity-60 rounded-[3rem] shadow-custom-green p-2 duration-300 fill-[#98f144]"/>
                        </div>
                </div>
                
             {/* CARD CENTER */} 
            </div>
            <div className="mobile:w-[20rem] tablet:w-[25rem] h-[35rem] bg-slate-200 shadow-lg rounded-lg transform translate-y-20 mobile:ml-0 laptop:-ml-[1.5rem] mobile:mt-[5rem] laptop:mt-0">
                <div className="flex flex-col items-center px-5 py-5">
                    <h3 className="text-[1.7rem] bg-[#98f144]">Rechtliches</h3>
                    <ul className="flex flex-col justify-center items-center mr-[4rem] mt-[2rem]">
                        <li className="w-[80%] mb-[1rem]"><span className="font-bold">Umsatzsteuer-ID:</span>5382103</li>
                        <li className="w-[80%] mb-[1rem]"><span className="font-bold">EU-Streitschlichtung:</span> <br/>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung 
                        zur Verfügung: <a href="" className="bg-[#98f144]">Link</a>  </li>
                        <li className="w-[80%]"><span className="font-bold">Verbraucherstreitbeteiligung/
                        Universalschlichtungsstelle:</span> <br/>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeteiligungsverfahren vor einer Verbraucherschlichtungsstelle 
                        teilzunehmen</li>
                    </ul>
                </div>
            </div>

            {/* CARD UPPER RIGHT */}
            <div className="w-[16rem] h-[28rem] bg-slate-200 border-l border-l-[#151515] shadow-lg rounded-lg  
             laptop:-translate-y-48 laptop:-translate-x-6 z-10 mobile:-translate-x-0  mobile:translate-y-0 mobile:mt-[15rem] laptop:mt-0
             flex flex-col items-center "> 
            <h1 className=" my-4 text-[1.5rem] text-[#151515] bg-[#98f144] p-1">Ich 2</h1>
                <div className="flex flex-col items-start px-5 py-2   ">

                    <p className="text-[#151515] text-[1rem] text-left w-full mb-2">
                        <span className="font-bold text-[1.1rem] border-b-2 border-b-[#98f144]">Name:</span> 
                        {" "} Maximilian Gorn
                    </p>

                    <p className="text-[#151515] text-[1rem] text-center w-full mb-2">
                        <span className="font-bold text-[1.1rem] bg-[#98f144]">Adresse</span> 
                        <br/>
                        Puffstraße 18, 03046 Cottbus
                    </p>

                    <p className="text-[#151515] text-[1rem] text-left w-full mb-2">
                        <span className="font-bold text-[1.1rem] border-b-2 border-b-[#98f144]">Telefon:</span> 
                        {" "} 017646026146
                    </p>

                    <p className="text-[#151515] text-[1rem] text-center w-full mb-2">
                        <span className="font-bold text-[1.1rem] bg-[#98f144]">E-Mail</span> 
                        <br/> 
                        info@og-webdesign.de
                    </p>        

                </div>
                
                <div className="w-[16rem] py-[4rem] bg-cover shadow-lg rounded-lg  flex justify-center items-center bg-[#151515]">
                        <div className="flex flex-col justify-center items-center ">
                        <EmailIcon className="w-16 h-16 opacity-60 rounded-[3rem] shadow-custom-green p-2 duration-300 fill-[#98f144]"/>
                        </div>
                    </div>
            </div>
        </div>
    </div>

  );
}