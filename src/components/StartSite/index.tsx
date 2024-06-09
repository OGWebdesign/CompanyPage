import { Allert } from "../Allert"
import { CardBlack } from "../CardBlack"
import { CardWhite } from "../CardWhite"
import { Heading } from "../Heading"
import { LargeCard } from "../LargeCard"
import { ParagraphOG } from "../ParagraphOG"
import { TechStripe } from "../TechStripe"
import { TextAndButton } from "../TextAndButton"



export const StartSite = (props:{
  TextAndButtonbt:JSX.Element|JSX.Element[]|string,
})=>{
    return(
        <div className="animate-fadeIn">
          <Heading headstyle="text-slate-200" heading="Discover the power of modern web and software development" />
              <TextAndButton children={props.TextAndButtonbt}
      
                text="Web development at an academic level and the latest web and application technologies give your company unimaginable power in its web presence or internal company processes."
                reference="/contact"
              />
              <ParagraphOG classnamehead="text-slate-200" head="Compiled with the same technologies as Facebook and Instagram. "
                text="Using the latest front-end and back-end technologies, we achieve loading speeds that no content management system can even remotely match. 
                Loading times as low as 300 milliseconds.
                We make no compromises when it comes to design. Modern, timeless designs where there are no limits to the possibilities. 
                We do not use any modular systems and for this reason we are not subject to any restrictions in the entire development process."
                animation={true} classname="text-right justify-end"></ParagraphOG>
              <TechStripe />
              <Allert head="Services" text="Whether it is a website, a software solution, a bot or advice on websites or application administration, we have the right offer for you." />

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
              <LargeCard withButton={true}
                head1="Let`s make things happen!"
                text1="No matter what your idea is, we can be the right partner for you. Send us your request and we will find a suitable solution for each of your concerns."
                head2="Whether big or small."
                text2="You can entrust us with any project proposal, we will find a solution that will ensure your complete satisfaction. Don't hesitate to come to us with small ideas. The biggest companies in the world started in a garage. Dream big, start even bigger."
                classname="bg-slate-200"
              />
        
        
        </div>
        
    )
}