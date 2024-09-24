import { div } from "framer-motion/client"
import { CardBlack } from "../CardBlack"
import { CardWhite } from "../CardWhite"
import { Heading } from "../Heading"
import { LargeCard } from "../LargeCard"
import { TechStripe } from "../TechStripe"
import { TextAndButton } from "../TextAndButton"
import { TextComponent } from "../TextComponent"



export const StartSite = (props: {
  TextAndButtonbt: JSX.Element,
  BlackCardButton: JSX.Element,
  WhiteCardButton: JSX.Element,
  ProposalButton: JSX.Element,
}) => {
  return (

    <div className="animate-fadeIn">
      <div className="w-full h-screen bg-startbg bg-cover flex flex-col justify-center items-center">
        <div className="w-3/4">
        <Heading headstyle="text-slate-200 mt-[20%]" heading="Discover the power of modern web and software development" />
        <TextAndButton children={props.TextAndButtonbt}

          text="Web development at an academic level and the latest web and application technologies give your company unimaginable power in its web presence or internal company processes."
          reference="/contact"
        />

        <TextComponent
          headline="High-speed performance for websites and web applications on the next level."
          text="We have consciously decided against content management solutions when developing websites. On the one hand, we have set ourselves the task of revolutionizing the Internet with highly customized customer projects. We want to help companies that have understood how to stand out from the competition to offer an alternative to offers that mainly consist of content management systems. On the other hand, full control over the project is important. It is particularly important for perfectionist developers like us to be able to change even the finer details. Performance and maintainability are particularly guaranteed by the technologies we use. We can log all development steps of a project and reset them if necessary. Nothing unexpected happens here! We make no compromises when it comes to performance. The code base, the media, and even the fonts are professionally compressed so that quality losses are not visible. All packed together in a state-of-the-art and reliable ecosystem with the highest level of care for maintainability. 80% of a software product consists of maintenance and care."
        ></TextComponent>
        </div>
      </div>



      {/* WrapperLayout */}
      <div className="w-full flex justify-center items-center mt-[10rem]">


        <div className="desktop:w-[75%] desktop-xl:w-[75%] grid tablet:gap-10 gap-11 mobile:gap-20  mobile:grid-rows-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:grid-rows-2 desktop:grid-rows-1 desktop:grid-cols-2 place-content-center place-items-center mb-[5%]">
          <CardBlack
            classname="tablet:-translate-x-28"
            text1="Websites & "
            text2="Programming"
            description="Over 50% of all website visitors leave after waiting 3 seconds. Our websites finish loading in 300 milliseconds."
          />
          <CardWhite
            classname="tablet:translate-x-28"
            text1="DevOps &"
            text2="Admin"
            description="Do you need developers at short notice for a project that is already in the development phase?"
          />
          <CardWhite
            classname="tablet:-translate-x-28"
            text1="Application"
            text2="Development"
            description="Customized app solutions for your company where you determine what your program must do."
          />
          <CardBlack
            classname="tablet:translate-x-28"
            text1="Artificial"
            text2="Intelligence"
            description="Implementation of powerfull AI api's for you website or application for a extremly efficient workflow."
          />

        </div>
      </div>

      <TechStripe />

      <LargeCard withButton={true}
        head1="Let`s make things happen!"
        text1="No matter what your idea is, we can be the right partner for you. Send us your request and we will find a suitable solution for each of your concerns."
        head2="Whether big or small."
        text2="You can entrust us with any project proposal, we will find a solution that will ensure your complete satisfaction. Don't hesitate to come to us with small ideas. The biggest companies in the world started in a garage. Dream big, start even bigger."
        classname="bg-[#98f144]"
        button={props.ProposalButton}
      />


    </div>
  )
}