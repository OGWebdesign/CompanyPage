import { useEffect, useState } from "react";
import IconCard from "../IconCard";
import { BookIcon, CodeIcon, ComputerIcon, PlusIcon, WebAppIcon } from "../Icons";
import { MinusIcon } from '../Icons/index';

const PriceCalculator = () => {
    const [price, setPrice] = useState(1000);
    const [underborder, setUnderborder] = useState(false);
    const [increase_sound] = useState(new Audio("/sounds/increase.mp3"));
    const [decrease_sound] = useState(new Audio("/sounds/decrease.mp3"));




    useEffect(() => {
        if (price < 500) {
            setUnderborder(true);
        } else if (price >= 500) {
            setUnderborder(false);
        }
    },[price])
    return (
        <div className="w-full flex flex-col p-3 items-center">
        <div className="w-full flex tablet:justify-evenly mobile:justify-between items-center">
            <IconCard onClick={() => {}} title="Website" icon={<CodeIcon className="mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]"/>} />
            <IconCard onClick={() => {}} title="Web-App" icon={<WebAppIcon className="mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]"/>} />
            <IconCard onClick={() => {}} title="Consulting" icon={<BookIcon className="mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]"/>} />
            <IconCard onClick={() => {}} title="Dev-Ops" icon={<ComputerIcon className="mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]"/>} />
        </div>
        <div className={`w-[65%] h-[3rem] bg-[#151515] mt-[4rem]  flex justify-between items-center rounded-xl  `}>   
            <div onClick={() => {
                decrease_sound.play();
                if(price >= 100){
                    setPrice(price - 100);
                }             
            }} className="w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-xl bg-[#c5c5c5] hover:bg-red-500">
                <MinusIcon className="w-[1.2rem]" />
            </div>
            <span className={` font-sharemono text-[1.3rem] ${underborder ? "text-red-500" : "text-[#98f144]"}`}>{price}€</span>
            <div onClick={() => {
                increase_sound.play();
                setPrice(price + 100);
            }}
            className="w-[3.5rem] h-[3.5rem] p-5 flex justify-center items-center rounded-xl bg-[#c5c5c5] hover:bg-[#98f144]">
                <PlusIcon className="w-[1.2rem]" />
            </div>
        </div>
        <span className="text-white mt-[1rem] font-sharemono">Dein Budget</span>   
        </div>
    );
}
export default PriceCalculator;