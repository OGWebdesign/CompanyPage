export const WeekChangerItems = (props: {
    text: string,
    activecss:string,
    onClick:() => void
}) => {
    return (
        <div onClick={props.onClick} className={` duration-300 p-1 flex border-2 border-[#151515] justify-center items-center  ${props.activecss}`}>
            <div className="p-5 flex flex-col justify-center items-center rounded-md text-center font-semibold  text-[#151515] bg-[#98f144] font-mono">
                <p className="w-full flex justify-center items-center text-[0.9rem]">{props.text}</p>
                <p>Weeks</p>
            </div>
        </div>
    )
}