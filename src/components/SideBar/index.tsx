import { useEffect, useState } from "react";
import { LeftArrowIcon } from "../Icons";
import { Clock } from "../Clock";

type SideBarProps = {
    handleHome: () => void,
    handleCompany: () => void,
    handleOffer: () => void,
    handleMail: () => void,
    houseIcon: JSX.Element | JSX.Element[] | string,
    companyIcon: JSX.Element | JSX.Element[] | string,
    offerIcon: JSX.Element | JSX.Element[] | string,
    mailIcon: JSX.Element | JSX.Element[] | string,
}


export const SideBar = (props: SideBarProps) => {

    {/* States zum herausfahren */ }
    const [click, setClick] = useState(false);
    const [height, setHeight] = useState(false);

    const activeStyle = "translate-x-0 laptop:h-[12rem] mobile:h-[12rem]";
    const inactiveStyle = "translate-x-[85%] transform laptop:h-[12rem] mobile:h-[5rem] ";

    const activeStyleArrow = "h-[12rem]";
    const inactiveStyleArrow = "h-[5rem]";

    useEffect(() => {
        if (click) {
            setHeight(true);
        } else {
            setHeight(false);
        }
    }, [click])

    return (
        <div className={`fixed z-50 w-[20rem] top-1/2 right-0 translate-y-[-7rem] bg-[#98f144] text-[#151515] pr-4
        rounded-l-lg flex justify-start items-center shadow-lg hover:shadow-2xl duration-500 
        ${height && activeStyle} ${!height && inactiveStyle} overflow-hidden `}>

            {/* Arrow */}
            <div onClick={() => setClick(!click)} className={`w-full mr-[2rem] flex justify-center items-center transition-all ${click && activeStyleArrow}
            ${!click && inactiveStyleArrow} `}>
                <LeftArrowIcon className={`bg-fill-[#151515] duration-500 w-[1rem] ${click && "-rotate-180"} ${!click && "rotate-0"}`} />
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-x-6 transition-all">
                <Clock />

                <div className="w-full flex justify-center items-center mt-[2rem] gap-x-5 transition-all">

                    {/* ICONS */}
                    {props.houseIcon}
                    {props.companyIcon}
                    {props.offerIcon}
                    {props.mailIcon}

                </div>

            </div>

        </div>
    );
}