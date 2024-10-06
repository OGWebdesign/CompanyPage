import { EmployeeCard } from "../EmployeeCard"
import { CheckIcon, LightIcon, MedalIcon } from "../Icons"
import { LargeCard } from "../LargeCard"


export const CompanySite = () => {
    return (

        <div className="w-full flex justify-center">
            <img src="Planets/jupiter.webp" alt="Jupiter" className="absolute w-[45rem] desktop-xl:w-[50rem] top-[6rem] mobile:left-[40%] laptop:left-[60%] desktop:left-[60%] animate-floatJupiter" />
            <img src="Planets/icePlanet.webp" alt="IcePlanet" className="absolute w-[30rem] desktop-xl:w-[50rem] top-[57%] left-[35%] z-10 animate-floatIcePlanet" />
            <div className="animate-fadeIn w-3/4 mobile:w-[90%] tablet:w-[] max-w-[100rem] flex flex-col z-20">
                <div className="w-full tablet:w-3/4 laptop:w-[55%] tablet:mt-[10%] mobile:mt-[30%] flex flex-col text-white">
                    <div className="w-full flex items-center">
                        <p className="font-sharemono font-bold desktop:text-[4rem] m mobile:text-[2rem]">Mission Control</p>
                    </div>
                    <article className="tablet:text-[1.1rem] w-[70%] mobile:mt-16 laptop:mt-1
                     mobile:w-full mobile:text-[0.9rem] font-sharemono">OG Webdesign steht für Innovation und maßgeschneiderte
                        digitale Lösungen, die mehr sind als nur Code. Wir verbinden
                        Kreativität mit Technologie, um atemberaubende Webseiten,
                        leistungsstarke APIs für künstliche Intelligenz und hochmoderne
                        Web-Apps zu entwickeln. Unsere Expertise im Bereich DevOps
                        ermöglicht es uns, stabile und skalierbare Infrastrukturen
                        zu schaffen, die den Anforderungen von heute und morgen
                        gerecht werden.</article>
                </div>

                <img src="graphics/astro.webp" alt="a little cute astronaut" className="absolute w-[20rem] top-[60%]  right-[15%] mobile:right-[-20%] tablet:left-[60%] mobile:top-[54%] desktop:top-[55%] desktop:right-[10%] desktop-xl:right-[25%] z-10 animate-float" />
                <EmployeeCard />

                <div className="mobile:p-0 my-[10%] z-10 flex flex-col justify-center items-center mt-[20%]">
                    <span className="w-[60%] font-sharemono text-[#98f144] mobile:text-[2rem] text-[3rem] text-center">Unsere Werte Ihr Erfolg</span>
                    <p className="font-mono text-white text-[1.2rem] text-center mt-[1rem]">
                        Wir bei OG Webdesign glauben daran, dass Technologie die Welt verändern kann – und zwar zum Besseren.
                        Unser Antrieb ist es, für unsere Kunden einzigartige digitale Erlebnisse zu schaffen, die begeistern,
                        beeindrucken und bleibende Eindrücke hinterlassen. Innovation, Qualität und ein Höchstmaß an Zuverlässigkeit
                        sind die Säulen unseres Schaffens.
                    </p>
                    <div className="w-full h-full grid place-content-center place-items-center laptop:grid-cols-3 laptop:grid-rows-1 mobile:grid-cols-1 mobile:grid-rows-3 gap-x-[2rem] mt-[3rem]">
                        <div className="w-full h-full flex flex-col justify-start items-center py-[2.5rem]">
                            <LightIcon className="w-[2rem] fill-white" />
                            <span className="text-[1.5rem] text-white font-sharemono mt-[1rem]">Innovation</span>
                            <p className="font-mono text-white text-[1rem] text-center mt-[1rem]">Wir streben stets nach neuen Wegen, um digitale Herausforderungen zu meistern. Standardlösungen? Nicht bei uns.</p>
                        </div>
                        <div className="laptop:border-x-2 laptop:border-x-2-[#151515] mobile:border-y-2 border-y-2-[#151515]">
                            <div className="w-full h-full flex flex-col justify-start items-center py-[2.5rem] px-[1rem] shadow-[0_20px_50px_rgba(8,_100,_184,_0.7)] animate-pulse">
                                <CheckIcon className="w-[2rem] fill-white" />
                                <span className="text-[1.5rem] text-white font-sharemono mt-[1rem] animate-none">Zuverlässigkeit</span>
                                <p className="font-mono text-white text-[1rem] text-center mt-[1rem] animate-none">Wir verstehen, wie wichtig Ihre digitalen Projekte sind. Deshalb können Sie sich darauf verlassen, dass wir stets liefern – und das mit höchster Präzision.</p>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col justify-start items-center py-[2.5rem]">
                            <MedalIcon className="w-[2rem] fill-white" />
                            <span className="text-[1.5rem] text-white font-sharemono mt-[1rem]">Qualität</span>
                            <p className="font-mono text-white text-[1rem] text-center mt-[1rem]">Unsere Lösungen sind nicht nur technisch einwandfrei, sondern auch darauf ausgelegt, Ihre Ziele zu übertreffen.</p>
                        </div>
                    </div>
                </div>

                <img src="Planets/comet.webp" alt="Comet" className="absolute w-[15rem] mobile:bottom-[13%] tablet:bottom-[10%] desktop:bottom-[10%]  bottom-[3%] laptop:bottom-[15%] left-[5%] desktop-xl:left-[25%] animate-floatComet" />

                <LargeCard
                    head1style="text-[#98f144] mt-10"
                    head2style="text-[#98f144] mt-10"
                    text1Style="text-[#b9b9b9]"
                    text2Style="text-[#b9b9b9]"
                    head2="Jung und unkonventionell"
                    head1="Seit XX23"
                    text2="Wir bei OG Webdesign glauben, dass Ihre Website mehr als nur eine digitale Visitenkarte sein sollte. Es soll Ihre Geschichte erzählen, Ihre Marke zum Leben erwecken und Ihre Kunden begeistern. Unser Team besteht aus talentierten Designern, Entwicklern und Strategen, die mit Leidenschaft und Kreativität daran arbeiten, Ihre Ideen in die Realität umzusetzen. Direkt!"
                    text1="Wir blicken auf eine kurze, aber erfolgreiche Vergangenheit zurück. Jedes Projekt, jede noch so kleine Anwendung haben wir mit großer Sorgfalt und Verantwortung umgesetzt – stets zur Zufriedenheit unserer Kunden und oft darüber hinaus. Es begeistert uns zu sehen, wie unsere Websites und Softwareprodukte die Unternehmen unserer Kunden transformiert haben – von ihrer Online-Präsenz bis hin zur internen Nutzung unserer Softwarelösungen."></LargeCard>

            </div>
        </div>
    )
}