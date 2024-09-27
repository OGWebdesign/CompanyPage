import { GearIcon } from "../Icons"

export const Maintenance = (props: {
    children?: JSX.Element | JSX.Element[] | string,
}) => {
    return (
        <div className="w-full h-screen animate-fadeIn cursor-none flex items-center  justify-center flex-col z-10 bg-black">
            <div className="flex flex-col mobile:p-10">
                <p className="text-white font-mono text-[2rem] inline-block bg-[#]">Maintenance work in progress in this area</p>
                <p className="text-white w-[25rem] font-mono text-[1rem]">This area of ​​the site is undergoing maintenance and will therefore be unavailable for a while.</p>
                {props.children}
                
                <div className="w-full flex justify-center mt-[10%]">
                    <GearIcon className="w-[10rem] fill-slate-200 animate-spin">

                    </GearIcon>
                </div>
            </div>
        </div>
    )
}