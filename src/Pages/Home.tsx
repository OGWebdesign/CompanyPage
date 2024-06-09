import { useState } from "react";
import Cursor from "../components/Cursor";
import { DotsIcon, FacebookIcon,  InstagramIcon, PinterestIcon } from "../components/Icons";
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
  const rotation = visible ? "fill-[#98f144]" : "rotate-[540deg] fill-slate-300"
  // indicator change per state
  const indicator = visible ? "on" : "off"
  // Text color indicator change per state
  const textindicator = visible ? "text-slate-200" : "text-[#777777]"
  // make border unvisible in unwrap state
  const bordervisibility = visible ? "opacity-100 border-2" : "opacity-0 border-none"
  const stroke = visible ? "w-[20rem] opacity-100" : "w-0 opacity-0"
  const homeActive = indicatorNav == 1 ? "border-b-8 border-[#98f144] text-slate-200 " : "hover:border-b-8 hover:border-b-slate-200 text-[#747474]"
  const companyActive = indicatorNav == 2 ? "border-b-8 border-[#98f144] text-slate-200 " : "hover:border-b-8 hover:border-b-slate-200 text-[#747474]"
  const offerActive = indicatorNav == 3 ? "border-b-8 border-[#98f144] text-slate-200 " : "hover:border-b-8 hover:border-b-slate-200 text-[#747474]"


  return (
    <>
      {/* Wrapper */}
      <Cursor></Cursor>
      <div className="w-full bg-[#151515] cursor-none">
        <div className="w-full flex justify-center ">

          {/* Start Page Layout */}
          <div className="w-full mobile:p-2 rot tablet:px-5 bg-[#151515] flex justify-center items-center">
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
                  <div className="mobile:w-[7rem] tablet:w-[20rem] desktop:w-[40rem] flex justify-between items-center">

                    {/* Navbar Item I */}
                    <div onClick={() => setIndicatorNav(1)} className={`${homeActive} mobile:-z-10 cursor-none tablet:-z-10 desktop:z-0 flex justify-center items-center mobile:w-[0rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                    mobile:opacity-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`} >Home</div>

                    {/* Navbar Item II */}
                    <div onClick={() => setIndicatorNav(2)} className={`${companyActive} mobile:-z-10 cursor-none tablet:-z-10 desktop:z-0 flex justify-center items-center tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                    mobile:opacity-0 mobile:w-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`} >Company</div>

                    {/* Navbar Item III */}
                    <div className={`${offerActive} mobile:-z-10 cursor-none tablet:-z-10 desktop:z-0 flex justify-center items-center mobile:w-[0rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                     mobile:opacity-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`} >Offer</div>

                    {/* Burger Menu Button */}
                    <div onClick={() => setVisible(!visible)} className=" w-32 h-26 rounded-xl duration-300 mobile:opacity-100 tablet:opacity-100 desktop:opacity-0 flex flex-col justify-center items-center  ">
                
                      <DotsIcon className={`w-10 h-w-10 ${rotation} duration-300  hover:fill-[#98f144] flex`}></DotsIcon>
                      <p className={` ${textindicator} text-[#777777] mt-4 text-[0.7rem] font-mono`}>{indicator}</p>
                    </div>
                  </div>
                </div>


                {/* Scroll Bar Wrapper */}
                <div className={`w-full mobile:opacity-100 tablet:opacity-100 desktop:opacity-0 desktop:h-0 flex flex-col justify-center items-center ${visible ? visibleStyle : notVisibleStyle} duration-300 bg-[#151515]`}>
                  {/* Scroll Bar Item I */}
                  <div className={`my-5 ${bordervisibility} text-[#747474] cursor-none w-[10rem] text-center font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-[#151515] hover:border-[#98f144] rounded-lg overflow-hidden`}
                    onClick={() => setIndicatorNav(1)}>Start</div>
                  {/* Scroll Bar Item II */}
                  <div className={`my-5 ${bordervisibility} text-[#747474] cursor-none w-[10rem] text-center  font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-[#151515] hover:border-[#98f144] rounded-lg overflow-hidden`}
                    onClick={() => setIndicatorNav(2)}>Company</div>
                  {/* Scroll Bar Item III */}
                  <div className={`my-5 ${bordervisibility}  text-[#747474] cursor-none w-[10rem] text-center font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-[#151515] hover:border-[#98f144] rounded-lg overflow-hidden`}
                    onClick={() => setIndicatorNav(3)}>Offer</div>
                  <div className="w-full h-5  flex justify-center text-[0.8rem] mt-10 items-center text-[#858585] overflow-hidden font-mono">
                    <div className="p-3 mx-3 cursor-none hover:text-[#98f144]" >Imprint</div>
                    <div className="p-3 mx-3 cursor-none hover:text-[#98f144]" >Privacy</div>
                    <div onClick={() => setIndicatorNav(4)} className="p-3 mx-3 cursor-none hover:text-[#98f144]" >Contact</div>
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
              )}


            </div>
          </div>

        </div>




        {/* Footer Start */}
        <div>
          <div className="w-full cursor-none flex flex-col border font-mono text-slate-200 p-10 mobile:p-4 bg-slate-200 mobile:rounded-t-xl rounded-t-2xl mt-[10%]">
            <article className="desktop:text-[6rem] tablet:text-[4rem] mobile:text-[2rem]  inline-block text-[#151515] leading-none">
              YOUR IDEA
            </article>


            <article className="desktop:text-[6rem] tablet:text-[4rem] mobile:text-[2rem] inline-block text-[#151515] leading-none">DESERVES BETTER.</article>
            <div className="w-full flex items-center">

              <article className="desktop:text-[6rem] tablet:text-[4rem] mobile:text-[2rem]  desktop:w-[50rem] tablet:w-[35rem] mobile:w-[13rem] inline-block bg-[#98f144] text-[#151515] font-bold leading-none">TALK TO US! </article>
              <a className="desktop:w-[10rem] cursor-none tablet:w-[8rem] tablet:h-[3rem] desktop:h-[4rem] desktop:text-[1.4rem] mobile:w-[6rem] mobile:h-[2rem] mobile:rounded-lg mobile:ml-[1rem] mobile:text-[1rem] font-mono ml-[2rem] duration-300 border-[#151515] mobile:hover:border-2 desktop:hover:border-4 hover:bg-[#98f144] hover:font-bold hover:text-[#151515] rounded-2xl bg-[#151515] text-center flex justify-center items-center" href="">
                Lets talk
              </a>
            </div>


            <div className="w-full cursor-none flex font-mono font-semibold text-[#151515] mt-[3%] duration-300  items-center tablet:text-[1rem] mobile:text-[0.8rem]">
              <div className="w-1/2 flex desktop:gap-10 tablet:gap-6 mobile:gap-4 justify-start" >
                <div className="inline-block hover:bg-[#98f144] cursor-none duration-300 hover:font-bold" >Imprint</div>
                <div className="inline-block hover:bg-[#98f144] cursor-none duration-300 hover:font-bold" >Privacy</div>
                <div onClick={() => setIndicatorNav(4)} className="inline-block hover:bg-[#98f144] cursor-none duration-300 hover:font-bold" >Contact</div>
                <div className="inline-block hover:bg-[#98f144] cursor-none duration-300 hover:font-bold" >Offer</div>
              </div>
              <div className="w-1/2 flex desktop:gap-8 tablet:gap-6 mobile:gap-4 items-center justify-end">
                <p className="inline-block bg-[#98f144] mobile:opacity-0 ">Social Media</p>
                <FacebookIcon className="desktop:w-9 desktop:h-9 tablet:w-6 tablet:h-6 mobile:w-h-5 mobile:h-5 duration-300  hover:border-[#151515] hover:border:2 hover:fill-[#98f144] p-"></FacebookIcon>
                <InstagramIcon className="desktop:w-9 desktop:h-9 tablet:w-6 tablet:h-6 mobile:w-h-5 mobile:h-5 d0ration-300  hover:border-[#151515] hover:border:2 hover:fill-[#98f144] p-"></InstagramIcon>
                <PinterestIcon className="desktop:w-9 desktop:h-9 tablet:w-6 tablet:h-6  mobile:w-h-5 mobile:h-5 duration-300  hover:border-[#151515] hover:border:2 hover:fill-[#98f144] p-"></PinterestIcon>
              </div>
            </div>
          </div>
          <div className="w-full p-4 text-[#151515] bg-slate-200 flex font-mono font-semibold justify-center items-center">
            <p>©2024 OG-Webdesign</p>
          </div>
        </div>
        {/* Footer End */}


      </div>

    </>
  );
}
export default App;