import { Allert } from "../Allert"
import { CardBlack } from "../CardBlack"
import { CardWhite } from "../CardWhite"
import { Heading } from "../Heading"
import { LargeCard } from "../LargeCard"
import { ParagraphOG } from "../ParagraphOG"
import { TechStripe } from "../TechStripe"
import { TextAndButton } from "../TextAndButton"
import { TextComponent } from "../TextComponent"



export const StartSite = (props: {
  TextAndButtonbt: JSX.Element | JSX.Element[] | string,
  BlackCardButton: JSX.Element | JSX.Element[] | string,
  WhiteCardButton: JSX.Element | JSX.Element[] | string,
}) => {
  return (
    <div className="animate-fadeIn"> 
      <Heading headstyle="text-slate-200" heading="Discover the power of modern sample products and sample innovations" />
      <TextAndButton children={props.TextAndButtonbt}

        text="With the force of sample products, we are able to offer you a wide range of services. We are constantly developing new products and services to meet the needs of our customers."
        reference="/contact"
      />
      <ParagraphOG classnamehead="text-slate-200" head="Same Technologies as big companies. "
        text="Using the latest technologies is a key to reach the goal of perfection. We use the same technologies as big companies like Sample1, Sample2 and Sample3.
        With our experience and the right tools, we can offer you the best possible service. And that's what we want to do. Speed, Innovation and Quality are our top priorities that 
        we will always follow. Our Sample Products should be the best in the world."
        animation={true} classname="text-right justify-end"></ParagraphOG>
      <TechStripe />
      <TextComponent
      headline="High-speed performance for sample products on the next level."
      text="Speed is the key to success. That's the reason we've got a SPA instead of a traditional website, just a fact. We are able to offer you the best possible performance for your environment.
      We want to grap the attention of your customers and keep them on your solution of choice. With modern technologies and our priorities we are able to offer you the best possible performance."
      ></TextComponent>
      <Allert head="Services" text="Whether it is a sampleproduct1, a sampleproduct2, a sampleproduct3 or something else on sampleTopic, we have the right offer for you." />

      {/* WrapperLayout */}
      <div className="w-full flex justify-center items-center">


        <div className="desktop:w-[75%] desktop-xl:w-[75%]  grid tablet:gap-10 gap-11 mobile:gap-20  mobile:grid-rows-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:grid-rows-2 desktop:grid-rows-1 desktop:grid-cols-2 place-content-center place-items-center mt-10 mb-[5%]">
          <CardBlack
            children={props.BlackCardButton}
            classname="tablet:-translate-x-28"
            text1="sample1 & "
            text2="sampleTopic"
            description="Your chance to start a new, innovative idea with the help of our sample products. "
          />
          <CardWhite
            children={props.WhiteCardButton}
            classname="tablet:translate-x-28"
            text1="Flexsample &"
            text2="admin"
            description="Do you need our team to develop a custom solution for you? We are happy to help you."
          />
          <CardWhite
            children={props.WhiteCardButton}
            classname="tablet:-translate-x-28"
            text1="sample2"
            text2="development"
            description="We are happy to help you with the development of your sample2 project to make it a success."
          />
          <CardBlack
            children={props.BlackCardButton}
            classname="tablet:translate-x-28"
            text1="sample3 &"
            text2="sampleTopic"
            description="We want to offer you the best possible service. That's what sample3 is about."
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