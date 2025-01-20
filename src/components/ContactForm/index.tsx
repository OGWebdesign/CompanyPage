import axios from "axios";
import React, { useState } from "react";

export const ContactForm = () => {

  const [check, setCheck] = React.useState<boolean>(false);
  const [hTextBox, setHTextBox] = React.useState<boolean>(false);

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [noName, setNoName] = useState<boolean>(false);
  const [noEmail, setNoEmail] = useState<boolean>(false);
  const [noPhone, setNoPhone] = useState<boolean>(false);
  const [noMessage, setNoMessage] = useState<boolean>(false);



  const [send, setSend] = useState<boolean>(false);
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [firstAnimation, setFirstAnimation] = useState<boolean>(false);

  const messageHandler = () => {
    setCheck(true);
    setTimeout(() => {
      setHTextBox(true);
    }, 230);
  }

  const blurHandler = () => {
    if (textAreaRef.current!.value === "") {
      setCheck(false);
      setHTextBox(false);
    }
  }

  const handleSubmit = async () => {
    setSend(true);
    if (!name || !email || !phone || !message) {
      alert("Bitte fülle alle Felder aus!");
      if (!name) setNoName(true);
      if (!email) setNoEmail(true);
      if (!phone) setNoPhone(true);
      if (!message) setNoMessage(true);
      setSend(false);
      return;
    }
    await axios.post('https://og-api-mu.vercel.app/contact/send-email', { name, email, company, phone, message })
      .then(() => {

          setFirstAnimation(true);


          setSendSuccess(true);

        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setMessage("");
        setSend(false);
        setSendSuccess(false);
        setFirstAnimation(false);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
        alert("Fehler beim Senden der Nachricht. Bitte versuche es erneut.");
        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setMessage("");
        setSend(false);
        setSendSuccess(false);
      });
  }


  return (
    <div className="w-full mt-[5rem]">

      {/* SUCCESS WINDOW*/}
      <div className={`w-[45rem] h-[15rem] bg-[#000000]  font-sharemono absolute bottom-[10%] ${sendSuccess ? "animate-flyoffscreen block" : "hidden"} ${firstAnimation ? "animate-fadeIn" : ""} z-50 flex justify-center items-center rounded-xl`}>
        <span className="text-[#98f144] text-[3rem] text-center">
          Nachricht erfolgreich gesendet!
        </span>
      </div>


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

        leading-none">MY <span className={` text-[#151515] ${noName ? "bg-red-500" : "bg-[#98f144]"} duration-300`}>NAME</span> IS </span>

                <input name="name" value={name} type="input" placeholder="Name*" className={` cursor-none

        mobile:w-full tablet:mr-[2rem] tablet-contact:mr-[5.5rem] laptop:mr-[6rem] laptop:w-[50rem] desktop:w-[60rem] 

        text-center bg-[#151515] text-[#98f144] border-b-2 leading-none 
        placeholder-[#777777] ${noName ? "border-red-500" : ""} duration-300 `}

                  required

                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    if(e.currentTarget.value){
                      setNoName(false);
                    } else {
                      setNoName(true);
                    }
                    setName(e.currentTarget.value);
                  }}
                />

              </div>










              {/* MY MAIL IS ______ */}
              <div className={`w-full flex mt-5 ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>

                <span className="text-white 
        
        mobile:w-full tablet:w-[65%]  tablet-contact:ml-[3rem] laptop:ml-[10rem] 
        mobile:text-[1.8rem] tablet:text-[2rem] laptop:text-[2.3rem] 
        
        leading-none">MY <span className={` text-[#151515] duration-300 ${noEmail ? "bg-red-500" : "bg-[#98f144]"}`}>MAIL</span> IS </span>

                <input name="email" value={email} type="input" placeholder="Email*" className={` cursor-none

        mobile:w-full tablet:mr-[2rem] tablet-contact:mr-[5.5rem] laptop:mr-[6rem] laptop:w-[50rem] desktop:w-[60rem]

         text-center bg-[#151515] text-[#98f144] border-b-2 leading-none
        placeholder-[#777777] flex justify-center items-center duration-300 ${noEmail ? "border-red-500" : ""} `}

                  required

                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    if(e.currentTarget.value){
                      setNoEmail(false);
                    } else {
                      setNoEmail(true);
                    }
                    setEmail(e.currentTarget.value);
                  }}
                />

              </div>

              <div className={`w-full flex mt-5 ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>

                <span className="text-white 
        
        mobile:w-full tablet:w-[65%]  tablet-contact:ml-[3rem] laptop:ml-[10rem] 
        mobile:text-[1.8rem] tablet:text-[2rem] laptop:text-[2.3rem] 
        
        leading-none">MY <span className="bg-[#98f144] text-[#151515]">FIRM</span> IS </span>

                <input name="company" value={company} type="input" placeholder="Firma" className=" cursor-none

        mobile:w-full tablet:mr-[2rem] tablet-contact:mr-[5.5rem] laptop:mr-[6rem] laptop:w-[50rem] desktop:w-[60rem]

         text-center bg-[#151515] text-[#98f144] border-b-2 leading-none
        placeholder-[#777777] flex justify-center items-center "

                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    setCompany(e.currentTarget.value);
                  }}
                />

              </div>


              <div className={`w-full flex mt-5 ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>

                <span className="text-white 
        
        mobile:w-full tablet:w-[65%]  tablet-contact:ml-[3rem] laptop:ml-[10rem] 
        mobile:text-[1.8rem] tablet:text-[2rem] laptop:text-[2.3rem] 
        
        leading-none">MY <span className={`text-[#151515] duration-300 ${noPhone ? "bg-red-500" : "bg-[#98f144]"}`}>PHONE</span> IS </span>

                <input name="phone" value={phone} type="input" placeholder="Telefon*" className={` cursor-none

        mobile:w-full tablet:mr-[2rem] tablet-contact:mr-[5.5rem] laptop:mr-[6rem] laptop:w-[50rem] desktop:w-[60rem]

         text-center bg-[#151515] text-[#98f144] border-b-2 leading-none
        placeholder-[#777777] flex justify-center items-center duration-300 ${noPhone ? "border-red-500" : ""} `}

                  required

                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    if(e.currentTarget.value){
                      setNoPhone(false);
                    } else {
                      setNoPhone(true);
                    }
                    setPhone(e.currentTarget.value);
                  }}
                />

              </div>

              {/* MY MESSAGE IS.. */}
              <div className={`w-full flex flex-col mt-5 transition-all duration-700 ease-in-out `}>

                <span className={`text-white 
          
          mobile:w-full tablet:w-[60%] mobile:text-[1.8rem] tablet-contact:ml-[3rem] tablet:text-[2rem] laptop:text-[2.3rem] laptop:ml-[10rem] 
          
          leading-none ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>MY <span className={` text-[#151515] duration-300 ${noMessage ? "bg-red-500" : "bg-[#98f144]"}`}>MESSAGE</span> IS.. </span>

                <div className="w-full flex justify-center items-center">
                  <textarea placeholder="Nachricht*" name="message" className={`

        mobile:w-full tablet:w-[65%] laptop:w-1/2 cursor-none

        text-center bg-[#151515] text-[#98f144] border-b-2 leading-none mt-6
        placeholder-[#777777] transition-all duration-700 ease-in-out p-2  ${check && "-translate-y-14"} ${hTextBox && "h-[8rem]"}
        ${noMessage ? "border-red-500" : ""}
        `}
                    onClick={() => messageHandler()}
                    onBlur={() => blurHandler()}
                    ref={textAreaRef}
                    required
                    onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
                      if(e.currentTarget.value){
                        setNoMessage(false);
                      } else {
                        setNoMessage(true);
                      }
                      setMessage(e.currentTarget.value);
                    }}
                    value={message}
                  />
                </div>
              </div>


              {/* BUTTON */}


            </form>
            <div className="w-full flex justify-center mb-10 ">

              <button
                onClick={() => handleSubmit()}
                className={`text-[#161616] select-none border-none bg-[#98f144] font-semibold py-2 px-4 mt-8 rounded-lg shadow-xl 
      hover:bg-[#6ba039] cursor-none font-mono transition duration-700 ease-in-out ${check && "-translate-y-12"}`}>
                {!send ? "Senden" : "wird gesendet..."}
              </button>

            </div>
          </div>
        </div>
  );
};
