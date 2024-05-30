import { Navbar } from "../components/Navbar"

function App() {
  return (

    <>
    {/* Wrapper */}
    <div className="w-full flex justify-center">




      {/* Start Page Layout */}
     <div className="w-full mobile:p-2 tablet:p-10 bg-[#202020] flex justify-center items-center">
      <div className="mobile:w-full tablet:w-full desktop:w-[70%]">
      <Navbar>
        
      </Navbar>
      </div>

     </div>
    </div>
    </>
  )
}
export default App
