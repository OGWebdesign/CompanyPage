import { ContactForm } from "../ContactForm";
import PriceCalculator from "../PriceCalculator";

export const OfferSite = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
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
          <img className="h-[20rem] animate-flyIn" src="graphics\astro.png" alt="a little cute astronaut" onAnimationEnd={(e) => {
          const target = e.target as HTMLImageElement;
          target.classList.remove('animate-flyIn');
          target.classList.add('animate-float');
        }}/>
          <PriceCalculator />
        </div>
      </div>
      <div className="mt-[10%]">
        <ContactForm />
      </div>
      </div>
  );
};
