
export const EmployeeCard = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full desktop:max-w-[70rem] items-center flex flex-col cursor-none duration-300  rounded-2xl p-6 justify-center font-mono gap-20 mt-[5%] border-white">

                {/* Left Side */}
                <div className="w-full flex tablet:flex-row group mobile:justify-center mobile:items-center mobile:flex-col-reverse ">
                    <div className="text-slate-200">
                        <p className="font-mono font-bold text-[2rem]">Hi</p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sint dolorum officiis tenetur, rerum, voluptate facilis nostrum iste perspiciatis quasi quas quo excepturi mollitia atque consequuntur, similique odit itaque eaque.
                        Dolorum labore ex minima beatae illo blanditiis animi inventore, eaque molestiae dignissimos recusandae adipisci minus eius repellendus accusamus. Dicta dignissimos aliquid tenetur modi eius voluptatem ab animi iusto a soluta?
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
                        <p className="font-mono font-bold text-[2rem]">Hi</p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem iusto perspiciatis officiis quisquam id dignissimos asperiores. Sed repudiandae velit totam non dicta dolores sunt labore distinctio. Molestiae consectetur sunt omnis?
                        Reiciendis odio temporibus earum eos obcaecati pariatur eligendi quam, dolorem, illum quas sint rerum ullam fuga corrupti doloremque, molestias reprehenderit nemo ipsa autem ad recusandae. Id maxime asperiores non soluta!
                    </div>

                </div>
            </div>
        </div>
    )
}