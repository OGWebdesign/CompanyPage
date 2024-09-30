

export const ProblemContent = (props: {
    aboutUsLink?: () => void,
    requestLink?: () => void,
    mailLink?: () => void,
    imprintLink?: () => void,
    dataSecureLink?: () => void,
}) => {
    return (
        //Wrapper
        <div className="w-full flex justify-center items-center ">
            <div className="full flex-col mobile:h-[150rem] tablet:h-[110rem] laptop:h-[100rem] desktop:h-[90rem] desktop-l:h-[80rem] animate-zeptaEffect overflow-hidden rounded-2xl text-white font-sharemono text-[2rem] font-bold flex items-center">
                {/**Headline and Title */}
                <div className="max-w-[100rem]">
                    <div className="w-full tablet:p-8 mobile:p-2">
                        <p className="mobile:text-[1.5rem]">Unterstützung bei der Navigation</p>
                        <p className="text-[1rem] tablet:w-3/4 mobile:w-full pt-4 font-normal text-slate-300">Sie finden hier den gesamten Inhalt unserer Webseite im Überblick.
                            Links steht der Title und die dazugehörige Beschreibung und Rechts ist der Knopf, der Sie zu der von Ihnen gewünschten Seite bringt. Auf den Knopf ganz unten gelangen Sie wieder zurück zur Startseite.
                        </p>
                    </div>

                    {/**Selections */}
                    <div className="w-full tablet:p-8 mobile:p-2 tablet:mt-5 mobile:mt-10 flex justify-center items-center tablet:flex-row mobile:flex-col">
                        <div className="w-full flex flex-col">
                            <span className="text-[#88ff27]">Über uns</span>
                            <p className="text-[1rem] w-3/4 pt-4 font-normal text-slate-300">Auf dieser Seite stellen wir uns kurz vor bei Ihnen. Hier erhalten Sie einen Ersteindruck von uns.</p>
                        </div>
                        <div onClick={props.aboutUsLink} className="tablet:w-[15rem] mobile:w-[10rem] h-[3rem] mobile:mt-8 tablet-mt-0 hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] laptop:mr-[10rem] flex justify-center items-center rounded-2xl">
                            <p className="text-[1rem] text-black  font-semibold ">Über uns</p>
                        </div>
                    </div>
                    <div className="w-full tablet:p-8 mobile:p-2 tablet:mt-5 mobile:mt-10 flex justify-center items-center tablet:flex-row mobile:flex-col">
                        <div className="w-full flex flex-col">
                            <span className="text-[#88ff27]">Anfrage</span>
                            <p className="text-[1rem] w-3/4 pt-4 font-normal text-slate-300">Hier können Sie uns die Art Ihrer gewünschten Dienstleistung, die höhe Ihres vorhandenen Budget´s und Details über Ihrer Projektidee oder ein spezifisches Problem, welches mit hilfe von Software zu lösen gilt mitteilen. Wir melden uns dann schnellstmöglich bei Ihnen.</p>
                        </div>
                        <div onClick={props.requestLink} className="tablet:w-[15rem] mobile:w-[10rem] h-[3rem] mobile:mt-8 tablet-mt-0 hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] laptop:mr-[10rem] flex justify-center items-center rounded-2xl">
                            <p className="text-[1rem] text-black  font-semibold ">Anfrage</p>
                        </div>

                    </div>
                    <div className="w-full tablet:p-8 mobile:p-2 tablet:mt-5 mobile:mt-10 flex justify-center items-center tablet:flex-row mobile:flex-col">
                        <div className="w-full flex flex-col">
                            <span className="text-[#88ff27]">Email</span>
                            <p className="text-[1rem] w-3/4 pt-4 font-normal text-slate-300">Auf der Seite Email können Sie uns ganz allgemeine Fragen über unsere Dienstleistungen stellen. Hier können wir Sie auch beraten falls Sie noch nicht genau wissen, welche Dienstleistung Ihnen helfen könnte.</p>
                        </div>
                        <div onClick={props.mailLink} className="tablet:w-[15rem] mobile:w-[10rem] h-[3rem] mobile:mt-8 tablet-mt-0 hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] laptop:mr-[10rem] flex justify-center items-center rounded-2xl">
                            <p className="text-[1rem] text-black  font-semibold ">Email</p>
                        </div>

                    </div>
                    <div className="w-full tablet:p-8 mobile:p-2 tablet:mt-5 mobile:mt-10 flex justify-center items-center tablet:flex-row mobile:flex-col">
                        <div className="w-full flex flex-col">
                            <span className="text-[#88ff27]">Impressum</span>
                            <p className="text-[1rem] w-3/4 pt-4 font-normal text-slate-300">Im Impressum stehen alle für Sie wichtigen Informationen von uns bereit. Hier finden Sie Telefonnummer, Emailadresse und Anschrift.</p>
                        </div>
                        <div onClick={props.imprintLink} className="tablet:w-[15rem] mobile:w-[10rem] h-[3rem] mobile:mt-8 tablet-mt-0 hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] laptop:mr-[10rem] flex justify-center items-center rounded-2xl">
                            <p className="text-[1rem] text-black  font-semibold ">Impressum</p>
                        </div>

                    </div>

                    <div className="w-full tablet:p-8 mobile:p-2 tablet:mt-5 mobile:mt-10 flex justify-center items-center tablet:flex-row mobile:flex-col">
                        <div className="w-full flex flex-col">
                            <span className="text-[#88ff27]">Datenschutz</span>
                            <p className="text-[1rem] w-3/4 pt-4 font-normal text-slate-300">Bei der Datenschutzseite handelt es sich um eine Auflistung aller rechtskräftigen Informationen über Daten, Cookies und Drittanbieterrichtlinien.</p>
                        </div>
                        <div onClick={props.dataSecureLink} className="tablet:w-[15rem] mobile:w-[10rem] mobile:w-[10rem] h-[3rem] mobile:mt-8 tablet-mt-0 hover:bg-[#52cc34] hover:scale-110 duration-300 bg-[#88ff27] laptop:mr-[10rem] flex justify-center items-center rounded-2xl">
                            <p className="text-[1rem] text-black  font-semibold ">Datenschutz</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}