
export const CardWhite = (props: {
    text1: string,
    text2: string,
    description?: string
    classname?: string,
    children?: JSX.Element | JSX.Element[] | string,
}) => {

    return (
        <div className={`w-full ${props.classname} select-none  w-[60%d] p-5 rounded-2xl flex `}>

            <div className="flex flex-col">

                <div className=" w-full  text-white">
                    <p className="inline-block p-1 mb-[0.5rem] font-mono font-semibold mobile:text-[1.1rem] tablet:text-[1.2rem] text-[1.3rem]">{props.text1} {props.text2}</p>
                </div>
                {props.children}
            </div>

        </div>
    )
}