export const DynamicContentCard = () => {
    const websiteText = "";
    const devOpsText = "";
    const appDevelopmentText = "";
    const artificalIntelligentText = "";
    return (
        <div className="w-full  flex justify-center items-center">
            <div className="w-[85%]  bg-[#0c0c0c] bg-opacity-[50%] backdrop-blur-3xl border rounded-3xl flex shadow-[0_20px_50px_rgba(8,_100,_184,_0.7)]" >
                {/**selector screen */}
                <div className="w-[35%] rounded-l-3xl bg-[#080808] h-full flex flex-col">
                    <div className="w-full group h-[4rem] rounded-tl-3xl flex items-center justify-between">
                        <p className="text-[1.4rem] font-sharemono text-white pl-6">
                            Webseiten
                        </p>
                        <div className="w-[0.5rem] h-full duration-200 group-hover:bg-[#98f144]"></div>
                    </div>
                    <div className="w-full group h-[4rem] my-4 flex items-center justify-between">
                        <p className="text-[1.4rem] font-sharemono text-white pl-6">
                            DevOps &  Admin
                        </p>
                        <div className="w-[0.5rem] h-full duration-200 group-hover:bg-[#98f144]"></div>
                    </div>
                    <div className="w-full group h-[4rem] my-4 flex items-center justify-between">
                        <p className="text-[1.4rem] font-sharemono text-white pl-6">
                            Anwendungsentwicklung
                        </p>
                        <div className="w-[0.5rem] h-full duration-200 group-hover:bg-[#98f144]"></div>
                    </div>
                    <div className="w-full group h-[4rem] mt-4 rounded-bl-3xl flex items-center justify-between">
                        <p className="text-[1.4rem] font-sharemono text-white pl-6">
                            K.I.
                        </p>
                        <div className="w-[0.5rem] h-full duration-200 group-hover:bg-[#98f144]"></div>
                    </div>
                </div>
                <div className="w-[65%] h-full flex justify-center items-center">

                </div>
            </div>
        </div>
    );
}