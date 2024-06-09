
import { ArrowIcon } from "../Icons"

export const CardBlack = (props:{
    text1 : string,
    text2 : string,
    description:string,
    classname?:string
    
})=>{
    
    return(
        <div className={`w-full ${props.classname} select-none max-w-[30rem] min-w-[25rem] h-[15rem] border p-3 rounded-2xl flex border-b-8 `}>
            
            <div className="flex flex-col w-1/2 text-[#151515]">

                <div className="mobile:p-2 p-4 w-full h-1/2 ">
                    <p className="inline-block bg-[#98f144] p-1 font-mono font-semibold mobile:text-[1.1rem] text-[1.3rem]">{props.text1}</p>
                    <p className="inline-block bg-[#98f144] p-1 font-mono font-semibold mobile:text-[1.1rem] text-[1.3rem]" >{props.text2}</p>
                </div>

                <div className="w-full h-1/2 flex justify-center items-center">
                    <div  className="w-[8rem] h-12 rounded-xl duration-300 group border-2 bg-slate-100 hover:bg-[#98f144] hover:border-[#e9e9e9]  flex justify-center items-center">
                    <p className="font-mono text-[1.1rem] font-semibold text-[#151515] group-hover:text-[#151515] mr-3 ">Get it</p>
                        <ArrowIcon className="w-6 h-6 duration-300 tablet:group-hover:translate-x-14 desktop:group-hover:translate-x-12 mobile:group-hover:translate-x-10 group-hover:fill-slate-200  "></ArrowIcon>             
                    </div>
                    
                </div>
            </div>


            <div className={`w-1/2 h-full duration-300 text-[0.95rem] tablet:text-[1rem] mobile:text-[0.9rem] desktop:text-[1rem] text-slate-200 p-3 flex items-center font-mono font-semibold `}>
            <article>
                    {props.discription}
                </article>
            </div>
        </div>
    )
}