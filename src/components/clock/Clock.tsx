import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type Props = {
    mode?: "digital" | 'analog'
}

export const Clock = ({mode}:Props) => {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    let view;

    switch (mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
            default:
                view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    )
}

export type ClockProps = {
    date: Date;
}
