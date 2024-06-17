import { useEffect, useState } from "react";

type PriceCardProps = {
    title: string,
    weeks: number | undefined,
    package: number | undefined
}



export const PriceCard = (props: PriceCardProps) => {

    {/* Preiskonstanten */}
    {/* ONE PAGER */}
    const OnePagerPrice = 1050;
    {/* START UP */}
    const StartUpPrice6to8weeks = 2500;
    const StartUpPrice8to10weeks = 2300;
    const StartUpPrice10to12weeks = 2100;
    {/* BUSINESS */}
    const BusinessPrice6to8weeks = 5200;
    const BusinessPrice8to10weeks = 4800;
    const BusinessPrice10to12weeks = 4500;

    {/* Bestimmung der Preise durch Angabe der Auswahl
        weeks: 1-(6-8), 2-(8-10), 3-(10-12)
        package: 1-(OnePager), 2-(Start Up), 3-(Business)
    */}
    const price = (weeksSelected : number | undefined, packageSelected : number | undefined) : number | undefined => {
        console.log(props.weeks,props.package);
        switch(packageSelected){
            /* OnePager */
            case 1 :
                {/* 4-6 Wochen ausgewählt */}
                return OnePagerPrice;       
            break;
            {/* Start Up Package */}
            case 2 : 
                {/* 6-8 Wochen */}
                if (weeksSelected === 1){
                    return StartUpPrice6to8weeks;
                } 
                /* 8-10 Wochen */
                else if (weeksSelected === 2){
                    return StartUpPrice8to10weeks;
                }
                /* 10-12 Wochen */
                else if (weeksSelected === 3){
                    return StartUpPrice10to12weeks;
                }
            break;
            {/* Business Package */}
            case 3 :
                 {/* 6-8 Wochen */}
                 if (weeksSelected === 1){
                    return BusinessPrice6to8weeks;
                 } 
                 /* 8-10 Wochen */
                 else if (weeksSelected === 2){
                    return BusinessPrice8to10weeks;
                 }
                 /* 10-12 Wochen */
                 else if (weeksSelected === 3){
                    return BusinessPrice10to12weeks;
                 }
             break;
            default:
                return 0;
            break;
        }
    }

    

    /* Ist der angezeigte Preise */
    const [currentPrice, setCurrentPrice] = useState(price(props.weeks,props.package));

    /* Wird für Rabattfunktion benötigt, da sonst der Ausgangspreis bei der Berechnung verloren geht */
    const defaultPrice = (price(props.weeks,props.package));


    {/* Funktion für Punkt beim Preis */}
    function priceDot(priceActual: number) {

        if (!priceActual){
            return 0;
        }
        
        if(priceActual < 1000)
        {
            //Nachkommastellen abschneiden und als String returnen
            return priceActual.toFixed(0).toString();
        } 
        else 
        {     
            // Nachkommastellen abschneiden
            const roundedPrice = priceActual.toFixed(0);
            {/* 
                1. Preis in String umwandeln
                2. \B : Matcht eine Position, die nicht am Anfang oder Ende eines Wortes ist
                3. (\d{3})+(?!\d))/g -> LookAhead nach Sequenz von 3 Ziffern und positioniert aktuelle Position vor dieser Sequenz
                4. Punkt einfügen
            */}
            return roundedPrice.toString().replace(/\B(?=f(\d{3})+(?!\d))/g, ".");
        } 
        
        
    }
 
    /* Ist die CheckBox ausgewählt */
    const [selected, setSelected] = useState(false);


    /* Hook um Preisänderungen durch Paketwechsel durchzuführen */
    useEffect(() => {
        if (!selected){
            setCurrentPrice(defaultPrice!);
        } else {
            setCurrentPrice(defaultPrice! - (defaultPrice! * 0.05));
        }
    },[props.weeks, props.package,selected])


    return (
        /* WRAPPER */
        <div className="w-[25rem] flex flex-col justify-center items-center bg-slate-200 mt-[5rem] px-10 py-3 font-mono rounded-xl">

             {/* TITLE */}
            <span className="text-[#151515] text-[2rem] leading-none pb-1">{props.title}</span>

            {/* CHECKBOX */}
            <div className="flex justify-evenly items-center mt-[1rem]">
                <input onClick={() => {
                    setSelected(!selected);
                }} type="checkbox" className="h-6 w-6 rounded-full bg-[#98f144] border-2 border-[#151515] cursor-none" 
                />
                <p className="text-[#151515] text-[1rem] ml-3">Impressum Brand :  <span className="border-b-2 border-b-[#151515]">5% Rabatt</span></p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[0.7rem] w-[15rem] text-center">
                An imprint brand is a reference to us and it is explicitly mentioned that OG-Webdesign created this site.
            </p>

            {/* PRICE */}
            <span className={`text-[#151515] text-[1.6rem] inline-block bg-[#98f144] mt-[1.5rem]`}>{priceDot(currentPrice!)},00€</span>
            

        </div>
    );
}