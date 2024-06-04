type HeadingProps = {
  heading: string;
};

export const Heading = (props: HeadingProps) => {
  return (
    <div className="w-full px-8 pt-8">
      <h1
        className="mobile:w-full tablet:w-[90%] mobile:text-[1.7rem] 
      tablet:text-[2rem] desktop:w-[43%] desktop-l:w-[] desktop-xl:w-[] desktop-xxl:w-[]
      font-bold inline "
      >
        {props.heading}
      </h1>
    </div>
  );
};
