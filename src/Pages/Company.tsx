import { EmployeeCard } from "../components/EmployeeCard";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ParagraphOG } from "../components/ParagraphOG";

function App(){
    return (
        <>
          {/* Wrapper */}
          <div className="w-full bg-[#151515]">
            <div className="w-full flex justify-center">
              {/* Start Page Layout */}
              <div className="w-full mobile:p-2 tablet:px-5 bg-[#151515] flex justify-center items-center">
                <div className="mobile:w-full tablet:w-full desktop:w-[75%] desktop-xl:w-[45%]">
                  <Navbar indicator={2}  />
                  <ParagraphOG text="Hey, we're Max and Nils the creative duo behind OG Webdesign and we are very pleased to meet you. What is our job? To create cool and innovative digital solutions that not only look good, but also have a lot to offer.
With our know-how from studying computer science and design and a lot of experience under our belt, we bring your ideas to life online. Whether it's websites, bots, web apps, application software or AI services, we've got it!
Every project begins with a detailed discussion to understand your needs and goals. Based on this, we develop individual concepts that are tailored precisely to your company. Transparent communication and close cooperation are a matter of course for us." 
                 head="#Transparency" animation={false} classname="text-right justify-end"></ParagraphOG>
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