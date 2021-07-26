import { useEffect, useState } from "react"

const setZero = n => n < 10 ? "0" + n : n;

const ClockWithHook = () => {
    const [time, setTime] = useState(new Date());

    const hour =setZero(time.getHours());
    const minute =setZero(time.getMinutes());
    const seconds =setZero(time.getSeconds());

    useEffect(() => {
        setTimeout(() => {setTime(new Date())}, 1000)
    }, [time])

    return <h1>{hour}:{minute}:{seconds}</h1>
}

export default ClockWithHook;