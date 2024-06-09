import { useState } from "react";
import Cursor from "../components/Cursor";
import { Footer } from "../components/Footer";
import { HomeIcon } from "../components/Icons";
import { CompanySite } from "../components/CompanySite";
import { ContactSite } from "../components/ContactSite";
import { StartSite } from "../components/StartSite";





function App() {
   // state for animation
   const [visible, setVisible] = useState(false) // state for Nav Bar scroll out effect
   const [indicatorNav, setIndicatorNav] = useState(1)
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
   const homeActive = indicatorNav == 1 ? "border-b-8 border-[#98f144] text-slate-200 ": "hover:border-b-8 hover:border-b-slate-200 text-[#747474]"
   const companyActive = indicatorNav == 2 ? "border-b-8 border-[#98f144] text-slate-200 ": "hover:border-b-8 hover:border-b-slate-200 text-[#747474]"
   const offerActive = indicatorNav == 3 ? "border-b-8 border-[#98f144] text-slate-200 ": "hover:border-b-8 hover:border-b-slate-200 text-[#747474]"

   
   return (
    <>
      {/* Wrapper */}
      <Cursor></Cursor>
      <div className="w-full bg-[#151515] cursor-none">
        <div className="w-full flex justify-center ">

          {/* Start Page Layout */}
          <div className="w-full mobile:p-2 tablet:px-5 bg-[#151515] flex justify-center items-center">
            <div className="mobile:w-full tablet:w-full desktop:w-[75%] desktop-xl:w-[45%]">
            
        <div className="w-full duration-500 flex flex-col cursor-none ">

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
                <div  className="mobile:w-[7rem] tablet:w-[20rem] desktop:w-[40rem] flex justify-between items-center">

                    {/* Navbar Item I */}
                    <div onClick={()=>setIndicatorNav(1)} className={`${homeActive} mobile:-z-10 cursor-none tablet:-z-10 desktop:z-0 flex justify-center items-center mobile:w-[0rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                    mobile:opacity-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`} >Home</div>

                    {/* Navbar Item II */}
                    <div onClick={()=>setIndicatorNav(2)} className={`${companyActive} mobile:-z-10 cursor-none tablet:-z-10 desktop:z-0 flex justify-center items-center tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                    mobile:opacity-0 mobile:w-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`} >Company</div>

                    {/* Navbar Item III */}
                    <div className={`${offerActive} mobile:-z-10 cursor-none tablet:-z-10 desktop:z-0 flex justify-center items-center mobile:w-[0rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                     mobile:opacity-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`} >Offer</div>

                    {/* Burger Menu Button */}
                    <div  onClick={() => setVisible(!visible)} className=" w-20 h-16 rounded-xl duration-300 mobile:opacity-100 tablet:opacity-100 desktop:opacity-0 flex flex-col justify-center items-center  ">
                        <HomeIcon className={`w-8 h-8 ${rotation} duration-300  hover:fill-[#98f144] flex`}></HomeIcon>
                        <p className={` ${textindicator} text-[#777777] font-mono`}>{indicator}</p>
                    </div>
                </div>
            </div>


            {/* Croll Bar Wrapper */}
            <div className={`w-full mobile:opacity-100 tablet:opacity-100 desktop:opacity-0 desktop:h-0 flex flex-col justify-center items-center ${visible ? visibleStyle : notVisibleStyle} duration-300 bg-[#151515]`}>
                {/* Croll Bar Item I */}
                <div className={`my-5 ${bordervisibility} text-[#747474] cursor-none w-[10rem] text-center font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-[#151515] hover:border-[#98f144] rounded-lg overflow-hidden`}
                 onClick={()=>setIndicatorNav(1)}>Start</div>
                {/* Croll Bar Item II */}
                <div className={`my-5 ${bordervisibility} text-[#747474] cursor-none w-[10rem] text-center  font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-[#151515] hover:border-[#98f144] rounded-lg overflow-hidden`}
                  onClick={()=>setIndicatorNav(2)}>Company</div>
                {/* Croll Bar Item III */}
                <div className={`my-5 ${bordervisibility}  text-[#747474] cursor-none w-[10rem] text-center font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-[#151515] hover:border-[#98f144] rounded-lg overflow-hidden`}
                    onClick={()=>setIndicatorNav(3)}>Offer</div>
                <div className="w-full h-5  flex justify-center text-[0.8rem] mt-10 items-center text-[#858585] overflow-hidden font-mono">
                    <div className="p-3 mx-3 cursor-none hover:text-[#98f144]" >Imprint</div>
                    <div className="p-3 mx-3 cursor-none hover:text-[#98f144]" >Privacy</div>
                    <div onClick={()=>setIndicatorNav(4)} className="p-3 mx-3 cursor-none hover:text-[#98f144]" >Contact</div>
                </div>
                <div className={`${stroke} duration-500 mt-5  border-2 border-[#98f144] rounded-full mb-5`}></div>
            </div>
        </div>  
        {/* EndNav */}

        {indicatorNav === 1 && (
          <StartSite></StartSite>
        ) 
        }
        {indicatorNav === 2 && (
          <CompanySite></CompanySite>
        ) 
        }
        {indicatorNav === 4 && (
          <ContactSite></ContactSite>
        ) }
               

            </div>
          </div>

        </div>
        <Footer></Footer>
      </div>

    </>
  );
}
export default App;
