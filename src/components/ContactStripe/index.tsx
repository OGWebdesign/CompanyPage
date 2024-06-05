import { Number1Icon, Number2Icon, Number3Icon } from "./Icons"

export const ContactStripe = () => {
    return(
        
        <>
        {/* Heading */}
        <div className="tablet:w-full px-5 text-[#777777] mt-[10rem] text-center select-none font-mono flex justify-center items-center">
            <p>What is happening when you contact us.</p>
        </div>
        {/* Items with description */}
        <div className="w-full flex justify-center items-center select-none">
                    <div className="w-full p-8 mt-4 gap-20 grid desktop:grid-rows-1 desktop:grid-cols-3
        tablet:grid-rows-1 tablet:grid-cols-3 mobile:grid-rows-3 mobile:grid-cols-1 place-content-center mobile:place-items-center 
        tablet:place-items-start">

        {/* ITEM I */}
            <div className="flex flex-col justify-center group items-center">
                <Number1Icon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"/>
                <p className="text-[#777777] pt-4 mobile:w-[70%] tablet:w-full duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Send your request to our team and we receive an email.</p>
            </div>


        {/* ITEM II */}
            <div className="flex flex-col justify-center group items-center">
                <Number2Icon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"/>
                <p className="text-[#777777] pt-4 mobile:w-[70%] tablet:w-full duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">Our team will check your request and will contact you.</p>
            </div>

        {/* ITEM III */}
            <div className="flex flex-col justify-start group items-center">
                <Number3Icon className="w-12 h-12 fill-[#494949] duration-300 group-hover:fill-[#98f144]"/>
                <p className="text-[#777777] pt-4 mobile:w-[60%] tablet:w-full duration-1000 opacity-0 group-hover:opacity-100 text-center font-mono flex justify-center items-center">The work on your project will start and your project gets reality.</p>
            </div>
        </div>
        </div>
        </>
    )
}
    
