import { ContactForm } from "../ContactForm"
import { Description } from "../Description"
import { Heading } from "../Heading"

export const ContactSite = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="animate-fadeIn mobile:w-full w-3/4 mt-[10%] flex justify-center items-center flex-col">
                <Heading headstyle="text-slate-200" heading="Let's talk about the future" />

                <Description
                    text="Wenn Sie Fragen zu einem Software-Produkt haben oder noch keine genaue Vorstellung über das Budget oder die Art des Auftrags besitzen, zögern Sie nicht, uns zu kontaktieren. Wir stehen Ihnen gerne zur Verfügung, um Ihre Ideen zu besprechen und gemeinsam eine passende Lösung zu finden. Egal, ob es um erste Informationen, individuelle Beratung oder eine detaillierte Planung geht – wir unterstützen Sie bei jedem Schritt auf dem Weg zu Ihrem erfolgreichen Projekt."
                />

                {/* Contact Formular */}
                <ContactForm />
            </div>
        </div >
    )
}