


export const Helpcenter = () => {

    return(
        // Layoutwrapper
        <div className="w-full flex justify-center items-center flex-col bg-black">
            <div className="pl-[5%] font-sharemono mt-[10%]">
                <p className="font-bold text-white text-[3rem]">Willkommen im Hilfecenter</p>
                <p className="w-1/2 text-slate-300 text-[1.2rem]">Haben Sie Schwierigkeiten sich zurecht zu finden oder benötigen Sie Hilfe bei einer Anfrage ? Kein Problem! Hier finden Sie eine Übersicht zur Navigation oder Unterstützung bei Ihrer Anfrage.</p>
            </div>

            {/*Begin Helpcenter*/}
            <div className="h-[40rem] w-full flex justify-center items-center animate-fadeIn">
                <div className="w-[50rem] h-[30rem] text-[2rem] text-white font-sharemono border rounded-2xl flex justify-center items-center">
                    Helpcenter Prototyp
                </div>
            </div>
        </div>
    );
}