import { ContactForm } from "../ContactForm"
import { Description } from "../Description"
import { Heading } from "../Heading"

export const ContactSite = () => {
    return (
        <div className="w-full flex justify-center items-center">

            <img src="Planets/icePlanet.webp" alt="" className="w-[40rem] absolute desktop:top-[10%] desktop:right-[10%] laptop:top-[10%] laptop:right-[0%] mobile:top-[70%] animate-floatIcePlanet"/>

            <img src="/graphics/astro.webp" alt="" className="w-[20rem] absolute z-10 mobile:bottom-[-15%] mobile:right-[-20%] tablet:bottom-[-10%] tablet:right-[10%] animate-float" />

            <div className="animate-fadeIn mobile:w-full tablet:w-3/4 w-3/4 mt-[5%] flex justify-center items-center flex-col">
            
            
            
                            <Heading headstyle="text-slate-200" heading="Let's talk about the future" />

                <Description
                    text="Wenn Sie Fragen zu einem Software-Produkt haben oder noch keine genaue Vorstellung über das Budget oder die Art des Auftrags besitzen, zögern Sie nicht, uns zu kontaktieren. Wir stehen Ihnen gerne zur Verfügung, um Ihre Ideen zu besprechen und gemeinsam eine passende Lösung zu finden. Egal, ob es um erste Informationen, individuelle Beratung oder eine detaillierte Planung geht – wir unterstützen Sie bei jedem Schritt auf dem Weg zu Ihrem erfolgreichen Projekt."
                />

                {/* Contact Formular */}
                <div className="max-w-[100rem] desktop:mt-[5%]">
                <ContactForm />
                </div>
            </div>
        </div >
    )
}