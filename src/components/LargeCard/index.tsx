export const LargeCard = () => {
    return (
        <div className="w-full flex justify-center items-center select-none leading-none desktop:mt-[5%]">
            <div className="flex-col max-w-[60rem] min-h-[15em]  bg-slate-200 rounded-2xl">
                <div className="w-full flex">
                    <div className="w-1/2 h-full flex-row  mobile:flex-col">
                        <div className="w-full h-1/2">
                            <p className="pl-5 pt-5 text-[1.7rem] text-[#151515] font-mono font-semibold">Let`s make things happen!</p>
                            <p className="pl-5 pt-2 font-semibold font-mono text-[1.04rem]">No matter what your idea is, we can be the right partner for you. Send us your request and we will find a suitable solution for each of your concerns.</p>
                        </div>
                        <div className="w-full h-1/2">

                        </div>
                    </div>


                    <div className="w-1/2 h-full">
                        <p className="pl-5 pt-5 text-[1.7rem] text-[#151515] font-mono font-semibold">Whether big or small.</p>
                        <p className="pl-5 pt-2 font-semibold font-mono text-[1.04rem]">You can entrust us with any project proposal, we will find a solution that will ensure your complete satisfaction. Don't hesitate to come to us with small ideas. The biggest companies in the world started in a garage. Dream big, start even bigger.</p>
                    </div>
                  
                </div>
                <div className="tablet:w-[20rem] hover:cursor-pointer duration-300 hover:bg-[#98f144] mobile:w-[10rem] flex justify-center items-center text-center font-mono text-slate-200 h-[3rem] ml-4 mt-14 bg-[#151515] rounded-lg border border-black">
                    Get your free proposal
                </div>
                <div className="h-4">

                </div>

            </div>





        </div>

    )
}