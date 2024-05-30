
type navbarProps = {

}

export const Navbar = () => {
 
    return(
        <div className="w-full mobile:h-[8rem] tablet:h-[10rem] flex justify-between duration-300">
            <div className="mobile:w-1/3 tablet:w-1/2 duration-300">
                <img 
                className="mobile:w-28 mobile:h-28 tablet:w-36 us tablet:h-36 duration-300"
                src="src\assets\logo.png" alt="logo graphic" />
            </div>



            <div className="mobile:w-[17rem] tablet:w-[30rem] flex justify-between items-center">
                <a className="flex justify-center items-center mobile:w-[5rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0.8rem] tablet:text-[1.2rem]  text-[#747474] border-[#202020] hover:text-white hover:border-2 hover:border-b-[#98f144] rounded-md duration-300" href="/">Start</a>
                <a className="flex justify-center items-center mobile:w-[5rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0.8rem] tablet:text-[1.2rem]  text-[#747474] border-[#202020] hover:text-white hover:border-2 hover:border-b-[#98f144] rounded-md duration-300" href="/">Company</a>
                <a className="flex justify-center items-center mobile:w-[5rem] tablet:w-[8rem] h-[2rem] mobile:mx-0.8 tablet:mx-2 font-mono tablet:font-semibold mobile:text-[0.8rem] tablet:text-[1.2rem]  text-[#747474] border-[#202020] hover:text-white hover:border-2 hover:border-b-[#98f144] rounded-md duration-300" href="/">Offer</a>
            </div>
        </div>
    )
}