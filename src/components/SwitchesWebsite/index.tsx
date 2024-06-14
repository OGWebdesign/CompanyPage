export const SwitchesWebsite = (props: {
    switch1:JSX.Element | JSX.Element[] | string,
    switch2:JSX.Element | JSX.Element[] | string,
    switch3:JSX.Element | JSX.Element[] | string,
    switch4:JSX.Element | JSX.Element[] | string,
    switch5:JSX.Element | JSX.Element[] | string
}) => {
    return (
        <div className="w-1/2 duration-500 ease-in-out transition-all flex justify-center items-center flex-col">
            <div>
                {props.switch1}
                {props.switch2}
                {props.switch3}
                {props.switch4}
                {props.switch5}
            </div>
        </div>
    )
}