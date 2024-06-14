export const TechnologieCaseItem = (props:{
    name1:string,
}) => {
    // noch nicht benutzt da Schaltung noch unklar
    const activeEffect = "border-[#98f144] rounded-lg border-dashed"

    return (

        <div className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem]`}>
            <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">{props.name1}</div>
        </div>
    )
}