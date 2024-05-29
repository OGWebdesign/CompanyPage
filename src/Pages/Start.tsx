import { TextAndButton } from "../components/TextAndButton";
import { Heading } from "../components/Heading";

function App() {
  return (
    <>
      {/* Wrapper */}
      <div className="flex flex-col justify-center mobile:p-2 tablet:p-10 font-mono">
        {/* Start Page Layout */}
        <Heading heading="Lorem Ipsum dolor sit consectetur adipisicing elit." />
        <TextAndButton
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Mollitia ratione harum corporis eum consectetur, vero autem aut asperiores quis, 
          enim praesentium animi porro ipsa fugit adipisci quidem 
          eveniet quasi quibusdam!"
          buttonText="Hallo Button Text"
          classNameContainer="mt-3"
        />
      </div>
    </>
  );
}
export default App;
