import { Allert } from "../components/Allert";
import { CardBlack } from "../components/CardBlack";
import { CardWhite } from "../components/CardWhite";
import { Heading } from "../components/Heading";
import { LargeCard } from "../components/LargeCard";
import { Navbar } from "../components/Navbar";
import { TechStripe } from "../components/TechStripe";
import { TextAndButton } from "../components/TextAndButton";

function App() {
  return (
    <>
      {/* Wrapper */}
      <div className="w-full flex justify-center">
        {/* Start Page Layout */}
        <div className="w-full mobile:p-2 tablet:px-5 bg-[#151515] flex justify-center items-center">
          <div className="mobile:w-full tablet:w-full desktop:w-[75%] desktop-xl:w-[45%]">
            <Navbar indicator={1} />

            <Heading heading="Navigating the digital landscape for success" />
            <TextAndButton
              buttonText="Book a consultation"
              text="Our digital marketing agency helps businesses grow and succeed online througth a range of services including SEO, programming, consulting, and content creation."
            />

            <TechStripe />
            <Allert />

            {/* WrapperLayout */}
            <div className="w-full flex justify-center items-center">
              <div className="desktop:w-[100%] desktop-xl:w-[75%]  grid gap-11 mobile:gap-20  mobile:grid-rows-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:grid-rows-2 desktop:grid-rows-1 desktop:grid-cols-2 place-content-center place-items-center mt-20 mb-[5%]">
                <CardBlack
                  classname="tablet:-translate-x-20"
                  text1="Search enginge"
                  text2="optimization"
                  discription="A huge part of users ignore lower entries of search results. Let's make your site visible and drive traffic."
                />
                <CardWhite
                  classname="tablet:translate-x-20"
                  text1="Webdesign &"
                  text2="programming"
                  description="50% of website visitors leave by a loading time of 3 seconds. We build website that finishes loading in 200ms."
                />
                <CardWhite
                  classname="tablet:-translate-x-20"
                  text1="Consulting &"
                  text2="administration"
                  description="If you need advice on your CMS, we advise or administer your existing website."
                />
                <CardBlack
                  classname="tablet:translate-x-20"
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
    </>
  );
}
export default App;
