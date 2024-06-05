import React from "react";

export const ContactFormMobile = () => {

  const [check, setCheck] = React.useState<boolean>(false);
  const [hTextBox, setHTextBox] = React.useState<boolean>(false);

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const messageHandler = () => {
      setCheck(true);
      setTimeout(() => {
        setHTextBox(true); 
      }, 230);
  }

  const blurHandler = () => {
    if(textAreaRef.current?.value === ""){
      setCheck(false);
      setHTextBox(false);
    }
  }


  return (
  <div className="w-full flex flex-col mt-5 px-2 font-mono">
    <h1 className={`text-white text-[2rem] mobile:ml-[4rem] font-bold font-mono transition-all duration-700 ease-in-out ${check && "-translate-y-14"}`}>HELLO,</h1>
    <form className="flex flex-col justify-center items-start">

    {/* MY NAME IS ______ */}
      <div className={`w-full flex mt-3 ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>

        <span className="text-white w-full text-[1.8rem] leading-none">MY <span className="bg-[#98f144] text-[#151515]">NAME</span> IS </span>

        <input type="input" placeholder="Name" className="w-full text-center bg-[#151515] text-[#98f144] border-b-2 leading-none
        placeholder-[#777777] "/>

      </div>

    {/* MY MAIL IS ______ */}
      <div className={`w-full flex mt-5 ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>

        <span className="text-white w-full text-[1.8rem] leading-none">MY <span className="bg-[#98f144] text-[#151515]">MAIL</span> IS </span>
       
        <input type="input" placeholder="Email" className="w-full text-center bg-[#151515] text-[#98f144] border-b-2 leading-none
        placeholder-[#777777] flex justify-center items-center "/>

      </div>

    {/* MY MESSAGE IS.. */}
      <div className={`w-full flex flex-col mt-5 transition-all duration-700 ease-in-out `}>

        <span className={`text-white w-full text-[1.8rem] leading-none ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>MY <span className="bg-[#98f144] text-[#151515]">MESSAGE</span> IS.. </span>
        
        <textarea placeholder="Message" className={`w-full text-center bg-[#151515] text-[#98f144] border-b-2 leading-none mt-6
        placeholder-[#777777] transition-all duration-700 ease-in-out p-2  ${check && "-translate-y-14"} ${hTextBox && "h-[8rem]"}`}
        onClick={() => messageHandler()} 
        onBlur={() =>blurHandler()}
        ref={textAreaRef}/>

      </div>

    {/* BUTTON */}
      <div className="w-full flex justify-center mb-10 ">
      <button type="submit" className={`text-[#161616] select-none border-none bg-[#98f144] font-semibold py-2 px-4 mt-5 rounded-lg shadow-xl 
      hover:bg-[#6ba039] cursor-pointer font-mono transition duration-700 ease-in-out ${check && "-translate-y-12"}`}
      >Send Request</button>
      </div>
    </form>
  </div>
  );
};
