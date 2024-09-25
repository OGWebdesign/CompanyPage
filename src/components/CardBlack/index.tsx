


export const CardBlack = (props:{
    text1 : string,
    text2 : string,
    description?:string,
    classname?:string,
    children?:JSX.Element | JSX.Element[] | string,
    
})=>{
    
    return(
        <div className={`w-full ${props.classname} select-none max-w-[35rem] min-w-[30rem] mobile:h-[35rem] tablet:h-[30rem] bg-[#000000] border p-3 rounded-2xl flex border-b-8 `}>
            
            <div className="flex flex-col w-full text-[#151515]">

                <div className="mobile:p-2 p-4 w-full ">
                    <p className="inline-block bg-[#98f144] p-1 font-mono font-semibold mobile:text-[1.1rem] text-[1.3rem]">{props.text1} {props.text2}</p>
                    <article className="h-full duration-300 text-[0.95rem] tablet:text-[1rem] mobile:text-[0.9rem] desktop:text-[1rem] text-slate-200 p-3 flex items-center font-mono font-semibold">
                    {props.description}
                    </article>
                </div>

              {props.children}
            </div>
        </div>
    )
}