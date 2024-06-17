export const PackageCardItem =(props:{
    title:string,
    description:string,
    price?:number,
    numbers?:string,
    activecss:string,
    currency?:string
    onClick:() => void
}) => {
    return(
        <div onClick={props.onClick} className={`w-[95%] duration-300 h-[14rem] border-2 border-[#151515] flex justify-center items-center ${props.activecss}`}>
            <div className="flex flex-col mobile:pt-7 tablet:justify-center text-center p-3 items-center w-[97%] h-[94%] bg-[#98f144] rounded-lg">
                <p className="font-mono font-bold mobile:text-[1.2rem] leading-none text-[1.6rem] text-[#151515]">{props.title}</p>
                <p className="font-mono mobile:mt-2 text-[0.9rem] leading-none font-semibold duration-500">{props.description}</p>
                <p className="font-mono mobile:mt-4 text-[0.9rem] leading-none font-semibold duration-500">{props.numbers}</p>
                <p className="font-mono font-bold text-[1.2rem] mt-3">{props.price}{props.currency}</p>
            </div>
        </div>
    )
}