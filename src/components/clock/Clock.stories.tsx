import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}

export const BaseAnanlogExample = () => {
    return <Clock mode={'analog'} />
}

export const BaseDigitalExample = () => {
    return <Clock mode={'digital'} />
}