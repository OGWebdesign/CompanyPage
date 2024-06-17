
import { useState } from "react"

export const ConfigurationSlider = () => {
    const [value, setValue] = useState(0); // Anfangswert des Sliders
  
    const handleChange = (event:any) => {
      setValue(event.target.value);
    };

  
    return (
      <div className="w-full">
        <input className="custom-slider h-2 bg-[#636363] select-none rounded-lg appearance-none cursor-pointer accent-[#98f144] w-[20rem]"
          type="range"
          min="0"
          max="50000"
          value={value}
          onChange={handleChange}
          step={500}
        />
        <p className="text-center text-[#98f144] font-mono mt-4 text-[1.4rem]">{value}$</p>
      </div>
    );
  };
  
