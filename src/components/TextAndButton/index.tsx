type TextAndButtonProps = {
  text: string;
  buttonText?: string;
  classNameContainer?: string;
  reference?: string;
  children?:JSX.Element |JSX.Element[]|string;
};

export const TextAndButton = (props: TextAndButtonProps) => {
  return (
    <div className={`w-full flex flex-col justify-start items-start px-8 mt-4 ${props.classNameContainer}`}>
      <p className="mobile:w-full select-none tablet:w-[60%] font-mono laptop:w-[50%] desktop:w-[35%] text-[#b9b9b9] font-extralight">
        {props.text}
      </p>
      {props.children}
      <img className="absolute w-[25rem] animate-flyoffscreen" src="graphics/astro2.png" alt="cute little astronaut" />
    </div>

  );
};
