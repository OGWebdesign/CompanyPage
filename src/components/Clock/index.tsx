import  { useState, useEffect } from 'react';


export const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

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
type TimeUnitDisplayProps = {
    hours: string | number;
    minutes: string | number;
};
const TimeUnitDisplay = (props : TimeUnitDisplayProps) => (
    <div className=" bg-[#151515] p-2">
        <span className="bg-[#98f144] text-[#151515]">{props.hours}</span>
        <span className='text-[#98f144]'>:</span>
        <span className="border-b-[#98f144] border-b-2 text-slate-200">{props.minutes}</span>
    </div>
);


