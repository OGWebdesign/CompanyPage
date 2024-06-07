
import { ArrowIcon } from "../Icons"

export const CardWhite = (props:{
    text1 : string,
    text2 : string,
    description:string
    classname?:string
})=>{

    return(
        <div className={`w-full ${props.classname} select-none  max-w-[30rem] min-w-[25rem] p-5 h-[15rem] border rounded-2xl flex border-b-8 bg-slate-200`}>
            
            <div className="flex flex-col w-1/2">

                <div className="mobile:p-2 p-4 w-full h-1/2 text-[#151515] ">
                    <p className="inline-block p-1 font-mono font-semibold mobile:text-[1.1rem] tablet:text-[1.2rem] text-[1.3rem]">{props.text1}</p>
                    <p className="inline-block p-1 font-mono font-semibold mobile:text-[1.1rem] tablet:text-[1.2rem] text-[1.3rem]" >{props.text2}</p>
                </div>



                <div className="w-full h-1/2 flex justify-center items-center">
                    <div className="w-[8rem] group h-12 rounded-xl border-2 border-slate-200 duration-300 group hover:border-[#151515] bg-[#151515] hover:bg-[#98f144] flex justify-center items-center">
                        <p className="font-mono text-[1.1rem] font-semibold text-slate-200 group-hover:text-[#151515] mr-3 ">Get it</p>
                        <ArrowIcon className="w-6 h-6 fill-slate-200 duration-300 tablet:group-hover:translate-x-14 desktop:group-hover:translate-x-12 mobile:group-hover:translate-x-10 group-hover:fill-black  "></ArrowIcon>        
                    </div>
                </div>
            </div>



            <div className={`w-1/2 h-full duration-300 text-[0.95rem] tablet:text-[1rem] mobile:text-[0.9rem] desktop:text-[1rem] p-3 flex items-center font-mono font-semibold`}>
                <article>
                    {props.description}
                </article>
            </div>

        </div>
    )
}