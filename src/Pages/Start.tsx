import { Allert } from "../components/Allert";
import { CardBlack } from "../components/CardBlack";
import { CardWhite } from "../components/CardWhite";
import { Footer } from "../components/Footer";
import { Heading } from "../components/Heading";
import { LargeCard } from "../components/LargeCard";
import { Navbar } from "../components/Navbar";
import { ParagraphOG } from "../components/ParagraphOG";
import { TechStripe } from "../components/TechStripe";
import { TextAndButton } from "../components/TextAndButton";

function App() {
  return (
    <>
      {/* Wrapper */}
      <div className="w-full bg-[#151515]">
      <div className="w-full flex justify-center">
      
          {/* Start Page Layout */}
          <div className="w-full mobile:p-2 tablet:px-5 bg-[#151515] flex justify-center items-center">
          <div className="mobile:w-full tablet:w-full desktop:w-[75%] desktop-xl:w-[45%]">
            <Navbar indicator={1} />

            <Heading  heading="Discover the power of modern web and software development" />
            <TextAndButton
              buttonText="Book a consultation"
              text="Web development at an academic level and the latest web and application technologies give your company unimaginable power in its web presence or internal company processes."
              reference="/contact"
            />
            <ParagraphOG classname="text-right justify-end"></ParagraphOG>
            <TechStripe />
            <Allert head="Services" text="Whether it is a website, a software solution, a bot or advice on websites or application administration, we have the right offer for you."/>

            {/* WrapperLayout */}
            <div className="w-full flex justify-center items-center">
              <div className="desktop:w-[75%] desktop-xl:w-[75%]  grid tablet:gap-10 gap-11 mobile:gap-20  mobile:grid-rows-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:grid-rows-2 desktop:grid-rows-1 desktop:grid-cols-2 place-content-center place-items-center mt-10 mb-[5%]">
                <CardBlack
                  classname="tablet:-translate-x-28"
                  text1="Websites & "
                  text2="programming"
                  discription="Over 50% of all website visitors leave after waiting 3 seconds. Our websites finish loading in 300 milliseconds."
                />
                <CardWhite
                  classname="tablet:translate-x-28"
                  text1="Consulting &"
                  text2="administration"
                  description="If you need advice on your CMS, we advise or administer your existing website."
                />
                <CardWhite
                  classname="tablet:-translate-x-28"
                  text1="Application"
                  text2="development"
                  description="Customized app solutions for your company where you determine what your program must do."
                />
                <CardBlack
                  classname="tablet:translate-x-28"
                  text1="Artificial"
                  text2="intelligence"
                  discription="Created images and text by a powerful AI, perfect for clients with limited budgets."
                />
              </div>
            </div>
            <LargeCard />
            
            
          </div>
          
        </div>
        
      </div>
      <Footer></Footer>
      </div>
      
    </>
  );
}
export default App;
