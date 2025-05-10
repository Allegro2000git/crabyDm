import {useEffect, useState} from "react";

type Props = {

}

const get2digitsString = (num: number) => num < 10 ? "0" + num : num

const Clock = ({}:Props) => {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
        )
}
export default Clock