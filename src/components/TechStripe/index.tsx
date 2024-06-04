import { DockerIcon, GithubIcon, JSIcon, ReactIcon, TSIcon, TailwindIcon } from "../Icons"

export const TechStripe = () => {
    return (
        <>
        <div className="w-full text-[#777777] mt-[10rem] font-mono flex justify-center items-center">
            <p>Best technologies for great products.</p>
        </div>
        <div className="w-full flex justify-center items-center">
                    <div className="w-full p-8 mt-4 gap-20 grid desktop:grid-rows-1 desktop:grid-cols-6
        tablet:grid-rows-2 tablet:grid-cols-3 mobile:grid-rows-3 mobile:grid-cols-2">


            <div className="flex flex-col justify-center group items-center">
                <ReactIcon className="w-12 h-12 fill-[#494949] duration-300 hover:fill-[#98f144]"></ReactIcon>
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
        </>
    )
}