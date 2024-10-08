import { CssIcon, DockerIcon, FigmaIcon, GithubIcon, HaskellIcon, HtmlIcon, JSIcon, JavaIcon, NodeIcon, ReactIcon, TSIcon, TailwindIcon } from "../Icons"
import { useTypewriter } from "react-simple-typewriter";



export const TechStripe = () => {
    const [typeEffect] = useTypewriter({
        words:[' Git   ', ' NodeJS   ', ' Docker   ', ' React   ', 
            ' Java   ', ' C#   ', ' Haskell   ', ' Python   ', ' Html   ',
        ' Css   ', ' Typescript   ', ' Javascript   ', ' Sass   ', ' MongoDB   ', ' Tailwind   '],
        typeSpeed: 180,
        loop:true ,
        delaySpeed: 100,
        

      });
    return (
        <>
            <div className="w-full  text-[#b9b9b9] mb-[5%] h-[4rem] select-none font-mono flex justify-center items-center">
                <p>verwendete Technologien:<br></br> <span className="text-[#98f144] text-[1.2rem]">{typeEffect}</span></p>
            </div>
            <div className="w-full flex flex-col justify-center items-center select-none">
                <div className="w-full max-w-[100rem] p-8 mt-4 gap-20 grid desktop:grid-rows-1 desktop:grid-cols-6 tablet:grid-rows-2 tablet:grid-cols-3 mobile:grid-rows-3 mobile:grid-cols-2">


                    <div className="flex flex-col justify-center group items-center">
                        <ReactIcon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></ReactIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">React</p>
                    </div>



                    <div className="flex flex-col justify-center group items-center">
                        <GithubIcon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></GithubIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Git</p>
                    </div>


                    <div className="flex flex-col justify-center group items-center">
                        <DockerIcon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></DockerIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Docker</p>
                    </div>

                    <div className="flex flex-col justify-center group items-center">
                        <TSIcon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></TSIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Typescript</p>
                    </div>

                    <div className="flex flex-col justify-center group items-center">
                        <JSIcon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></JSIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Javascript</p>
                    </div>

                    <div className="flex flex-col group justify-center items-center">
                        <TailwindIcon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></TailwindIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Tailwind</p>
                    </div>
                </div>



            </div>
            <div className="w-full flex flex-col justify-center items-center select-none">
                <div className="w-full p-8 mt-4 max-w-[100rem] gap-20 grid desktop:grid-rows-1 desktop:grid-cols-6 tablet:grid-rows-2 tablet:grid-cols-3 mobile:grid-rows-3 mobile:grid-cols-2">


                    <div className="flex flex-col justify-center group items-center">
                        <HaskellIcon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></HaskellIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Haskell</p>
                    </div>



                    <div className="flex flex-col justify-center group items-center">
                        <JavaIcon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></JavaIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Java</p>
                    </div>


                    <div className="flex flex-col justify-center group items-center">
                        <NodeIcon className="w-12 h-12 scale-125 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></NodeIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">NodeJS</p>
                    </div>

                    <div className="flex flex-col justify-center group items-center">
                        <CssIcon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></CssIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Css</p>
                    </div>

                    <div className="flex flex-col justify-center group items-center">
                        <HtmlIcon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></HtmlIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Html5</p>
                    </div>

                    <div className="flex flex-col group justify-center items-center">
                        <FigmaIcon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"></FigmaIcon>
                        <p className="text-[#777777] mt-4 duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Figma</p>
                    </div>
                </div>

            </div>
        </>
    )
}