import { useState } from "react"
import { ParagraphOG } from "../ParagraphOG"
import { ParagraphOGLeft } from "../ParagraphOGLeft"


export const OfferSite = () => {
    // Logical States 
    const [activeOffer, setActiveOffer] = useState(0)
    const [activePackage, setActivePackage] = useState(0)
    const [activeButton1, setActiveButton1] = useState(false)
    const [activeButton2, setActiveButton2] = useState(false)
    const [activeButton3, setActiveButton3] = useState(false)
    const [activeButton4, setActiveButton4] = useState(false)
    const [activeButton5, setActiveButton5] = useState(false)
    
    
    // Style Sheet for Active Items
    const activeOfferStyle = "border rounded-lg border-dashed border-[#98f144] border-2"
    const activePackageStyle = "border-dashed border-[#98f144] rounded-2xl"
    const buttonStyleActive = "bg-[#98f144]"
    const buttonStyleInActive = "bg-[#151515]"



    // Switch Logic => One On and the other Off
    const switchLogic = (number: number | boolean | ((prevState: boolean) => boolean)) => {
        if (number == 1) {
            setActiveButton1(!activeButton1)
            setActiveButton2(false)
            setActiveButton3(false)
            setActiveButton4(false)
            setActiveButton5(false)
        }

        if (number == 2) {
            setActiveButton1(false)
            setActiveButton2(!activeButton2)
            setActiveButton3(false)
            setActiveButton4(false)
            setActiveButton5(false)
        }


        if (number == 3) {
            setActiveButton1(false)
            setActiveButton2(false)
            setActiveButton3(!activeButton3)
            setActiveButton4(false)
            setActiveButton5(false)
        }

        if (number == 4) {
            setActiveButton1(false)
            setActiveButton2(false)
            setActiveButton3(false)
            setActiveButton4(!activeButton4)
            setActiveButton5(false)
        }


        if (number == 5) {
            setActiveButton1(false)
            setActiveButton2(false)
            setActiveButton3(false)
            setActiveButton4(false)
            setActiveButton5(!activeButton5)
        }

    }

    return (
        <>



            {/* Headline and Product Desciption */}
            <div className="animate-fadeIn">
                <ParagraphOG classnamehead="text-[#98f144]" head="What exactly is a SPA?" text="A SPA or Single Page Application is a modern technology that does not program websites as such, but rather as a real web-based program. Sounds crazy and it is. The huge advantages of this technology are that there are no loading times. The program is completely preloaded, so to speak. In addition, after loading once, the program no longer needs an internet connection to be displayed properly. There are also lots of new possibilities in terms of animation. Imagine an online shop where you can browse through the individual products and are not subject to any loading times. Porting it as a permanent mobile app is also child's play after such an implementation. However, a large amount of know-how is required. Technical SEO in particular is a challenge here. Thanks to content management systems such as WordPress, we have stopped leaving work on the web to real experts. If you have a broken car, very few people try to tackle it themselves. This is where we come in. We are experts in this field and have made it our mission to make this technology accessible to every company. The advantages are obvious. Almost no loading times, an exceptional user experience and state-of-the-art technology like Facebook or Instagram." animation={false}>
                </ParagraphOG>
                <ParagraphOGLeft classnamehead="text-[#98f144]" head="Websites" animation={false} text="Of course, we can also do classic websites. Here, too, we use developer tools for professional maintainability and performance with the highest security standards. Especially with content management systems, security gaps can quickly and unnoticed creep in through outdated plugins. From a technical point of view, this cannot happen so easily with our websites. The developer tools are created and tested by the really big players such as Facebook and Instagram. This means that a very high security guarantee is given. The performance cannot even come close to being achieved with content management systems. Leave your website to the experts, where real code is still written."></ParagraphOGLeft>
                <ParagraphOG classnamehead="text-[#98f144]" head="Consulting & administration." text="Of course, the basis of computer science is to pass on knowledge. An entire project stands or falls with advice and planning. Especially in the IT jungle, all the confusing terminology can quickly become overwhelming. We are there for your concerns from the very first minute. From planning to implementation, we are available to answer any questions you may have. Get comprehensive advice for your own idea so that it gets the implementation it deserves. Be it a web application, a website or the integration of artificial intelligence or bots." animation={false}>
                </ParagraphOG>
                <ParagraphOGLeft classnamehead="text-[#98f144]" head="AI & Bots" animation={false} text="The new topic of AI in particular has brought to light incredible potential for how technology can support people in their everyday lives. Not every company has enough budget to afford a social media specialist. Or how often do you come across situations in everyday life where you need information or a comparison quickly? And that's exactly where we come in. We offer the implementation of such bot networks or AI interfaces. You don't have to post your social media posts yourself. A bot only needs the relevant content and a fixed set of commands and then completes the task independently. But a bot can also take on security measures. Especially in critical systems, a security bot network can detect external influences and initiate countermeasures. They are also indispensable for user-friendliness. A chatbot offers excellent assistance when it comes to answering customer questions or instructions on how to navigate through the application. Everything is possible. Did you know? Google uses such bot networks to rank websites."></ParagraphOGLeft>
            </div>





            {/* Offer Program */}
            <div className="w-full duration-500 mt-[3rem]">


                <h1 className="text-[2rem] text-[#98f144] text-center mb-[3rem]">Configure your own offer with us.</h1>

                {/* Wrapper for GridItem */}
                <div className="w-full flex flex-col justify-center items-center">
                    {/* Grid Layout */}
                    <div className="tablet:w-[80%] mobile:w-full grid mobile:grid-rows-2 duration-500 gap-5 mobile:grid-cols-2 tablet:grid-rows-1 tablet:grid-cols-4 place-content-center place-items-center">

                        {/* Wrapper for GridItem */}
                        <div onClick={() => setActiveOffer(1)} className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${activeOffer == 1 && activeOfferStyle}`}>
                            <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">Web Application</div>
                        </div>


                        {/* Wrapper for GridItem */}
                        <div onClick={() => setActiveOffer(2)} className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${activeOffer == 2 && activeOfferStyle}`}>
                            <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">Websites</div>
                        </div>


                        {/* Wrapper for GridItem */}
                        <div onClick={() => setActiveOffer(3)} className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${activeOffer == 3 && activeOfferStyle}`}>
                            <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">Consulting</div>
                        </div>


                        {/* Wrapper for GridItem */}
                        <div onClick={() => setActiveOffer(4)} className={`flex justify-center duration-500 border-2 border-[#151515] items-center w-[8rem] h-[8rem] ${activeOffer == 4 && activeOfferStyle}`}>
                            <div className="flex text-center justify-center items-center w-[7rem] h-[7rem] rounded-md bg-[#98f144] p-4 font-mono font-bold">Bot & AI</div>
                        </div>
                    </div>

                    {/* RenderZone */}
                    <div className="w-full flex flex-col items-center mt-10">

                        {/* First Half */}
                        <div className="w-full h-1/2 flex flex-col">



                            <div className="w-full flex  items-center my-2 ml-4">
                                <div className="w-[6rem]">
                                    <div onClick={() => switchLogic(1)} className={`flex items-center h-8 w-14 border border-[#4d4d4d] duration-300 rounded-full ${activeButton1 ? buttonStyleActive : buttonStyleInActive}`}>
                                        <div className={`w-8 h-8 bg-slate-200 rounded-full duration-300 ${activeButton1 ? "ml-6" : "ml-0"}`}></div>
                                    </div>
                                </div>

                                <div className="w-3/4">
                                    <p className="text-slate-200 font-mono font-semibold">Modern</p>
                                </div>
                            </div>






                            <div className="w-full flex items-center my-2 ml-4">
                                <div className="w-[6rem]">
                                    <div onClick={() => switchLogic(2)} className={`flex items-center h-8 w-14 border border-[#4d4d4d] duration-300 rounded-full ${activeButton2 ? buttonStyleActive : buttonStyleInActive}`}>
                                        <div className={`w-8 h-8 bg-slate-200 rounded-full duration-300 ${activeButton2 ? "ml-6" : "ml-0"}`}></div>
                                    </div>
                                </div>

                                <div className="w-3/4">
                                    <p className="text-slate-200 font-mono font-semibold">Elegant</p>
                                </div>
                            </div>





                            <div className="w-full flex items-center my-2 ml-4">
                                <div className="w-[6rem]">
                                    <div onClick={() => switchLogic(3)} className={`flex items-center h-8 w-14 border border-[#4d4d4d] duration-300 rounded-full ${activeButton3 ? buttonStyleActive : buttonStyleInActive}`}>
                                        <div className={`w-8 h-8 bg-slate-200 rounded-full duration-300 ${activeButton3 ? "ml-6" : "ml-0"}`}></div>
                                    </div>
                                </div>

                                <div className="w-3/4">
                                    <p className="text-slate-200 font-mono font-semibold">Funktional</p>
                                </div>
                            </div>






                            <div className="w-full flex items-center my-2 ml-4">
                                <div className="w-[6rem]">
                                    <div onClick={() => switchLogic(4)} className={`flex items-center h-8 w-14 border border-[#4d4d4d] duration-300 rounded-full ${activeButton4 ? buttonStyleActive : buttonStyleInActive}`}>
                                        <div className={`w-8 h-8 bg-slate-200 rounded-full duration-300 ${activeButton4 ? "ml-6" : "ml-0"}`}></div>
                                    </div>
                                </div>

                                <div className="w-3/4">
                                    <p className="text-slate-200 font-mono font-semibold">Unkonventionell</p>
                                </div>
                            </div>





                            <div className="w-full flex items-center my-2 ml-4">
                                <div className="w-[6rem]">
                                    <div onClick={() => switchLogic(5)} className={`flex items-center h-8 w-14 border border-[#4d4d4d] duration-300 rounded-full ${activeButton5 ? buttonStyleActive : buttonStyleInActive}`}>
                                        <div className={`w-8 h-8 bg-slate-200 rounded-full duration-300 ${activeButton5 ? "ml-6" : "ml-0"}`}></div>
                                    </div>
                                </div>

                                <div className="w-3/4">
                                    <p className="text-slate-200 font-mono font-semibold">Verspielt</p>
                                </div>
                            </div>










                        </div>

                        {/* Secound Half */}
                        <div className="w-full h-1/2 flex flex-col mobile:mt-8">
                            <div className="w-full grid duration-500 mobile:grid-rows-4 gap-7 mobile:grid-cols-1 tablet:grid-rows-2 tablet:grid-cols-2 desktop:grid-rows-1 desktop:grid-cols-4 desktop:gap-2 place-items-center">


                                <div onClick={() => setActivePackage(1)} className={`w-[95%] duration-300 border-2 border-[#151515] h-[14rem] flex justify-center items-center ${activePackage === 1 && activePackageStyle}`}>
                                    <div className="flex flex-col justify-center text-center p-3 items-center w-[96%] h-[94%] bg-[#98f144] rounded-lg">
                                        <p className="font-mono font-semibold text-[1.4rem] text-[#151515]">Onepage</p>
                                        <p className="font-mono font-semibold duration-500">Ideal als Online Visitenkarte oder Setcard. </p>
                                    </div>
                                </div>



                                <div onClick={() => setActivePackage(2)} className={`w-[95%] duration-300 border-2 border-[#151515] h-[14rem] flex justify-center items-center ${activePackage === 2 && activePackageStyle}`}>
                                    <div className="flex flex-col justify-center text-center p-3 items-center w-[96%] h-[94%] bg-[#98f144] rounded-lg">
                                        <p className="font-mono font-semibold text-[1.4rem] text-[#151515]">Startup</p>
                                        <p className="font-mono font-semibold duration-500">Mit 4-6 Seiten optimal für kleine Unternehmen geeignet.</p>
                                    </div>
                                </div>



                                <div onClick={() => setActivePackage(3)} className={`w-[95%] duration-300 border-2 border-[#151515] h-[14rem] flex justify-center items-center ${activePackage === 3 && activePackageStyle}`}>
                                    <div className="flex flex-col justify-center text-center p-3  items-center w-[96%] h-[94%] bg-[#98f144] rounded-lg">
                                        <p className="font-mono font-semibold text-[1.4rem] text-[#151515]">Business</p>
                                        <p className="font-mono font-semibold duration-500">Mit 8-12 Seiten sehr gut für mittelständische Unternehmen geeignet.</p>
                                    </div>
                                </div>



                                <div onClick={() => setActivePackage(4)} className={`w-[95%] duration-300 border-2 border-[#151515] h-[14rem] flex justify-center items-center ${activePackage === 4 && activePackageStyle}`}>
                                    <div className="flex flex-col justify-center text-center p-3  items-center w-[96%] h-[94%] bg-[#98f144] rounded-lg">
                                        <p className="font-mono font-semibold text-[1.4rem] text-[#151515]">Individuell</p>
                                        <p className="font-mono font-semibold duration-500">Kein passendes Paket gefunden? Sie können auch eine individuelle Anfrage stellen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </>
    )
}