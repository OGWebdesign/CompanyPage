import Cursor from "../components/Cursor";
import { EmployeeCard } from "../components/EmployeeCard";
import { Footer } from "../components/Footer";
import { LargeCard } from "../components/LargeCard";
import { Navbar } from "../components/Navbar";
import { ParagraphOG } from "../components/ParagraphOG";

function App(){
    return (
        <>
         <Cursor></Cursor>
          {/* Wrapper */}
          <div className="w-full bg-[#151515] cursor-none">
            <div className="w-full flex justify-center">
              {/* Start Page Layout */}
              <div className="w-full mobile:p-2 tablet:px-5 bg-[#151515] flex justify-center items-center">
                <div className="mobile:w-full tablet:w-full desktop:w-[75%] desktop-xl:w-[45%]">
                  <Navbar indicator={2}  />
                  <ParagraphOG classnamehead="inline-block bg-[#98f144] text-[#151515]" text="Hey, we're Max and Nils the creative duo behind OG Webdesign and we are very pleased to meet you. What is our job? To create cool and innovative digital solutions that not only look good, but also have a lot to offer.
With our know-how from studying computer science and design and a lot of experience under our belt, we bring your ideas to life online. Whether it's websites, bots, web apps, application software or AI services, we've got it!
Every project begins with a detailed discussion to understand your needs and goals. Based on this, we develop individual concepts that are tailored precisely to your company. Transparent communication and close cooperation are a matter of course for us." 
                 head="#Transparency" animation={false} classname="text-right justify-end"></ParagraphOG>
                 <LargeCard 
                  head1style="text-slate-200 mt-10"
                  head2style="text-slate-200 mt-10"
                  text1Style="text-[#707070]"
                  text2Style="text-[#707070]"
                  head2="Young and unconventional" 
                  head1="Since XX23" 
                  text2="At OG Webdesign, we believe that your website should be more than just a digital business card. It should tell your story, bring your brand to life and delight your customers. Our team consists of talented designers, developers and strategists who work with passion and creativity to turn your ideas into reality. Straight forward!" 
                  text1="We look back on a short but successful past. We have implemented every project, every application, no matter how small with great care and an even greater sense of responsibility, always to the full satisfaction of our clients and beyond. We are thrilled to see how our websites and software products have transformed us into a completely different company, from the way we present ourselves online to how we operate our software products internally."></LargeCard>
                <EmployeeCard></EmployeeCard>
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