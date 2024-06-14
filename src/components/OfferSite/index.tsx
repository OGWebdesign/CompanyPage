import { useState } from "react";
import { ParagraphOGLeft } from "../ParagraphOGLeft";
import { TechnologieCase } from "../TechnologieCase";
import { TechnologieCaseItem } from "../TechnologieCaseItem";
import { SwitchesWebsite } from "../SwitchesWebsite";
import { CalculatorSwitches } from "../CalculatorSwitches";

export const OfferSite = () => {
  // TechnologieCase Komponenten
  // Klickabhängiges CSS für den gestrichelten Rand bei Aktivierung
  const activeEffect = "border-[#98f144] rounded-lg border-dashed"
  // States die bestimmen,welcher Komponent aktiv ist.
  const [techCaseItem1Active, setTechCaseItem1Active] = useState(false)
  const [techCaseItem2Active, setTechCaseItem2Active] = useState(false)
  const [techCaseItem3Active, setTechCaseItem3Active] = useState(false)
  const [techCaseItem4Active, setTechCaseItem4Active] = useState(false)

  // Funktionen die die Schalterpositionen rekulieren.
  const handleTechCaseItem1Click = () => {
    setTechCaseItem1Active(!techCaseItem1Active);
    setTechCaseItem2Active(false);
    setTechCaseItem3Active(false);
    setTechCaseItem4Active(false);
  };

  const handleTechCaseItem2Click = () => {
    setTechCaseItem1Active(false);
    setTechCaseItem2Active(!techCaseItem2Active);
    setTechCaseItem3Active(false);
    setTechCaseItem4Active(false);
  };

  const handleTechCaseItem3Click = () => {
    setTechCaseItem1Active(false);
    setTechCaseItem2Active(false);
    setTechCaseItem3Active(!techCaseItem3Active);
    setTechCaseItem4Active(false);
  };

  const handleTechCaseItem4Click = () => {
    setTechCaseItem1Active(false);
    setTechCaseItem2Active(false);
    setTechCaseItem3Active(false);
    setTechCaseItem4Active(!techCaseItem4Active);
  };
  // TechnologieCase Items
  const techCaseItem1 = (<TechnologieCaseItem aktivatecss={`${techCaseItem1Active && activeEffect}`} name1="Webapp" onClick={handleTechCaseItem1Click}></TechnologieCaseItem>)
  const techCaseItem2 = (<TechnologieCaseItem aktivatecss={`${techCaseItem2Active && activeEffect}`} name1="Website" onClick={handleTechCaseItem2Click}></TechnologieCaseItem>)
  const techCaseItem3 = (<TechnologieCaseItem aktivatecss={`${techCaseItem3Active && activeEffect}`} name1="Consulting" onClick={handleTechCaseItem3Click}></TechnologieCaseItem>)
  const techCaseItem4 = (<TechnologieCaseItem aktivatecss={`${techCaseItem4Active && activeEffect}`} name1="Bots & AI" onClick={handleTechCaseItem4Click}></TechnologieCaseItem>)











  // Switches
  // Switch Beschreibung
  const modernDescription = "A modern design with a very intuitive, often minimalist user interface. This type of design is particularly suitable for young or technical companies.";
  const elegantDescription = "An elegant design is ideal for companies in the fashion or beauty industry or for art. However, this design language often requires high-quality photos.";
  const playfulDescription = "A playful design for the Spielemax. A particularly large number of effects and animations are a particularly common stylistic element here. A glowing button here, an expanding window there. Everything is possible.";
  const functionalDescription = "A functional design is the perfect design language for craft companies or companies in the automotive industry. Here, particular emphasis is placed on performance and simplicity. Particularly fast loading times of up to 50ms are possible.";
  const unconventionalDescription = "With an unconventional design, particular emphasis is placed on being different. This can appear very modern but also a little crazy. The aim of this design concept will be to create a particularly striking effect that will stay in the customer's mind.";

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);
  const [switch5, setSwitch5] = useState(false);


  // Styleklassen für aktiv und inaktiv der Switches
  const wrapperHeightRegulator = techCaseItem1Active || techCaseItem2Active ? "h-[20rem]" : "h-0"
  const buttonBackgroundActive = "bg-[#98f144]";
  const buttonBackgroundInActive = "bg-[#151515]";
  const moveAnimation = "ml-6"
  const notMove = "ml-0"





  const handleSwitch1 = () => {
    setSwitch1(!switch1);
    setSwitch2(false);
    setSwitch3(false);
    setSwitch4(false);
    setSwitch5(false);
  };

  const handleSwitch2 = () => {
    setSwitch1(false);
    setSwitch2(!switch2);
    setSwitch3(false);
    setSwitch4(false);
    setSwitch5(false);
  };

  const handleSwitch3 = () => {
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(!switch3);
    setSwitch4(false);
    setSwitch5(false);
  };

  const handleSwitch4 = () => {
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(false);
    setSwitch4(!switch4);
    setSwitch5(false);
  };

  const handleSwitch5 = () => {
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(false);
    setSwitch4(false);
    setSwitch5(!switch5);
  };


  const websiteSwitch1 = (<CalculatorSwitches onClick={handleSwitch1} activecss={switch1 ? buttonBackgroundActive : buttonBackgroundInActive} move={switch1 ? moveAnimation : notMove} switchTitle="modern"></CalculatorSwitches>)
  const websiteSwitch2 = (<CalculatorSwitches onClick={handleSwitch2} activecss={switch2 ? buttonBackgroundActive : buttonBackgroundInActive} move={switch2 ? moveAnimation : notMove} switchTitle="elegant"></CalculatorSwitches>)
  const websiteSwitch3 = (<CalculatorSwitches onClick={handleSwitch3} activecss={switch3 ? buttonBackgroundActive : buttonBackgroundInActive} move={switch3 ? moveAnimation : notMove} switchTitle="playful"></CalculatorSwitches>)
  const websiteSwitch4 = (<CalculatorSwitches onClick={handleSwitch4} activecss={switch4 ? buttonBackgroundActive : buttonBackgroundInActive} move={switch4 ? moveAnimation : notMove} switchTitle="functional"></CalculatorSwitches>)
  const websiteSwitch5 = (<CalculatorSwitches onClick={handleSwitch5} activecss={switch5 ? buttonBackgroundActive : buttonBackgroundInActive} move={switch5 ? moveAnimation : notMove} switchTitle="unconventional"></CalculatorSwitches>)




























  return (
    <>
      {/* Headline and Product Desciption */}
      <div className="animate-fadeIn">
        <ParagraphOGLeft
          classnamehead="text-[#98f144]"
          head="What exactly is a SPA?"
          text="A SPA or Single Page Application is a modern technology that does not program websites as such, but rather as a real web-based program. Sounds crazy and it is. The huge advantages of this technology are that there are no loading times. The program is completely preloaded, so to speak. In addition, after loading once, the program no longer needs an internet connection to be displayed properly. There are also lots of new possibilities in terms of animation. Imagine an online shop where you can browse through the individual products and are not subject to any loading times. Porting it as a permanent mobile app is also child's play after such an implementation. However, a large amount of know-how is required. Technical SEO in particular is a challenge here. Thanks to content management systems such as WordPress, we have stopped leaving work on the web to real experts. If you have a broken car, very few people try to tackle it themselves. This is where we come in. We are experts in this field and have made it our mission to make this technology accessible to every company. The advantages are obvious. Almost no loading times, an exceptional user experience and state-of-the-art technology like Facebook or Instagram."
          animation={false}
        ></ParagraphOGLeft>
        <ParagraphOGLeft
          classnamehead="text-[#98f144]"
          head="Websites"
          animation={false}
          text="Of course, we can also do classic websites. Here, too, we use developer tools for professional maintainability and performance with the highest security standards. Especially with content management systems, security gaps can quickly and unnoticed creep in through outdated plugins. From a technical point of view, this cannot happen so easily with our websites. The developer tools are created and tested by the really big players such as Facebook and Instagram. This means that a very high security guarantee is given. The performance cannot even come close to being achieved with content management systems. Leave your website to the experts, where real code is still written."
        ></ParagraphOGLeft>
        <ParagraphOGLeft
          classnamehead="text-[#98f144]"
          head="Consulting & administration."
          text="Of course, the basis of computer science is to pass on knowledge. An entire project stands or falls with advice and planning. Especially in the IT jungle, all the confusing terminology can quickly become overwhelming. We are there for your concerns from the very first minute. From planning to implementation, we are available to answer any questions you may have. Get comprehensive advice for your own idea so that it gets the implementation it deserves. Be it a web application, a website or the integration of artificial intelligence or bots."
          animation={false}
        ></ParagraphOGLeft>
        <ParagraphOGLeft
          classnamehead="text-[#98f144]"
          head="AI & Bots"
          animation={false}
          text="The new topic of AI in particular has brought to light incredible potential for how technology can support people in their everyday lives. Not every company has enough budget to afford a social media specialist. Or how often do you come across situations in everyday life where you need information or a comparison quickly? And that's exactly where we come in. We offer the implementation of such bot networks or AI interfaces. You don't have to post your social media posts yourself. A bot only needs the relevant content and a fixed set of commands and then completes the task independently. But a bot can also take on security measures. Especially in critical systems, a security bot network can detect external influences and initiate countermeasures. They are also indispensable for user-friendliness. A chatbot offers excellent assistance when it comes to answering customer questions or instructions on how to navigate through the application. Everything is possible. Did you know? Google uses such bot networks to rank websites."
        ></ParagraphOGLeft>
      </div>







      {/* Begin Program */}
      <div className="flex flex-col justify-center items-center w-full">
        <TechnologieCase heading="Lets configurate your own Offer"
          item1={techCaseItem1}
          item2={techCaseItem2}
          item3={techCaseItem3}
          item4={techCaseItem4}
        >
        </TechnologieCase>




        {/* // Linke Seite mit den switches */}
        <div className={`w-[80%] mt-10  flex justify-center duration-300 items-center`}>

          {techCaseItem1Active && (
            <div className="animate-fadeIn flex w-full justify-center items-center">
              <SwitchesWebsite
                switch1={websiteSwitch1}
                switch2={websiteSwitch2}
                switch3={websiteSwitch3}
                switch4={websiteSwitch4}
                switch5={websiteSwitch5}
              ></SwitchesWebsite>



              <div className={`w-1/2 overflow-hidden p-5 text-slate-200 font-mono`}>
                {
                  switch1 && (
                    <p className="animate-fadeIn">{modernDescription}</p>
                  )
                }

                {
                  switch2 && (
                    <p className="animate-fadeIn">{elegantDescription}</p>
                  )
                }

                {
                  switch3 && (
                    <p className="animate-fadeIn">{playfulDescription}</p>
                  )
                }

                {
                  switch4 && (
                    <p className="animate-fadeIn">{functionalDescription}</p>
                  )
                }

                {
                  switch5 && (
                    <p className="animate-fadeIn">{unconventionalDescription}</p>
                  )
                }

              </div>
            </div>
          )}






        </div>











      </div>
    </>
  );
}