

export const EmployeeCard = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full desktop:max-w-[70rem] items-center flex flex-col cursor-none duration-300  rounded-2xl p-6 justify-center font-mono gap-20 mt-[5%] border-white">

                {/* Left Side */}
                <div className="w-full flex tablet:flex-row group mobile:justify-center mobile:items-center mobile:flex-col-reverse ">
                    <div className="text-slate-200">
                        <p className="font-mono font-bold text-[2rem] text-[#98f144]">Herr Mustermann1.</p>
                        Herr Mustermann ist ein vielseitiger und engagierter Mitbegründer unseres Unternehmens. Schon in jungen Jahren entwickelte er ein starkes Interesse an Musterdingen und deren Möglichkeiten, was ihn dazu inspirierte das Musterfach zu studieren. 
                        Während seiner Studienzeit hat er sich intensiv mit der Welt seines Faches und der Vertiefung des Mustergebietes auseinandergesetzt.


                    </div>
                    <div className="p-8">

                        <img loading="lazy" className="min-w-[5rem] max-w-[15rem] grayscale group-hover:grayscale-0 group-hover:scale-110 duration-300  mobile:rounded-full mobile:mb-10 mobile:border-8 border-[#98f144]" src="mustermann.jpeg" alt="" />
                    </div>
                </div>


                {/* Right Side */}
                <div className="w-full flex tablet:flex-row group mobile:flex-col mobile:justify-center mobile:items-center">
                    <div className="p-8">
                        <img loading="lazy" className="min-w-[5rem] max-w-[15rem] grayscale group-hover:grayscale-0 group-hover:scale-110 duration-300  mobile:rounded-full mobile:mb-10 mobile:border-8 border-[#98f144]" 
                        src="mustermann.jpeg" alt="" />
                    </div>
                    <div className="text-slate-200">
                        <p className="font-mono font-bold text-[2rem] text-[#98f144]">Herr Mustermann2.</p>
                        Herr Mustermann ist bekannt für seine Kreativität und sein analytisches Denken. Er hat ein besonderes Talent dafür, komplexe Herausforderungen zu meistern und 
                        innovative Lösungen zu entwickeln. Seine Vision und sein Engagement haben maßgeblich dazu beigetragen, dass unser Unternehmen Projekte von hoher
                         Qualität und Funktionalität umsetzen kann.
                    </div>
                    
                </div>
               
            </div>
        </div>
    )
}