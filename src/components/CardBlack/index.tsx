


export const CardBlack = (props:{
    text1 : string,
    text2 : string,
    description?:string,
    classname?:string,
    children?:JSX.Element | JSX.Element[] | string,
    
})=>{
    
    return(
        <div className={`w-full ${props.classname} select-none w-[60%] p-3 rounded-2xl flex `}>
            
            <div className="flex flex-col w-full text-[#151515]">

                <div className=" w-full ">
                    <p className="inline-block mb-[0.5rem] bg-[#98f144] p-1 font-mono font-semibold mobile:text-[1.1rem] text-[1.3rem]">{props.text1} {props.text2}</p>
                    {props.description}
                </div>

              {props.children}
            </div>
        </div>
    )
}