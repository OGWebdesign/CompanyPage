type HeadingProps = {
  heading: string;
};

export const Heading = (props: HeadingProps) => {
  return (
    <div className="w-full px-8 pt-8">
      <h1
        className="inline mobile:w-full bg-[#98f144] tablet:w-[90%] mobile:text-[1.7rem] 
      tablet:text-[2rem] desktop:w-[43%] desktop-l:w-[] desktop-xl:w-[] desktop-xxl:w-[]
      font-bold text-center"
      >
        {props.heading}
      </h1>
    </div>
  );
};
