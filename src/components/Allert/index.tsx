export const Allert = (props:{
    head:string,
    text:string
}) => {
    return (
        <div className="w-[100%] h-[5rem] mobile:my-[30%] tablet:my-[5%] desktop:my-[5%] flex justify-center items-center">
            <div className="w-[10rem] flex flex-row items-center">
                <span className=" w-[10rem] font-mono select-none text-[#151515] font-bold text-[1.8rem] bg-[#98f144] rounded pl-2 flex justify-center items-center">{props.head}</span>
            </div>
            <div className="w-2/3">
                <p className="ml-10 font-mono select-none  text-[#b9b9b9] text-[1rem]">{props.text}</p>
            </div>
        </div>
    )
}