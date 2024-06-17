export const LargeCard = (props: {
    head1: string,
    head2: string,
    text1: string,
    text2: string,
    head1style?:string,
    head2style?:string,
    text1Style?: string,
    text2Style?: string,
    withButton?: boolean,
    classname?:string
}) => {



    return (
        <div className="w-full flex justify-center items-center select-none leading-none mt-[3rem]">
            <div className={`flex-col p-4 max-w-[60rem] min-h-[15em] ${props.classname} rounded-2xl`}>
                <div className="w-full flex desktop:flex-row mobile:flex-col gap-x-[2rem]">
                    <div className="w-1/2 mobile:w-full flex-row  mobile:flex-col">
                        <div className="w-full h-1/2">
                            <p className={`${props.head1style} pl-5 pt-5 text-[1.7rem]  font-mono font-semibold`}>{props.head1}</p>
                            <p className={`${props.text1Style} pl-5 pt-2 font-semibold font-mono text-[1.04rem]`}>{props.text1}</p>
                        </div>
                        <div className="w-full h-1/2">

                        </div>
                    </div>


                    <div className="w-1/2 mobile:w-full ">
                        <p className={`${props.head2style} pl-5 pt-5 text-[1.7rem] font-mono font-semibold`}>{props.head2}</p>
                        <p className={`${props.text2Style} pl-5 pt-2 font-semibold font-mono text-[1.04rem]`}>{props.text2}</p>
                    </div>

                </div>
                {props.withButton && (
                    <div className="tablet:w-[20rem] border-2  duration-300 hover:font-semibold hover:text-[#151515] hover:bg-[#98f144] mobile:w-[10rem] flex justify-center items-center text-center font-mono text-slate-200 h-[3rem] ml-4 mt-14 bg-[#151515] rounded-lg border-[#151515]">
                        Get your free proposal
                    </div>
                )}
                <div className="h-4">

                </div>

            </div>





        </div>

    )
}