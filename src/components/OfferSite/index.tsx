import { useState } from "react";
import { ParagraphOG } from "../ParagraphOG";
import { ParagraphOGLeft } from "../ParagraphOGLeft";
import { TechnologieCase } from "../TechnologieCase";
import { SwitchesWebsite } from "../SwitchesWebsite";
import { ProgressionBar } from "../ProgressionBar";
import { PackageCard } from "../PackageCard";

export const OfferSite = () => {
  {
    /* Auswahl Angebot */
  }
  const [technologieCaseActive1, setTechnologieCaseActive1] = useState(false);
  const [technologieCaseActive2, setTechnologieCaseActive2] = useState(false);
  const [technologieCaseActive3, setTechnologieCaseActive3] = useState(false);
  const [technologieCaseActive4, setTechnologieCaseActive4] = useState(false);

  {
    /*Begin TechSelect Logic */
  }
  const eventTrigger1 = () => {
    if (technologieCaseActive1) {
      switchLogic(1, true);
    }
    setTechnologieCaseActive1(!technologieCaseActive1);
    setTechnologieCaseActive2(false);
    setTechnologieCaseActive3(false);
    setTechnologieCaseActive4(false);
  };

  const eventTrigger2 = () => {
    if (technologieCaseActive2) {
        switchLogic(1, true);
    }
    setTechnologieCaseActive2(!technologieCaseActive2);
    setTechnologieCaseActive1(false);
    setTechnologieCaseActive3(false);
    setTechnologieCaseActive4(false);
  };

  const eventTrigger3 = () => {
    if (technologieCaseActive3) {
        switchLogic(1, true);
    }
    setTechnologieCaseActive3(!technologieCaseActive3);
    setTechnologieCaseActive1(false);
    setTechnologieCaseActive2(false);
    setTechnologieCaseActive4(false);
  };

  const eventTrigger4 = () => {
    if (technologieCaseActive4) {
        switchLogic(1, true);
    }
    setTechnologieCaseActive4(!technologieCaseActive4);
    setTechnologieCaseActive1(false);
    setTechnologieCaseActive2(false);
    setTechnologieCaseActive3(false);
  };
  {
    /*End TechSelect Logic */
  }

  {
    /* Switch Logic */
  }

  const [activeSwitch1, setActiveSwitch1] = useState(false);
  const [activeSwitch2, setActiveSwitch2] = useState(false);
  const [activeSwitch3, setActiveSwitch3] = useState(false);
  const [activeSwitch4, setActiveSwitch4] = useState(false);
  const [activeSwitch5, setActiveSwitch5] = useState(false);

  const [activePackage1, setActivePackage1] = useState(false)
  const [activePackage2, setActivePackage2] = useState(false)
  const [activePackage3, setActivePackage3] = useState(false)
  const [activePackage4, setActivePackage4] = useState(false)

  const switchLogic = (number: number, check?:boolean) => {
    if (number == 1) {
      if(activeSwitch1){
        packageCardLogic(1, true)
      }
      setActiveSwitch1(!activeSwitch1);
      setActiveSwitch2(false);
      setActiveSwitch3(false);
      setActiveSwitch4(false);
      setActiveSwitch5(false);
    }

    if (number == 2) {
      if(activeSwitch2){
        packageCardLogic(2, true)
      }
      setActiveSwitch1(false);
      setActiveSwitch2(!activeSwitch2);
      setActiveSwitch3(false);
      setActiveSwitch4(false);
      setActiveSwitch5(false);
    }

    if (number == 3) {
      if(activeSwitch3){
        packageCardLogic(3, true)
      }
      setActiveSwitch1(false);
      setActiveSwitch2(false);
      setActiveSwitch3(!activeSwitch3);
      setActiveSwitch4(false);
      setActiveSwitch5(false);
    }

    if (number == 4) {
      if (activeSwitch4){
        packageCardLogic(4, true)
      }
      setActiveSwitch1(false);
      setActiveSwitch2(false);
      setActiveSwitch3(false);
      setActiveSwitch4(!activeSwitch4);
      setActiveSwitch5(false);
    }

    if (number == 5) {
      if (activeSwitch5){
        packageCardLogic(5, true)
      }
      setActiveSwitch1(false);
      setActiveSwitch2(false);
      setActiveSwitch3(false);
      setActiveSwitch4(false);
      setActiveSwitch5(!activeSwitch5);
    }

    if(check){
        setActiveSwitch1(false);
        setActiveSwitch2(false);
        setActiveSwitch3(false);
        setActiveSwitch4(false);
        setActiveSwitch5(false);
        setActivePackage1(false);
        setActivePackage2(false);
        setActivePackage3(false);
        setActivePackage4(false);
    }
  };

  {
    /*End Switch Logic */
  }

  


  const packageCardLogic = (number: number, check?:boolean) => {
    if (number == 1) {
        setActivePackage1(!activePackage1);
        setActivePackage2(false);
        setActivePackage3(false);
        setActivePackage4(false);
    }

    if (number == 2) {
        setActivePackage1(false);
        setActivePackage2(!activePackage2);
        setActivePackage3(false);
        setActivePackage4(false);
    }

    if (number == 3) {
        setActivePackage1(false);
        setActivePackage2(false);
        setActivePackage3(!activePackage3);
        setActivePackage4(false);
    }

    if (number == 4) {
        setActivePackage1(false);
        setActivePackage2(false);
        setActivePackage3(false);
        setActivePackage4(!activePackage4);
    }

    if(check){
        setActivePackage1(false);
        setActivePackage2(false);
        setActivePackage3(false);
        setActivePackage4(false);
    }
  };

  return (
    <>
      {/* Headline and Product Desciption */}
      <div className="animate-fadeIn">
        <ParagraphOG
          classnamehead="text-[#98f144]"
          head="What exactly is a SPA?"
          text="A SPA or Single Page Application is a modern technology that does not program websites as such, but rather as a real web-based program. Sounds crazy and it is. The huge advantages of this technology are that there are no loading times. The program is completely preloaded, so to speak. In addition, after loading once, the program no longer needs an internet connection to be displayed properly. There are also lots of new possibilities in terms of animation. Imagine an online shop where you can browse through the individual products and are not subject to any loading times. Porting it as a permanent mobile app is also child's play after such an implementation. However, a large amount of know-how is required. Technical SEO in particular is a challenge here. Thanks to content management systems such as WordPress, we have stopped leaving work on the web to real experts. If you have a broken car, very few people try to tackle it themselves. This is where we come in. We are experts in this field and have made it our mission to make this technology accessible to every company. The advantages are obvious. Almost no loading times, an exceptional user experience and state-of-the-art technology like Facebook or Instagram."
          animation={false}
        ></ParagraphOG>
        <ParagraphOGLeft
          classnamehead="text-[#98f144]"
          head="Websites"
          animation={false}
          text="Of course, we can also do classic websites. Here, too, we use developer tools for professional maintainability and performance with the highest security standards. Especially with content management systems, security gaps can quickly and unnoticed creep in through outdated plugins. From a technical point of view, this cannot happen so easily with our websites. The developer tools are created and tested by the really big players such as Facebook and Instagram. This means that a very high security guarantee is given. The performance cannot even come close to being achieved with content management systems. Leave your website to the experts, where real code is still written."
        ></ParagraphOGLeft>
        <ParagraphOG
          classnamehead="text-[#98f144]"
          head="Consulting & administration."
          text="Of course, the basis of computer science is to pass on knowledge. An entire project stands or falls with advice and planning. Especially in the IT jungle, all the confusing terminology can quickly become overwhelming. We are there for your concerns from the very first minute. From planning to implementation, we are available to answer any questions you may have. Get comprehensive advice for your own idea so that it gets the implementation it deserves. Be it a web application, a website or the integration of artificial intelligence or bots."
          animation={false}
        ></ParagraphOG>
        <ParagraphOGLeft
          classnamehead="text-[#98f144]"
          head="AI & Bots"
          animation={false}
          text="The new topic of AI in particular has brought to light incredible potential for how technology can support people in their everyday lives. Not every company has enough budget to afford a social media specialist. Or how often do you come across situations in everyday life where you need information or a comparison quickly? And that's exactly where we come in. We offer the implementation of such bot networks or AI interfaces. You don't have to post your social media posts yourself. A bot only needs the relevant content and a fixed set of commands and then completes the task independently. But a bot can also take on security measures. Especially in critical systems, a security bot network can detect external influences and initiate countermeasures. They are also indispensable for user-friendliness. A chatbot offers excellent assistance when it comes to answering customer questions or instructions on how to navigate through the application. Everything is possible. Did you know? Google uses such bot networks to rank websites."
        ></ParagraphOGLeft>
      </div>

      {/* Begin Program */}
      <div className="w-full flex flex-col justify-center items-center">
        <TechnologieCase
          heading="Our technologies"
          name1="Websites"
          name2="Web Apps"
          name3="Consulting"
          name4="Bots & AI"
          eventTrigger1={eventTrigger1}
          eventTrigger2={eventTrigger2}
          eventTrigger3={eventTrigger3}
          eventTrigger4={eventTrigger4}
        />
      </div>
      {(technologieCaseActive1 || technologieCaseActive2) && (
          <div
            className={`overflow-hidden mt-[3rem] duration-500 ${
              technologieCaseActive1 ||
              technologieCaseActive2 ||
              technologieCaseActive3 ||
              technologieCaseActive4
                ? "h-full"
                : "h-0"
            }`}
          >
            <ProgressionBar initProgression={5} />
            <SwitchesWebsite
              switchTitle1="modern"
              switchTitle2="elegance"
              switchTitle3="functional"
              switchTitle4="unconventional"
              switchTitle5="playful"
              switchLogic={switchLogic}
            />
        
          </div>
      )}
      {[(activeSwitch1 || activeSwitch2 || activeSwitch3 || activeSwitch4 ||
          activeSwitch5) && 
            (
                <div className="mt-[5rem]">
                <PackageCard packageCardLogic={packageCardLogic} />
                </div>
            )
      ]}
      {(activePackage1 || activePackage2 || activePackage3 || activePackage4) &&
      (<div className="text-[10rem] text-white">Hello World</div>)}
    </>
  );
}