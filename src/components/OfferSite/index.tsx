import { useEffect, useState } from "react";
import { BookIcon, CodeIcon, ComputerIcon, MinusIcon, PlusIcon, WebAppIcon } from "../Icons";
import React from "react";
import axios from "axios";

export const OfferSite = () => {


  /* States for Email Sending */
  const [price, setPrice] = useState(1000);
  const [select1, setSelect1] = useState<boolean>(false);
  const [select2, setSelect2] = useState<boolean>(false);
  const [select3, setSelect3] = useState<boolean>(false);
  const [select4, setSelect4] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  /* States Email End */

  const [send, setSend] = useState<boolean>(false);
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [firstAnimation, setFirstAnimation] = useState<boolean>(false);

  const [select_sound] = useState(new Audio("/sounds/select 3.mp3"));

  const [noTechSelected, setNoTechSelected] = useState<boolean>(false);
  const [select100, setSelect100] = useState<boolean>(true);
  const [select500, setSelect500] = useState<boolean>(false);
  const [select1000, setSelect1000] = useState<boolean>(false);
  const [noName, setNoName] = useState<boolean>(false);
  const [noEmail, setNoEmail] = useState<boolean>(false);
  const [noPhone, setNoPhone] = useState<boolean>(false);
  const [noMessage, setNoMessage] = useState<boolean>(false);

  const numberToAdd = select100 ? 100 : select500 ? 500 : 1000;

  const borderDashed = "border-dashed border-red-500 border-2 duration-500";


  const clickEffect = "bg-[#c5c5c5] shadow-[5px_5px_0px_0px_rgba(152,241,68)]"

  const notClicked = "hover:bg-[#c5c5c5] hover:shadow-[5px_5px_0px_0px_rgba(152,241,68)]"

  const [underborder, setUnderborder] = useState(false);
  const [increase_sound] = useState(new Audio("/sounds/increase.mp3"));
  const [decrease_sound] = useState(new Audio("/sounds/decrease.mp3"));


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
    if (textAreaRef.current!.value === "") {
      setCheck(false);
      setHTextBox(false);
    }
  }


  useEffect(() => {
    if (price < 500) {
      setUnderborder(true);
    } else if (price >= 500) {
      setUnderborder(false);
    }
  }, [price])


  const sendRequest = async () => {
    setSend(true);
    if (price < 500) {
      alert("Dein Budget ist zu niedrig. Bitte wähle ein Budget von mindestens 500€ aus.");
      setSend(false);
      return;
    }
    if (!name || !email || !phone || !message || (select1 == false && select2 == false && select3 == false && select4 == false)) {
      alert("Bitte fülle alle Felder aus!");
      setSend(false);
      if (!select1 && !select2 && !select3 && !select4) {
        setNoTechSelected(true);
      }
      if (!name) {
        setNoName(true);
      }
      if (!email) {
        setNoEmail(true);
      }
      if (!phone) {
        setNoPhone(true);
      }
      if (!message) {
        setNoMessage(true);
      }


      return;
    }
    await axios.post('https://og-api-mu.vercel.app/contact/send-formular', { name, email, company, phone, message, price, select1, select2, select3, select4 })
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          setFirstAnimation(true);
        }, 500);
        setTimeout(() => {
          setSendSuccess(true);
        }, 500);
        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setMessage("");
        setSelect1(false);
        setSelect2(false);
        setSelect3(false);
        setSelect4(false);
        setPrice(1000);
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
        setSelect1(false);
        setSelect2(false);
        setSelect3(false);
        setSelect4(false);
        setPrice(1000);
        setSend(false);
        setSendSuccess(false);
      });

  }

  return (
    <div className="w-full h-full flex flex-col items-center">


      <img src="Planets/sun.webp" className="w-[40rem] z-10 absolute top-[35%] right-[10%] animate-floatJupiter" alt="sun" />
      <img src="Planets/spacestation.webp" className="laptop:w-[20rem] mobile:w-[10rem] tablet:w-[15rem] z-10 absolute laptop:bottom-[-10%] laptop:left-[5%] mobile:bottom-[-10%] mobile:right-[5%] animate-float" alt="spacestation" />

      {/* SUCCESS WINDOW*/}
      <div className={`w-[45rem] h-[15rem] bg-[#000000]  font-sharemono absolute bottom-[10%] ${sendSuccess ? "animate-flyoffscreen block" : "hidden"} ${firstAnimation ? "animate-fadeIn" : ""} z-30 flex justify-center items-center rounded-xl`}>
        <span className="text-[#98f144] text-[3rem] text-center">
          Nachricht erfolgreich gesendet!
        </span>
      </div>


      <div className=" desktop:w-full desktop-l:w-[80%] mobile:w-full flex flex-col justify-center items-center z-30">
        <div className="flex mobile:flex-col laptop:flex-row justify-around w-3/4">
          <div className="w-3/4 mobile:w-full h-[50rem] flex items-center">
            <div className="p-1">
              <div className="offertext tablet:mt-[10%] max-w-[40rem]">
                <p className="font-bold text-white tablet:text-[2rem] mobile:text-[1.6rem] font-sharemono">
                  Ein neues Projekt starten
                </p>
                <p className="text-white mt-[2%] mobile:mt-[10%] text-[1.4rem] mobile:text-[1rem] font-sharemono">
                  Lerne uns und unsere Arbeit in einem unverbindlichen Erstgespräch
                  kennen und stelle uns dein Projekt im Detail vor.
                </p>
                <p className="text-[#8f8f8f] mt-[2%] text-[1.4rem] mobile:mt-[10%] mobile:text-[1rem] font-sharemono">
                  Hierzu erstelle einfach eine Projektanfrage und erzähle mir einige
                  Details zu deinem Anliegen. Zusammen werden wir deine Probleme
                  lösen und damit dein Unternehmen auf die nächste Stufe in der
                  digitalen Welt kommt. Ich freue mich dich und dein Projekt kennen
                  zu lernen.
                </p>
                <div className="w-full">
                  <div className="w-full flex mt-[5%] mobile:mt-[10%] items-center">
                    <div className="w-[4rem] h-[4rem] mobile:w-[3rem] mobile:h-[3rem] text-[1.3rem] mobile:text-[1rem] shadow-[5px_5px_0px_0px_rgba(109,40,217)] font-bold font-sharemono rounded-full bg-[#98f144] my-2 flex justify-center items-center">
                      1
                    </div>
                    <p className="text-[1.2rem] mobile:text-[0.8rem] font-sharemono ml-8 text-[#8b8b8b]">
                      Art der Anfrage und Budget wählen.
                    </p>
                  </div>
                  <div className="w-full flex items-center">
                    <div className="w-[4rem] h-[4rem] mobile:w-[3rem] mobile:h-[3rem] text-[1.3rem] mobile:text-[1rem] shadow-[5px_5px_0px_0px_rgba(109,40,217)] font-bold font-sharemono rounded-full bg-[#98f144] my-2 flex justify-center items-center">
                      2
                    </div>
                    <p className="text-[1.2rem] mobile:text-[0.8rem] font-sharemono ml-8 text-[#8b8b8b]">
                      Kontaktformular ausfüllen.
                    </p>
                  </div>
                  <div className="w-full flex items-center">
                    <div className="w-[4rem] h-[4rem] mobile:w-[3rem] mobile:h-[3rem] text-[1.3rem] mobile:text-[1rem] shadow-[5px_5px_0px_0px_rgba(109,40,217)] font-bold font-sharemono rounded-full bg-[#98f144] my-2 flex justify-center items-center">
                      3
                    </div>

                    <p className="text-[1.2rem] mobile:text-[0.8rem] font-sharemono ml-8 text-[#8b8b8b]">
                      Erstgespräch vereinbaren!
                    </p>
                  </div>
                  <div className="w-full flex items-center">
                    <div className="w-[4rem] h-[4rem] mobile:w-[3rem] mobile:h-[3rem] text-[1.3rem] mobile:text-[1rem] shadow-[5px_5px_0px_0px_rgba(109,40,217)] font-bold font-sharemono rounded-full bg-[#98f144] my-2 flex justify-center items-center">
                      4
                    </div>

                    <p className="text-[1.2rem] mobile:text-[0.8rem] font-sharemono ml-8 text-[#8b8b8b]">
                      Start deines Projektes!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full laptop:h-[50rem] laptop:mt-24 desktop-l:mt-[20%] laptop:m-0 mobile:mt-[5rem] flex items-center flex-col">
            <img className="h-[20rem] mobile:h-[15rem] animate-flyIn" src="graphics\astro.webp" alt="a little cute astronaut" onAnimationEnd={(e) => {
              const target = e.target as HTMLImageElement;
              target.classList.remove('animate-flyIn');
              target.classList.add('animate-float');
            }} />
            <div className="w-full flex flex-col items-center">
              <div className="w-full flex tablet:justify-evenly gap-4 mobile:justify-between items-center">
                <div onClick={() => {
                  select_sound.play();
                  setSelect1(!select1)
                  if (!select1){
                    setNoTechSelected(false);
                  }
                }}
                  className={`${noTechSelected ? borderDashed : ""}  tablet:w-[6rem] tablet:h-[6rem] mobile:w-[5rem] mobile:h-[5rem] ${select1 ? clickEffect : notClicked}  group duration-500 transition-all eas flex flex-col justify-center items-center rounded-xl`}>
                  <div className={`flex justify-center items-center group-hover:fill-black duration-500 ${select1 ? "fill-black" : "fill-white"} `}>
                    <CodeIcon className={`mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]`} />
                  </div>
                  <div className={`w-full text-center mobile:text-[0.8rem] tablet:text-[1rem] mt-[0.3rem] font-sharemono group-hover:text-black duration-500 ${select1 ? "text-black" : "text-white"}`}>
                    <p>Webseiten</p>
                  </div>
                </div>

                <div onClick={() => {
                  select_sound.play();
                  setSelect2(!select2)
                  if (!select2){
                    setNoTechSelected(false);
                  }
                }}
                  className={`${noTechSelected ? borderDashed : ""} tablet:w-[6rem] tablet:h-[6rem] mobile:w-[5rem] mobile:h-[5rem] ${select2 ? clickEffect : notClicked}  group duration-500 transition-all eas flex flex-col justify-center items-center rounded-xl`}>
                  <div className={`flex justify-center items-center group-hover:fill-black duration-500 ${select2 ? "fill-black" : "fill-white"} `}>
                    <WebAppIcon className="mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]" />
                  </div>
                  <div className={`w-full text-center mobile:text-[0.8rem] tablet:text-[1rem] mt-[0.3rem] font-sharemono group-hover:text-black duration-500 ${select2 ? "text-black" : "text-white"}`}>
                    <p>Web-App</p>
                  </div>
                </div>

                <div onClick={() => {
                  select_sound.play();
                  setSelect3(!select3);
                  if (!select3){
                    setNoTechSelected(false);
                  }
                }}
                  className={`${noTechSelected ? borderDashed : ""} tablet:w-[6rem] tablet:h-[6rem] mobile:w-[5rem] mobile:h-[5rem] ${select3 ? clickEffect : notClicked}  group duration-500 transition-all eas flex flex-col justify-center items-center rounded-xl`}>
                  <div className={`flex justify-center items-center group-hover:fill-black duration-500 ${select3 ? "fill-black" : "fill-white"} `}>
                    <BookIcon className="mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]" />
                  </div>
                  <div className={`w-full text-center mobile:text-[0.8rem] tablet:text-[1rem] mt-[0.3rem] font-sharemono group-hover:text-black duration-500 ${select3 ? "text-black" : "text-white"}`}>
                    <p>Consulting</p>
                  </div>
                </div>

                <div onClick={() => {
                  setSelect4(!select4);
                  if (!select4){
                    setNoTechSelected(false);
                  }
                }}
                  className={`${noTechSelected ? borderDashed : ""} tablet:w-[6rem] tablet:h-[6rem] mobile:w-[5rem] mobile:h-[5rem] ${select4 ? clickEffect : notClicked}  group duration-500 transition-all eas flex flex-col justify-center items-center rounded-xl`}>
                  <div className={`flex justify-center items-center group-hover:fill-black duration-500 ${select4 ? "fill-black" : "fill-white"} `}>
                    <ComputerIcon className="mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]" />
                  </div>
                  <div className={`w-full text-center mobile:text-[0.8rem] tablet:text-[1rem] mt-[0.3rem] font-sharemono group-hover:text-black duration-500 ${select4 ? "text-black" : "text-white"}`}>
                    <p>Dev-Ops</p>
                  </div>
                </div> 
              </div>

              {/* Nachricht, wenn keine Technologie ausgewählt */}


              {noTechSelected && <span className="text-red-500 text-[1.1rem] mt-[2rem] font-sharemono animate-fadeIn duration-300">Bitte wähle mindestens eine Technologie aus!</span>}
              

              {/* Stufenauswahl Budget */}

              <div className={`w-full flex justify-evenly items-center mt-[4rem] `}>
                <span 
                onClick={() => {
                  setSelect100(true);
                  setSelect500(false);
                  setSelect1000(false);
                }}
                className={` font-sharemono text-[1.1rem] p-5 rounded-xl hover:text-black duration-300 ${select100 ? clickEffect + " text-black" : notClicked + " text-white"}`}>100€</span>

                <span 
                onClick={() => {
                  setSelect100(false);
                  setSelect500(true);
                  setSelect1000(false);
                }}
                className={`font-sharemono text-[1.1rem] p-5 rounded-xl hover:text-black duration-300 ${select500 ? clickEffect + " text-black" : notClicked + " text-white"}`}>500€</span>


                <span 
                onClick={() => {
                  setSelect100(false);
                  setSelect500(false);
                  setSelect1000(true);
                }}
                className={`font-sharemono text-[1.1rem] p-5 rounded-xl hover:text-black duration-300 ${select1000 ? clickEffect + " text-black" : notClicked + " text-white"}`}>1000€</span>
              </div>
              
              <div className={`w-[65%] h-[3rem] mobile:w-full bg-[#151515] mt-[2rem]  flex justify-between items-center rounded-xl  `}>
                <div onClick={() => {
                  decrease_sound.play();
                  if (price - numberToAdd < 100) {
                    setPrice(100);
                  } else {
                    setPrice(price - numberToAdd);
                  }
                }} className={` w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-xl bg-[#c5c5c5] hover:bg-red-500`}>
                  <MinusIcon className="w-[1.2rem]" />
                </div>
                <span className={` font-sharemono text-[1.3rem] ${underborder ? "text-red-500" : "text-[#98f144]"}`}>{price}€</span>
                <div onClick={() => {
                  increase_sound.play();
                  setPrice(price + numberToAdd);
                }}
                  className="w-[3.5rem] h-[3.5rem] p-5 flex justify-center items-center rounded-xl bg-[#c5c5c5] hover:bg-[#98f144]">
                  <PlusIcon className="w-[1.2rem]" />
                </div>
              </div>
              <span className={`mt-[1rem] font-sharemono ${price < 500 ? "text-red-500" : "text-white"} `}>
                { price < 500 ? "Gute Arbeit erfordert seinen Preis!" : "Dein Budget"}
                </span>
            </div>
          </div>
        </div>
        <div className="w-full">
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

                <input name="namefield" value={name} type="input" placeholder="Name*" className={` cursor-none

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

                <input name="emailfield" value={email} type="input" placeholder="Email*" className={` cursor-none

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

                <input name="emailfield" value={company} type="input" placeholder="Firma" className=" cursor-none

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

                <input name="emailfield" value={phone} type="input" placeholder="Telefon*" className={` cursor-none

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
                  <textarea placeholder="Nachricht*" className={`

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
                onClick={() => sendRequest()}
                className={`text-[#161616] select-none border-none bg-[#98f144] font-semibold py-2 px-4 mt-8 rounded-lg shadow-xl 
      hover:bg-[#6ba039] cursor-none font-mono transition duration-700 ease-in-out ${check && "-translate-y-12"}`}>
                {!send ? "Senden" : "wird gesendet..."}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
