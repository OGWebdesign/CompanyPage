import { Heading } from "../components/Heading";
import { Navbar } from "../components/Navbar"
import { TextAndButton } from "../components/TextAndButton";


function App() {
  return (
    <>
    {/* Wrapper */}
    <div className="w-full flex justify-center">


      {/* Start Page Layout */}
     <div className="w-full mobile:p-2 tablet:px-10 bg-[#202020] flex justify-center items-center">
      <div className="mobile:w-full tablet:w-full desktop:w-[70%]">
      <Navbar>
        
      </Navbar>

      <Heading heading="Navigating the digital landscape for success"></Heading>
      <TextAndButton buttonText="Book a consultation" text="Our digital marketing agency helps businesses grow and succeed online througth a range of services including SEO, PPC, social media marketing, and content creation.">
        
      </TextAndButton>

      </div>

     </div>
    </div>
    </>
  );
}
export default App;
