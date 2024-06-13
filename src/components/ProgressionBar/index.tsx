

export const ProgressionBar = (props: {
    initProgression: number,
}) => {
    const completeText = "Configuration Successful!"
    const infoText = "Configuration Progress"
    const infoProgression = props.initProgression * 100 / 20 + "%";




    return (
        <div className="w-full flex flex-col justify-center items-center">

            {/* Progress Border */}
            <div className="w-[20rem] h-10 border border-[#292929] rounded-full flex items-center overflow-hidden">
                {/* Progress Bar */}
                <div className={`animate-progressInit h-full bg-[#98f144] duration-500 overflow-hidden rounded-full flex justify-center items-center`}><span className={`font-mono font-semibold ${props.initProgression === 100 ? "opacity-100" : "opacity-0"}`}>{completeText}</span></div>
            </div>
            <div className="text-slate-200 font-mono text-[0.8rem] mt-3"><span>{infoText}</span>{" : "}<span>{infoProgression}</span></div>
        </div>


    )
}