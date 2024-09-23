import { EmployeeCard } from "../EmployeeCard"
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


            <EmployeeCard></EmployeeCard>
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