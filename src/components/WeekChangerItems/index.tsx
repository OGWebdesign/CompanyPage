export const WeekChangerItems = (props: {
    text: string,
    activecss:string
}) => {
    return (
        <div className={` p-1 flex justify-center rounded-lg items-center border-2 border-[#98f144] border-dashed ${props.activecss}`}>
            <div className="w-[98%] h-[98%] p-5 flex justify-center items-center rounded-lg text-center font-semibold  text-[#151515] bg-[#98f144] font-mono">
                {props.text}
            </div>
        </div>
    )
}