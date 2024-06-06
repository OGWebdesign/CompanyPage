type HeadingProps = {
  heading: string,
  classname?:string
};

export const Heading = (props: HeadingProps) => {
  return (
    <div className="w-full px-8 pt-8 mt-10">
      <div className="mobile:w-full tablet:w-[60%] laptop:w-1/2">
        <h1
          className={`font-mono text-[#e6e6e6] select-none mobile:text-[1.7rem] 
                   w-full tablet:text-[2.5rem] ${props.classname} `}
        >
          {props.heading}
        </h1>
      </div>
    </div>
  );
};
