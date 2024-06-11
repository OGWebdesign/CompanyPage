import { useState } from "react"
import { ParagraphOG } from "../ParagraphOG"
import { ParagraphOGLeft } from "../ParagraphOGLeft"


export const OfferSite = () => {
    const [choice,setChoice] = useState(0)
    const activeTechnologie = choice ? "tablet:w-[10rem] mobile:w-[6rem] tablet:h-[10rem] mobile:h-[6rem] border-2 border-[#98f144] border-dashed" :" w-[9rem] h-[9rem] border-[#151515]"

    return (
        <>



        {/* Headline and Product Desciption */}
        <ParagraphOG classnamehead="text-[#98f144]" head="What exactly is a SPA?" text="A SPA or Single Page Application is a modern technology that does not program websites as such, but rather as a real web-based program. Sounds crazy and it is. The huge advantages of this technology are that there are no loading times. The program is completely preloaded, so to speak. In addition, after loading once, the program no longer needs an internet connection to be displayed properly. There are also lots of new possibilities in terms of animation. Imagine an online shop where you can browse through the individual products and are not subject to any loading times. Porting it as a permanent mobile app is also child's play after such an implementation. However, a large amount of know-how is required. Technical SEO in particular is a challenge here. Thanks to content management systems such as WordPress, we have stopped leaving work on the web to real experts. If you have a broken car, very few people try to tackle it themselves. This is where we come in. We are experts in this field and have made it our mission to make this technology accessible to every company. The advantages are obvious. Almost no loading times, an exceptional user experience and state-of-the-art technology like Facebook or Instagram." animation={false}>
        </ParagraphOG>
        <ParagraphOGLeft classnamehead="text-[#98f144]" head="Websites" animation={false} text="Of course, we can also do classic websites. Here, too, we use developer tools for professional maintainability and performance with the highest security standards. Especially with content management systems, security gaps can quickly and unnoticed creep in through outdated plugins. From a technical point of view, this cannot happen so easily with our websites. The developer tools are created and tested by the really big players such as Facebook and Instagram. This means that a very high security guarantee is given. The performance cannot even come close to being achieved with content management systems. Leave your website to the experts, where real code is still written."></ParagraphOGLeft>
        <ParagraphOG classnamehead="text-[#98f144]" head="Consulting & administration." text="Of course, the basis of computer science is to pass on knowledge. An entire project stands or falls with advice and planning. Especially in the IT jungle, all the confusing terminology can quickly become overwhelming. We are there for your concerns from the very first minute. From planning to implementation, we are available to answer any questions you may have. Get comprehensive advice for your own idea so that it gets the implementation it deserves. Be it a web application, a website or the integration of artificial intelligence or bots." animation={false}>
        </ParagraphOG>
        <ParagraphOGLeft classnamehead="text-[#98f144]" head="AI & Bots" animation={false} text="The new topic of AI in particular has brought to light incredible potential for how technology can support people in their everyday lives. Not every company has enough budget to afford a social media specialist. Or how often do you come across situations in everyday life where you need information or a comparison quickly? And that's exactly where we come in. We offer the implementation of such bot networks or AI interfaces. You don't have to post your social media posts yourself. A bot only needs the relevant content and a fixed set of commands and then completes the task independently. But a bot can also take on security measures. Especially in critical systems, a security bot network can detect external influences and initiate countermeasures. They are also indispensable for user-friendliness. A chatbot offers excellent assistance when it comes to answering customer questions or instructions on how to navigate through the application. Everything is possible. Did you know? Google uses such bot networks to rank websites."></ParagraphOGLeft>
            {/* Offer Program */}
            <h1 className="w-full flex justify-center items-center mt-10 mb-4  font-mono text-[#98f144] font-semibold text-[1.3rem]">Konfigurieren Sie sich ein Angebot</h1>
            <p className="text-slate-200 mb-10 mobile:text-[0.8rem] tablet:text-[1rem] text-center p-4">The configuration process does not represent an ordering process, but serves merely as an overview of the offer and a rough estimate of the expected costs and serves to get an initial idea of ​​your project idea when you contact us.</p>
            <div className="w-full flex-col justify-center items-center h-[10rem] animate-fadeIn rounded-lg">

                <div className="w-full">
                    <p></p>
                </div>
                <div className="w-full h-full grid grid-rows-1 grid-cols-4 place-content-center place-items-center">
                    <div onClick={()=> setChoice(1)} className={`${choice === 1 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className="tablet:w-[9rem] tablet:h-[9rem] mobile:w-[5rem] mobile:h-[5rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300">
                           <p className=" font-mono mobile:text-[0.56rem] tablet:text-[1.1rem] mobile:font-semibold p-5">Website & Programming</p>
                        </div>
                    </div>
                    <div onClick={()=> setChoice(2)} className={`${choice === 2 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className="tablet:w-[9rem] tablet:h-[9rem] mobile:w-[5rem] mobile:h-[5rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300">
                           <p className=" font-mono mobile:text-[0.56rem] tablet:text-[1.1rem] mobile:font-semibold p-5">Consulting & Administration</p>
                        </div>
                    </div>
                    <div onClick={()=> setChoice(3)} className={`${choice === 3 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className="tablet:w-[9rem] tablet:h-[9rem] mobile:w-[5rem] mobile:h-[5rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300">
                           <p className=" font-mono mobile:text-[0.56rem] tablet:text-[1.1rem] mobile:font-semibold p-5">Artificial Intelligence</p>
                        </div>
                    </div>
                    <div onClick={()=> setChoice(4)} className={`${choice === 4 && activeTechnologie} flex justify-center items-center rounded-xl p-slate-200 m-5`} >
                        <div className={"tablet:w-[9rem] tablet:h-[9rem] mobile:w-[5rem] mobile:h-[5rem] rounded-lg text-[#151515] font-bold flex justify-center items-center bg-[#98f144] duration-300"}>
                           <p className=" font-mono mobile:text-[0.56rem] tablet:text-[1.1rem] mobile:font-semibold p-5">Application Development</p>
                        </div>
                    </div>
                </div>






            </div>
        </>
    )
}