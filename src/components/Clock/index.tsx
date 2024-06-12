import  { useState, useEffect } from 'react';


export const Clock = () => {
    { /* aktuelle Zeit gespeichert*/}
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        //jede Sekunde aktualisieren
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000); 
        //Invervall zurücksetzen
        return () => clearInterval(interval);
    }, []);

    { /* Zeit formatieren (ob 0 davor oder nicht) */}
    const formatTimeUnit = (unit : number) => (unit < 10 ? `0${unit}` : unit);

    const hours = formatTimeUnit(time.getHours());
    const minutes = formatTimeUnit(time.getMinutes());

    return (
        <div className="flex justify-center items-center">
            <div className="relative border-2 border-[#98f144] rounded-sm shadow-2xl font-mono text-[2rem]">
                <TimeUnitDisplay hours={hours} minutes={minutes} />
            </div>
        </div>
    );
};

{/* Uhr Props */}
type TimeUnitDisplayProps = {
    hours: string | number;
    minutes: string | number;
};

{/* Hilfskomponent eigentliche Uhr */}
const TimeUnitDisplay = (props : TimeUnitDisplayProps) => (
    <div className="bg-[#151515] p-2">
        <span className="bg-[#98f144] text-[#151515]">{props.hours}</span>
        <span className='text-[#98f144] '>:</span>
        <span className="border-b-[#98f144] border-b-2 text-slate-200">{props.minutes}</span>
    </div>
);


