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
      <p className="mobile:w-full tablet:w-[60%] laptop:w-[50%] desktop:w-[35%] ">
        {props.text}
      </p>
      <div
        className="text-[#eeeeee] border border-[#161616] bg-[#161616] mt-4 p-2 rounded-md shadow-xl 
      hover:bg-[#eeeeee] hover:text-[#161616] cursor-pointer transition duration-300 ease-in-out"
      >
        {props.buttonText}
      </div>
    </div>
  );
};
