


export const ProgressionBar = (props: {
    initProgression: number,
}) => {
    const progression = 0;
    const completeText = "Configuration Successful!"
    const infoText = "Configuration Progress"
    const infoProgression = progression + " %"
    return (
        <div className="w-full flex flex-col justify-center items-center">

            {/* Progress Border */}
            <div className="w-[20rem] h-10 border border-[#292929] rounded-full flex items-center">
                {/* Progress Bar */}
                <div className={`w-${progression} h-full bg-[#98f144] duration-500 rounded-full flex justify-center items-center`}><span className="font-mono font-semibold">{completeText}</span></div>
            </div>
            <div className="text-slate-200 font-mono text-[0.8rem] mt-3"><span>{infoText}</span><span>{infoProgression}</span></div>
        </div>


    )
}