export const WeekChanger = (props:{
    children1?: JSX.Element | JSX.Element [] | string,
    children2?: JSX.Element | JSX.Element [] | string,
    children3?: JSX.Element | JSX.Element [] | string
}) => {

    return(
        <div className="w-full grid grid-rows-1 grid-cols-3 gap-4 place-content-center justify-items-center">
            {props.children1}
            {props.children2}
            {props.children3}
        </div>
    )
}