export const EmployeeCard = () => {
    return (
        <div className="w-full flex cursor-none justify-center font-mono  bg-[#151515] gap-20 mt-[5%] border-white">

            {/* Left Side */}
            <div className="w-1/2 h-full flex flex-col justify-around group">
                <div className="flex items-end flex-col text-right">
                    <img src="nils.webp" className="w-[10rem] h-[10rem] bg-nils hover:scale-125 duration-300 hover:border-8 grayscale hover:grayscale-0  hover:border-[#98f144] rounded-full border-slate-200 border-2 bg-no-repeat bg-cover">

                    </img>
                    <p className="text-[#777777] ease-in-out duration-1000 opacity-0 group-hover:opacity-100 mt-14">Hallo, mein Name ist Nils Ole Otto. Ich bin 20 Jahre alt und studiere Informatik an der BTU Cottbus. In meiner Freizeit programmiere ich leidenschaftlich gerne. Mein Schwerpunkt liegt auf Web-Backend-Entwicklung und Datenbanken. Die Kombination aus Logik, Kreativität und Problemlösung fasziniert mich und ich freue mich immer darauf, neue Technologien und Ansätze in meinen Projekten zu erkunden und anzuwenden.</p>
                </div>
            </div>


            {/* Right Side */}
            <div className="w-1/2 h-full flex flex-col group">
                <img src="max.webp" className="w-[10rem] h-[10rem] bg-nils hover:scale-125 duration-300 hover:border-8 grayscale hover:grayscale-0  hover:border-[#98f144] rounded-full border-slate-200 border-2 bg-no-repeat bg-cover">

                </img>
                <p className="text-[#777777] ease-in-out duration-1000 opacity-0 group-hover:opacity-100 mt-14">Hi, ich bin Maximilian, Anwendungsentwickler und Webdesigner. Seit 2016 programmiere ich Softwareanwendungen und Webseiten. Angefangen von Discord Bots bis hin zu kooperativen Softwareprojekten mit dem Gesundheitswesen.</p>
            </div>
        </div>
    )
}