import { EmployeeCard } from "../EmployeeCard"
import { LargeCard } from "../LargeCard"
import { ParagraphOG } from "../ParagraphOG"
import { ParagraphOGLeft } from "../ParagraphOGLeft"

export const CompanySite = () => {
    return (
        <div className="animate-fadeIn">
            <ParagraphOG classnamehead="inline-block bg-[#98f144] text-[#151515]" text="Hey, we're Max and Nils the creative duo behind OG Webdesign and we are very pleased to meet you. What is our job? To create cool and innovative digital solutions that not only look good, but also have a lot to offer.
             With our know-how from studying computer science and design and a lot of experience under our belt, we bring your ideas to life online. Whether it's websites, bots, web apps, application software or AI services, we've got it!
             Every project begins with a detailed discussion to understand your needs and goals. Based on this, we develop individual concepts that are tailored precisely to your company. Transparent communication and close cooperation are a matter of course for us."
                head="#Transparency" animation={false} classname="text-right justify-end"></ParagraphOG>

            <ParagraphOGLeft
                classnamehead="bg-[#98f144] inline-block text-[#151515] mt-[3rem]"
                text="The web offers countless opportunities to present yourself or your company in a contemporary and sensible manner. 
            Despite this, many websites do not fully realize their potential. 
            Websites are becoming increasingly important in the digital age and are often a key to success. 
            We want to help you achieve this success and support you with our technical know-how. 
            Even if functionality is your primary concern, we are the right partner for you. Web applications are becoming increasingly popular 
            because they operate independently of operating systems. A web app can quickly be turned into a desktop application. Bots also play a 
            crucial role on the web. Whether used to close security gaps or analyze website activities, they are universally applicable. 
            Does it all seem a bit overwhelming? Or do you need expert opinions? We are happy to advise you on the advantages and disadvantages of 
            various technologies and answer your questions."
                head="#Motivation"
                animation={false}
            />

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



            <LargeCard classname="bg-slate-200 text-[#151515] mt-[3rem]"
                head1="Creating new opportunities."
                head2="Setting new standards in high-performance websites."
                text1="We have very high standards for ourselves, whether it's performance optimization or design. The reason why we decided to focus on web development is simple. We want to put an end to the old-fashioned uniformity. It's time to try new things, to stand out and stand out."
                text2="New technologies always offer the appeal of overcoming different challenges. They also usually bring new possibilities for software development. It is time to put aside the old habits and take new paths. The courage to create new user experiences will pay off because being the first always pays off.">
            </LargeCard>

        </div>
    )
}