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
  openHelpcenter:() => void;
}) => {
  return (
    <>
      <video autoPlay playsInline loop muted className="absolute object-cover h-screen w-full overflow-hidden" src="video/bgvideo.mp4"></video>
      <div className="animate-fadeIn">


        <img src="Planets/mars.webp" alt="Mars" className="w-[25rem] z-10 absolute top-[15%] right-[5%] animate-floatJupiter" />
        <img src="Planets/jupiter.webp" alt="Jupiter" className="w-[35rem] z-10 absolute top-[30%] left-[5%] animate-floatJupiter " />
        <img src="Planets/comet.webp" alt="Comet" className="w-[15rem] z-10 absolute tablet:top-[47%] mobile:top-[46.2%]  right-[10%]  animate-floatComet" />
        <img src="graphics/astro.webp" alt="" className="laptop:w-[20rem] mobile:w-0 z-10 absolute top-[68%] left-[10%] animate-float" />
        <img src="Planets/satelite.webp" alt="" className="w-[10rem] z-10 absolute tablet:bottom-[-4%] mobile:bottom-[-1%] mobile:right-[5%] tablet:right-[18%] animate-float" />


        <div className="w-full h-screen z-50 flex flex-col items-center">

          <div className="mobile:w-full desktop:w-3/4 mt-[23rem] animate-fadeIn desktop:mt-[10%] mobile:mt-[10%]">
            <Heading headstyle="text-slate-200" heading="Entdecke die POWER der modernen Web- und Software Entwicklung" />
            <TextAndButton children={props.TextAndButtonbt}

              text="Webentwicklung auf akademischem Niveau und neueste Web- und Anwendungstechnologien verleihen Ihrem Unternehmen ungeahnte Kraft in seinem Webauftritt oder in unternehmensinternen Prozessen."
              reference="/contact"
            />
          </div>
          <div className="w-3/4 mobile:w-[95%] h-[20rem] flex tablet:justify-center desktop:justify-end items-center z-50">
            <div className="w-[30rem] duration-300 h-[6rem] desktop-l:mr-[10rem] desktop-l:mt-[15rem] desktop-xxl:mr-[20rem] desktop-xxl:mt-[20rem] backdrop-blur-lg rounded-2xl bg-[#6b6b6b15] flex">

              <Link className="group hover:shadow-xl w-1/4 h-full duration-300 hover:bg-[#98f144c0] flex justify-center hover:scale-110 group items-center rounded-l-2xl flex-col" to="tech" spy={true} smooth={true} offset={-70} duration={500}>
                <div className="flex flex-col justify-center items-center">
                  <Screw className="fill-white w-8 h-8  group-hover:fill-black"></Screw>
                  <p className="text-white mt-2 group-hover:text-black font-sharemono">Technologie</p>
                </div>
              </Link>

              <Link className="group hover:shadow-xl w-1/4 h-full hover:bg-[#98f144c0] flex justify-center items-center hover:scale-110 group duration-300 flex-col" to="services" spy={true} smooth={true} offset={-70} duration={500}>
                <div className="flex flex-col justify-center items-center">
                  <Paper className="fill-white w-8 h-8 group-hover:fill-black"></Paper>
                  <p className="text-white mt-2 group-hover:text-black font-sharemono">Überblick</p>
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
          <span className="text-[2.3rem] mobile:text-[1.8rem] font-sharemono font-bold text-[#98f144] mb-[2%] text-center">
            Was bieten wir an?
          </span>

          <div className="border-2 border-[#606060] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg p-5 mb-[2%]">
            <Paper className="w-[2rem] mobile:w-[1rem] fill-[#98f144]" />
          </div>

          <div className="laptop:w-[65%] desktop-xl:w-[40%] p-3 flex flex-col justify-center items-center mb-[5%] z-50">
          <CardBlack
            classname="desktop:-translate-x-28"
            text1="Webseiten & "
            text2="Programmierung"
          >
            <p className="text-white font-mono text-[1.1rem]">
              Webseiten sind die{" "}
              <span className="text-[#98f144]">Visitenkarten</span> Ihres
              Unternehmens. Versucht jemand Ihr Unternehmen im Internet zu
              finden, wird er zuerst auf Ihrer{" "}
              <span className="bg-[#98f144] text-black inline-block font-bold">
                Webseite
              </span>{" "}
              landen. Nach durchschnittlich 3 Sekunden Ladezeit entscheidet der
              Besucher, ob er auf Ihrer Webseite bleibt oder das Laden abbricht
              und sich woanders umschaut. Diese Ladezeit erreichen wir mit unseren selbstprogrammierten 
              Webseiten ohne Probleme, wohingegen Content Management Systeme, wie z.B. Wordpress, meist schlechtere Ladezeiten 
              aufweisen. 
               <br />
              Danach wird sich der Besucher je nach Design und Inhalt für oder gegen Ihr
              Unternehmen entscheiden. Sieht Ihre Webseite wie aus dem Katalog aus, ist das nicht sehr 
              einprägsam und wird schnell wieder vergessen. Mit Webseiten von OG-Webdesign stechen Sie aus der Masse heraus und haben 
              ein einzigartiges Aushängeschild für Ihr Unternehmen oder Ihre Tätigkeit. 
              <br />
              Eine weitere Stärke von selbstprogrammierten Webseiten ist der Sicherheitsaspekt. Unsere verwendeten Technologien 
              sind stets aktuell und sicher. Bei Content Management Systemen ist das nicht immer der Fall. Hält man diese nicht 
              auf dem neuesten Stand, kann es schnell zu Sicherheitslücken kommen. Diese können von Hackern ausgenutzt werden, um
              Schaden anzurichten oder Daten zu stehlen. <br/>
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
            classname="desktop:translate-x-28 my-[5%]"
            text1="DevOps &"
            text2="Admin"
          >
            <p className="text-white font-mono text-[1.1rem]">
              Sie haben ein Projekt welches bereits in der Entwicklung ist oder
              kurz davor steht, veröffentlicht zu werden? Wir, OG-Webdesign, helfen Ihnen
              dabei, Ihr Projekt auf die{" "}
              <span className="bg-[#98f144] text-black">Zielgerade</span> zu bringen. Wir
              bieten Ihnen professionelle Unterstützung bei der{" "}
              <span className="font-bold">
                Entwicklung und Veröffentlichung
              </span>{" "}
              Ihres Projektes. Dabei halten wir engen Kontakt zu Ihnen, um
              sicherzustellen, dass das Projekt auch genau Ihren Vorstellungen
              entspricht. <br />
              Benötigen Sie Administratoren für ein bereits fertiges Produkt kann OG-Webdesign dies für 
              Sie übernehmen. Wir kümmern uns um die Wartung und Pflege Ihrer Anwendung. Ob Webseiten, 
              Web-Anwendungen oder Apps, wir sorgen dafür, dass Ihre Anwendung immer auf dem neuesten Stand ist und
              einwandfrei funktioniert. 
            </p>
          </CardWhite>
          <CardWhite
            classname="desktop:-translate-x-28 mb-[5%]"
            text1="Anwendungsentwicklung"
            text2=""
          >
            <p className="text-white font-mono text-[1.1rem]">
              Wenn Sie auf{" "}
              <span className="bg-[#98f144] text-black">
                Funktionalität und Benutzerfreundlichkeit
              </span>{" "}
              setzen, sind Sie bei OG-Webdesign genau richtig. Wir entwickeln für Sie
              individuelle{" "}
              <span className="bg-black text-[#98f144] font-bold">
                Web-Anwendungen
              </span>
              ,die genau auf Ihre Bedürfnisse zugeschnitten sind. Dabei achten
              wir darauf, dass die Anwendung{" "}
              <span className="font-bold">
                so einfach wie möglich zu bedienen
              </span>{" "}
              ist und dennoch alle Funktionen bietet, die Sie benötigen. <br />
              Ein großer Vorteil von Web-Anwendungen ist die{" "}
              <span className="bg-[#98f144] text-black">Plattformunabhängigkeit</span>.
              Egal ob als Desktop-Anwendung, Web-Anwendung oder als App, wir
              entwickeln für Sie die passende Lösung.
            </p>
          </CardWhite>
          <CardBlack
            classname="desktop:translate-x-28"
            text1="Künstliche"
            text2="Intelligenz"
          >
            <p className="text-white font-mono text-[1.1rem]">
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

        <div className="flex flex-col justify-center items-center mt-[3%] z-50">
          <Element name="tech" />
          <span className="text-[2.3rem] mobile:text-[1.8rem] font-sharemono font-bold text-[#98f144] mb-[3%] text-center">
            Welche Technologien <br></br> nutzen wir?
          </span>

          <div className="border-2 border-[#606060] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg p-5">
            <Screw className="w-[2rem] mobile:w-[1rem] fill-[#98f144]" />
          </div>

          <p className="text-white font-sharemono max-w-[100rem] w-[65%] mobile:w-[90%] mt-[5%] mb-[2%] text-[1.2rem] text-left">
            Beim erstellen von Webseiten haben wir uns bewusst gegen ein Content Management System wie Wordpress oder Typo3 entschieden,
            denn wir wollen Webseiten erstellen, die sich von den Konkurenzwebseiten unserer Klienten unterscheiden.
            In Wordpress dagegen werden oftmals auf Plugins und Themes zurückgegriffen. Dies sind keine guten Grundlagen für ein digitales, hoch individuelles Aushängeschild eines Unternehmens.

          </p>

          <p className="text-white font-sharemono max-w-[100rem] w-[65%] mobile:w-[90%]  my-[2%] text-[1.2rem] text-left">
            Ebenso die langen Ladezeiten, die bei Wordpress durch das veraltete PHP Konstrukt kaum zu verhindern sind.
            Zumal machen die ganzen Plugins eine Wartung an solchen Webseiten sehr schwierig durch die hohen Anzahlen an Seiteneffekten.
          </p>

          <p className="text-white font-sharemono max-w-[100rem] w-[65%] mobile:w-[90%]  my-[2%] text-[1.2rem] text-left">
            Außerdem sind bei Wordpress Webseiten selten echte Experten am Werk.
            Man benötigt keine Programmierkenntnisse für ein Content Management System und somit auch keine Programmierer.
            In der Regel sind es Leihen, die sich Wordpress autodidaktisch beigebracht haben und selten ein tiefes Verständnis für Webtechnologien und Sicherheitskonzepte beherschen.
            Diese Eigenschafte bilden keine gute Grundlage für die Erstellung Ihrer Webseite.
          </p>

          <p className="text-white font-sharemono max-w-[100rem] w-[65%] mobile:w-[90%]  my-[2%] text-[1.2rem] text-left z-50">
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



      <div className="w-full flex justify-center items-center z-50">
        <TextComponent
        
        headline="Hochgeschwindigkeitsleistung für Websites und Webanwendungen auf dem nächsten Level."
          text="Unsere Arbeit beginnt nicht mit Code, sondern mit Zuhören. Wir nehmen uns die Zeit, Ihre Vision zu verstehen und erarbeiten gemeinsam eine Strategie, die perfekt auf Ihre Ziele zugeschnitten ist. Unser Prozess basiert auf agilen Methoden, die es uns ermöglichen, flexibel und reaktionsschnell auf Veränderungen zu reagieren. In einer digitalen Welt, die sich ständig weiterentwickelt, ist es entscheidend, flexibel zu bleiben. Unser DevOps-Team sorgt dafür, dass Ihre Projekte nicht nur entwickelt, sondern auch optimal bereitgestellt und überwacht werden. Mit unserer Hilfe verkürzen Sie Entwicklungszyklen, automatisieren Ihre Infrastruktur und schaffen einen nahtlosen Übergang von der Entwicklung in den Betrieb. Unsere Arbeitsweise als Softwareentwickler zeichnet sich durch einen strukturierten und detaillierten Ansatz aus, der von Beginn an auf eine enge Zusammenarbeit mit dem Kunden setzt. Der erste Schritt in jedem Projekt ist ein intensives Kundengespräch, bei dem wir uns die Zeit nehmen, die Vision, Anforderungen und Ziele des Kunden umfassend zu verstehen. Wir stellen dabei sicher, dass alle relevanten Details erfasst werden, um ein präzises Bild des gewünschten Endprodukts zu entwickeln.
Nach diesem Gespräch erstellen wir ein ausführliches Lastenheft, das als zentrale Grundlage für die weitere Entwicklung dient. Dieses Dokument enthält alle funktionalen und nicht-funktionalen Anforderungen des Projekts und bietet dem Kunden volle Transparenz über den geplanten Projektumfang. Auf dieser Basis beginnen wir dann mit der Anfertigung von Mockups, die die geplante Benutzeroberfläche und Benutzererfahrung visualisieren. Diese dienen als erste greifbare Entwürfe, die den Kunden in die Entscheidungsfindung einbinden und eine solide Grundlage für das finale Design bieten.
Zusätzlich entwickeln wir UML-Diagramme, um die Architektur des Systems klar zu definieren und sicherzustellen, dass alle technischen Komponenten nahtlos zusammenarbeiten. Darauf aufbauend entwickeln wir Prototypen, die als funktionale Modelle fungieren und es ermöglichen, frühzeitig Feedback zu sammeln und Anpassungen vorzunehmen, bevor die endgültige Umsetzung beginnt.
Die eigentliche Umsetzung des Projekts erfolgt mit den neuesten und modernsten Webtechnologien. Wir nutzen React für die Entwicklung leistungsstarker Benutzeroberflächen, Tailwind für ein flexibles und responsives Design, TypeScript für eine robuste Typensicherheit und Node.js für die serverseitige Logik. Durch den Einsatz dieser Technologien stellen wir sicher, dass unsere Lösungen nicht nur performant und zukunftssicher sind, sondern auch den höchsten technischen Standards entsprechen.
Während der gesamten Projektlaufzeit halten wir wöchentliche Meetings ab, um den Fortschritt zu besprechen, den Kunden kontinuierlich einzubinden und sicherzustellen, dass das Projekt stets in die richtige Richtung geht. Diese regelmäßige Kommunikation ermöglicht es uns, flexibel auf neue Anforderungen oder Änderungen zu reagieren und das Projekt effizient zum Erfolg zu führen. Unser Ziel ist es, jedes Projekt nicht nur erfolgreich abzuschließen, sondern es auf einem Niveau zu liefern, das die Erwartungen unserer Kunden übertrifft."
        ></TextComponent>
        </div>
        
      <div className="w-full flex justify-center items-center">
        <TextComponent
          headline="Zu jeder Zeit die volle Kontrolle und alles im Überblick"
          text="Ein zentraler Bestandteil unserer Entwicklungsarbeit ist ein durchdachtes und systematisches Versionskontrollsystem, das wir mithilfe von Git umsetzen. Durch die Verwendung von Git gewährleisten wir eine klare Nachverfolgung aller Änderungen, die während des Entwicklungsprozesses vorgenommen werden, und ermöglichen gleichzeitig eine strukturierte Zusammenarbeit im Team.

Jedes Projekt beginnt mit der Einrichtung eines Git-Repositories, das als zentrale Basis für die Versionskontrolle dient. Alle Änderungen, die am Code vorgenommen werden, erfolgen in separaten Branches, die speziell für neue Features, Bugfixes oder experimentelle Entwicklungen angelegt werden. Diese Branch-Struktur erlaubt es uns, parallel an verschiedenen Aspekten des Projekts zu arbeiten, ohne dass es zu Konflikten oder Instabilitäten im Hauptcode kommt.

Für jede abgeschlossene Entwicklungsphase oder jedes Update wird ein sogenannter Commit erstellt, der eine klare und nachvollziehbare Beschreibung der vorgenommenen Änderungen enthält. So wird zu jedem Zeitpunkt dokumentiert, was geändert wurde, warum es geändert wurde und welche Auswirkungen diese Änderungen haben. Dieses Vorgehen sorgt nicht nur für Transparenz, sondern ermöglicht es uns auch, bei Bedarf zu einem früheren Stand des Codes zurückzukehren, falls unvorhergesehene Probleme auftreten.

Bevor eine Änderung in den Hauptzweig (Main oder Master Branch) integriert wird, durchläuft sie einen strengen Code-Review-Prozess. Hierbei prüfen wir die neuen Codeabschnitte auf Qualität, Effizienz und Konformität mit den vorab definierten Anforderungen. Erst nach Freigabe durch das Team wird der Code in das Hauptprojekt integriert, um höchste Qualität zu gewährleisten und Fehler zu minimieren.

Zusätzlich setzen wir auf automatisierte Tests, die ebenfalls in den Git-Workflow integriert sind. Diese Tests stellen sicher, dass neue Funktionen korrekt arbeiten und bestehende Funktionen nicht unbeabsichtigt beeinträchtigt werden. Git erlaubt uns darüber hinaus, Releases klar zu kennzeichnen, sodass jederzeit erkennbar ist, welche Version eines Projekts sich in welchem Entwicklungsstadium befindet.

Durch diesen strukturierten Einsatz von Git und den dazugehörigen Best Practices sorgen wir für ein hohes Maß an Transparenz, Rückverfolgbarkeit und Qualitätssicherung in jedem Entwicklungsprojekt."
        ></TextComponent>
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
