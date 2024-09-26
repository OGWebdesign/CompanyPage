import { useState } from "react";
import Cursor from "../components/Cursor";
import {
  ArrowIcon,
  CompanyIcon,
  DotsIcon,
  FacebookIcon,
  HouseIcon,
  InstagramIcon,
  MailIcon,
  OfferIcon,
  PinterestIcon,
} from "../components/Icons";
import { CompanySite } from "../components/CompanySite";
import { ContactSite } from "../components/ContactSite";
import { StartSite } from "../components/StartSite";
import { OfferSite } from "../components/OfferSite";
import { Impressum } from "../components/Impressum";
import { Maintenance } from "../components/Maintenance";
import { Privacy } from "../components/Privacy";
import { SideBar } from "../components/SideBar";
import { Link } from "react-scroll";

function App() {
  // state for animation
  const [visible, setVisible] = useState(false); // state for Nav Bar scroll out effect
  const [indicatorNav, setIndicatorNav] = useState(1);

  // tailwind css for visible style sheet
  const visibleStyle = "h-[20rem]";
  // tailwind css for notvisible style sheet
  const notVisibleStyle = "h-0";
  // Icon rotation by scroll out activation
  const rotation = visible
    ? "fill-[#98f144] rotate-[630deg]"
    : "rotate-[180deg] fill-slate-300";
  // indicator change per state
  const indicator = visible ? "on" : "off";
  // Text color indicator change per state
  const textindicator = visible ? "text-slate-200" : "text-[#777777]";
  // make border unvisible in unwrap state
  const bordervisibility = visible
    ? "opacity-100 border-2"
    : "opacity-0 border-none";
  const stroke = visible ? "w-[20rem] opacity-100" : "w-0 opacity-0";
  const homeActive =
    indicatorNav == 1
      ? "border-b-8 border-[#98f144] text-slate-200 "
      : "hover:border-b-8 hover:border-b-slate-200 text-[#747474]";
  const companyActive =
    indicatorNav == 2
      ? "border-b-8 border-[#98f144] text-slate-200 "
      : "hover:border-b-8 hover:border-b-slate-200 text-[#747474]";
  const offerActive =
    indicatorNav == 3
      ? "border-b-8 border-[#98f144] text-slate-200 "
      : "hover:border-b-8 hover:border-b-slate-200 text-[#747474]";

  // ---------------------------   Button for order meeting for component TextAndButton for working with one Page technologie
  const Proposal = () =>(
      <div onClick={()=>setIndicatorNav(3)} className="tablet:w-[20rem] border-2  duration-300 hover:font-semibold hover:text-[#000000] hover:bg-[#98f144] mobile:w-[10rem] flex justify-center items-center text-center font-mono text-[#98f144] h-[3rem] ml-4 mt-14 bg-[#000000] rounded-lg border-[#151515]">
          Get your free proposal
      </div>
  
  )
  const orderMeetingbt = (text: string) => (
    <div
      onClick={() => setIndicatorNav(4)}
      className="text-[#151515] cursor-none select-none border-none bg-[#98f144] font-semibold mt-8 py-2 px-4 rounded-lg hover:bg-[#6ba039] font-mono transition duration-300 ease-in-out"
    >
      {text}
    </div>
  );


  const BlackCardbt1 = () => (
    <div className="w-full h-1/2 flex justify-center items-center">
      <div
        onClick={() => setIndicatorNav(3)}
        className="w-[8rem] h-12 rounded-xl duration-300 group border-2 bg-slate-100 hover:bg-[#98f144] hover:border-[#e9e9e9]  flex justify-center items-center"
      >
        <p className="font-mono text-[1.1rem] font-semibold text-[#151515] group-hover:text-[#151515] mr-3 ">
          Get it
        </p>
        <ArrowIcon className="w-6 h-6 duration-300 tablet:group-hover:translate-x-14 desktop:group-hover:translate-x-12 mobile:group-hover:translate-x-10 group-hover:fill-slate-200  "></ArrowIcon>
      </div>
    </div>
  );

  const WhiteCardbt1 = () => (
    <div className="w-full h-1/2 flex justify-center items-center">
      <div
        onClick={() => setIndicatorNav(3)}
        className="w-[8rem] group h-12 rounded-xl border-2 border-slate-200 duration-300 group hover:border-[#151515] bg-[#151515] hover:bg-[#98f144] flex justify-center items-center"
      >
        <p className="font-mono text-[1.1rem] font-semibold text-slate-200 group-hover:text-[#151515] mr-3 ">
          Get it
        </p>
        <ArrowIcon className="w-6 h-6 fill-slate-200 duration-300 tablet:group-hover:translate-x-14 desktop:group-hover:translate-x-12 mobile:group-hover:translate-x-10 group-hover:fill-black  "></ArrowIcon>
      </div>
    </div>
  );
 
  const Maintenancebt = () => (
    <div
      onClick={() => setIndicatorNav(1)}
      className="w-[14rem] h-[3rem] hover:bg-[#6ba039] duration-300 rounded-lg mt-10 bg-[#98f144] flex justify-center items-center"
    >
      <p className="text-[#151515] font-mono font-bold">Back to Main Menu</p>
    </div>
  );

  {
    /* Funktionen für SideBar */
  }
  const handleHome = () => {
    setIndicatorNav(1);
  };

  const handleCompany = () => {
    setIndicatorNav(2);
  };

  const handleOffer = () => {
    setIndicatorNav(3);
  };

  const handleMail = () => {
    setIndicatorNav(4);
  };

  // Side Bar Icons
  const homeIcon = (
    <Link
      to="navigator"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={handleHome}
      className="w-[3rem] group p-2 hover:scale-150 duration-300 "
    >
      <HouseIcon className="bg-fill-[#151515]" />{" "}
    </Link>
  );
  const companyIcon = (
    <Link
      to="navigator"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={handleCompany}
      className="w-[2.6rem] p-2 hover:scale-150 duration-300"
    >
      <CompanyIcon className="bg-fill-[#151515]" />{" "}
    </Link>
  );
  const offerIcon = (
    <Link
      to="navigator"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={handleOffer}
      className="w-[2.6rem] p-2 hover:scale-150 duration-300 "
    >
      <OfferIcon className="bg-fill-[#151515]" />{" "}
    </Link>
  );
  const mailIcon = (
    <Link
      to="navigator"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={handleMail}
      className="w-[3rem] p-2 hover:scale-150 duration-300 "
    >
      <MailIcon className="bg-fill-[#151515]" />{" "}
    </Link>
  );
  //-------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      {/* cursor over all existing layers with fix position on cursor coordinates */}
      <Cursor></Cursor>

      {indicatorNav === 7 && (
        <Maintenance children={Maintenancebt()}></Maintenance>
      )}

      {/* Wrapper */}
      <div
        id="navigator "
        
        className="w-full  bg-black cursor-none overflow-hidden"
      >
        <div className="w-full flex justify-center ">
          {/* Start Page Layout */}
          <div className="w-full flex justify-center items-center relative">
            <div className="mobile:w-full tablet:w-full ">
              <div className="w-full duration-500 flex flex-col items-center cursor-none ">
                {/* Begin NavigationBar Integration for One Page Technologie */}
                {/* Navbar Item Wrapper */}
                <div className="w-full flex justify-between duration-500 h-[5rem] overflow-visible bg-transparent">
                  {/* Navbar Logo Wrapper */}
                  <div className="tablet:w-1/2 duration-500">
                    {/* Navbar Logo Wrapper End*/}

                    {/* Navbar Logo */}
                    <img/> {/* Logo Hier Einfügen !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                  </div>
                  {/* Navbar Logo End*/}

                  {/* Navbar Item Layout */}
                  <div className="mobile:w-[7rem] tablet:w-[20rem] desktop:w-[40rem] flex justify-between items-center">
                    {/* Navbar Item I */}
                    <div
                      onClick={() => setIndicatorNav(1)}
                      className={`${homeActive} mobile:-z-10 cursor-none tablet:-z-10 desktop:z-0 flex justify-center items-center mobile:w-[0rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                    mobile:opacity-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`}
                    >
                      Home
                    </div>

                    {/* Navbar Item II */}
                    <div
                      onClick={() => setIndicatorNav(2)}
                      className={`${companyActive} mobile:-z-10 cursor-none tablet:-z-10 desktop:z-0 flex justify-center items-center tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                    mobile:opacity-0 mobile:w-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`}
                    >
                      Company
                    </div>

                    {/* Navbar Item III */}
                    <div
                      onClick={() => setIndicatorNav(3)}
                      className={`${offerActive} mobile:-z-10 cursor-none tablet:-z-10 desktop:z-0 flex justify-center items-center mobile:w-[0rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                     mobile:opacity-0 desktop:opacity-100 border-[#151515] hover:text-white hover:border-b-8 rounded-lg duration-300`}
                    >
                      Offer
                    </div>

                    {/* Burger Menu Button */}
                    <div
                      onClick={() => setVisible(!visible)}
                      className=" w-32 h-26 rounded-xl duration-300 mobile:opacity-100 tablet:opacity-100 desktop:opacity-0 flex flex-col justify-center items-center  "
                    >
                      <DotsIcon
                        className={`w-10 h-w-10 ${rotation} duration-300  hover:fill-[#98f144] flex`}
                      ></DotsIcon>
                      <p
                        className={` ${textindicator} text-[#e0e0e0] text-[0.7rem] font-mono`}
                      >
                        {indicator}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Navbar Item Layout End */}

                {/* Scroll Bar Wrapper */}

                <div
                  className={`w-full mobile:opacity-100 tablet:opacity-100 desktop:opacity-0 z-40 desktop:h-0 flex flex-col justify-center items-center ${visible ? visibleStyle : notVisibleStyle
                    } duration-300 bg-black`}
                >
                  {/* Scroll Bar Item I */}
                  <div
                    className={`my-5 ${bordervisibility} text-[#747474] cursor-none w-[10rem] text-center font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-black hover:border-[#98f144] rounded-lg overflow-hidden`}
                    onClick={() => {
                      setIndicatorNav(1);
                      setVisible(!visible);
                    }}
                  >
                    Start
                  </div>
                  {/* Scroll Bar Item II */}
                  <div
                    className={`my-5 ${bordervisibility} text-[#747474] cursor-none w-[10rem] text-center  font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-black hover:border-[#98f144] rounded-lg overflow-hidden`}
                    onClick={() => {
                      setIndicatorNav(2);
                      setVisible(!visible);
                    }}
                  >
                    Company
                  </div>
                  {/* Scroll Bar Item III */}
                  <div
                    className={`my-5 ${bordervisibility}  text-[#747474] cursor-none w-[10rem] text-center font-mono text-[1.2rem] hover:text-[#98f144] hover:animate-ownpulse border-black hover:border-[#98f144] rounded-lg overflow-hidden`}
                    onClick={() => {
                      setIndicatorNav(3);
                      setVisible(!visible);
                    }}
                  >
                    Offer
                  </div>

                  <div className="w-full h-5  flex justify-center text-[0.8rem] mt-10 items-center text-[#858585] overflow-hidden font-mono">
                    <div
                      onClick={() => {
                        setIndicatorNav(6);
                        setVisible(!visible);
                      }}
                      className="p-3 mx-3 cursor-none hover:text-[#98f144]"
                    >
                      Imprint
                    </div>
                    <div
                      onClick={() => {
                        setIndicatorNav(8);
                        setVisible(!visible);
                      }}
                      className="p-3 mx-3 cursor-none hover:text-[#98f144]"
                    >
                      Privacy
                    </div>
                    <div
                      onClick={() => {
                        setIndicatorNav(4);
                        setVisible(!visible);
                      }}
                      className="p-3 mx-3 cursor-none hover:text-[#98f144]"
                    >
                      Procedure
                    </div>
                  </div>
                  <div
                    className={`${stroke} duration-500 mt-5  border-2 border-[#98f144] rounded-full mb-5`}
                  ></div>
                </div>
              </div>
              <SideBar
                companyIcon={companyIcon}
                houseIcon={homeIcon}
                offerIcon={offerIcon}
                mailIcon={mailIcon}
                handleCompany={handleCompany}
                handleHome={handleHome}
                handleMail={handleMail}
                handleOffer={handleOffer}
              />
              {/* EndNav */}
              {/* End NavigationBar*/}

              {/*---------------------------------------------------------------------- Here come in all new sites as component ------------------------------------ */}

              {/* Integration for One Page Technologie */}
              {/* get you component for linkship and add an onCLick event. Now you can render dynamicly with an indicator Number */}
              {indicatorNav === 1 && (
                <StartSite
                  TextAndButtonbt={orderMeetingbt("Book a consultation")}
                  BlackCardButton={BlackCardbt1()}
                  WhiteCardButton={WhiteCardbt1()}
                  ProposalButton={Proposal()}
                ></StartSite>
              )}
              {indicatorNav === 2 && <CompanySite></CompanySite>}
              {indicatorNav === 4 && <ContactSite></ContactSite>}
              {indicatorNav === 3 && <OfferSite></OfferSite>}
              {indicatorNav === 6 && <Impressum></Impressum>}
              {indicatorNav === 8 && <Privacy></Privacy>}
              {/*------------------------------------------------------------------------ End Dynamic Render Area -------------------------------------------------------*/}
            </div>
          </div>
        </div>
        {/* Start Page Layout End */}

        {/* Footer is not Element from Layout */}
        {/* Footer Start */}
        <div className="w-full laptop:h-[50rem] desktop-xl:h-[75rem] mobile:h-full bg-footer bg-bottom bg-cover flex justify-start items-center flex-col-reverse font-sharemono bg-transparent 
        mobile:mt-[3rem] laptop:mt-0">
          {/* Empty div for col-reverse to place elements at bottom */}
          <div className=""></div>
          {/* Upper Content Wrapper (Contact, Text with Button, Navlinks) */}
          <div className="w-full flex flex-col ">
            <div className="w-full laptop:h-[20rem] mobile:h-full flex items-center
            laptop:flex-row mobile:flex-col">
              <div className="laptop:w-[25%] mobile:w-full laptop:h-[10rem] flex flex-col justify-center p-5
              mobile:justify-between">
                <span className="text-[1.3rem] text-[#98f144]">Question?</span>
                <span className="mt-[2rem] laptop:text-[2rem] mobile:text-[1.3rem] text-slate-200">
                  info
                  <span className="text-[#98f144]">@</span>
                  og-webdesign
                  <span className="text-[#98f144]">.</span>
                  de
                </span>
                <span className="text-slate-200 laptop:text-[2rem] mobile:text-[1.3rem]">01515123124</span>
              </div>
              <div className="laptop:w-[50%] h-full flex flex-col justify-center items-center laptop:text-[2rem] mobile:text-[1.7rem] text-center
              mobile:mt-[1rem] mobile:w-full tablet:w-[70%] laptop:m-0">
                <span className="text-slate-200">
                  Got a nice <span className="text-[#98f144]">Idea</span>? Come
                  to us and <span className="text-[#98f144]">talk</span> with
                  us!
                </span>
                <a onClick={() => setIndicatorNav(4)} href="mailto:info@og-webdesign.de"  className="px-4 py-2 rounded-xl text-[1.2rem] font-bold bg-[#98f144] mt-[1rem] hover:bg-[#6ba039]">
                  Contact us
                </a>
              </div>
              <div className="laptop:w-[25%] mobile:w-full h-full flex mobile:my-[1.5rem] laptop:my-0 laptop:flex-col laptop:justify-center mobile:justify-around items-end p-5">
                <span onClick={() => setIndicatorNav(2)} className="text-slate-200 mobile:text-[1.3rem] laptop:text-[2rem] hover:text-[#98f144] transition-all duration-500">
                  About us
                </span>
                <span onClick={() => setIndicatorNav(3)} className="text-slate-200 mobile:text-[1.3rem] laptop:text-[2rem] laptop:my-[1rem] hover:text-[#98f144] transition-all duration-500">
                  Pricing
                </span>
                <span onClick={() => setIndicatorNav(6)} className="text-slate-200 mobile:text-[1.3rem] laptop:text-[2rem] hover:text-[#98f144] transition-all duration-500">
                  Imprint
                </span>
              </div>
            </div>
            {/* Lower Content Wrapper (Copyright, Datasecure, Social Media Icons) */}
            <div className="w-full laptop:h-[5rem] flex mobile:flex-col mobile:items-center laptop:flex-row mobile:mt-[0.5rem] laptop:mt-0">
              <div className="laptop:w-1/3 flex justify-center items-center  text-slate-200 text-[1.3rem]">
                <span className="text-[#98f144] px-2">©</span> 2024 <span className="text-[#98f144] pl-2">OG</span>-Webdesign
              </div>
              <div className="laptop:w-1/3 flex justify-center items-center text-slate-200 text-[1.3rem]">
                <span onClick={() => setIndicatorNav(8)} className="border-b-[#98f144] border-b-2 hover:animate-ownpulse transition-all ease-in-out duration-500 mobile:my-[1.2rem] laptop:my-0">Datasecure</span>
              </div>
              <div className="laptop:w-1/3 mobile:w-1/2 flex justify-evenly items-center">
                <div className="w-[25rem] flex justify-evenly">
                  <FacebookIcon className="w-10 h-10 fill-slate-200 hover:fill-[#3b5998] hover:p-1 hover:rotate-[360deg] transition-all duration-1000" />
                  <InstagramIcon className="w-10 h-10  fill-slate-200 hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-xl hover:p-1 hover:rotate-[360deg] transition-all duration-1000" />
                  <PinterestIcon className="w-10 h-10  fill-slate-200 hover:fill-[#E60023] hover:p-1 hover:rotate-[360deg] transition-all duration-1000" />
                </div>
              </div>
            </div>
            <span className="w-full text-center pt-[3rem] text-slate-200 laptop:text-[5rem] mobile:text-[2rem] font-bold">
              LET'S <span className="text-[#98f144]">WORK</span> TOGETHER!
            </span>
          </div>
        </div>
      </div>
      {/* Body End */}
    </>
  );
}
export default App;
