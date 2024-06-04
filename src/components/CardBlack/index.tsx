import { ArrowIcon } from "../Icons"

export const CardBlack = (props:{
    text1 : string,
    text2 : string,
    discription:string,
    classname?:string
    
})=>{
    return(
        <div className={`w-full ${props.classname} max-w-[30rem] h-[15rem] border rounded-2xl flex border-b-8 `}>
            
            <div className="flex flex-col w-1/2 text-[#151515]">

                <div className="p-4 w-full h-1/2 ">
                    <p className="inline-block bg-[#98f144] p-1 font-mono font-semibold text-[1.3rem]">{props.text1}</p>
                    <p className="inline-block bg-[#98f144] p-1 font-mono font-semibold text-[1.3rem]" >{props.text2}</p>
                </div>

                <div className="w-full h-1/2 flex justify-center items-center">
                    <div className="w-10 h-10 rounded-full duration-300 group bg-slate-100 flex justify-center items-center">
                        <ArrowIcon className="w-6 h-6 duration-300 group-hover:translate-x-10 group-hover:fill-slate-200  "></ArrowIcon>
                        
                    </div>
                    
                </div>
            </div>


            <div className="w-1/2 h-full text-[0.95rem] text-slate-200 p-3 flex items-center font-mono font-semibold">
            <article>
                    {props.discription}
                </article>
            </div>
        </div>
    )
}