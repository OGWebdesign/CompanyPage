import { useState } from "react";
import IconCard from "../IconCard";
import { CodeIcon, CssIcon, DotsIcon, MailIcon, PlusIcon } from "../Icons";
import { MinusIcon } from '../Icons/index';

const PriceCalculator = () => {

    const [price, setPrice] = useState(1000);


    return (
        <div className="flex flex-col p-3 items-center">
        <div className="w-full flex justify-evenly items-center">
            <IconCard title="Website" icon={<CodeIcon className="w-[2.5rem] h-[2.5rem]"/>} />
            <IconCard title="Web-App" icon={<MailIcon className="w-[2.5rem] h-[2.5rem]"/>} />
            <IconCard title="Consulting" icon={<CssIcon className="w-[2.5rem] h-[2.5rem]"/>} />
            <IconCard title="Dev-Ops" icon={<DotsIcon className="w-[2.5rem] h-[2.5rem]"/>} />
        </div>
        <div className="w-[65%] h-[3rem] bg-[#151515] mt-[4rem] flex justify-between items-center ">
            <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-xl bg-[#c5c5c5] hover:bg-red-500">
                <MinusIcon className="w-[1.2rem]" />
            </div>
            <span className="text-[#98f144] font-sharemono text-[1.3rem]">{price}€</span>
            <div className="w-[3.5rem] h-[3.5rem] p-5 flex justify-center items-center rounded-xl bg-[#c5c5c5] hover:bg-[#98f144]">
                <PlusIcon className="w-[1.2rem]" />
            </div>
        </div>
        </div>
    );
}

export default PriceCalculator;