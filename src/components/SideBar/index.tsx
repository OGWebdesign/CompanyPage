import { useState } from "react";
import { CompanyIcon, HouseIcon, LeftArrowIcon, MailIcon, OfferIcon, RightArrowIcon } from "../Icons";
import { Clock } from "../Clock";

type SideBarProps = {
    handleHome: () => void;
    handleCompany: () => void;
    handleOffer: () => void;
    handleMail: () => void;
}


export const SideBar = (props:SideBarProps) => {

    {/* States zum herausfahren */}
    const [click, setClick] = useState(false);

    const activeStyle = "translate-x-0";
    const inactiveStyle = "translate-x-[85%] overflow-hidden";

    const handleClick = () => {
        setClick(!click);
    }

    return(
        <div onClick={handleClick} className={`fixed z-20 w-[20rem] top-1/2 right-0 transform translate-y-[7rem] bg-[#98f144] text-[#151515] p-4 
        rounded-l-lg flex shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out ${click && activeStyle} ${!click && inactiveStyle}`}>
        <div className="w-[1rem] flex justify-center items-center ">
        {}
        {click && <RightArrowIcon className="bg-fill-[#151515]" />}
        {!click && <LeftArrowIcon className="bg-fill-[#151515]" />}
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-x-6">
        <Clock /> 
        <div className="w-full flex justify-center items-center mt-[2rem] gap-x-5">
        <div onClick={props.handleHome} className="w-[3rem] group cursor-pointer p-2 "><HouseIcon className="bg-fill-[#151515]" /></div>
        <div onClick={props.handleCompany} className="w-[2.6rem] cursor-pointer p-2"><CompanyIcon className="bg-fill-[#151515]" /></div>
        <div onClick={props.handleOffer} className="w-[2.6rem] cursor-pointer p-2 "><OfferIcon className="bg-fill-[#151515]" /></div>
        <div onClick={props.handleMail} className="w-[3rem] cursor-pointer p-2 "><MailIcon className="bg-fill-[#151515]" /></div>
        </div>
        </div>
        
        </div>
    );
}