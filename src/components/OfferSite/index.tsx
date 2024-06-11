import { useState } from "react"

export const OfferSite = () => {
    const [choice,setChoice] = useState(0)
    const activeTechnologie = choice ? "tablet:w-[10rem] mobile:w-[6rem] tablet:h-[10rem] mobile:h-[6rem] border-2 border-[#98f144] border-dashed" :" w-[9rem] h-[9rem] border-[#151515]"

    return (
        <>
            {/* Offer Program */}
            <h1 className="w-full flex justify-center items-center mt-10 mb-4  font-mono text-[#98f144] font-semibold text-[1.3rem]">Konfigurieren Sie sich ein Angebot</h1>
            <p className="text-slate-200 mb-10 mobile:text-[0.8rem] tablet:text-[1rem] text-center p-4">The configuration process does not represent an ordering process, but serves merely as an overview of the offer and a rough estimate of the expected costs and serves to get an initial idea of ​​your project idea when you contact us.</p>
            <div className="w-full flex-col justify-center items-center h-[10rem] animate-fadeIn rounded-lg">

                <div className="w-full">
                    <p></p>
                </div>
                <div className="w-full h-full grid grid-rows-1 grid-cols-4 place-content-center place-items-center">
                    <div onClick={()=> setChoice(1)} className={`${choice === 1 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className="tablet:w-[9rem] tablet:h-[9rem] mobile:w-[5rem] mobile:h-[5rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300">
                           <p className=" font-mono mobile:text-[0.56rem] tablet:text-[1.1rem] mobile:font-semibold p-5">Website & Programming</p>
                        </div>
                    </div>
                    <div onClick={()=> setChoice(2)} className={`${choice === 2 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className="tablet:w-[9rem] tablet:h-[9rem] mobile:w-[5rem] mobile:h-[5rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300">
                           <p className=" font-mono mobile:text-[0.56rem] tablet:text-[1.1rem] mobile:font-semibold p-5">Consulting & Administration</p>
                        </div>
                    </div>
                    <div onClick={()=> setChoice(3)} className={`${choice === 3 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className="tablet:w-[9rem] tablet:h-[9rem] mobile:w-[5rem] mobile:h-[5rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300">
                           <p className=" font-mono mobile:text-[0.56rem] tablet:text-[1.1rem] mobile:font-semibold p-5">Artificial Intelligence</p>
                        </div>
                    </div>
                    <div onClick={()=> setChoice(4)} className={`${choice === 4 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className={"tablet:w-[9rem] tablet:h-[9rem] mobile:w-[5rem] mobile:h-[5rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300"}>
                           <p className=" font-mono mobile:text-[0.56rem] tablet:text-[1.1rem] mobile:font-semibold p-5">Application Development</p>
                        </div>
                    </div>
                </div>






            </div>
        </>
    )
}