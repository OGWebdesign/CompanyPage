type HeadingProps = {
  heading: string;
};

export const Heading = (props: HeadingProps) => {
  return (
    <h1
      className="mobile:w-full pt-8 px-8 tablet:w-[90%] laptop:w-[60%] font-bold mobile:text-[1.7rem] 
      tablet:text-[2rem] desktop:w-[43%] desktop-l:w-[] desktop-xl:w-[] desktop-xxl:w-[]"
    >
      {props.heading}
    </h1>
  );
};
