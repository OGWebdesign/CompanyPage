import { useState } from "react"

export const Navbar = () => {
    // state for animation
    const [visible, setVisible] = useState(false) // state for Nav Bar scroll out effect

    // tailwind css for visible style sheet
    const visibleStyle = "h-[20rem]"
    // tailwind css for notvisible style sheet
    const notVisibleStyle = "h-0"

    // start component build
    return (
        // Navbar extansion for scroll out (scroll out wrapper) <-- auto hight
        <div className="w-full duration-300 flex flex-col ">

            {/* Navbar Item Wrapper */}
            <div className="w-full flex justify-between duration-300">

               {/* Navbar Logo Wrapper */}
                <div className="tablet:w-1/2 duration-300">

                    {/* Navbar Logo */}
                    <img
                        className="mobile:w-28 mobile:h-28 tablet:w-36 us tablet:h-36 duration-300"
                        src="src\assets\logo.png" alt="logo graphic" />
                </div>


                {/* Navbar Item Layout */}
                <div className="mobile:w-[7rem] tablet:w-[30rem] desktop:w-[40rem] flex justify-between items-center">
                    
                    {/* Navbar Item I */}
                    <a className="flex justify-center items-center mobile:w-[0rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                    mobile:opacity-0 desktop:opacity-100 text-[#747474] border-[#202020] hover:text-white hover:border-2 hover:border-b-[#98f144] rounded-md duration-300" href="/">Start</a>
                    
                    {/* Navbar Item II */}
                    <a className="flex justify-center items-center mobile:w-[0rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                    mobile:opacity-0 desktop:opacity-100 text-[#747474] border-[#202020] hover:text-white hover:border-2 hover:border-b-[#98f144] rounded-md duration-300" href="/">Company</a>
                    
                    {/* Navbar Item III */}
                    <a className="flex justify-center items-center mobile:w-[0rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0rem] tablet:text-[0rem] desktop:text-[1.2rem]
                     mobile:opacity-0 desktop:opacity-100 text-[#747474] border-[#202020] hover:text-white hover:border-2 hover:border-b-[#98f144] rounded-md duration-300" href="/">Offer</a>

                    {/* Burger Menu Button */}
                    <div onClick={()=>setVisible(!visible)} className="w-16 h-16 rounded-xl duration-300 mobile:opacity-100 tablet:opacity-100 desktop:opacity-0 flex justify-center items-center hover:cursor-pointer ">
                        <img className="w-8 h-8 tablet:w-8 tablet:h-8" src="src/assets/house-solid.svg" alt="Menu Icon. Push for scroll menu scroll out" />
                    </div>
                </div>
            </div>


            {/* Croll Bar Wrapper */}
            <div className={`w-full mobile:opacity-100 tablet:opacity-100 desktop:opacity-0 desktop:h-0 flex flex-col justify-center items-center ${visible ? visibleStyle:notVisibleStyle} duration-300 bg-[#202020]`}>
                 {/* Croll Bar Item I */}
                <a className="my-5 mr-3 text-[#747474]  font-mono font-bold text-[1.2rem] hover:text-[#98f144] overflow-hidden"
                 href="/"> Start</a>
                 {/* Croll Bar Item II */}
                <a className="my-5 mr-3 text-[#747474]  font-mono font-bold text-[1.2rem] hover:text-[#98f144] overflow-hidden"
                 href="/">Company</a>
                 {/* Croll Bar Item III */}
                <a className="my-5 mr-3 text-[#747474]  font-mono font-bold text-[1.2rem] hover:text-[#98f144] overflow-hidden"
                 href="/">Offer</a> 
            </div>
        </div> // End
    )
}