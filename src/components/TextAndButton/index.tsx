type TextAndButtonProps = {
  text: string;
  buttonText: string;
  classNameContainer?: string;
};

export const TextAndButton = (props: TextAndButtonProps) => {
  return (
    <div
      className={`w-full flex flex-col justify-start items-start px-8 ${props.classNameContainer}`}
    >
      <p
        className="mobile:w-full tablet:w-[60%] laptop:w-[50%] desktop:w-[35%] text-[#eeeeee]
         font-extralight"
      >
        {props.text}
      </p>
      <div
        className="text-[#161616] border-none bg-[#eeeeee] mt-4 py-2 px-4 rounded-md shadow-xl 
      hover:bg-[#98f144] cursor-pointer transition duration-500 ease-in-out font-thin"
      >
        {props.buttonText}
      </div>
    </div>
  );
};
