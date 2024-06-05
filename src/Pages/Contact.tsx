import { ContactStripe } from "../components/ContactStripe";
import { Description } from "../components/Description";
import { Heading } from "../components/Heading";
import { Navbar } from "../components/Navbar";

function App() {
  return (
    <>
      {/* Wrapper */}
      <div className="w-full flex justify-center">
        {/* Start Page Layout */}
        <div className="w-full mobile:p-2 tablet:px-5 bg-[#151515] flex justify-center items-center">
          <div className="mobile:w-full tablet:w-full desktop:w-[75%] desktop-xl:w-[45%]">
            <Navbar indicator={2} />
            <Heading heading="Your professional Partner to reach your goals" />

            <Description 
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur nulla esse laborum, quae, 
            officiis est id veniam rerum commodi libero. Ex maiores reprehenderit quibusdam, vero sapiente laboriosam autem voluptatem!"
            />

            {/* Steps of Contact */}
            <ContactStripe/>

            {/* Contact Formular */} 
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
