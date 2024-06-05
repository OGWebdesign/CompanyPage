type TextProps = {
  text: string;
  classNameContainer?: string;
};

export const Description = (props: TextProps) => {
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
    </div>
  );
};
