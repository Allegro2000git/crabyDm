import {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo',
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log("every")
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("after 1 render")
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("after 1 render and every counter change")
        document.title = counter.toString();
    }, [counter])
}

    export const SimpleExample2 = () => {
        const [counter, setCounter] = useState(1);

        useEffect(() => {

            setInterval(() => {
                setCounter( (state) => state + 1);
            }, 1000)
        }, [])

    return <>
        Hello, counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>

}