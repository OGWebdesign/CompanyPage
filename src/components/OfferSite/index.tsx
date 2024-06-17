import { useEffect, useState } from "react";
import { ParagraphOGLeft } from "../ParagraphOGLeft";
import { TechnologieCase } from "../TechnologieCase";
import { TechnologieCaseItem } from "../TechnologieCaseItem";
import { SwitchesWebsite } from "../SwitchesWebsite";
import { CalculatorSwitches } from "../CalculatorSwitches";
import { PackageCard } from "../PackageCard";
import { PackageCardItem } from "../PackageCardItem";
import { WeekChanger } from "../WeekChanger";
import { WeekChangerItems } from "../WeekChangerItems";
import { PriceCard } from "../PriceCard";
export const OfferSite = () => {

  const [progression, setProgression] = useState(0)

  // ------------------------------------------------------------------- TechnologieCase Komponenten
  // Klickabhängiges CSS für den gestrichelten Rand bei Aktivierung
  const activeEffect = "border-[#98f144] rounded-lg border-dashed"
  // States die bestimmen,welcher Komponent aktiv ist.
  const [techCaseItem1Active, setTechCaseItem1Active] = useState(false)
  const [techCaseItem2Active, setTechCaseItem2Active] = useState(false)
  const [techCaseItem3Active, setTechCaseItem3Active] = useState(false)
  const [techCaseItem4Active, setTechCaseItem4Active] = useState(false)



  // Hilfsfunktion für Wrap
  const notAllTechnicalCaseItemsOff = () => {
    return techCaseItem1Active || techCaseItem2Active || techCaseItem3Active || techCaseItem4Active
  }


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



  useEffect(()  => {
   if (!notAllTechnicalCaseItemsOff()){
      setProgression(0);
   } else if (notAllTechnicalCaseItemsOff()){
      setProgression(5);
   }
  },[techCaseItem1Active, techCaseItem2Active, techCaseItem3Active, techCaseItem4Active])

  // ---------------------------------------  TechnologieCase Items Constants
  const techCaseItem1 = (<TechnologieCaseItem aktivatecss={`${techCaseItem1Active && activeEffect}`} name1="Webapp" onClick={handleTechCaseItem1Click}></TechnologieCaseItem>)
  const techCaseItem2 = (<TechnologieCaseItem aktivatecss={`${techCaseItem2Active && activeEffect}`} name1="Website" onClick={handleTechCaseItem2Click}></TechnologieCaseItem>)
  const techCaseItem3 = (<TechnologieCaseItem aktivatecss={`${techCaseItem3Active && activeEffect}`} name1="Consulting" onClick={handleTechCaseItem3Click}></TechnologieCaseItem>)
  const techCaseItem4 = (<TechnologieCaseItem aktivatecss={`${techCaseItem4Active && activeEffect}`} name1="Bots & AI" onClick={handleTechCaseItem4Click}></TechnologieCaseItem>)







  // -----------------------------------------------------------------  Switches
  // Switch Beschreibung für Webseiten.
  const modernDescription = "A modern design with a very intuitive, often minimalist user interface. This type of design is particularly suitable for young or technical companies.";
  const elegantDescription = "An elegant design is ideal for companies in the fashion or beauty industry or for art. However, this design language often requires high-quality photos.";
  const playfulDescription = "A playful design for the Spielemax. A particularly large number of effects and animations are a particularly common stylistic element here. A glowing button here, an expanding window there. Everything is possible.";
  const functionalDescription = "A functional design is the perfect design language for craft companies or companies in the automotive industry. Here, particular emphasis is placed on performance and simplicity. Particularly fast loading times of up to 50ms are possible.";
  const unconventionalDescription = "With an unconventional design, particular emphasis is placed on being different. This can appear very modern but also a little crazy. The aim of this design concept will be to create a particularly striking effect that will stay in the customer's mind.";

  //-----------------------------------------------------------------------------------------------------------------------------------------

  // Die Switches können mit der jetztigen Technologie wiederverwendet werden. Hierzu muss nur das Grid Welches diese aufnimmt eine andere Einstellung der Renderung unten haben.
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);
  const [switch5, setSwitch5] = useState(false);

  const notAllSwitchesOff = () => {
    return switch1 || switch2 || switch3 || switch4 || switch5
  }

  // Styleklassen für aktiv und inaktiv der Switches
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


  useEffect(() => {
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(false);
    setSwitch4(false);
    setSwitch5(false);
  }, [techCaseItem1Active, techCaseItem2Active, techCaseItem3Active, techCaseItem4Active])



  useEffect(() => {
      if (notAllSwitchesOff()){
        setProgression(10);
      } else if (!notAllSwitchesOff() && notAllTechnicalCaseItemsOff()){
        setProgression(5);
      } 
  },[switch1, switch2, switch3, switch4, switch5])


  const websiteSwitch1 = (<CalculatorSwitches onClick={handleSwitch1} activecss={switch1 ? buttonBackgroundActive : buttonBackgroundInActive} move={switch1 ? moveAnimation : notMove} switchTitle="modern"></CalculatorSwitches>)
  const websiteSwitch2 = (<CalculatorSwitches onClick={handleSwitch2} activecss={switch2 ? buttonBackgroundActive : buttonBackgroundInActive} move={switch2 ? moveAnimation : notMove} switchTitle="elegant"></CalculatorSwitches>)
  const websiteSwitch3 = (<CalculatorSwitches onClick={handleSwitch3} activecss={switch3 ? buttonBackgroundActive : buttonBackgroundInActive} move={switch3 ? moveAnimation : notMove} switchTitle="playful"></CalculatorSwitches>)
  const websiteSwitch4 = (<CalculatorSwitches onClick={handleSwitch4} activecss={switch4 ? buttonBackgroundActive : buttonBackgroundInActive} move={switch4 ? moveAnimation : notMove} switchTitle="functional"></CalculatorSwitches>)
  const websiteSwitch5 = (<CalculatorSwitches onClick={handleSwitch5} activecss={switch5 ? buttonBackgroundActive : buttonBackgroundInActive} move={switch5 ? moveAnimation : notMove} switchTitle="unconventional"></CalculatorSwitches>)







  //---------------------------------------------------------- PackageCards


  const activePackageStyle = "border-dashed border-[#98f144] rounded-2xl"


  // PackageCards for Websites States
  const [onepagerActiv, setOnePagerActiv] = useState(false)
  const [startUpActiv, setStartUpActiv] = useState(false)
  const [businessActiv, setBusinessActiv] = useState(false)
  const [customActiv, setCustomActiv] = useState(false)

  const notAllPackagesOff = () => {
    return onepagerActiv || startUpActiv || businessActiv || customActiv
  }

  const handleOnePager = () => {
    setOnePagerActiv(!onepagerActiv);
    setCustomActiv(false);
    setBusinessActiv(false);
    setStartUpActiv(false);
  };

  const handleStartUp = () => {
    setOnePagerActiv(false);
    setCustomActiv(false);
    setBusinessActiv(false);
    setStartUpActiv(!startUpActiv);
  };

  const handleBusiness = () => {
    setOnePagerActiv(false);
    setCustomActiv(false);
    setBusinessActiv(!businessActiv);
    setStartUpActiv(false);
  };

  const handleCustom = () => {
    setOnePagerActiv(false);
    setCustomActiv(!customActiv);
    setBusinessActiv(false);
    setStartUpActiv(false);
  };


  useEffect(() => {
    setOnePagerActiv(false);
    setCustomActiv(false);
    setBusinessActiv(false);
    setStartUpActiv(false);

  }, [techCaseItem1Active, techCaseItem2Active, techCaseItem3Active, techCaseItem4Active])

  useEffect(() => {
    if(!notAllSwitchesOff()){
      setOnePagerActiv(false);
      setStartUpActiv(false);
      setBusinessActiv(false);
      setCustomActiv(false);
    } else if (!notAllSwitchesOff() && notAllTechnicalCaseItemsOff()){
      setProgression(10);
    }
    else if (notAllSwitchesOff() && notAllPackagesOff()){
      setProgression(15);
    } 
    else if (notAllSwitchesOff() && !notAllPackagesOff() ){
      setProgression(10);
    }
  },[onepagerActiv, businessActiv, customActiv, startUpActiv, switch1, switch2, switch3, switch4, switch5])



  // ----------------------------------- PackageCards Item Constants for Websites
  const onePager = (<PackageCardItem currency="$" numbers="Eine Seite" price={1050}  activecss={`${onepagerActiv && activePackageStyle}`} onClick={() => {handleOnePager(); }} title="One Pager" description="Ideal for Seccards, online applications or artists."></PackageCardItem>)
  const StartUp = (<PackageCardItem currency="$" numbers="2-4 Seiten" price={2500} activecss={`${startUpActiv && activePackageStyle}`} onClick={() => {handleStartUp(); }} title="Start Up" description="The optimal solution for small businesses and start-ups"></PackageCardItem>)
  const Business = (<PackageCardItem currency="$" numbers="6-8 Seiten" price={4500} activecss={`${businessActiv && activePackageStyle}`} onClick={() => {handleBusiness(); }} title="Business" description="A very good solution for medium-sized companies."></PackageCardItem>)
  const Custom = (<PackageCardItem activecss={`${customActiv && activePackageStyle}`} onClick={handleCustom} title="Custom" description="Didn't find a suitable package? No problem. Send us an individual request. We will find the right solution for you"></PackageCardItem>)






  //------------------------------------------------------------------------ WeekChanger

  // For Business 
  const [active6To8Weeks, setActive6To8Weeks] = useState(false);
  const [active8To10Weeks, setActive8To10Weeks] = useState(false);
  const [active10To12Weeks, setActive10To12Weeks] = useState(false);
  const aktivcssWeeks = "border-2 border-[#98f144] border-dashed rounded-lg"

  const notAllWeeksOff = () => {
    return active6To8Weeks || active8To10Weeks || active10To12Weeks
  }
  const handleClickSixToEight = () => {
    setActive6To8Weeks(!active6To8Weeks)
    setActive8To10Weeks(false)
    setActive10To12Weeks(false)
  }

  const handleClickEightToTen = () => {
    setActive6To8Weeks(false)
    setActive8To10Weeks(!active8To10Weeks)
    setActive10To12Weeks(false)
  }

  const handleClickTenToTwelve = () => {
    setActive6To8Weeks(false)
    setActive8To10Weeks(false)
    setActive10To12Weeks(!active10To12Weeks)
  }

  useEffect(() => {
    setActive6To8Weeks(false)
    setActive8To10Weeks(false)
    setActive10To12Weeks(false)
  }, [techCaseItem1Active, techCaseItem2Active, techCaseItem3Active, techCaseItem4Active])

  useEffect(() => {
    if(!notAllSwitchesOff() || !notAllPackagesOff()){
      setActive6To8Weeks(false);
    setActive8To10Weeks(false);
    setActive10To12Weeks(false);
    } 
    else if (notAllPackagesOff() && notAllSwitchesOff() && notAllWeeksOff()){
      setProgression(20);
    } 
    else if (!notAllPackagesOff() && notAllSwitchesOff()){
      setProgression(10);
    } 
    else if (!notAllWeeksOff() && notAllPackagesOff() && notAllSwitchesOff()){
      setProgression(15);
    } 
  },[active6To8Weeks, active8To10Weeks, active10To12Weeks, switch1, switch2, switch3, switch4, switch5, onepagerActiv, businessActiv, customActiv, startUpActiv ])

  const sixToEight = (<WeekChangerItems onClick={() => {handleClickSixToEight(); }} text="6-8" activecss={`${active6To8Weeks && aktivcssWeeks}`}></WeekChangerItems>)
  const eightToTen = (<WeekChangerItems onClick={() => {handleClickEightToTen(); }} text="8-10" activecss={`${active8To10Weeks && aktivcssWeeks}`}></WeekChangerItems>)
  const tenTotwelve = (<WeekChangerItems onClick={() => {handleClickTenToTwelve();}} text="10-12" activecss={`${active10To12Weeks && aktivcssWeeks}`}></WeekChangerItems>)


  {/* -----------------------------------BEGIN-----------------------------------

    Funktion um aus der Paketauswahl der Websitepakete und aus der Wochenpaketauswahl
    Zahlen für den PriceCard Component zu erstellen 
  
  */}

    function getNumberPackages() {
      if(onepagerActiv){
         return 1;
      } 
      else if (startUpActiv){
        return 2;
      } 
      else if (businessActiv){
        return 3;
      } else {
        return 0;
      }
    }

    function getNumberWeeks() {
      if(active6To8Weeks){
        return 1;
      }
      else if (active8To10Weeks){
        return 2;
      }
      else if (active10To12Weeks){
        return 3;
      } else {
        return 0;
      }
    }

    const [numberPackages, setNumberPackages] = useState(getNumberPackages());
    const [numberWeeks, setNumberWeeks] = useState(getNumberWeeks());

    useEffect(() => {
        setNumberPackages(getNumberPackages());
        setNumberWeeks(getNumberWeeks());
      

    },[active10To12Weeks,active6To8Weeks,active8To10Weeks])

    useEffect(() => {
        setNumberPackages(getNumberPackages());
    },[onepagerActiv,businessActiv,businessActiv])

    {/*  -----------------------------------END----------------------------------- */}


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
        <TechnologieCase heading="Lets configurate your own offer"
          item1={techCaseItem1}
          item2={techCaseItem2}
          item3={techCaseItem3}
          item4={techCaseItem4}
        >
        </TechnologieCase>










        <div className={`w-full mt-10 flex flex-col justify-center items-center`}>


          <div className={`w-full mt-1 duration-500  ${notAllTechnicalCaseItemsOff() ? "mobile:h-[27rem] tablet:h-[15rem]" : "h-0"}`}>
            {techCaseItem1Active && (
              <div className={`animate-fadeIn flex mobile:flex-col tablet:flex-row w-full justify-center items-center`}>
                <SwitchesWebsite
                  switch1={websiteSwitch1}
                  switch2={websiteSwitch2}
                  switch3={websiteSwitch3}
                  switch4={websiteSwitch4}
                  switch5={websiteSwitch5}
                ></SwitchesWebsite>



                <div className={`w-1/2 overflow-hidden mobile:text-left tablet:text-left p-5 text-slate-200 font-mono mobile:p-1 mobile:mt-10`}>
                  {
                    switch1 && (
                      <p className="animate-fadeIn text-[0.8rem]">{modernDescription}</p>
                    )
                  }

                  {
                    switch2 && (
                      <p className="animate-fadeIn text-[0.8rem]">{elegantDescription}</p>
                    )
                  }

                  {
                    switch3 && (
                      <p className="animate-fadeIn text-[0.8rem]">{playfulDescription}</p>
                    )
                  }

                  {
                    switch4 && (
                      <p className="animate-fadeIn text-[0.8rem]">{functionalDescription}</p>
                    )
                  }

                  {
                    switch5 && (
                      <p className="animate-fadeIn text-[0.8rem]">{unconventionalDescription}</p>
                    )
                  }

                </div>
              </div>
            )}

            {/* Wrap 1 Endet hier */}
          </div>








          <div className={`flex w-full justify-center overflow-hidden  duration-500   ${notAllSwitchesOff() ? "mobile:h-[35rem] tablet:h-[40rem] desktop:h-[20rem]" : "h-0"}`}>
            {(switch1 || switch2 || switch3 || switch4 || switch5) && (
              <div className="w-full animate-fadeIn" onChange={() => getNumberPackages()}>
                <PackageCard>
                  {onePager}
                  {StartUp}
                  {Business}
                  {Custom}
                </PackageCard>
              </div>
            )}
          </div>




          <div className={`flex w-full justify-center overflow-hidden  duration-500   ${notAllPackagesOff() ? "mobile:h-[9rem] tablet:h-[8rem] desktop:h-[8rem]" : "h-0"}`}>
            {(onepagerActiv || startUpActiv || businessActiv || Custom) && (
              <div className="w-full animate-fadeIn">
                <WeekChanger children1={sixToEight} children2={eightToTen} children3={tenTotwelve}>
                </WeekChanger>
              </div>
            )}
          </div>




          {/*-------------------------------------------- Progress Border---------------------------------------------------------------------------------------- */}
          <div className="w-full flex flex-col items-center mt-10">
            <div className={`w-[20rem] h-10 border border-[#292929] ${progression === 0 ? "opacity-0": "opacity-100"}  rounded-xl flex items-center overflow-hidden`}>
              {/* Progress Bar */}
              <div className={`h-full ${progression <= 5 ? "bg-[#DC143C]": progression === 10 ? "bg-[#f16444]" : progression === 15 ? "bg-[#e5f144]" : progression === 20 ? "bg-[#98f144]" : "" } duration-500 flex justify-center overflow-hidden
                items-center ${progression == 20 && "w-[20rem]"} ${progression == 15 && "w-[15rem]"} ${progression == 10 && "w-[10rem]"} ${progression == 5 && "w-[5rem]"} ${progression == 0 && "w-[0rem]"}`}>
                <span className={`font-mono font-semibold`}>{progression * 5 === 100 && "Configuration Complete!"}</span>
              </div>
            </div>
            <div className={`font-mono text-[0.8rem] ${progression === 0 ? "opacity-0": "opacity-100"} mt-3  ${progression <= 5 ? "text-[#DC143C]": progression === 10 ? "text-[#f16444]" : progression === 15 ? "text-[#e5f144]" : progression === 20 ? "text-[#98f144]" : "" } font-bold text-[1.1rem]`}>
              <span className="duration-300">Configuration progress: {progression * 5}
              </span> %<span></span></div>
          </div>
          {/*-------------------------------------------- Progress Border---------------------------------------------------------------------------------------- */}


          {/* PriceCard Component */}


          {notAllWeeksOff() && notAllPackagesOff() && notAllSwitchesOff() && 
          (<div>
            <PriceCard title="Preis" package={numberPackages} weeks={numberWeeks}  />
            </div>
          )}
         

        </div>



      </div>
    </>
  );
}