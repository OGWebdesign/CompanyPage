export const WeekChangerItems = (props: {
    text: string,
    activecss:string,
    onClick:() => void
}) => {
    return (
        <div onClick={props.onClick} className={` duration-300 p-1 flex border-2 border-[#151515] justify-center items-center  ${props.activecss}`}>
            <div className="w-[98%] h-[98%] p-5 flex justify-center items-center rounded-lg text-center font-semibold  text-[#151515] bg-[#98f144] font-mono">
                {props.text}
            </div>
        </div>
    )
}