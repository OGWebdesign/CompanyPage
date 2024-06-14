export const CalculatorSwitches = (props: {
    switchTitle: string
}) => {
    const buttonStyleActive = "bg-[#98f144]"; // <-für den Hintergrund der Grün wird
    const buttonStyleInActive = "bg-[#151515]";// <- oder Grau

    // Wichtiger Hinweis -> aktiv ? "ml-6" : "ml-0" <-- für das innere div
    return (
        <div className="flex items-center my-2 ml-4">
            <div className="w-[6rem]">
                <div className={`flex items-center h-8 w-14 border border-[#4d4d4d] duration-300 rounded-full`}>
                    <div className={`w-8 h-8 bg-slate-200 rounded-full duration-300`}></div>
                </div>
            </div>

            <div className="w-3/4">
                <p className="text-slate-200 font-mono font-semibold">{props.switchTitle}</p>
            </div>
        </div>

    )
}