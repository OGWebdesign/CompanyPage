import React, { useState } from "react";

const IconCard = (props: { icon : React.ReactElement, title : string}) => {

    const [clicked, setClicked] = React.useState(false);
    const [select_sound] = useState(new Audio("/sounds/select 3.mp3"));

    const clickEffect = "bg-[#c5c5c5] shadow-[5px_5px_0px_0px_rgba(152,241,68)]"

    const notClicked = "hover:bg-[#c5c5c5] hover:shadow-[5px_5px_0px_0px_rgba(152,241,68)]"


    return(
        <div onClick={() => {
            select_sound.play();
            setClicked(!clicked);
            console.log(clicked);
            }} 
            className={`tablet:w-[6rem] tablet:h-[6rem] mobile:w-[5rem] mobile:h-[5rem] ${clicked ? clickEffect : notClicked}  group duration-500 transition-all eas flex flex-col justify-center items-center rounded-xl`}>
            <div className={`flex justify-center items-center group-hover:fill-black duration-500 ${clicked ? "fill-black" : "fill-white"} `}>
                {props.icon}
            </div>
            <div className={`w-full text-center mobile:text-[0.8rem] tablet:text-[1rem] mt-[0.3rem] font-sharemono group-hover:text-black duration-500 ${clicked ? "text-black" : "text-white"}`}>
               <p>{props.title}</p> 
            </div>
        </div>
    )
}

export default IconCard;