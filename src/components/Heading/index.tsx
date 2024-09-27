type HeadingProps = {
  heading: string,
  classname?:string,
  headstyle?:string
};

export const Heading = (props: HeadingProps) => {

  return (
    <div className={`w-full  flex ${props.classname} `}>
      <div className="w-3/4 p-3">
        <h1
          className={`font-sharemono leading-[1.25] ${props.headstyle} select-none mobile:text-[1.7rem] 
                    tablet:text-[2.5rem] desktop-xl:text-[4.5rem] `}
        >
          {props.heading}
        </h1>
      </div>
    </div>
  );
};
