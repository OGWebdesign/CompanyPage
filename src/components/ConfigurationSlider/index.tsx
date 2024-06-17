
import { useEffect, useState } from "react"

type ConfigurationSliderProps = {
  onChange: (value: number) => void;
}
 
export const ConfigurationSlider = (props:ConfigurationSliderProps) => {
    const [value, setValue] = useState(0); // Anfangswert des Sliders
  
    const handleChange = (event: any) => {
      setValue(event.target.value);
      props.onChange(value);
    };

    useEffect(() => {
      if(value == 0){
        props.onChange(0);
      }  else {
        props.onChange(value);
      }
    },[value])

  
    return (
      <div className="w-full flex flex-col justify-center items-center ">
        <input className="custom-slider h-2 bg-[#636363] select-none duration-500 transition-all rounded-lg appearance-none cursor-pointer accent-[#98f144] w-[20rem]"
          type="range"
          min={0}
          max={50000}
          value={value}
          onChange={handleChange}
          step={500}
        />
        <p className="text-center text-[#98f144] font-mono mt-4 text-[1.4rem]">{value}$</p>
      </div>
    );
  };
  
