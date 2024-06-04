
import { ArrowIcon } from "../Icons"

export const CardBlack = (props:{
    text1 : string,
    text2 : string,
    discription:string,
    classname?:string
    
})=>{
    
    return(
        <div className={`w-full ${props.classname} max-w-[30rem] min-w-[25rem] h-[15rem] border p-3 rounded-2xl flex border-b-8 `}>
            
            <div className="flex flex-col w-1/2 text-[#151515]">

                <div className="mobile:p-2 p-4 w-full h-1/2 ">
                    <p className="inline-block bg-[#98f144] p-1 font-mono font-semibold mobile:text-[1.1rem] text-[1.3rem]">{props.text1}</p>
                    <p className="inline-block bg-[#98f144] p-1 font-mono font-semibold mobile:text-[1.1rem] text-[1.3rem]" >{props.text2}</p>
                </div>

                <div className="w-full h-1/2 flex justify-center items-center">
                    <div  className="w-10 h-10  hover:cursor-pointer rounded-full duration-300 group border-2 bg-slate-100 hover:bg-[#98f144] hover:border-[#e9e9e9]  flex justify-center items-center">
                        <ArrowIcon className="w-6 h-6 duration-300 group-hover:translate-x-10 group-hover:fill-slate-200  "></ArrowIcon>
                        
                    </div>
                    
                </div>
            </div>


            <div className={`w-1/2 h-full duration-300 text-[0.95rem] mobile:text-[0.9rem] desktop:text-[1rem] text-slate-200 p-3 flex items-center font-mono font-semibold `}>
            <article>
                    {props.discription}
                </article>
            </div>
        </div>
    )
}