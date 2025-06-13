import {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo',
}

/*export const SimpleExample = () => {
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
}*/

    export const ResetEffect = () => {
        const [counter, setCounter] = useState(1);

        useEffect(() => {
            console.log('Effect occurred')

            return () => {
                console.log('Reset effect')
            }
        }, [counter])

    return <>
        Hello, counter: {counter}
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        const handler =(e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        };
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState("")

    useEffect(() => {
      const timeout = setTimeout(() => {
            setText('3 seconds passed')
        },3000)

        return () => {
          clearTimeout(timeout)
        }
    }, [text])

    return <>
        text: {text}
    </>
}