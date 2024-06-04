import { ArrowIcon } from "../Icons"

export const CardWhite = (props:{
    text1 : string,
    text2 : string,
    description:string
})=>{
    return(
        <div className="w-full p-5 h-[15rem] border rounded-2xl flex border-b-8 bg-slate-200">
            
            <div className="flex flex-col w-1/2">

                <div className="p-4 w-full h-1/2 ">
                    <p className="inline-block  p-1 rounded font-mono font-semibold text-[1.3rem]">{props.text1}</p>
                    <p className="inline-block  p-1 rounded font-mono font-semibold text-[1.3rem]" >{props.text2}</p>
                </div>



                <div className="w-full h-1/2 flex justify-center items-center">
                    <div className="w-10 h-10 rounded-full hover:cursor-pointer duration-300 group bg-[#151515] flex justify-center items-center">
                        <ArrowIcon className="w-6 h-6 fill-slate-200 duration-300 group-hover:translate-x-10 group-hover:fill-black  "></ArrowIcon>        
                    </div>
                </div>
            </div>



            <div className="w-1/2 h-full text-[0.95rem] p-3 flex items-center font-mono font-semibold">
                <article>
                    {props.description}
                </article>
            </div>

        </div>
    )
}