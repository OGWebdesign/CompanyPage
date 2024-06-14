export const PackageCardItem =(props:{
    title:string,
    description:string
}) => {
     const activePackageStyle = "border-dashed border-[#98f144] rounded-2xl"
    return(
        <div className={`w-[95%] duration-300 border-2 border-[#151515] h-[14rem] flex justify-center items-center ${activePackageStyle}`}>
            <div className="flex flex-col justify-center text-center p-3 items-center w-[96%] h-[94%] bg-[#98f144] rounded-lg">
                <p className="font-mono font-semibold text-[1.4rem] text-[#151515]">{props.title}</p>
                <p className="font-mono font-semibold duration-500">{props.description}</p>
            </div>
        </div>
    )
}