import { ContactForm } from "../ContactForm"
import { ContactStripe } from "../ContactStripe"
import { Description } from "../Description"
import { Heading } from "../Heading"

export const ContactSite = () => {
    return(
        <div className="animate-fadeIn">
        <Heading headstyle="text-slate-200" heading="Let's talk about the future" />

        <Description
            text="Contact us today to make your webdesign plan come true. 
                We offer you professional advice and always our full attention. Starting together, finishing together."
        />

        {/* Steps of Contact */}
        <ContactStripe />

        {/* Contact Formular */}
        <ContactForm />
    </div>
    )
}