import { Element, Link } from "react-scroll"
import { Heading } from "../Heading"
import { Help, Laptop, Paper, Screw } from "../Icons"
import { LargeCard } from "../LargeCard"
import { TechStripe } from "../TechStripe"
import { TextAndButton } from "../TextAndButton"
import { TextComponent } from "../TextComponent"
import { CodeSnippet } from "../CodeSnippetOn"
import { DynamicContentCard } from "../DynamicContentCard"

export const StartSite = (props: {
  TextAndButtonbt: JSX.Element;
  BlackCardButton: JSX.Element;
  WhiteCardButton: JSX.Element;
  ProposalButton: JSX.Element;
  openHelpcenter: () => void;

}) => {
  const sampleCode = `
    const Lebenseinstellung = (props:{
      UnserePrinzipien: JSX.Element | JSX.Element[] | string | null;
    }) => {
    //  Dinge die Sie wissen sollten.
      return(
      {/**Nummer Eins*/}
      <p>"Wir nutzen lieber Code als Content Management Systeme."</p>
      {/**Nummer Zwei*/}
      <p>"Versionskontrolle und Planung ist das A und O."</p>
      {/**Nummer Drei*/}
      <p>"Als Programmierer hört man nie mit dem Lernen auf."</p>
      ); 
    }; 
    export default Lebenseinstellung;
  `;
  return (

    <>
      <video autoPlay playsInline loop muted className="absolute object-cover h-screen w-full overflow-hidden" src="video/bgvideo.mp4"></video>
      <div className="animate-fadeIn">


        <img src="Planets/mars.webp" alt="Mars" className="w-[45rem] absolute top-[25%] right-[-5%] animate-floatJupiter" />
        <img src="Planets/jupiter.webp" alt="Jupiter" className="w-[35rem] absolute top-[30%] left-[5%] animate-floatJupiter " />
        <img src="Planets/comet.webp" alt="Comet" className="w-[15rem] mobile:w-0 tablet:w-[15rem] absolute desktop:top-[45%] laptop:top-[43%] tablet:top-[46%] mobile:top-[46.2%]  right-[10%]  animate-floatComet" />
        <img src="graphics/astro.webp" alt="" className="laptop:w-[20rem] desktop-xl:right-[35%]  desktop-l:right-[15%] tablet:top-[75%] mobile:w-0 z-10 absolute mobile:top-[70%] right-[5%] animate-float" />
        <img src="Planets/satelite.webp" alt="" className="w-[10rem] z-10 absolute tablet:bottom-[-4%] mobile:bottom-[-2%] mobile:right-[5%] tablet:right-[18%] animate-float" />


        <div className="w-full h-screen z-50 flex flex-col items-center">

          <div className="mobile:w-full desktop:w-3/4 mt-[23rem] animate-fadeIn desktop:mt-[10%] mobile:mt-[10%]">
            <Heading headstyle="text-slate-200" heading="Entdecke die POWER der modernen Web- und Software Entwicklung" />
            <TextAndButton children={props.TextAndButtonbt}

              text="Webentwicklung auf akademischem Niveau und neueste Web- und Anwendungstechnologien verleihen Ihrem Unternehmen ungeahnte Kraft in seinem Webauftritt oder in unternehmensinternen Prozessen."
              reference="/contact"
            />
          </div>
          <div className="w-3/4 mobile:w-[95%] h-[20rem] flex tablet:justify-center mobile:justify-center desktop:justify-end items-center z-50">
            <div className="w-[30rem] duration-300 h-[6rem] desktop-l:mr-[10rem] desktop-l:mt-[15rem] desktop-xxl:mr-[20rem] desktop-xxl:mt-[20rem] backdrop-blur-lg rounded-2xl bg-[#6b6b6b15] flex">


              <Link className="group hover:shadow-xl w-1/4 h-full hover:bg-[#98f144c0] flex justify-center items-center rounded-l-2xl hover:scale-110 group duration-300 flex-col" to="services" spy={true} smooth={true} offset={-70} duration={500}>
                <div className="flex flex-col justify-center items-center">
                  <Paper className="fill-white w-8 h-8 group-hover:fill-black"></Paper>
                  <p className="text-white mt-2 group-hover:text-black font-sharemono">Überblick</p>
                </div>
              </Link>


              <Link className="group hover:shadow-xl w-1/4 h-full duration-300 hover:bg-[#98f144c0] flex justify-center hover:scale-110 group items-center  flex-col" to="tech" spy={true} smooth={true} offset={-70} duration={500}>
                <div className="flex flex-col justify-center items-center">
                  <Screw className="fill-white w-8 h-8  group-hover:fill-black"></Screw>
                  <p className="text-white mt-2 group-hover:text-black font-sharemono">Technologie</p>
                </div>
              </Link>


              <Link className="group hover:shadow-xl w-1/4 h-full duration-300 hover:bg-[#98f144c0] flex justify-center items-center hover:scale-110 group  flex-col" to="development" spy={true} smooth={true} offset={-70} duration={500}>
                <div className="flex flex-col justify-center items-center ">
                  <Laptop className="fill-white w-8 h-8 group-hover:fill-black"></Laptop>
                  <p className="text-white mt-2 group-hover:text-black font-sharemono">Entwicklung</p>
                </div>
              </Link>

              <div onClick={props.openHelpcenter} className="group hover:shadow-xl w-1/4 h-full duration-300 hover:bg-[#98f144c0] flex justify-center items-center flex-col rounded-r-2xl hover:scale-110 group">
                <Help className="fill-white w-8 h-8 group-hover:fill-black"></Help>
                <p className="text-white mt-2 group-hover:text-black font-sharemono">Hilfe</p>
              </div>
            </div>
          </div>
        </div>

        {/* WrapperLayout */}
        <div className="w-full flex flex-col  justify-center items-center mt-[4%] z-50">
          <Element name="services" />
          <span className="text-[2.3rem] mobile:text-[1.8rem] z-50 font-sharemono font-bold text-[#98f144] mb-[2%] text-center">
            Was bieten wir an?
          </span>

          <div className="border-2 border-[#606060] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg p-5 mb-[2%]">
            <Paper className="w-[2rem] mobile:w-[1rem] fill-[#98f144]" />
          </div>


          {/**Card New */}

          <DynamicContentCard></DynamicContentCard>   
        </div>

        <div className="flex flex-col justify-center items-center mt-[3%] z-50">
          <Element name="tech" />
          <span className="text-[2.3rem] mobile:text-[1.8rem] font-sharemono font-bold text-[#98f144] mb-[3%] z-50 text-center">
            Welche Technologien <br></br> nutzen wir?
          </span>

          <div className="border-2 border-[#606060] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg p-5">
            <Screw className="w-[2rem] mobile:w-[1rem] fill-[#98f144]" />
          </div>

          <p className="text-white font-sharemono max-w-[100rem]  mobile:w-[95%] mt-[5%] mb-[2%] text-[1.2rem] text-left z-50">
            Beim erstellen von Webseiten haben wir uns bewusst gegen ein Content Management System wie Wordpress oder Typo3 entschieden,
            denn wir wollen Webseiten erstellen, die sich von den Konkurenzwebseiten unserer Klienten unterscheiden.
            In Wordpress dagegen werden oftmals auf Plugins und Themes zurückgegriffen. Dies sind keine guten Grundlagen für ein digitales, hoch individuelles Aushängeschild eines Unternehmens.

          </p>

          <p className="text-white font-sharemono max-w-[100rem] w-[65%] mobile:w-[95%]  my-[2%] text-[1.2rem] text-left z-50">
            Ebenso die langen Ladezeiten, die bei Wordpress durch das veraltete PHP Konstrukt kaum zu verhindern sind.
            Zumal machen die ganzen Plugins eine Wartung an solchen Webseiten sehr schwierig durch die hohen Anzahlen an Seiteneffekten.
          </p>

          <p className="text-white font-sharemono max-w-[100rem] mobile:w-[95%]  my-[2%] text-[1.2rem] text-left z-50">
          Außerdem sind bei WordPress-Websites selten echte Experten beteiligt. Da für die Nutzung eines Content-Management-Systems wie WordPress keine Programmierkenntnisse erforderlich sind, sind oft keine professionellen Entwickler im Einsatz. Häufig fehlt ein tiefes Verständnis für Webtechnologien und Sicherheitskonzepte, was keine solide Grundlage für die Erstellung einer hochwertigen und sicheren Website bietet.
          </p>

          <p className="text-white font-sharemono max-w-[100rem] mobile:w-[95%]  my-[2%] text-[1.2rem] text-left z-50">
            Deswegen haben wir uns bei OG Webdesign dazu entschieden, Webseiten mit den gleichen Technologien wie Facebook und Instagram zu produzieren.  Wir haben einen sehr hohen Anspruch wenn es um die Sicherheit eines Systems geht. Gerade deswegen verfolgen wir den Ansatz, eigenen Code zu schreiben und die volle Kontrolle über das Projekt zu haben.
          </p>
          <div className="w-3/4 mt-10">
            <TechStripe />
          </div>

        </div>


        <div className="flex flex-col justify-center items-center mt-[10%] z-50">
          <Element name="development" />
          <span className="text-[3rem] mobile:text-[1.8rem] font-sharemono font-bold text-[#98f144] mb-[3%] text-center">
            Wie entwickeln wir?
          </span>

          <div className="border-2 border-[#606060] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg p-5">
            <Laptop className="w-[3rem] mobile:w-[1rem] fill-[#98f144]" />
          </div>

        </div>

        <div className="w-full flex justify-center items-center mt-16">
          {/** box-shadow: 0 20px 50px rgba(8, 112, 184, 0.7); */}
          <div className="tablet:w-[40rem] mobile:invisible mobile:h-0 tablet:visible tablet:h-auto">
            <CodeSnippet code={sampleCode}>

            </CodeSnippet>
          </div>
        </div>
        <div className="w-full flex justify-center items-center z-50">

          <TextComponent

            headline="Planung und Umsetzung"
            text="Unsere Arbeit beginnt mit Zuhören und dem Verständnis Ihrer Vision. Gemeinsam erarbeiten wir eine Strategie, die perfekt auf Ihre Ziele abgestimmt ist. Durch agile Methoden bleiben wir flexibel in einer sich ständig verändernden digitalen Welt.
            Nach einen ersten Beratungsgespräch erstellen wir ein Lastenheft, das alle Anforderungen enthält und Transparenz bietet. Auf dieser Grundlage fertigen wir Mockups an, um die Benutzeroberfläche zu visualisieren, und binden den Kunden in die Entscheidungsfindung ein. Zusätzlich entwickeln wir UML-Diagramme zur Systemarchitektur und erstellen Prototypen, um frühzeitig Feedback zu erhalten und Anpassungen vorzunehmen. Dann beginnt die Umsetzung wobei dort immer der Entwicklungsstand einzusehen ist. Außerdem finden wärend des gesamten Entwicklungsprozesses regelmäßige Meetings statt."></TextComponent>
        </div>

        <div className="w-full flex justify-center items-center">
          <TextComponent
            headline="Zu jeder Zeit die volle Kontrolle und alles im Überblick"
            text="Ein zentraler Bestandteil unserer Entwicklungsarbeit ist ein systematisches Versionskontrollsystem mit Git. Damit verfolgen wir Änderungen klar nach und ermöglichen eine strukturierte Zusammenarbeit im Team. Jedes Projekt beginnt mit einem Git-Repository. Änderungen erfolgen in separaten Branches für Features, Bugfixes oder Experimente, wodurch paralleles Arbeiten ohne Konflikte möglich wird. Jeder abgeschlossene Entwicklungsstand wird durch einen Commit dokumentiert, der die Änderungen klar beschreibt. So bleibt alles transparent, und wir können bei Bedarf zu einem früheren Code-Stand zurückkehren."></TextComponent>
        </div>

        <LargeCard
          withButton={true}
          head1="Lass Dinge geschehen!"
          text1="Egal, was Ihre Idee ist, wir können der richtige Partner für Sie sein. Senden Sie uns Ihre Anfrage und wir finden für jedes Ihrer Anliegen eine passende Lösung."
          head2="Egal ob groß oder klein!"
          text2="Sie können uns jedes Projekt anvertrauen, wir finden eine Lösung, die Ihre volle Zufriedenheit garantiert. Zögern Sie nicht, mit kleinen Ideen zu uns zu kommen. Die größten Unternehmen der Welt haben in einer Garage begonnen. Träumen Sie groß, starten Sie noch größer."
          classname="bg-[#98f144]"
          button={props.ProposalButton}
        />



      </div>
    </>
  );
};
