export const PackageCardItem =(props:{
    title:string,
    description:string,
    activecss:string,
    onClick:() => void
}) => {
    return(
        <div onClick={props.onClick} className={`w-[95%] duration-300 h-[14rem] border-2 border-[#151515] flex justify-center items-center ${props.activecss}`}>
            <div className="flex flex-col justify-center text-center p-3 items-center w-[96%] h-[94%] bg-[#98f144] rounded-lg">
                <p className="font-mono font-semibold text-[1.4rem] text-[#151515]">{props.title}</p>
                <p className="font-mono font-semibold duration-500">{props.description}</p>
            </div>
        </div>
    )
}