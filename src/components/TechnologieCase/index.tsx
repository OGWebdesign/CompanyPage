import { useState } from "react"

const [activeOffer, setActiveOffer] = useState(0)
const activeOfferStyle = "border rounded-lg border-dashed border-[#98f144] border-2"




export const TechnologieCase = (props: {
    headline: string,
    name1: string,
    name2: string,
    name3: string,
    name4: string
}) => {

    return (
        <>
            <h1 className="text-[1.3rem] text-[#98f144] text-center mb-[3rem] font-mono">Configure your own offer with us.</h1>
            {/* Grid Layout for Technologie Kind*/}
            <div className="tablet:w-[80%] mobile:w-full grid mobile:grid-rows-2 duration-500 gap-5 mobile:grid-cols-2 tablet:grid-rows-1 tablet:grid-cols-4 place-content-center place-items-center">

                {/* Wrapper for GridItem */}
                <div onClick={() => setActiveOffer(1)} className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${activeOffer == 1 && activeOfferStyle}`}>
                    <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">Web Application</div>
                </div>


                {/* Wrapper for GridItem */}
                <div onClick={() => setActiveOffer(2)} className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${activeOffer == 2 && activeOfferStyle}`}>
                    <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">Websites</div>
                </div>


                {/* Wrapper for GridItem */}
                <div onClick={() => setActiveOffer(3)} className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${activeOffer == 3 && activeOfferStyle}`}>
                    <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">Consulting</div>
                </div>


                {/* Wrapper for GridItem */}
                <div onClick={() => setActiveOffer(4)} className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${activeOffer == 4 && activeOfferStyle}`}>
                    <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">Bot & AI</div>
                </div>
            </div>
        </>
    )
}