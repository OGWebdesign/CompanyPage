import { useState } from "react";

export const TechnologieCase = (props: {
    heading: string,
    name1: string,
    name2: string,
    name3: string,
    name4: string,
    eventTrigger1: () => void,
    eventTrigger2: () => void,
    eventTrigger3: () => void,
    eventTrigger4: () => void,
}) => {

    const activeEffect = "border-[#98f144] rounded-lg border-dashed"

    {/* States for TechnologieCard Select Effect */}
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);




    return (
        <>
            <h1 className="text-[1.3rem] text-[#98f144] text-center mb-[3rem] font-mono mt-[3rem]">{props.heading}</h1>
            {/* Grid Layout for Technologie Kind*/}
            <div className="tablet:w-[80%] mobile:w-full grid mobile:grid-rows-2 duration-500 gap-5 mobile:grid-cols-2 tablet:grid-rows-1 tablet:grid-cols-4 place-content-center place-items-center">

                {/* Wrapper for GridItem */}
                <div onClick={() => {
                    props.eventTrigger1();
                    setActive1(!active1);
                    setActive2(false);
                    setActive3(false);
                    setActive4(false);
                }} 
                     className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${active1 && activeEffect } `}>
                    <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">{props.name1}</div>
                </div>


                {/* Wrapper for GridItem */}
                <div onClick={() => {
                    props.eventTrigger2();
                    setActive1(false);
                    setActive2(!active2);
                    setActive3(false);
                    setActive4(false);
                     }}  className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${active2 && activeEffect } `}>
                    <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">{props.name2}</div>
                </div>


                {/* Wrapper for GridItem */}
                <div onClick={() => {
                    props.eventTrigger3();
                    setActive1(false);
                    setActive2(false);
                    setActive3(!active3);
                    setActive4(false);
                     }}  className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${active3 && activeEffect } `}>
                    <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">{props.name3}</div>
                </div>


                {/* Wrapper for GridItem */}
                <div onClick={() => {
                    props.eventTrigger4();
                    setActive1(false);
                    setActive2(false);
                    setActive3(false);
                    setActive4(!active4);
                     }}  className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${active4 && activeEffect } `}>
                    <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">{props.name4}</div>
                </div>
            </div>
        </>
    )
}