import { motion } from "framer-motion"
import { EmployeeCard } from "../EmployeeCard"
import { BookIcon } from "../Icons"
import { LargeCard } from "../LargeCard"


export const CompanySite = () => {
    return (
        <div className="animate-fadeIn">
            <div className="w-full mt-[10%] flex flex-col text-white">
                <div className="w-full h-[4rem] flex items-center">
                    <p className="font-sharemono font-bold text-[3rem]">Mission Control</p>
                </div>
                <article className="text-[1.6rem] font-sharemono">OG Webdesign steht für Innovation und maßgeschneiderte 
                    digitale Lösungen, die mehr sind als nur Code. Wir verbinden 
                    Kreativität mit Technologie, um atemberaubende Webseiten, 
                    leistungsstarke APIs für künstliche Intelligenz und hochmoderne 
                    Web-Apps zu entwickeln. Unsere Expertise im Bereich DevOps 
                    ermöglicht es uns, stabile und skalierbare Infrastrukturen 
                    zu schaffen, die den Anforderungen von heute und morgen 
                    gerecht werden.</article>
            </div>


            <EmployeeCard/>

            <div className=" px-[5rem] my-[10%] flex flex-col justify-center items-center">
                <span className="w-[60%] font-sharemono text-[#98f144] text-[3rem] text-center">Unsere Werte - Ihr Erfolg</span>
                <p className="font-mono text-white text-[1.2rem] text-center mt-[1rem]">
                    Wir bei OG Webdesign glauben daran, dass Technologie die Welt verändern kann – und zwar zum Besseren. 
                    Unser Antrieb ist es, für unsere Kunden einzigartige digitale Erlebnisse zu schaffen, die begeistern, 
                    beeindrucken und bleibende Eindrücke hinterlassen. Innovation, Qualität und ein Höchstmaß an Zuverlässigkeit 
                    sind die Säulen unseres Schaffens.
                </p>
                <div className="w-full h-full grid place-content-center place-items-center laptop:grid-cols-3 laptop:grid-rows-1 mobile:grid-cols-1 mobile:grid-rows-3 gap-x-[2rem] mt-[3rem]">
                    <div className="w-full h-full flex flex-col justify-start items-center py-[2.5rem]">
                        <BookIcon className="w-[2rem] fill-white" />
                        <span className="text-[1.5rem] text-white font-sharemono mt-[1rem]">Innovation</span>
                        <p className="font-mono text-white text-[1rem] text-center mt-[1rem]">Wir streben stets nach neuen Wegen, um digitale Herausforderungen zu meistern. Standardlösungen? Nicht bei uns.</p>
                    </div>
                    <div className="laptop:border-x-2 laptop:border-x-2-[#151515] mobile:border-y-2 border-y-2-[#151515]">
                    <div className="w-full h-full flex flex-col justify-start items-center py-[2.5rem] px-[1rem] shadow-[0_20px_50px_rgba(8,_100,_184,_0.7)] animate-pulse">
                        <BookIcon className="w-[2rem] fill-white" />
                        <span className="text-[1.5rem] text-white font-sharemono mt-[1rem] animate-none">Zuverlässigkeit</span>
                        <p className="font-mono text-white text-[1rem] text-center mt-[1rem] animate-none">Wir verstehen, wie wichtig Ihre digitalen Projekte sind. Deshalb können Sie sich darauf verlassen, dass wir stets liefern – und das mit höchster Präzision.</p>
                    </div> 
                    </div>
                    <div className="w-full h-full flex flex-col justify-start items-center py-[2.5rem]">
                        <BookIcon className="w-[2rem] fill-white" />
                        <span className="text-[1.5rem] text-white font-sharemono mt-[1rem]">Qualität</span>
                        <p className="font-mono text-white text-[1rem] text-center mt-[1rem]">Unsere Lösungen sind nicht nur technisch einwandfrei, sondern auch darauf ausgelegt, Ihre Ziele zu übertreffen.</p>
                    </div>
                </div>
            </div>

            <LargeCard
                head1style="text-[#98f144] mt-10"
                head2style="text-[#98f144] mt-10"
                text1Style="text-[#b9b9b9]"
                text2Style="text-[#b9b9b9]"
                head2="Young and unconventional"
                head1="Since XX23"
                text2="At OG Webdesign, we believe that your website should be more than just a digital business card. It should tell your story, bring your brand to life and delight your customers. Our team consists of talented designers, developers and strategists who work with passion and creativity to turn your ideas into reality. Straight forward!"
                text1="We look back on a short but successful past. We have implemented every project, every application, no matter how small with great care and an even greater sense of responsibility, always to the full satisfaction of our clients and beyond. We are thrilled to see how our websites and software products have transformed us into a completely different company, from the way we present ourselves online to how we operate our software products internally."></LargeCard>

        </div>
    )
}