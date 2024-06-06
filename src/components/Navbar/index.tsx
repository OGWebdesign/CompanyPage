import { useState } from "react"
import { HomeIcon } from "../Icons"

export const Navbar = (props:{
    indicator?:number
}) => {
   
    // state for animation
    const [visible, setVisible] = useState(false) // state for Nav Bar scroll out effect

    // tailwind css for visible style sheet
    const visibleStyle = "h-[20rem]"
    // tailwind css for notvisible style sheet
    const notVisibleStyle = "h-0"
    // Icon rotation by scroll out activation
    const rotation = visible ? "fill-[#98f144]" : "rotate-90 fill-slate-300"
    // indicator change per state
    const indicator = visible ? "on":"off"
    // Text color indicator change per state
    const textindicator = visible ? "text-slate-200":"text-[#777777]"
    // make border unvisible in unwrap state
    const bordervisibility = visible ? "opacity-100 border-2":"opacity-0 border-none"
    const stroke = visible ? "w-[20rem] opacity-100":"w-0 opacity-0"
    const homeActive = props.indicator == 1 ? "border-b-8 border-[#98f144] text-slate-200 ": "hover:border-b-8 hover:border-b-slate-200 text-[#747474]"
    const companyActive = props.indicator == 2 ? "border-b-8 border-[#98f144] text-slate-200 ": "hover:border-b-8 hover:border-b-slate-200 text-[#747474]"
    const offerActive = props.indicator == 3 ? "border-b-8 border-[#98f144] text-slate-200 ": "hover:border-b-8 hover:border-b-slate-200 text-[#747474]"

    
    





    // start component build
    return (
        // Navbar extansion for scroll out (scroll out wrapper) <-- auto hight
        <div className="w-full duration-500 flex flex-col ">

            {/* Navbar Item Wrapper */}
            <div className="w-full flex justify-between duration-500">

                {/* Navbar Logo Wrapper */}
                <div className="tablet:w-1/2 duration-500">

                    {/* Navbar Logo */}
                    <img
                        className="mobile:w-28 mobile:h-28 tablet:w-36 mobile:m-4 mobile:scale-110 tablet:h-36 desktop:w-36 desktop:h-36 duration-500"
                        src="logo.png" alt="logoGraphic" />
                </div>


                {/* Navbar Item Layout */}
                <div className="mobile:w-[7rem] tablet:w-[20rem] desktop:w-[40rem] flex justify-between items-center">

                    {/* Navbar Item I */}
                    <a className={`${homeActive} mobile:-z-10 tablet:-z-10 desktop:z-0 flex justify-center items-center mobile:w-[0rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                    mobile:opacity-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`} href="/">Home</a>

                    {/* Navbar Item II */}
                    <a className={`${companyActive} mobile:-z-10 tablet:-z-10 desktop:z-0 flex justify-center items-center tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                    mobile:opacity-0 mobile:w-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`} href="/">Company</a>

                    {/* Navbar Item III */}
                    <a className={`${offerActive} mobile:-z-10 tablet:-z-10 desktop:z-0 flex justify-center items-center mobile:w-[0rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                     mobile:opacity-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`} href="/">Offer</a>

                    {/* Burger Menu Button */}
                    <div  onClick={() => setVisible(!visible)} className=" w-20 h-16 rounded-xl duration-300 mobile:opacity-100 tablet:opacity-100 desktop:opacity-0 flex flex-col justify-center items-center hover:cursor-pointer ">
                        <HomeIcon className={`w-8 h-8 ${rotation} duration-300  hover:fill-[#98f144] flex`}></HomeIcon>
                        <p className={` ${textindicator} text-[#777777] font-mono`}>{indicator}</p>
                    </div>
                </div>
            </div>


            {/* Croll Bar Wrapper */}
            <div className={`w-full mobile:opacity-100 tablet:opacity-100 desktop:opacity-0 desktop:h-0 flex flex-col justify-center items-center ${visible ? visibleStyle : notVisibleStyle} duration-300 bg-[#151515]`}>
                {/* Croll Bar Item I */}
                <a className={`my-5 ${bordervisibility} text-[#747474] w-[10rem] text-center font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-[#151515] hover:border-[#98f144] rounded-lg overflow-hidden`}
                    href="/">Start</a>
                {/* Croll Bar Item II */}
                <a className={`my-5 ${bordervisibility} text-[#747474] w-[10rem] text-center  font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-[#151515] hover:border-[#98f144] rounded-lg overflow-hidden`}
                    href="/">Company</a>
                {/* Croll Bar Item III */}
                <a className={`my-5 ${bordervisibility}  text-[#747474] w-[10rem] text-center font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-[#151515] hover:border-[#98f144] rounded-lg overflow-hidden`}
                    href="/contact">Offer</a>
                <div className="w-full h-5  flex justify-center text-[0.8rem] mt-10 items-center text-[#858585] overflow-hidden font-mono">
                    <a className="p-3 mx-3 hover:text-[#98f144]" href="">Imprint</a>
                    <a className="p-3 mx-3 hover:text-[#98f144]" href="">Privacy</a>
                    <a className="p-3 mx-3 hover:text-[#98f144]" href="/contact">Contact</a>
                </div>
                <div className={`${stroke} duration-500 mt-5  border-2 rounded-full mb-5`}></div>
            </div>
        </div> // End
    )
}