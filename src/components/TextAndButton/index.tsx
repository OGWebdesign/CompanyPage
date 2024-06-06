type TextAndButtonProps = {
  text: string;
  buttonText: string;
  classNameContainer?: string;
  reference?: string;
};

export const TextAndButton = (props: TextAndButtonProps) => {
  return (
    <div
      className={`w-full flex flex-col justify-start items-start px-8 mt-4 ${props.classNameContainer}`}
    >
      <p
        className="mobile:w-full select-none tablet:w-[60%] font-mono laptop:w-[50%] desktop:w-[35%] text-[#9e9e9e]
         font-extralight"
      >
        {props.text}
      </p>
      <a
        className="text-[#151515] select-none border-none bg-[#98f144] font-semibold mt-8 py-2 px-4 rounded-lg 
      hover:bg-[#6ba039] cursor-pointer font-mono transition duration-300 ease-in-out" href={props.reference}
      >
        {props.buttonText}
      </a>
    </div>
  );
};
