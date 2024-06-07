import { ContactForm } from "../components/ContactForm";
import { ContactStripe } from "../components/ContactStripe";
import Cursor from "../components/Cursor";
import { Description } from "../components/Description";
import { Footer } from "../components/Footer";
import { Heading } from "../components/Heading";
import { Navbar } from "../components/Navbar";

function App() {
  return (
    <>
     <Cursor></Cursor>
      {/* Wrapper */}
      <div className="w-full bg-[#151515] cursor-none">
        <div className="w-full flex justify-center">
          {/* Start Page Layout */}
          <div className="w-full mobile:p-2 tablet:px-5 bg-[#151515] flex justify-center items-center">
            <div className="mobile:w-full tablet:w-full desktop:w-[75%] desktop-xl:w-[45%]">
              <Navbar  />
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
          </div>
        </div>
        <Footer>

        </Footer>
      </div>
    </>
  );
}
export default App;
