import { Card, CardBlack } from "../components/CardBlack";
import { CardWhite } from "../components/CardWhite";
import { Heading } from "../components/Heading";
import { Navbar } from "../components/Navbar"
import { TechStripe } from "../components/TechStripe";
import { TextAndButton } from "../components/TextAndButton";


function App() {
  return (
    <>
    {/* Wrapper */}
    <div className="w-full flex justify-center">


      {/* Start Page Layout */}
     <div className="w-full mobile:p-2 tablet:px-10 bg-[#151515] flex justify-center items-center">
      <div className="mobile:w-full tablet:w-full desktop:w-[70%]">
      <Navbar>
        
      </Navbar>

      <Heading heading="Navigating the digital landscape for success"></Heading>
      <TextAndButton buttonText="Book a consultation" text="Our digital marketing agency helps businesses grow and succeed online througth a range of services including SEO, PPC, social media marketing, and content creation.">
        
      </TextAndButton>

      <TechStripe>

      </TechStripe>

      {/* WrapperLayout */}
      <div className="w-full grid gap-11 tablet:grid-rows-2 tablet:grid-cols-2 mt-10">
        <CardBlack text1="Search enginge" text2="optimization"></CardBlack>
        <CardWhite text1="Webdesign &" text2="programming" description="92% of all website visitors leave after a loading time of just 3 seconds. Be the owner of a website that finishes loading in 200ms."></CardWhite>
        <CardWhite text1="Consulting &" text2="administration" description=""></CardWhite>
        <CardBlack text1="Artificial" text2="intelligence"></CardBlack>
 
      </div>

      </div >

     </div>
    </div>
    </>
  );
}
export default App;
