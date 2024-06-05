import {FacebookIcon, InstagramIcon, PinterestIcon } from "../Icons"

export const Footer = () => {
    return (
        <>
            <div className="w-full flex flex-col border font-mono text-slate-200 p-10 mobile:p-4 bg-slate-200 mobile:rounded-t-xl rounded-t-2xl mt-[10%]">
                <article className="desktop:text-[7rem] tablet:text-[4rem] mobile:text-[2rem]  inline-block text-[#151515] leading-none">
                    YOUR IDEA
                </article>


                <article className="desktop:text-[7rem] tablet:text-[4rem] mobile:text-[2rem] inline-block text-[#151515] leading-none">DESERVES BETTER.</article>
                <div className="w-full flex items-center">

                    <article className="desktop:text-[7rem] tablet:text-[4rem] mobile:text-[2rem]  desktop:w-[50rem] tablet:w-[35rem] mobile:w-[13rem] inline-block bg-[#98f144] text-[#151515] leading-none">TALK TO US! </article>
                    <a className="desktop:w-[13rem] tablet:w-[8rem] tablet:h-[3rem] desktop:h-[4rem] desktop:text-[2rem] mobile:w-[6rem] mobile:h-[2rem] mobile:rounded-lg mobile:ml-[1rem] mobile:text-[1rem] font-mono ml-[2rem] duration-300 border-[#151515] mobile:hover:border-2 desktop:hover:border-4 hover:bg-[#98f144] hover:font-bold hover:text-[#151515] rounded-2xl bg-[#151515] flex justify-center items-center" href="">
                        Lets talk
                    </a>
                </div>


                <div className="w-full flex font-mono font-semibold text-[#151515] mt-[3%] duration-300  items-center">
                    <div className="w-1/2 flex desktop:gap-10 tablet:gap-6 mobile:gap-4 justify-start" >
                        <a className="inline-block hover:bg-[#98f144] duration-300 hover:font-bold" href="">Imprint</a>
                        <a className="inline-block hover:bg-[#98f144] duration-300 hover:font-bold" href="">Privacy</a>
                        <a className="inline-block hover:bg-[#98f144] duration-300 hover:font-bold" href="/contact">Contact</a>
                    </div>
                    <div className="w-1/2 flex desktop:gap-8 tablet:gap-6 mobile:gap-4 items-center justify-end">
                        <p className="inline-block bg-[#98f144] mobile:opacity-0 ">Social Media</p>
                        <FacebookIcon className="desktop:w-9 desktop:h-9 tablet:w-6 tablet:h-6  hover:cursor-pointer duration-300  hover:border-[#151515] hover:border:2 hover:fill-[#98f144] p-"></FacebookIcon>
                        <InstagramIcon className="desktop:w-9 desktop:h-9 tablet:w-6 tablet:h-6  hover:cursor-pointer d0ration-300  hover:border-[#151515] hover:border:2 hover:fill-[#98f144] p-"></InstagramIcon>
                        <PinterestIcon className="desktop:w-9 desktop:h-9 tablet:w-6 tablet:h-6  hover:cursor-pointer duration-300  hover:border-[#151515] hover:border:2 hover:fill-[#98f144] p-"></PinterestIcon>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 text-[#151515] bg-slate-200 flex font-mono font-semibold justify-center items-center">
                    <p>©2024 OG-Webdesing</p>
                </div>
        </>
    )
}