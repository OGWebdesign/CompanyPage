import { useState } from "react";

export const DynamicContentCard = () => {
    const [websiteActive, setWebsiteActive] = useState(true);
    const [devOpsActive, setDevOpsActive]   = useState(false);
    const [softwareDevActive, setSoftwareDevActive] = useState(false);
    const [artificalIntelligentActive, setArtificalIntelligentActive] = useState(false);



    const activateDisplayState = (selector: number) => {
        switch (selector) {
            case 1: {
                setWebsiteActive(true);
                setDevOpsActive(false);
                setSoftwareDevActive(false);
                setArtificalIntelligentActive(false);
            }
                break;
            case 2: {
                setWebsiteActive(false);
                setDevOpsActive(true);
                setSoftwareDevActive(false);
                setArtificalIntelligentActive(false);
            }
                break;
            case 3: {
                setWebsiteActive(false);
                setDevOpsActive(false);
                setSoftwareDevActive(true);
                setArtificalIntelligentActive(false);    
            }
                break;
            case 4: {
                setWebsiteActive(false);
                setDevOpsActive(false);
                setSoftwareDevActive(false);
                setArtificalIntelligentActive(true);
            }
                break;
        }

    }


    const websiteText = "Webseiten sind die Visitenkarten Ihres Unternehmens. Nach nur drei Sekunden Ladezeit entscheiden Besucher, ob sie bleiben oder weiter suchen. Unsere selbstprogrammierten Webseiten bieten schnellere Ladezeiten als gängige Systeme wie WordPress. Ein ansprechendes Design ist entscheidend. Mit OG-Webdesign heben Sie sich ab und präsentieren ein einzigartiges Aushängeschild. Zudem sind unsere Lösungen sicherer, da wir stets aktuelle Technologien verwenden, während Content Management Systeme oft anfällig für Sicherheitslücken sind.";
    const devOpsText = "In der heutigen digitalen Welt ist eine enge Zusammenarbeit zwischen Entwicklung und Betrieb entscheidend. Mit unserem DevOps-Ansatz bieten wir Ihnen die Möglichkeit, erfahrene Programmierer leihweise in Ihrem Unternehmen einzusetzen. Unsere Experten integrieren sich in Ihr Team und optimieren Prozesse, beschleunigen die Softwarebereitstellung und steigern die Qualität. Egal, ob für ein konkretes Projekt oder langfristige Verbesserungen – wir passen uns flexibel Ihren Anforderungen an. ";
    const appDevelopmentText = "Unsere Softwareentwicklung bietet Ihnen individuelle Lösungen, die genau auf Ihre Bedürfnisse zugeschnitten sind. Egal, ob Sie eine Webanwendung, mobile App oder komplexe Unternehmenssoftware benötigen, unsere erfahrenen Entwickler setzen Ihre Vision effizient um. Wir verwenden moderne Technologien und agile Methoden, um höchste Qualität und Flexibilität zu gewährleisten. Vertrauen Sie auf unsere Expertise in der Softwareentwicklung, um Ihre Projekte erfolgreich zu realisieren und Ihr Unternehmen voranzubringen!";
    const artificalIntelligentText = "Unsere KI-Schnittstellen ermöglichen es Ihnen, moderne künstliche Intelligenz nahtlos in Ihre Anwendungen zu integrieren. Durch den Einsatz intelligenter Algorithmen optimieren wir Prozesse, verbessern Entscheidungsfindungen und steigern die Effizienz. Egal, ob Sie Chatbots, prädiktive Analysen oder personalisierte Nutzererfahrungen benötigen. Wir entwickeln maßgeschneiderte Lösungen, die Ihre spezifischen Anforderungen erfüllen. ";




    return (

        <div className="w-full flex justify-center items-center mb-[5%]">
            <div className="w-[85%] max-w-[60rem] bg-[#f3d8d800] mt-4 bg-opacity-[50%] backdrop-blur-3xl border rounded-3xl flex shadow-[0_20px_50px_rgba(8,_100,_184,_0.7)] laptop:flex-row mobile:flex-col" >
                {/**selector screen */}
                <div className="mobile:w-full laptop:w-[35%] mobile:rounded-t-3xl laptop:rounded-l-3xl laptop:rounded-tr-none bg-[#080808] h-full flex flex-col">
                    <div onClick={()=>activateDisplayState(1)} className="duration-300 w-full mobile:h-[3rem] laptop:h-[5rem] mobile:rounded-t-3xl laptop:rounded-tl-3xl flex items-center laptop:justify-between mobile:justify-center laptop:flex-row mobile:flex-col">
                        <p className="laptop:text-[1.4rem] hover:text-[#98f144] font-sharemono text-white laptop:pl-6">
                            Webseiten
                        </p>
                        <div className={`laptop:w-[0.5rem] laptop:h-full mobile:w-[6rem] mobile:h-[0.2rem] h-full duration-200 ${websiteActive? "bg-[#98f144]":"bg-transparent"}`}></div>
                    </div>
                    <div onClick={()=>activateDisplayState(2)} className="duration-300 w-full mobile:h-[3rem] laptop:h-[5rem] flex items-center laptop:justify-between mobile:justify-center laptop:flex-row mobile:flex-col">
                        <p className="laptop:text-[1.4rem] hover:text-[#98f144] font-sharemono text-white laptop:pl-6 mobile:p-0">
                            DevOps &  Admin
                        </p>
                        <div className={`laptop:w-[0.5rem] laptop:h-full mobile:w-[6rem] mobile:h-[0.2rem] h-full duration-200 ${devOpsActive? "bg-[#98f144]":"bg-transparent"}`}></div>
                    </div>
                    <div onClick={()=>activateDisplayState(3)} className="duration-300 w-full mobile:h-[3rem] laptop:h-[5rem] flex items-center laptop:justify-between mobile:justify-center laptop:flex-row mobile:flex-col">
                        <p className="laptop:text-[1.4rem] hover:text-[#98f144] font-sharemono text-white laptop:pl-6 mobile:p-0">
                            Apps
                        </p>
                        <div className={`laptop:w-[0.5rem] laptop:h-full mobile:w-[6rem] mobile:h-[0.2rem] h-full duration-200 ${softwareDevActive? "bg-[#98f144]":"bg-transparent"}`}></div>
                    </div>
                    <div onClick={()=>activateDisplayState(4)} className="duration-300 w-full mobile:h-[3rem] laptop:h-[5rem] mobile:rounded-bl-none laptop:rounded-bl-3xl flex items-center laptop:justify-between mobile:justify-center laptop:flex-row mobile:flex-col">
                        <p className="laptop:text-[1.4rem] hover:text-[#98f144] font-sharemono text-white laptop:pl-6 mobile:p-0">
                            K.I.
                        </p>
                        <div className={`laptop:w-[0.5rem] laptop:h-full mobile:w-[6rem] mobile:h-[0.2rem] h-full duration-200 ${artificalIntelligentActive? "bg-[#98f144]":"bg-transparent"}`}></div>
                    </div>
                </div>
                <div className="laptop:w-[65%] mobile:w-full font-sharemono text-white text-[1rem] text-center flex justify-center items-center bg-[#20202000]">
                    {websiteActive && (<p className="p-4  animate-fadeIn">{websiteText}</p>)}
                    {devOpsActive && (<p className="p-4  animate-fadeIn">{devOpsText}</p>)}
                    {artificalIntelligentActive && (<p className="p-4  animate-fadeIn">{artificalIntelligentText}</p>)}
                    {softwareDevActive && (<p className="p-4  animate-fadeIn">{appDevelopmentText}</p>)}
                </div>
            </div>
        </div>
    );
}