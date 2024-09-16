import React from "react";

export const ContactForm = () => {

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
    if(textAreaRef.current!.value === ""){
      setCheck(false);
      setHTextBox(false);
    }
  }


  return (
  <div className="w-full flex flex-col mt-5 
  mobile:px-2 tablet:px-8 
  font-mono">
    <h1 className={`text-white mobile:text-[2rem] tablet:text-[2.3rem] laptop:text-[3rem] mobile:ml-[4rem] laptop:ml-[15rem] font-bold font-mono transition-all duration-700 ease-in-out ${check && "-translate-y-14"}`}>HELLO,</h1>
    <form id="form1" className="flex flex-col items-start">

    {/* MY NAME IS ______ */}
      <div className={`
        mobile:w-full

        flex mt-3 ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>

        <span className="text-white 

        mobile:w-full tablet:w-[65%] tablet-contact:ml-[3rem] laptop:ml-[10rem] mobile:text-[1.8rem] tablet:text-[2rem] laptop:text-[2.3rem]

        leading-none">MY <span className="bg-[#98f144] text-[#151515]">NAME</span> IS </span>

        <input name="namefield"  type="input" placeholder="Name*" className=" cursor-none

        mobile:w-full tablet:mr-[2rem] tablet-contact:mr-[5.5rem] laptop:mr-[6rem] laptop:w-[50rem] desktop:w-[60rem] 

        text-center bg-[#151515] text-[#98f144] border-b-2 leading-none
        placeholder-[#777777] "
        
        required
        />

      </div>

    {/* MY MAIL IS ______ */}
      <div className={`w-full flex mt-5 ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>

        <span className="text-white 
        
        mobile:w-full tablet:w-[65%]  tablet-contact:ml-[3rem] laptop:ml-[10rem] 
        mobile:text-[1.8rem] tablet:text-[2rem] laptop:text-[2.3rem] 
        
        leading-none">MY <span className="bg-[#98f144] text-[#151515]">MAIL</span> IS </span>
       
        <input name="emailfield" type="input" placeholder="Email*" className=" cursor-none

        mobile:w-full tablet:mr-[2rem] tablet-contact:mr-[5.5rem] laptop:mr-[6rem] laptop:w-[50rem] desktop:w-[60rem]

         text-center bg-[#151515] text-[#98f144] border-b-2 leading-none
        placeholder-[#777777] flex justify-center items-center "
        
        required
        />

      </div>

      <div className={`w-full flex mt-5 ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>

        <span className="text-white 
        
        mobile:w-full tablet:w-[65%]  tablet-contact:ml-[3rem] laptop:ml-[10rem] 
        mobile:text-[1.8rem] tablet:text-[2rem] laptop:text-[2.3rem] 
        
        leading-none">MY <span className="bg-[#98f144] text-[#151515]">FIRMA</span> IS </span>
       
        <input name="emailfield" type="input" placeholder="Firma" className=" cursor-none

        mobile:w-full tablet:mr-[2rem] tablet-contact:mr-[5.5rem] laptop:mr-[6rem] laptop:w-[50rem] desktop:w-[60rem]

         text-center bg-[#151515] text-[#98f144] border-b-2 leading-none
        placeholder-[#777777] flex justify-center items-center "
        />

      </div>

    {/* MY MESSAGE IS.. */}
      <div className={`w-full flex flex-col mt-5 transition-all duration-700 ease-in-out `}>

        <span className={`text-white 
          
          mobile:w-full tablet:w-[60%] mobile:text-[1.8rem] tablet-contact:ml-[3rem] tablet:text-[2rem] laptop:text-[2.3rem] laptop:ml-[10rem] 
          
          leading-none ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>MY <span className="bg-[#98f144] text-[#151515]">MESSAGE</span> IS.. </span>

    <div className="w-full flex justify-center items-center">
        <textarea placeholder="Message*" className={`

        mobile:w-full tablet:w-[65%] laptop:w-1/2 cursor-none

        text-center bg-[#151515] text-[#98f144] border-b-2 leading-none mt-6
        placeholder-[#777777] transition-all duration-700 ease-in-out p-2  ${check && "-translate-y-14"} ${hTextBox && "h-[8rem]"}`}
        onClick={() => messageHandler()} 
        onBlur={() =>blurHandler()}
        ref={textAreaRef}
        required
        />
      </div>
    </div>

    
    {/* BUTTON */}
      <div className="w-full flex justify-center mb-10 ">

      <button type="submit" className={`text-[#161616] select-none border-none bg-[#98f144] font-semibold py-2 px-4 mt-8 rounded-lg shadow-xl 
      hover:bg-[#6ba039] cursor-none font-mono transition duration-700 ease-in-out ${check && "-translate-y-12"}`}>
      Send Request
      </button>

      </div>
    </form>
  </div>
  );
};
