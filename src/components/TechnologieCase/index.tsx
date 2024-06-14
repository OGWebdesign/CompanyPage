export const TechnologieCase = (props: {
    heading: string,
    item1: JSX.Element | JSX.Element[] | string,
    item2: JSX.Element | JSX.Element[] | string,
    item3: JSX.Element | JSX.Element[] | string,
    item4: JSX.Element | JSX.Element[] | string

}) => {


    return (
        <>
            <h1 className="text-[1.6rem] text-[#98f144] animate-fadeIn text-center mb-[3rem] font-bold font-mono mt-[6rem]">{props.heading}</h1>
            {/* Grid Layout for Technologie Kind*/}
            <div className="tablet:w-[80%] mobile:w-full grid mobile:grid-rows-2 duration-500 gap-5 mobile:grid-cols-2 tablet:grid-rows-1 tablet:grid-cols-4 place-content-center place-items-center">
                {props.item1}
                {props.item2}
                {props.item3}
                {props.item4}
            </div>
        </>
    )
}