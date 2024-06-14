export const PackageCard = (props:{
    children?:JSX.Element | JSX.Element []| string
}) => {
    return (
        <div className="w-full flex flex-col mobile:mt-8">
            <div className="w-full grid duration-500 mobile:grid-rows-4 gap-7 mobile:grid-cols-1 tablet:grid-rows-2 tablet:grid-cols-2 desktop:grid-rows-1 desktop:grid-cols-4 desktop:gap-2 place-items-center">
                {
                    props.children
                }
            </div>
        </div>
    )
}