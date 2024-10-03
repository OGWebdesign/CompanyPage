import { useState } from "react";






export const RequestContent = () => {

    const [questActive1, setQuestActive1] = useState(false);
    const [questActive2, setQuestActive2] = useState(false);
    const [questActive5, setQuestActive5] = useState(false);
    const [questActive6, setQuestActive6] = useState(false);
    const [questActive7, setQuestActive7] = useState(false);
    const [questActive8, setQuestActive8] = useState(false);
    const inactiveStyleSheet = "h-[5rem]";
    const activeStyleSheet = "h-[30rem]";

    return (
        <div className="w-full flex-col h-[65rem] animate-zeptaEffect overflow-hidden text-white font-sharemono text-[2rem] font-bold rounded-2xl flex items-center ">
            <div className="max-w-[100rem]">

                <div className={`${questActive1 ? activeStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center duration-300`}>
                    <div onClick={() => setQuestActive1(!questActive1)} className="flex w-full items-center justify-between">
                        <p className="ml-8 text-[1.2rem]">Wie kann ich Kontakt zu euch aufnehmen?</p>
                        <div className="w-[9rem] h-[3rem] mr-4 rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
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


                <div className={`${questActive2 ? activeStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center duration-300`}>
                    <div onClick={() => setQuestActive2(!questActive2)} className="flex w-full items-center justify-between">
                        <p className="ml-8 text-[1.2rem]">Warum wird die Seite nicht korrekt geladen oder angezeigt?</p>
                        <div className="w-[9rem] h-[3rem] mr-4 rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
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



                <div className={`${questActive5 ? activeStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center duration-300`}>
                    <div onClick={() => setQuestActive5(!questActive5)} className="flex w-full items-center justify-between">
                        <p className="ml-8 text-[1.2rem]">Kann ich mich von euch über eure Dienstleistungen beraten lassen?</p>
                        
                        <div className="w-[9rem] h-[3rem] mr-4 rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
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



                <div className={`${questActive6 ? activeStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center duration-300`}>
                    <div onClick={() => setQuestActive6(!questActive6)} className="flex w-full items-center justify-between">
                        <p className="ml-8 text-[1.2rem]">Wann sind eure Sprechzeiten?</p>
                        <div className="w-[9rem] h-[3rem] mr-4 rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
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




                <div className={`${questActive7 ? activeStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center duration-300`}>
                    <div onClick={() => setQuestActive7(!questActive7)} className="flex w-full items-center justify-between">
                        <p className="ml-8 text-[1.2rem]">Welche Technologien nutzt ihr zur Entwicklung?</p>
                        <div className="w-[9rem] h-[3rem] mr-4 rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
                    </div>
                </div>



                <div className={`${questActive8 ? activeStyleSheet : inactiveStyleSheet} w-full p-4 overflow-hidden flex flex-col items-center duration-300`}>
                    <div onClick={() => setQuestActive8(!questActive8)} className="flex w-full items-center justify-between">
                        <p className="ml-8 text-[1.2rem]">Wie lange dauert der Entwicklungsprozess?</p>
                        <div className="w-[9rem] h-[3rem] mr-4 rounded-2xl hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] flex justify-center items-center">
                            <p className="text-[1.2rem] text-black">Antwort</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}