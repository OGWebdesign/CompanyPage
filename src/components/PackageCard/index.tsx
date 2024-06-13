import { useState } from "react"







export const PackageCard = (props: {
    kind1?: string,
    kind2?: string,
    kind3?: string,
    kind4?: string,
    description1?: string,
    description2?: string,
    description3?: string,
    description4?: string,
    packageCardLogic: (number:number) => void
}) => {
    const activePackageStyle = "border-dashed border-[#98f144] rounded-2xl"
const [activePackage1, setActivePackage1] = useState(false);
const [activePackage2, setActivePackage2] = useState(false);
const [activePackage3, setActivePackage3] = useState(false);
const [activePackage4, setActivePackage4] = useState(false);

    return (
        <div className="w-full h-1/2 flex flex-col mobile:mt-8">
            <div className="w-full grid duration-500 mobile:grid-rows-4 gap-7 mobile:grid-cols-1 tablet:grid-rows-2 tablet:grid-cols-2 desktop:grid-rows-1 desktop:grid-cols-4 desktop:gap-2 place-items-center">


                <div onClick={() => {
                    setActivePackage1(!activePackage1);
                    setActivePackage2(false);
                    setActivePackage3(false);
                    setActivePackage4(false);
                    props.packageCardLogic(1);
                    }} className={`w-[95%] duration-300 border-2 border-[#151515] h-[14rem] flex justify-center items-center ${activePackage1 && activePackageStyle}`}>
                    <div className="flex flex-col justify-center text-center p-3 items-center w-[96%] h-[94%] bg-[#98f144] rounded-lg">
                        <p className="font-mono font-semibold text-[1.4rem] text-[#151515]">Onepage</p>
                        <p className="font-mono font-semibold duration-500">Ideal als Online Visitenkarte oder Setcard. </p>
                    </div>
                </div>



                <div onClick={() => {
                    setActivePackage2(!activePackage2);
                    setActivePackage1(false);
                    setActivePackage3(false);
                    setActivePackage4(false);
                    props.packageCardLogic(2);
                    }}  className={`w-[95%] duration-300 border-2 border-[#151515] h-[14rem] flex justify-center items-center ${activePackage2 && activePackageStyle}`}>
                    <div className="flex flex-col justify-center text-center p-3 items-center w-[96%] h-[94%] bg-[#98f144] rounded-lg">
                        <p className="font-mono font-semibold text-[1.4rem] text-[#151515]">Startup</p>
                        <p className="font-mono font-semibold duration-500">Mit 4-6 Seiten optimal für kleine Unternehmen geeignet.</p>
                    </div>
                </div>



                <div onClick={() => {
                    setActivePackage3(!activePackage3);

                    props.packageCardLogic(3);
                    setActivePackage1(false);
                    setActivePackage2(false);
                    setActivePackage4(false);
                    }}  className={`w-[95%] duration-300 border-2 border-[#151515] h-[14rem] flex justify-center items-center ${activePackage3 && activePackageStyle}`}>
                    <div className="flex flex-col justify-center text-center p-3  items-center w-[96%] h-[94%] bg-[#98f144] rounded-lg">
                        <p className="font-mono font-semibold text-[1.4rem] text-[#151515]">Business</p>
                        <p className="font-mono font-semibold duration-500">Mit 8-12 Seiten sehr gut für mittelständische Unternehmen geeignet.</p>
                    </div>
                </div>



                <div onClick={() => {
                    setActivePackage4(!activePackage4);
                    setActivePackage1(false);
                    setActivePackage2(false);
                    setActivePackage3(false);
                    props.packageCardLogic(4);
                    
                    }}  className={`w-[95%] duration-300 border-2 border-[#151515] h-[14rem] flex justify-center items-center ${activePackage4 && activePackageStyle}`}>
                    <div className="flex flex-col justify-center text-center p-3  items-center w-[96%] h-[94%] bg-[#98f144] rounded-lg">
                        <p className="font-mono font-semibold text-[1.4rem] text-[#151515]">Individuell</p>
                        <p className="font-mono font-semibold duration-500">Kein passendes Paket gefunden? Sie können auch eine individuelle Anfrage stellen.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}