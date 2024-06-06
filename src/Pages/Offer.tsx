import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

function App(){
    return (
        <>
          {/* Wrapper */}
          <div className="w-full bg-[#151515]">
            <div className="w-full flex justify-center">
              {/* Start Page Layout */}
              <div className="w-full mobile:p-2 tablet:px-5 bg-[#151515] flex justify-center items-center">
                <div className="mobile:w-full tablet:w-full desktop:w-[75%] desktop-xl:w-[45%]">
                  <Navbar indicator={3}  />

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