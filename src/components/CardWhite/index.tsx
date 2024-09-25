
export const CardWhite = (props: {
    text1: string,
    text2: string,
    description?: string
    classname?: string,
    children?: JSX.Element | JSX.Element[] | string,
}) => {

    return (
        <div className={`w-full ${props.classname} select-none h-[30rem]  max-w-[30rem] min-w-[25rem] p-5 border rounded-2xl flex border-b-8 bg-slate-200`}>

            <div className="flex flex-col">

                <div className="mobile:p-2 p-4 w-full  text-[#151515]">
                    <p className="inline-block p-1 font-mono font-semibold mobile:text-[1.1rem] tablet:text-[1.2rem] text-[1.3rem]">{props.text1} {props.text2}</p>
                    <article className="h-full  duration-300 text-[0.95rem] tablet:text-[1rem] mobile:text-[0.9rem] desktop:text-[1rem] p-3 flex items-center font-mono font-semibold">
                    {props.description}
                </article>
                </div>
                {props.children}
            </div>

        </div>
    )
}