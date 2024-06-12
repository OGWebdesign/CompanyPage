import { useState } from "react"

const [activeButton1, setActiveButton1] = useState(false)
const [activeButton2, setActiveButton2] = useState(false)
const [activeButton3, setActiveButton3] = useState(false)
const [activeButton4, setActiveButton4] = useState(false)
const [activeButton5, setActiveButton5] = useState(false)

const buttonStyleActive = "bg-[#98f144]"
const buttonStyleInActive = "bg-[#151515]"




// description of switch selection
const modernDescription = "A modern design with a very intuitive, often minimalist user interface. This type of design is particularly suitable for young or technical companies."
const elegantDescription = "An elegant design is ideal for companies in the fashion or beauty industry or for art. However, this design language often requires high-quality photos."
const playfulDescription = "A playful design for the Spielemax. A particularly large number of effects and animations are a particularly common stylistic element here. A glowing button here, an expanding window there. Everything is possible."
const functionalDescription = "A functional design is the perfect design language for craft companies or companies in the automotive industry. Here, particular emphasis is placed on performance and simplicity. Particularly fast loading times of up to 50ms are possible."
const unconventionalDescription = "With an unconventional design, particular emphasis is placed on being different. This can appear very modern but also a little crazy. The aim of this design concept will be to create a particularly striking effect that will stay in the customer's mind."
// Switch Logic => One On and the other Off
const switchLogic = (number: number | boolean | ((prevState: boolean) => boolean)) => {
    if (number == 1) {
        setActiveButton1(!activeButton1)
        setActiveButton2(false)
        setActiveButton3(false)
        setActiveButton4(false)
        setActiveButton5(false)
    }

    if (number == 2) {
        setActiveButton1(false)
        setActiveButton2(!activeButton2)
        setActiveButton3(false)
        setActiveButton4(false)
        setActiveButton5(false)
    }


    if (number == 3) {
        setActiveButton1(false)
        setActiveButton2(false)
        setActiveButton3(!activeButton3)
        setActiveButton4(false)
        setActiveButton5(false)
    }

    if (number == 4) {
        setActiveButton1(false)
        setActiveButton2(false)
        setActiveButton3(false)
        setActiveButton4(!activeButton4)
        setActiveButton5(false)
    }


    if (number == 5) {
        setActiveButton1(false)
        setActiveButton2(false)
        setActiveButton3(false)
        setActiveButton4(false)
        setActiveButton5(!activeButton5)
    }
}

export const SwitchesWebsite = (props: {
    switchTitle1: string,
    switchTitle2: string,
    switchTitle3: string,
    switchTitle4: string,
}) => {
    return (
        <>
            <div className="w-full grid mobile:grid-rows-2 mobile:grid-cols-1 tablet:grid-rows-1 mt-10 tablet:grid-cols-2">
                <div>
                    <div className="w-1/2 flex  items-center my-2 ml-4">
                        <div className="w-[6rem]">
                            <div onClick={() => switchLogic(1)} className={`flex items-center h-8 w-14 border border-[#4d4d4d] duration-300 rounded-full ${activeButton1 ? buttonStyleActive : buttonStyleInActive}`}>
                                <div className={`w-8 h-8 bg-slate-200 rounded-full duration-300 ${activeButton1 ? "ml-6" : "ml-0"}`}></div>
                            </div>
                        </div>

                        <div className="w-3/4">
                            <p className="text-slate-200 font-mono font-semibold">modern</p>
                        </div>
                    </div>






                    <div className="w-1/2 flex items-center my-2 ml-4">
                        <div className="w-[6rem]">
                            <div onClick={() => switchLogic(2)} className={`flex items-center h-8 w-14 border border-[#4d4d4d] duration-300 rounded-full ${activeButton2 ? buttonStyleActive : buttonStyleInActive}`}>
                                <div className={`w-8 h-8 bg-slate-200 rounded-full duration-300 ${activeButton2 ? "ml-6" : "ml-0"}`}></div>
                            </div>
                        </div>

                        <div className="w-3/4">
                            <p className="text-slate-200 font-mono font-semibold">elegance</p>
                        </div>
                    </div>





                    <div className="w-1/2 flex items-center my-2 ml-4">
                        <div className="w-[6rem]">
                            <div onClick={() => switchLogic(3)} className={`flex items-center h-8 w-14 border border-[#4d4d4d] duration-300 rounded-full ${activeButton3 ? buttonStyleActive : buttonStyleInActive}`}>
                                <div className={`w-8 h-8 bg-slate-200 rounded-full duration-300 ${activeButton3 ? "ml-6" : "ml-0"}`}></div>
                            </div>
                        </div>

                        <div className="w-3/4">
                            <p className="text-slate-200 font-mono font-semibold">functional</p>
                        </div>
                    </div>






                    <div className="w-1/2 flex items-center my-2 ml-4">
                        <div className="w-[6rem]">
                            <div onClick={() => switchLogic(4)} className={`flex items-center h-8 w-14 border border-[#4d4d4d] duration-300 rounded-full ${activeButton4 ? buttonStyleActive : buttonStyleInActive}`}>
                                <div className={`w-8 h-8 bg-slate-200 rounded-full duration-300 ${activeButton4 ? "ml-6" : "ml-0"}`}></div>
                            </div>
                        </div>

                        <div className="w-3/4">
                            <p className="text-slate-200 font-mono font-semibold">unconventionel</p>
                        </div>
                    </div>





                    <div className="w-1/2 flex items-center my-2 ml-4">
                        <div className="w-[6rem]">
                            <div onClick={() => switchLogic(5)} className={`flex items-center h-8 w-14 border border-[#4d4d4d] duration-300 rounded-full ${activeButton5 ? buttonStyleActive : buttonStyleInActive}`}>
                                <div className={`w-8 h-8 bg-slate-200 rounded-full duration-300 ${activeButton5 ? "ml-6" : "ml-0"}`}></div>
                            </div>
                        </div>

                        <div className="w-3/4">
                            <p className="text-slate-200 font-mono font-semibold">playful</p>
                        </div>
                    </div>
                </div>


                {/* Secound Element of Grid with the description */}


                {/* Wrapper */}
                <div>
                    {activeButton1 && (
                        <p className="text-slate-200 p-4 mobile:p-8 font-mono font-semibold animate-fadeIn">
                            {modernDescription}
                        </p>
                    )}


                    {activeButton2 && (
                        <p className="text-slate-200 p-4 mobile:p-8 font-mono font-semibold animate-fadeIn">
                            {elegantDescription}
                        </p>
                    )}

                    {activeButton3 && (
                        <p className="text-slate-200 p-4 mobile:p-8 font-mono font-semibold animate-fadeIn">
                            {functionalDescription}
                        </p>
                    )}


                    {activeButton4 && (
                        <p className="text-slate-200 p-4 mobile:p-8 font-mono font-semibold animate-fadeIn">
                            {unconventionalDescription}
                        </p>
                    )}

                    {activeButton5 && (
                        <p className="text-slate-200 p-4 mobile:p-8 font-mono font-semibold animate-fadeIn">
                            {playfulDescription}
                        </p>
                    )}
                </div>



            </div>

        </>
    )
}