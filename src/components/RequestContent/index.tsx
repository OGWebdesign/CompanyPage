import { useState } from "react";
import { ArrowIcon } from "../Icons";
export const RequestContent = () => {

    const [questActive1, setQuestActive1] = useState(false);
    const [questActive2, setQuestActive2] = useState(false);
    const [questActive3, setQuestActive3] = useState(false);
    const [questActive4, setQuestActive4] = useState(false);
    const [questActive5, setQuestActive5] = useState(false);
    const [questActive6, setQuestActive6] = useState(false);

    // tablet:h-[35rem] mobile:h-[60rem] desktop:h-[30rem]
    const inactiveStyleSheet = "h-[5rem]";
    const activeSmallStyleSheet = "h-[35rem]"
    const activeverySmallStyleSheet = "h-[50rem]"
    const activeStyleSheet   = "h-[30rem]";



    const activeHandler = (selector: number) => {
        switch (selector) {
            case 1:
                setQuestActive1(!questActive1);
                setQuestActive2(false);
                setQuestActive3(false);
                setQuestActive4(false);
                setQuestActive5(false);
                setQuestActive6(false);
                break;
            case 2:  
                setQuestActive1(false);
                setQuestActive2(!questActive2);
                setQuestActive3(false);
                setQuestActive4(false);
                setQuestActive5(false);
                setQuestActive6(false);
                break;
            case 3:
                setQuestActive1(false);
                setQuestActive2(false);
                setQuestActive3(!questActive3);
                setQuestActive4(false);
                setQuestActive5(false);
                setQuestActive6(false);
                break;
            case 4:
                setQuestActive1(false);
                setQuestActive2(false);
                setQuestActive3(false);
                setQuestActive4(!questActive4);
                setQuestActive5(false);
                setQuestActive6(false);
                break;
            case 5:
                setQuestActive1(false);
                setQuestActive2(false);
                setQuestActive3(false);
                setQuestActive4(false);
                setQuestActive5(!questActive5);
                setQuestActive6(false);
                break;
            case 6:
                setQuestActive1(false);
                setQuestActive2(false);
                setQuestActive3(false);
                setQuestActive4(false);
                setQuestActive5(false);
                setQuestActive6(!questActive6);
                break;
        }
    }


    return (
        <div className="w-full flex-col h-[65rem] animate-zeptaEffect overflow-hidden text-white font-sharemono text-[2rem] font-bold rounded-2xl flex items-center ">
            <div className="laptop:max-w-[100rem] tablet:max-w-[80%] mobile:max-w-full">

                <div className={`${questActive1 ? activeStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center jsutify duration-300`}>
                    <div onClick={() => activeHandler(1)} className="flex w-full items-center justify-between">
                        <p className="mobile:ml-0 tablet:ml-8 mobile:text-[1rem] tablet:text-[1.2rem] mobile:w-[80%] desktop:w-full ">Wie kann ich Kontakt zu euch aufnehmen?</p>
                        <div className="w-[9rem] h-[3rem] mobile:hidden desktop:flex mr-4 rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
                        <ArrowIcon className={`w-[1.5rem] fill-white mr-[1.5rem] ${questActive1 && "rotate-90"} duration-300 mobile:block desktop:hidden `} />
                    </div>
                    <div className="w-full flex flex-col text-[1rem] text-slate-400 p-4 justify-between">
                        <article className="ml-6 mt-4">
                            Wir bieten Ihnen zwei Möglichkeiten an, um mit uns in Kontakt zu treten.
                        </article>
                        <div className="flex flex-col w-full">
                            <p className="ml-8 mt-4 w-3/4">
                                Wenn Sie eine ganz allgemeine Frage über unsere Angebote an Dienstleisungen oder über unsere verwendeten Technologien haben.
                                Hierfür nutzen Sie bitte unser Kontaktformular.
                            </p>
                            <div className="w-[10rem] h-[3rem] ml-8 mt-4 bg-[#88ff27] rounded-2xl flex justify-center items-center text-black font-sharemono">Kontaktformular</div>
                            <p className="ml-8 mt-14 w-3/4">
                                Haben Sie bereits feste Vorstellungen über Ihr Projekt oder der gewünschten Dienstleistung, können Sie uns direkt eine Anfrage über unser Anfrageformular zukommen lassen.
                            </p>
                            <div className="w-[10rem] h-[3rem] ml-8 mt-4 bg-[#88ff27] rounded-2xl flex justify-center items-center text-black font-sharemono">Anfrageformular</div>
                        </div>
                    </div>
                </div>


                <div className={`${questActive2 ? activeSmallStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center duration-300`}>
                    <div onClick={() => activeHandler(2)} className="flex w-full items-center justify-between">
                        <p className="mobile:ml-0 tablet:ml-8 mobile:text-[1rem] tablet:text-[1.2rem] mobile:w-[80%] desktop:w-full">Warum wird die Seite nicht korrekt geladen oder angezeigt?</p>
                        <div className="w-[9rem] h-[3rem] mobile:hidden desktop:flex mr-4 rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
                        <ArrowIcon className={`w-[1.5rem] mr-[1.5rem] fill-white ${questActive2 && "rotate-90"} duration-300 mobile:block desktop:hidden `} />
                    </div>
                    <div className="w-full flex flex-col text-[1rem] text-slate-400 p-4 justify-between">
                        <article className="ml-6 mt-4 w-3/4">
                            Es kann verschiedene Gründe dafür geben, dass Ihre Seite nicht korrekt dargestellt wird.

                        </article>
                        <p className="ml-8 mt-6 w-3/4">
                            Unsere Website ist für moderne Browser wie Chrome, Firefox, Safari oder Edge optimiert,
                            und die Nutzung eines weniger verbreiteten oder älteren Browsers kann zu Problemen führen.
                        </p>
                        <p className="ml-8 mt-6 w-3/4">
                            Ein weiterer häufiger Grund sind veraltete Daten im Browser-Cache,
                            die eine fehlerhafte Anzeige verursachen können. Versuchen Sie daher, den Cache zu leeren.
                        </p>
                        <p className="ml-8 mt-6 w-3/4">
                            Stellen Sie bitte außerdem sicher, das Sie in Ihren Browser Scripte erlauben. Unsere Webseite verwendet viel Typescript und Javascript.
                        </p>
                    </div>
                </div>



                <div className={`${questActive3 ? activeSmallStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center duration-300`}>
                    <div onClick={() => activeHandler(3)} className="flex w-full items-center justify-between">
                        <p className="mobile:ml-0 tablet:ml-8 mobile:text-[1rem] tablet:text-[1.2rem] mobile:w-[80%] desktop:w-full">Kann ich mich von euch über eure Dienstleistungen beraten lassen?</p>

                        <div className="w-[9rem] h-[3rem] mobile:hidden desktop:flex mr-4 rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
                        <ArrowIcon className={`w-[1.5rem] mr-[1.5rem] fill-white ${questActive3 && "rotate-90"} duration-300 mobile:block desktop:hidden `} />
                    </div>
                    <div className="w-full flex flex-col text-[1rem] text-slate-400 p-4 justify-between">
                        <article className="ml-6 mt-4 w-3/4">
                            Selbstverständlich!
                        </article>
                        <p className="ml-8 mt-6 w-3/4">
                            Wir haben es uns zur Aufgabe gemacht, mit hochmodernen Technologien Software und Webseiten zu produzieren.
                            Jedes unserer Projekte durchläuft daher eine intensive Beratungs- und Planungsphase. Sie können über unser Kontaktformular
                            jederzeit mit uns Kontakt aufnehmen. Außerdem stehen wir Ihnen im Rahmen unserer Sprechzeiten auch telefonisch zur Verfügung.
                        </p>
                    </div>
                </div>



                <div className={`${questActive4 ? activeSmallStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center duration-300`}>
                    <div onClick={() => activeHandler(4)} className="flex w-full items-center justify-between">
                        <p className="mobile:ml-0 tablet:ml-8 mobile:text-[1rem] tablet:text-[1.2rem] mobile:w-[80%] desktop:w-full">Wann sind eure Sprechzeiten?</p>
                        <div className="w-[9rem] h-[3rem] mr-4 mobile:hidden desktop:flex rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
                        <ArrowIcon className={`w-[1.5rem] mr-[1.5rem] fill-white ${questActive4 && "rotate-90"} duration-300 mobile:block desktop:hidden `} />
                    </div>
                    <div className="w-full flex flex-col text-[1rem] text-slate-400 p-4 justify-between">
                        <article className="ml-6 mt-4 w-3/4">
                            Sprechzeiten
                        </article>
                        <div className="flex">
                            <p className="ml-8 mt-2 w-[5rem]">Montag</p>
                            <p className="ml-8 mt-2">08:00 - 17:00</p>
                        </div>
                        <div className="flex">
                            <p className="ml-8 mt-2 w-[5rem]">Dienstag</p>
                            <p className="ml-8 mt-2">08:00 - 17:00</p>
                        </div>
                        <div className="flex">
                            <p className="ml-8 mt-2 w-[5rem]">Mittwoch</p>
                            <p className="ml-8 mt-2">08:00 - 17:00</p>
                        </div>
                        <div className="flex">
                            <p className="ml-8 mt-2 w-[5rem]">Donnerstag</p>
                            <p className="ml-8 mt-2">08:00 - 17:00</p>
                        </div>
                        <div className="flex">
                            <p className="ml-8 mt-2 w-[5rem]">Freitag</p>
                            <p className="ml-8 mt-2">08:00 - 17:00</p>
                        </div>
                        <div className="flex">
                            <p className="ml-8 mt-2 w-[5rem]">Samstag</p>
                            <p className="ml-8 mt-2">10:00 - 12:00 (Nur nach Absprache)</p>
                        </div>
                        <div className="flex">
                            <p className="ml-8 mt-2 w-[5rem]">Sonntag</p>
                            <p className="ml-8 mt-2">Geschlossen</p>
                        </div>
                    </div>
                </div>




                <div className={`${questActive5 ? activeverySmallStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center duration-300`}>
                    <div onClick={() => activeHandler(5)} className="flex w-full items-center justify-between">
                        <p className="mobile:ml-0 tablet:ml-8 text-[1.2rem] mobile:w-[80%] desktop:w-full">Welche Technologien nutzt ihr zur Entwicklung?</p>
                        <div className="w-[9rem] h-[3rem] mr-4 mobile:hidden desktop:flex rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
                        <ArrowIcon className={`w-[1.5rem] mr-[1.5rem] fill-white ${questActive5 && "rotate-90"} duration-300 mobile:block desktop:hidden`} />
                    </div>
                    <div className="w-full flex flex-col text-[1rem] text-slate-400 p-4 justify-between">
                        <div className="w-full flex flex-col gap-6">
                            <div className="w-[13rem] p-5">
                                <article className="ml-6 mt-4">
                                    Backend
                                </article>
                                <p className="ml-8 mt-2">Node.js</p>
                                <p className="ml-8 mt-2">Express</p>
                                <p className="ml-8 mt-2">Next.js</p>
                                <p className="ml-8 mt-2">Fastify</p>
                            </div>

                            <div className="w-[13rem] p-5">
                                <article className="ml-6 mt-4">
                                    Frontend
                                </article>
                                <p className="ml-8 mt-2">React</p>
                                <p className="ml-8 mt-2">React Native</p>
                                <p className="ml-8 mt-2">Tailwind CSS</p>
                            </div>
                            <div className="w-[13rem] p-5">
                                <article className="ml-6 mt-4">
                                    Datenbanken
                                </article>
                                <p className="ml-8 mt-2">Mongo DB</p>
                                <p className="ml-8 mt-2">SQL</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={`${questActive6 ? activeStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center duration-300`}>
                    <div onClick={() => activeHandler(6)} className="flex w-full items-center justify-between">
                        <p className="mobile:ml-0 tablet:ml-8 mobile:text-[1rem] tablet:text-[1.2rem] mobile:w-[80%] desktop:w-full">Wie lange dauert der Entwicklungsprozess?</p>
                        <div className="w-[9rem] h-[3rem] mobile:hidden desktop:flex mr-4 rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
                        <ArrowIcon className={`w-[1.5rem] mr-[1.5rem] fill-white ${questActive6 && "rotate-90"} duration-300 mobile:block desktop:hidden`} />
                    </div>
                    <div className="w-full flex flex-col text-[1rem] text-slate-400 p-4 justify-between">
                        <article className="ml-6 mt-4 w-3/4">
                            Darauf gibt es leider keine allgemein gültige Antwort, da die Fertigstellung der App oder Webseite stark davon beeinflusst ist, wie umfangreich das Projekt ist.
                        </article>
                        <p className="ml-8 mt-6 w-3/4">
                            Eine einfache Onepage Webseite kann bereits in einer Woche aus der Konzeptions- und Planungsphase weiter in die Umsetzungsphase übergehen, welche bei diesen Umfang auch nach ungefähr einer Woche zum Abschluss kommt.
                        </p>
                        <p className="ml-8 mt-6 w-3/4">
                            Eine komplexe, nicht statische Webseite mit vielen Unterseiten dagegen kann schonmal mit Konzeption, Planung- und Umsetzungsphase 2-3 Monate in Anspruch nehmen.
                        </p>
                        <p className="ml-8 mt-6 w-3/4">
                            Da jedes Projekt bei uns mit einem intensiven Beratungsgespräch beginnt, können wir Ihnen auch anschließend diese Frage genauer beantworten.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}