

export const EmployeeCard = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full desktop:max-w-[70rem] items-center flex flex-col cursor-none duration-300  rounded-2xl p-6 justify-center font-mono gap-20 mt-[5%] border-white">

                {/* Left Side */}
                <div className="w-full flex tablet:flex-row group mobile:justify-center mobile:items-center mobile:flex-col-reverse ">
                    <div className="text-slate-200">
                        <p className="font-mono font-bold text-[2rem] text-[#98f144]">Hi, I'm Nils.</p>
                        Informatics has fascinated me ever since. I always wanted to understand how computers and programs work on them.
                        The world of the web, in particular, captivates me. Almost nothing is impossible, and the possibilities are becoming
                        increasingly diverse. Max and I met during our studies and decided to start a company together to realize our ideas and visions.
                        Whether it's large or small websites/web apps, consulting, bots, or AI interfaces, we are here for you.
                    </div>
                    <div className="p-8">

                        <img loading="lazy" className="min-w-[5rem] max-w-[15rem] grayscale group-hover:grayscale-0 group-hover:scale-110 duration-300  mobile:rounded-full mobile:mb-10 mobile:border-8 border-[#98f144]" src="nils.webp" alt="" />
                    </div>
                </div>


                {/* Right Side */}
                <div className="w-full flex tablet:flex-row group mobile:flex-col mobile:justify-center mobile:items-center">
                    <div className="p-8">
                        <img loading="lazy" className="min-w-[5rem] max-w-[15rem] grayscale group-hover:grayscale-0 group-hover:scale-110 duration-300  mobile:rounded-full mobile:mb-10 mobile:border-8 border-[#98f144]" src="max.webp" alt="" />
                    </div>
                    <div className="text-slate-200">
                        <p className="font-mono font-bold text-[2rem] text-[#98f144]">Hi, I'm Max.</p>
                        I am a passionate programmer and after my active service as a soldier I decided to study computer science and start my
                        own business in web and application development. I have a lot of experience in web applications and frontend development,
                        but I am also familiar with bot networks and interfaces for artificial intelligence. Be it React, Typescript, Java or C#.
                        We have extensive experience in various front- and back-end technologies and have programmed everything from small web applications
                        or websites to cooperative app development projects with the healthcare sector.
                    </div>
                    
                </div>
               
            </div>
        </div>
    )
}