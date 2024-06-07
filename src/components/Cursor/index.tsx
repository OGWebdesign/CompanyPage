import { useEffect, useState } from 'react';


const Cursor = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);
  const clickStyle = click ? "bg-[#151515] text-slate-200 border-2 border-slate-200" : "bg-[#98f144] text-[#151515] border-none";

 
  useEffect(() => {
    // Event-Handler für Mausbewegung
    const mouseMoveHandler = (event: { clientX: any; clientY: any; }) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

   
    const mouseDownHandler = () => {
      setClick(true);
    };

    
    const mouseUpHandler = () => {
      setClick(false); 
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);

 
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  }, []); // Leeres Array als Abhängigkeit bedeutet, dass der Effekt nur einmalig nach dem ersten Rendern ausgeführt wird

  // Cursor-Element mit Stil und Position
  return (
    <div
      className={`fixed flex ${clickStyle} justify-center items-center font-mono font-bold w-[25px] h-[25px] rounded-[50%] pointer-events-none z-50`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      OG
    </div>
  );
};

export default Cursor;
