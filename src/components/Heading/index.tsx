type HeadingProps = {
  heading: string,
  classname?:string,
  headstyle?:string
};

export const Heading = (props: HeadingProps) => {

  return (
    <div className={`w-full px-8 pt-8 flex ${props.classname} `}>
      <div className="mobile:w-full tablet:w-[60%] laptop:w-1/2">
        <h1
          className={`font-sharemono leading-[1.25] ${props.headstyle} select-none mobile:text-[1.7rem] 
                    tablet:text-[2.5rem] desktop-xl:text-[3.5rem] `}
        >
          {props.heading}
        </h1>
      </div>
    </div>
  );
};
