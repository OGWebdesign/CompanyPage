import { LeftArrowIcon } from "../Icons";

export const SideBar = () => {
    return(
        <div className="fixed w-[3rem] top-1/2 right-0 transform -translate-y-1/2 translate-x-0 hover:translate-x-0 bg-[#98f144] text-[#151515] p-4 
        rounded-l-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
        <div className="">
        <LeftArrowIcon className="bg-fill-[#151515]" />
        </div>
        </div>
    );
}