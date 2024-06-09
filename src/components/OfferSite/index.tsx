import { useState } from "react"

export const OfferSite = (props: {



}) => {
    const [choice,setChoice] = useState(null)


    return (
        <>
            {/* Offer Program */}
            <div className="w-full h-[10rem] animate-fadeIn rounded-lg  flex">

                {/* Left Side */}
                <div className="w-full h-full grid grid-rows-1 grid-cols-4 place-content-center place-items-center">
                    <div className="w-[10rem] h-[10rem] flex justify-center items-center border-2 border-[#151515] border-dashed rounded-xl p-slate-200 m-5" >
                        <div className="w-[9rem] text-slate-200 h-[9rem] rounded-[50%] hover:text-[#151515] hover:font-bold bg-[#151515] flex justify-center items-center hover:rounded-[10px] hover:bg-[#98f144] duration-300">
                           <p className=" font-mono p-4">Website & Programming</p>
                        </div>
                    </div>
                    <div className="w-[10rem] h-[10rem] flex justify-center items-center border-2 border-[#151515] border-dashed rounded-xl p-slate-200 m-5" >
                        <div className="w-[9rem] text-slate-200 h-[9rem] rounded-[50%] hover:text-[#151515] hover:font-bold bg-[#151515] flex justify-center items-center hover:rounded-[10px] hover:bg-[#98f144] duration-300">
                           <p className=" font-mono p-4">Consulting & Administration</p>
                        </div>
                    </div>
                    <div className="w-[10rem] h-[10rem] flex justify-center items-center border-2 border-[#151515] border-dashed rounded-xl p-slate-200 m-5" >
                        <div className="w-[9rem] text-slate-200 h-[9rem] rounded-[50%] hover:text-[#151515] hover:font-bold bg-[#151515] flex justify-center items-center hover:rounded-[10px] hover:bg-[#98f144] duration-300">
                           <p className=" font-mono p-4">Artificial Intelligence</p>
                        </div>
                    </div>
                    <div className="w-[10rem] h-[10rem] flex justify-center items-center border-2 border-[#151515] border-dashed rounded-xl p-slate-200 m-5" >
                        <div className="w-[9rem] text-slate-200 h-[9rem] rounded-[50%] hover:text-[#151515] hover:font-bold bg-[#151515] flex justify-center items-center hover:rounded-[10px] hover:bg-[#98f144] duration-300">
                           <p className=" font-mono p-4">Application Development</p>
                        </div>
                    </div>
                </div>






            </div>
        </>
    )
}