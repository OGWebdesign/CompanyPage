import { Element, Link } from "react-scroll"
import { CardBlack } from "../CardBlack"
import { CardWhite } from "../CardWhite"
import { Heading } from "../Heading"
import { Help, Laptop, Paper, Screw } from "../Icons"
import { LargeCard } from "../LargeCard"
import { TechStripe } from "../TechStripe"
import { TextAndButton } from "../TextAndButton"
import { TextComponent } from "../TextComponent"

export const StartSite = (props: {
  TextAndButtonbt: JSX.Element;
  BlackCardButton: JSX.Element;
  WhiteCardButton: JSX.Element;
  ProposalButton: JSX.Element;
}) => {
  return (
    <>
    <video autoPlay playsInline loop muted className="absolute object-cover h-screen w-full overflow-hidden" src="video/3130284-uhd_3840_2160_30fps.mp4"></video>
    <div className="animate-fadeIn">
      
      <div className="w-full h-screen z-50  flex flex-col items-center">
        
        <div className="w-3/4 mt-[23rem] mobile:mt-[10%]">
          <Heading headstyle="text-slate-200" heading="Discover the power of modern web and software development" />
          <TextAndButton children={props.TextAndButtonbt}

            text="Web development at an academic level and the latest web and application technologies give your company unimaginable power in its web presence or internal company processes."
            reference="/contact"
          />
        </div>
        <div className="w-3/4 h-[30rem] flex justify-end items-center">
          <div className="w-[30rem] duration-300 h-[6rem] desktop-l:mr-[10rem] desktop-l:mt-[15rem] desktop-xxl:mr-[20rem] desktop-xxl:mt-[20rem] rounded-2xl bg-[#9a53d49c] flex">
           
           <Link className="w-1/4 h-full duration-300 hover:bg-[#98f144c0] flex justify-center items-center rounded-l-2xl flex-col" to="tech" spy={true} smooth={true} offset={-70} duration={500}>
            <div className="flex flex-col justify-center items-center">
              <Screw className="fill-white w-8 h-8"></Screw>
              <p className="text-white mt-2">Technologie</p>
            </div>
            </Link>

            <Link className="w-1/4 h-full duration-300 hover:bg-[#98f144c0] flex justify-center items-center flex-col" to="services" spy={true} smooth={true} offset={-70} duration={500}>
            <div className="flex flex-col justify-center items-center">
              <Paper className="fill-white w-8 h-8"></Paper>
              <p className="text-white mt-2">Überblick</p>
            </div>
            </Link>

            <Link className="w-1/4 h-full duration-300 hover:bg-[#98f144c0] flex justify-center items-center  flex-col" to="development" spy={true} smooth={true} offset={-70} duration={500}>
            <div className="flex flex-col justify-center items-center">
              <Laptop className="fill-white w-8 h-8"></Laptop>
              <p className="text-white mt-2">Entwicklung</p>
            </div>
            </Link>

            <div className="w-1/4 h-full duration-300 hover:bg-[#98f144c0] flex justify-center items-center flex-col rounded-r-2xl">
              <Help className="fill-white w-8 h-8"></Help>
              <p className="text-white mt-2">Hilfe</p>
            </div>
          </div>
        </div>
      </div>

      {/* WrapperLayout */}
      <div className="w-full flex flex-col  justify-center items-center mt-[10rem]">
       <Element name="services"/>
        <span className="text-[3rem] font-sharemono font-bold text-[#98f144] mb-[3%] text-center">
          Was bieten wir an?
        </span>

        <div className="border-2 border-[#606060] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg p-5 mb-[10%]">
          <Paper className="w-[3rem] fill-[#98f144]" />
        </div>

        <div className="laptop:w-[40%] desktop-xl:w-[75%] p-3 grid tablet:gap-10 mobile:gap-20  mobile:grid-rows-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:grid-rows-2 desktop:grid-rows-1 desktop:grid-cols-2 place-content-center place-items-center mb-[5%]">
          <CardBlack
            classname="tablet:-translate-x-28"
            text1="Webseiten & "
            text2="Programmierung"
          >
            <p className="text-white font-mono text-[0.9rem]">
              Webseiten sind die{" "}
              <span className="text-[#98f144]">Visitenkarten</span> Ihres
              Unternehmens. Versucht jemand Ihr Unternehmen im Internet zu
              finden, wird er zuerst auf Ihrer{" "}
              <span className="bg-[#98f144] text-black inline-block font-bold">
                Webseite
              </span>{" "}
              landen. Nach durchschnittlich 3 Sekunden Ladezeit entscheidet der
              Besucher, ob er auf Ihrer Webseite bleibt oder das Laden abbricht
              und sich woanders umschaut. <br />
              Danach wird er sich je nach Design und Inhalt für oder gegen Ihr
              Unternehmen entscheiden. Wir helfen Ihnen dabei, dass der{" "}
              <span className="text-[#98f144]">Besucher zum Kunden</span> wird
              oder Ihre Webseite ein{" "}
              <span className="text-[#98f144]">Aushängeschild</span> für Ihre
              Tätigkeit wird und fertigen Ihnen eine maßgeschneiderte Webseite
              an, die sich von der Masse{" "}
              <span className="bg-[#98f144] font-bold text-black">abhebt</span>.{" "}
              <br />
              Benötigen Sie sonstige{" "}
              <span className="bg-white text-black font-bold">
                Programmierarbeiten
              </span>
              , sind wir auch hier der richtige Ansprechpartner. Mit unserer{" "}
              <span className="font-bold">Expertise und Erfahrung</span> können
              wir Ihnen bei jedem Problem helfen.
            </p>
          </CardBlack>
          <CardWhite
            classname="tablet:translate-x-28"
            text1="DevOps &"
            text2="Admin"
          >
            <p className="text-black font-mono text-[0.9rem]">
              Sie haben ein Projekt welches bereits in der Entwicklung ist oder
              kurz davor steht, veröffentlicht zu werden? Wir helfen Ihnen
              dabei, Ihr Projekt auf die{" "}
              <span className="bg-[#98f144]">Zielgerade</span> zu bringen. Wir
              bieten Ihnen professionelle Unterstützung bei der{" "}
              <span className="font-bold">
                Entwicklung und Veröffentlichung
              </span>{" "}
              Ihres Projektes. Dabei halten wir engen Kontakt zu Ihnen, um
              sicherzustellen, dass das Projekt auch genau Ihren Vorstellungen
              entspricht. <br />
              ADMIN???
            </p>
          </CardWhite>
          <CardWhite
            classname="tablet:-translate-x-28"
            text1="Anwendungsentwicklung"
            text2=""
          >
            <p className="text-black font-mono text-[0.9rem]">
              Wenn Sie nicht vordergründig auf Aussehen und Design wertlegen,
              sondern auf{" "}
              <span className="bg-[#98f144]">
                Funktionalität und Benutzerfreundlichkeit
              </span>{" "}
              setzen, sind Sie bei uns genau richtig. Wir entwickeln für Sie
              individuelle{" "}
              <span className="bg-black text-[#98f144] font-bold">
                Web-Anwendungen
              </span>
              , die genau auf Ihre Bedürfnisse zugeschnitten sind. Dabei achten
              wir darauf, dass die Anwendung{" "}
              <span className="font-bold">
                so einfach wie möglich zu bedienen
              </span>{" "}
              ist und dennoch alle Funktionen bietet, die Sie benötigen. <br />
              Ein großer Vorteil von Web-Anwendungen ist die{" "}
              <span className="bg-[#98f144]">Plattformunabhängigkeit</span>.
              Egal ob als Desktop-Anwendung, Web-Anwendung oder als App, wir
              entwickeln für Sie die passende Lösung.
            </p>
          </CardWhite>
          <CardBlack
            classname="tablet:translate-x-28"
            text1="Künstliche"
            text2="Inteligenz"
          >
            <p className="text-white font-mono text-[0.9rem]">
              Künstliche Intelligenz ist in aller Munde. Doch was ist KI
              eigentlich? KI ist die Fähigkeit eines Computers,{" "}
              <span className="bg-[#98f144] font-bold text-black">
                selbstständig
              </span>{" "}
              zu lernen und{" "}
              <span className="bg-[#98f144] font-bold text-black">
                Entscheidungen
              </span>{" "}
              zu treffen. Dabei kann KI in den verschiedensten Bereichen
              eingesetzt werden. Ob in der Medizin, in der Industrie oder im
              Alltag, KI wird immer wichtiger. <br />
              Wir können Ihren Programmen und Webseiten{" "}
              <span className="bg-white text-black font-bold">
                KI-Funktionalitäten
              </span>{" "}
              hinzufügen, die Ihnen oder Ihren Kunden das Leben erleichtern.
              Dies kann beispielsweise eine Nachrichten-KI auf Ihrer Webseite
              sein, welche dem Nutzer hilft, durch die Flut an Informationen zu
              kommen und sich zurechtzufinden. <br />
              Lassen Sie uns gemeinsam die{" "}
              <span className="text-[#98f144]">Zukunft</span> gestalten und KI
              in Ihre Projekte integrieren.
            </p>
          </CardBlack>
        </div>
      </div>


    <div className="flex flex-col justify-center items-center mt-[10%]">
    <Element name="tech"/>
      <span className="text-[3rem] font-sharemono font-bold text-[#98f144] mb-[3%] text-center">
          Welche Technologien nutzen wir?
        </span>

        <div className="border-2 border-[#606060] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg p-5">
          <Screw className="w-[3rem] fill-[#98f144]" />
        </div>

        <p className="text-white font-sharemono w-[65%] my-[5%] text-[1.3rem] text-center">
          Die Technologien, die wir verwenden sind stets zeitgemäß und aktuell. Das garantiert einen hohen Sicherheitsstandard und 
          viele Möglichkeiten die sich aus den Technologien ergeben. Wir verwenden nur Technologien, die wir auch beherrschen und
          die sich in der Praxis bewährt haben. Hier eine kleine Auswahl der Technologien, die wir verwenden:
        </p>

        <div className="w-3/4">
        <TechStripe />
        </div>

    </div>  


    <div className="flex flex-col justify-center items-center mt-[10%]">
    <Element name="development"/>
      <span className="text-[3rem] font-sharemono font-bold text-[#98f144] mb-[3%] text-center">
          Wie entwickeln wir?
        </span>

        <div className="border-2 border-[#606060] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg p-5">
          <Laptop className="w-[3rem] fill-[#98f144]" />
        </div>

    </div>




      <TextComponent
        headline="High-speed performance for websites and web applications on the next level."
        text="We have consciously decided against content management solutions when developing websites. On the one hand, we have set ourselves the task of revolutionizing the Internet with highly customized customer projects. We want to help companies that have understood how to stand out from the competition to offer an alternative to offers that mainly consist of content management systems. On the other hand, full control over the project is important. It is particularly important for perfectionist developers like us to be able to change even the finer details. Performance and maintainability are particularly guaranteed by the technologies we use. We can log all development steps of a project and reset them if necessary. Nothing unexpected happens here! We make no compromises when it comes to performance. The code base, the media, and even the fonts are professionally compressed so that quality losses are not visible. All packed together in a state-of-the-art and reliable ecosystem with the highest level of care for maintainability. 80% of a software product consists of maintenance and care."
      ></TextComponent>

      <LargeCard
        withButton={true}
        head1="Let`s make things happen!"
        text1="No matter what your idea is, we can be the right partner for you. Send us your request and we will find a suitable solution for each of your concerns."
        head2="Whether big or small."
        text2="You can entrust us with any project proposal, we will find a solution that will ensure your complete satisfaction. Don't hesitate to come to us with small ideas. The biggest companies in the world started in a garage. Dream big, start even bigger."
        classname="bg-[#98f144]"
        button={props.ProposalButton}
      />
    </div>
    </>
  );
};
