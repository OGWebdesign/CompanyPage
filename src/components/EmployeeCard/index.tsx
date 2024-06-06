export const EmployeeCard = () => {
    return (
        <div className="w-full flex justify-center items-center bg-[#151515] gap-20 mt-[25%] border-white">

            {/* Left Side */}
            <div className="w-1/2 h-full flex flex-col">
                <div className="flex justify-end">
                    <img src="public/max.png" className="w-[10rem] h-[10rem]  hover:cursor-pointer hover:scale-110 duration-300 hover:border-8 grayscale hover:grayscale-0  hover:border-[#98f144] rounded-full border-slate-200 border-2 bg-no-repeat bg-cover">

                    </img>
                </div>
                <div className="">
                    
                </div>
            </div>


            {/* Right Side */}
            <div className="w-1/2 h-full flex flex-col">
                <img src="public/nils.png" className="w-[10rem] h-[10rem] hover:cursor-pointer hover:scale-110 duration-300 hover:border-8 grayscale hover:grayscale-0  hover:border-[#98f144] rounded-full border-slate-200 border-2 bg-no-repeat bg-cover">

                </img>
            </div>
        </div>
    )
}