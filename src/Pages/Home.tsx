import { CompanySite } from "../components/CompanySite";
import { ContactSite } from "../components/ContactSite";
import Cursor from "../components/Cursor";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { StartSide } from "../components/StartSite";



function App() {
  return (
    <>
      {/* Wrapper */}
      <Cursor></Cursor>
      <div className="w-full bg-[#151515] cursor-none">
        <div className="w-full flex justify-center ">

          {/* Start Page Layout */}
          <div className="w-full mobile:p-2 tablet:px-5 bg-[#151515] flex justify-center items-center">
            <div className="mobile:w-full tablet:w-full desktop:w-[75%] desktop-xl:w-[45%]">
              <Navbar/>
               <StartSide>        

               </StartSide>
               


              <CompanySite>

              </CompanySite>

              <ContactSite></ContactSite>
               

            </div>
          </div>

        </div>
        <Footer></Footer>
      </div>

    </>
  );
}
export default App;
