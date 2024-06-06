export const EmployeeCard = ()=>{
    return(
        <div className="w-full flex justify-center items-center bg-[#151515] gap-7 mt-[5%] border-white">

            {/* Left Side */}
            <div className="w-1/2 h-full flex flex-col">
            <div className="flex justify-end">
                <div className="w-[8rem] h-[8rem] bg-nils hover:cursor-pointer hover:scale-110 duration-300 hover:border-8 grayscale hover:grayscale-0  hover:border-[#98f144] rounded-full border-slate-200 border-2 bg-no-repeat bg-cover">
                    
                </div>
            </div>
            </div>


            {/* Right Side */}
            <div className="w-1/2 h-full flex flex-col">
            <div className="w-[8rem] h-[8rem] bg-max hover:cursor-pointer hover:scale-110 duration-300 hover:border-8 grayscale hover:grayscale-0  hover:border-[#98f144] rounded-full border-slate-200 border-2 bg-no-repeat bg-cover">
                    
                </div>
            </div>
        </div>
    )
}