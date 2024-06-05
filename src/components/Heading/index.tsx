type HeadingProps = {
  heading: string;
};

export const Heading = (props: HeadingProps) => {
  return (
    <div className="w-full px-8 pt-8 mt-10">
      <div className="w-1/2">
      <h1
        className="font-mono text-[#e6e6e6] select-none tablet:w-[90%] mobile:text-[1.7rem] 
                   mobile:w-3/4 tablet:text-[2.5rem] desktop:w-[20rem] desktop-l:w-1/2 desktop-xl:w-[] desktop-xxl:w-[]"
      >
        {props.heading}
      </h1>
      </div>
    </div>
  );
};
