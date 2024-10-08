import { useState } from "react";
import { RequestContent } from "../RequestContent";
import { ProblemContent } from "../ProblemContent";


export const Helpcenter = (props:{
    aboutUsLink?:() => void,
    requestLink?:() => void,
    mailLink?:() => void,
    imprintLink?:() => void,
    dataSecureLink?:() => void,
    startLink?:() => void,
    contactShift:() => void,
    requestShift: () => void,
}) => {

    const[requestActive, setRequestActive] = useState<boolean>(false);
    const[problemActive, setProblemActive] = useState<boolean>(false);
    const activeProblemKindSelector = "bg-[#88ff27] text-black tablet:w-[10rem] tablet:h-[10rem] mobile:w-[9rem] mobile:h-[9rem] ";

    const handleRequest = () => {
        setRequestActive(true);
        setProblemActive(false);
    }

    const handleProblem = () => {
        setRequestActive(false);
        setProblemActive(true);
    }
    
    return (
        // Layoutwrapper
        <div className="w-full flex justify-center items-center flex-col bg-black">
            <div className="laptop:w-3/4 p-3 mobile:w-full flex justify-center items-center flex-col">
                <div className="font-sharemono mt-[10%] mb-[5%]">
                    <p className="font-bold text-white mobile:text-[2rem] tablet:text-[3rem]">Willkommen im Hilfecenter</p>
                    <p className="tablet:w-1/2  text-slate-300 mt-5 text-[1rem]">Haben Sie Schwierigkeiten sich zurecht zu finden oder benötigen Sie Hilfe bei einer Anfrage ? Kein Problem! Hier finden Sie eine Übersicht zur Navigation oder Unterstützung bei Ihrer Anfrage.</p>
                </div>
                <p className="text-slate-300 text-[1.2rem] font-sharemono mt-20">Wobei benötigen Sie Hilfe ?</p>
                {/*Begin Helpcenter*/}
                <div className="h-[10rem] w-full flex justify-center animate-fadeIn mt-20">

                    <div className="w-[50rem] h-[10rem] gap-14 text-[1.1rem] text-black font-sharemono  font-semibold rounded-2xl flex justify-center items-center">
                        <div onClick={handleRequest} className={`${requestActive ? activeProblemKindSelector:"text-white border-2 border-dashed w-[7rem] h-[7rem]"} hover:scale-105 duration-300 rounded-2xl hover:bg-[#88ff27] hover:text-black hover:border-none flex justify-center items-center`}>
                            <p>Anfrage</p>
                        </div>
                        <div onClick={handleProblem} className={`${problemActive ? activeProblemKindSelector:"text-white border-2 border-dashed w-[7rem] h-[7rem]" }   hover:scale-105 duration-300 rounded-2xl hover:bg-[#88ff27] hover:text-black hover:border-none flex justify-center items-center`}>
                            <p>Navigation</p>
                        </div>
                    </div>
                </div>
                <div className="w-full justify-center items-center mt-10">
                    {/**Dynamic Component Content. */}
                    {requestActive && (<RequestContent requestShift={props.requestShift} contactShift={props.contactShift} ></RequestContent>)}
                    {problemActive && (<ProblemContent startLink={props.startLink} requestLink={props.requestLink} mailLink={props.mailLink} imprintLink={props.imprintLink} aboutUsLink={props.aboutUsLink} dataSecureLink={props.dataSecureLink}></ProblemContent>)}
                </div>
            </div>
        </div>
    );
}