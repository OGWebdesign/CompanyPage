import { GearIcon } from "../Icons"

export const Maintenance = (props: {
    children?: JSX.Element | JSX.Element[] | string,
}) => {
    return (
        <div className="w-full h-screen animate-fadeIn cursor-none flex items-center  justify-center flex-col z-10 bg-black">
            <div className="flex flex-col mobile:p-10">
                <p className="text-white font-mono text-[2.4rem] inline-block bg-[#]">Wartungsarbeiten im Gange.</p>
                <p className="text-white w-[25rem] font-mono text-[1rem]">Unsere Website befindet sich gerade in der Wartung, um Ihnen eine noch bessere Nutzererfahrung zu bieten. Wir arbeiten intensiv daran, neue Features zu integrieren und bestehende Funktionen zu optimieren. Wieder verfügbar: 3. Oktober 2024</p>
                {props.children}
                
                <div className="w-full flex justify-center mt-[10%]">
                    <GearIcon className="w-[10rem] fill-slate-200 animate-spin">

                    </GearIcon>
                </div>
            </div>
        </div>
    )
}