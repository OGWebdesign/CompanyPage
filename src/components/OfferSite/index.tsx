import { useEffect, useState } from "react";
import { BookIcon, CodeIcon, ComputerIcon, MinusIcon, PlusIcon, WebAppIcon } from "../Icons";
import IconCard from "../IconCard";
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
      if(textAreaRef.current!.value === ""){
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
    },[price])


    const sendRequest = async () => {
        if (!name || !email || !phone || !message || (select1 == false && select2 == false && select3 == false && select4 == false)) {
            alert("Bitte fülle alle Felder aus!");
            return;
        } 
        try {
          await axios.post('https://bauteam-server.vercel.app/api/og/sendFormular', {name, email, company, phone, message, price, select1, select2, select3, select4})
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.error('Error sending data:', error);
          });
        } catch (error) {
          console.error('Error sending data:', error);
        }
    }
    
  return (
    <div className="w-full h-full flex flex-col items-center">
    <div className=" desktop:w-[75%] desktop-xl:w-[60%] mobile:w-full flex flex-col justify-center items-center">
      <div className="flex mobile:flex-col laptop:flex-row justify-around w-3/4">
        <div className="w-3/4 h-[50rem] flex items-center">
          <div className="p-1">
            <div className="offertext mt-[60%] max-w-[30rem]">
              <p className="font-bold text-white text-[2.5rem] font-sharemono">
                Ein neues Projekt starten
              </p>
              <p className="text-white mt-[2%] mobile:mt-[10%] text-[1.4rem] mobile:text-[1.2rem] font-sharemono">
                Lerne uns und unsere Arbeit in einem unverbindlichen Erstgespräch
                kennen und stelle uns dein Projekt im Detail vor.
              </p>
              <p className="text-[#8f8f8f] mt-[2%] text-[1.4rem] mobile:mt-[10%] mobile:text-[1.2rem] font-sharemono">
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
                  <p className="text-[1.2rem] mobile:text-[1rem] font-sharemono ml-8 text-[#8b8b8b]">
                    Art der Anfrage und Budget wählen.
                  </p>
                </div>
                <div className="w-full flex items-center">
                  <div className="w-[4rem] h-[4rem] mobile:w-[3rem] mobile:h-[3rem] text-[1.3rem] mobile:text-[1rem] shadow-[5px_5px_0px_0px_rgba(109,40,217)] font-bold font-sharemono rounded-full bg-[#98f144] my-2 flex justify-center items-center">
                    2
                  </div>
                  <p className="text-[1.2rem] mobile:text-[1rem] font-sharemono ml-8 text-[#8b8b8b]">
                    Kontaktformular ausfüllen.
                  </p>
                </div>
                <div className="w-full flex items-center">
                  <div className="w-[4rem] h-[4rem] mobile:w-[3rem] mobile:h-[3rem] text-[1.3rem] mobile:text-[1rem] shadow-[5px_5px_0px_0px_rgba(109,40,217)] font-bold font-sharemono rounded-full bg-[#98f144] my-2 flex justify-center items-center">
                    3
                  </div>

                  <p className="text-[1.2rem] mobile:text-[1rem] font-sharemono ml-8 text-[#8b8b8b]">
                    Erstgespräch vereinbaren!
                  </p>
                </div>
                <div className="w-full flex items-center">
                  <div className="w-[4rem] h-[4rem] mobile:w-[3rem] mobile:h-[3rem] text-[1.3rem] mobile:text-[1rem] shadow-[5px_5px_0px_0px_rgba(109,40,217)] font-bold font-sharemono rounded-full bg-[#98f144] my-2 flex justify-center items-center">
                    4
                  </div>

                  <p className="text-[1.2rem] mobile:text-[1rem] font-sharemono ml-8 text-[#8b8b8b]">
                    Start deines Projektes!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full laptop:h-[50rem] laptop:m-0 mobile:mt-[5rem] flex items-center flex-col">
          <img className="h-[20rem] animate-flyIn" src="graphics\astro.webp" alt="a little cute astronaut" onAnimationEnd={(e) => {
          const target = e.target as HTMLImageElement;
          target.classList.remove('animate-flyIn');
          target.classList.add('animate-float');
        }}/>
          <div className="w-full flex flex-col p-3 items-center">
        <div className="w-full flex tablet:justify-evenly mobile:justify-between items-center">
            <IconCard onClick={() => {setSelect1(!select1)}} title="Website" icon={<CodeIcon className="mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]"/>} />
            <IconCard onClick={() => {setSelect2(!select2)}} title="Web-App" icon={<WebAppIcon className="mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]"/>} />
            <IconCard onClick={() => {setSelect3(!select3)}} title="Consulting" icon={<BookIcon className="mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]"/>} />
            <IconCard onClick={() => {setSelect4(!select4)}} title="Dev-Ops" icon={<ComputerIcon className="mobile:w-[2rem] mobile:h-[2rem] tablet:w-[2.5rem] tablet:h-[2.5rem]"/>} />
        </div>
        <div className={`w-[65%] h-[3rem] bg-[#151515] mt-[4rem]  flex justify-between items-center rounded-xl  `}>   
            <div onClick={() => {
                decrease_sound.play();
                if(price >= 100){
                    setPrice(price - 100);
                }             
            }} className="w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-xl bg-[#c5c5c5] hover:bg-red-500">
                <MinusIcon className="w-[1.2rem]" />
            </div>
            <span className={` font-sharemono text-[1.3rem] ${underborder ? "text-red-500" : "text-[#98f144]"}`}>{price}€</span>
            <div onClick={() => {
                increase_sound.play();
                setPrice(price + 100);
            }}
            className="w-[3.5rem] h-[3.5rem] p-5 flex justify-center items-center rounded-xl bg-[#c5c5c5] hover:bg-[#98f144]">
                <PlusIcon className="w-[1.2rem]" />
            </div>
        </div>
        <span className="text-white mt-[1rem] font-sharemono">Dein Budget</span>   
        </div>
        </div>
      </div>
      <div className="mt-[15%]">
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
        
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setName(e.currentTarget.value);
        }}
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

        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setEmail(e.currentTarget.value);
        }}
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

        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setCompany(e.currentTarget.value);
        }}
        />

      </div>


      <div className={`w-full flex mt-5 ${check && "-translate-y-14"} transition-all duration-700 ease-in-out`}>

        <span className="text-white 
        
        mobile:w-full tablet:w-[65%]  tablet-contact:ml-[3rem] laptop:ml-[10rem] 
        mobile:text-[1.8rem] tablet:text-[2rem] laptop:text-[2.3rem] 
        
        leading-none">MY <span className="bg-[#98f144] text-[#151515]">PHONE</span> IS </span>
       
        <input name="emailfield" type="input" placeholder="Telefon*" className=" cursor-none

        mobile:w-full tablet:mr-[2rem] tablet-contact:mr-[5.5rem] laptop:mr-[6rem] laptop:w-[50rem] desktop:w-[60rem]

         text-center bg-[#151515] text-[#98f144] border-b-2 leading-none
        placeholder-[#777777] flex justify-center items-center "

        required

        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setPhone(e.currentTarget.value);
        }}
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
        onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
          setMessage(e.currentTarget.value);
        }}
        />
      </div>
    </div>

    
    {/* BUTTON */}
      <div className="w-full flex justify-center mb-10 ">

      <button 
      onClick={() => sendRequest() }
       className={`text-[#161616] select-none border-none bg-[#98f144] font-semibold py-2 px-4 mt-8 rounded-lg shadow-xl 
      hover:bg-[#6ba039] cursor-none font-mono transition duration-700 ease-in-out ${check && "-translate-y-12"}`}>
      Send Request
      </button>

      </div>
      
    </form>
  </div>
  </div>
      </div>
      </div>
  );
};
