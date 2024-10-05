export const TextComponent = (props:{
    headline:string,
    text:string
}) => {
    return (
        <div className="w-full mt-[5%] max-w-[100rem] flex flex-col justify-center items-center z-50">
            <p className="text-[#98f144] w-[95%] leading-9 text-[2rem] font-mono font-semibold">{props.headline}</p>
            <p className="text-slate-200 w-[95%] leading-6 mt-5  font-mono">{props.text}</p>
        </div>
    )
}