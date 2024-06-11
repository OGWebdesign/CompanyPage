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
    const [height, setHeight] = useState(true);
    const [counter, setCounter] = useState(1);

    const activeStyle = "translate-x-0 h-[12rem]";
    const inactiveStyle = "translate-x-[85%] h-[5rem]";

    const activeStyleArrow = "h-[12rem]";
    const inactiveStyleArrow = "h-[5rem]";

    const handleClick = () => {
        setCounter(counter + 1);
        if(counter % 2 === 0){
        setTimeout(() => {
            setHeight(!height);
        }, 100);
        setClick(!click);
        } else {
        setTimeout(() => {
            setClick(!click);
        }, 100);
        setHeight(!height);
        }
    }

    return(
    <div className={`fixed z-20 w-[20rem] top-1/2 right-0 transform translate-y-[7rem] bg-[#98f144] text-[#151515] pr-4
        rounded-l-lg flex justify-start items-center shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out 
        ${click && activeStyle} ${!click && inactiveStyle} overflow-hidden`}>

        <div onClick={handleClick} className={`w-full mr-[2rem] flex justify-center items-center transition-all ${click && activeStyleArrow}
            ${!click && inactiveStyleArrow} `}>
        {click && <RightArrowIcon className="bg-fill-[#151515] w-[1rem]" />}
        {!click && <LeftArrowIcon className="bg-fill-[#151515] w-[1rem]" />}
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-x-6 transition-all">
        <Clock /> 

        <div className="w-full flex justify-center items-center mt-[2rem] gap-x-5 transition-all">

        {/* ICONS */}
        <div onClick={props.handleHome} className="w-[3rem] group cursor-pointer p-2 "><HouseIcon className="bg-fill-[#151515]" /> </div>
        <div onClick={props.handleCompany} className="w-[2.6rem] cursor-pointer p-2"><CompanyIcon className="bg-fill-[#151515]" /> </div>
        <div onClick={props.handleOffer} className="w-[2.6rem] cursor-pointer p-2 "><OfferIcon className="bg-fill-[#151515]" /> </div>
        <div onClick={props.handleMail} className="w-[3rem] cursor-pointer p-2 "><MailIcon className="bg-fill-[#151515]" /> </div>

        </div>

        </div>
        
</div>
    );
}