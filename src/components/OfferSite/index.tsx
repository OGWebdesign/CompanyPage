import { useState } from "react"

export const OfferSite = () => {
    const [choice,setChoice] = useState(0)
    const activeTechnologie = choice ? "w-[10rem] h-[10rem] border-2 border-[#98f144] border-dashed" :" w-[9rem] h-[9rem] border-[#151515]"

    return (
        <>
            {/* Offer Program */}
            <div className="w-full h-[10rem] animate-fadeIn rounded-lg  flex">

                {/* Left Side */}
                <div className="w-full h-full grid grid-rows-1 grid-cols-4 place-content-center place-items-center">
                    <div onClick={()=> setChoice(1)} className={`${choice === 1 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className="w-[9rem] h-[9rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300">
                           <p className=" font-mono p-4">Website & Programming</p>
                        </div>
                    </div>
                    <div onClick={()=> setChoice(2)} className={`${choice === 2 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className="w-[9rem] h-[9rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300">
                           <p className=" font-mono p-4">Consulting & Administration</p>
                        </div>
                    </div>
                    <div onClick={()=> setChoice(3)} className={`${choice === 3 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className="w-[9rem] h-[9rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300">
                           <p className=" font-mono p-4">Artificial Intelligence</p>
                        </div>
                    </div>
                    <div onClick={()=> setChoice(4)} className={`${choice === 4 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className={"w-[9rem] h-[9rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300"}>
                           <p className=" font-mono p-4">Application Development</p>
                        </div>
                    </div>
                </div>






            </div>
        </>
    )
}