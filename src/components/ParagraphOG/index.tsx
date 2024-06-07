import { Heading } from "../Heading"

export const ParagraphOG = (props:{
    classname?:string,
    classnamehead?:string,
    animation:boolean,
    text:string,
    head:string

    
}) => {

    return (
        
        <>
            <div className="w-full  flex flex-col items-end ">
                <Heading headstyle={props.classnamehead} classname={` justify-end text-right`} heading={props.head}></Heading>
                <p
                    className={`w-3/4 mobile:w-full px-8 mt-4  select-none font-mono text-[#9e9e9e]
                          font-extralight ${props.classname}`}
                >{props.text}</p>
                <div className="w-full flex pl-4 justify-end">
                    {props.animation && (
                        <div className="w-[12rem] animate-loading mt-10 rounded-full border-2 border-[#98f144]"></div>
                    ) }
                </div>
            </div>
        </>
    )
}