import { Heading } from "../Heading"

export const OfferSeperatorCard = (props:{
    classname?:string,
    classnamehead?:string,
    animation:boolean,
    text:string,
    head:string

    
}) => {

    
    return (
        
        <>
            <div className=" flex-col border p-4 my-10 bg-slate-200 rounded-2xl duration-500 transition-all hover:scale-105">
                <Heading headstyle={props.classnamehead} heading={props.head}></Heading>
                <p
                    className={`w-3/4 mobile:w-full p-4 mt-4 font-semibold select-none font-mono text-[#151515]
                           ${props.classname}`}
                >{props.text}</p>
                <div className="w-full flex pl-4 justify-end">
                    {props.animation && (
                        <div className="w-[12rem] animate-loading border-[#98f144] mt-10 rounded-full border-2"></div>
                    ) }
                </div>
            </div>
        </>
    )
}