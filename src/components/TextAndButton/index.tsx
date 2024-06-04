type TextAndButtonProps = {
  text: string;
  buttonText: string;
  classNameContainer?: string;
};

export const TextAndButton = (props: TextAndButtonProps) => {
  return (
    <div
      className={`w-full flex flex-col justify-start items-start px-8 mt-4 ${props.classNameContainer}`}
    >
      <p
        className="mobile:w-full tablet:w-[60%] font-mono laptop:w-[50%] desktop:w-[35%] text-[#9e9e9e]
         font-extralight"
      >
        {props.text}
      </p>
      <div
        className="text-[#161616] border-none bg-[#e2e2e2] font-semibold mt-8 py-2 px-4 rounded-lg shadow-xl 
      hover:bg-[#98f144] cursor-pointer font-mono transition duration-500 ease-in-out"
      >
        {props.buttonText}
      </div>
    </div>
  );
};
