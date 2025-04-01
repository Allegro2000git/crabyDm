import {memo, useMemo, useState} from "react";

export default {
    title: 'useState demo',
}

function generateData() {
    return 3284982732
}

export const Example1 = () => {

    const [counter, setCounter] = useState(generateData);

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}