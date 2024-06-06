export const EmployeeCard = () => {
    return (
        <div className="w-full flex justify-center font-mono  bg-[#151515] gap-20 mt-[25%] border-white">

            {/* Left Side */}
            <div className="w-1/2 h-full flex flex-col justify-around group">
                <div className="flex items-end flex-col text-right">
                    <img src="nils.png" className="w-[10rem] h-[10rem] bg-nils hover:cursor-pointer hover:scale-125 duration-300 hover:border-8 grayscale hover:grayscale-0  hover:border-[#98f144] rounded-full border-slate-200 border-2 bg-no-repeat bg-cover">

                    </img>
                    <p className="text-slate-200 ease-in-out duration-1000 opacity-0 group-hover:opacity-100 mt-14">Hallo, mein Name ist Nils Ole Otto. Ich bin 20 Jahre alt und studiere Informatik an der BTU Cottbus. In meiner Freizeit programmiere ich leidenschaftlich gerne. Mein Schwerpunkt liegt auf Web-Backend-Entwicklung und Datenbanken. Die Kombination aus Logik, Kreativität und Problemlösung fasziniert mich und ich freue mich immer darauf, neue Technologien und Ansätze in meinen Projekten zu erkunden und anzuwenden.</p>
                </div>
            </div>


            {/* Right Side */}
            <div className="w-1/2 h-full flex flex-col group">
                <img src="max.png" className="w-[10rem] h-[10rem] bg-nils hover:cursor-pointer hover:scale-125 duration-300 hover:border-8 grayscale hover:grayscale-0  hover:border-[#98f144] rounded-full border-slate-200 border-2 bg-no-repeat bg-cover">

                </img>
                <p className="text-slate-200 ease-in-out duration-1000 opacity-0 group-hover:opacity-100 mt-14">Ich bin Maximilian Gorn, 20 Jahre alt und studiere Informatik an der BTU Cottbus. Programmieren zählt zu meinen größten Leidenschaften. Mein Schwerpunkt liegt dabei auf der Frontend-Entwicklung und der Erstellung von Bots. Die Herausforderung, benutzerfreundliche und ästhetisch ansprechende Interfaces zu entwickeln, fasziniert mich ebenso wie die Arbeit an intelligenten Bots. Ständig neue Technologien zu entdecken und kreative Lösungen in meinen Projekten umzusetzen, bereitet mir große Freude.</p>
            </div>
        </div>
    )
}