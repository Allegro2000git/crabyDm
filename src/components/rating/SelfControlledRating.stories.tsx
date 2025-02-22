import {action} from '@storybook/addon-actions';
import SelfControlledRating from "./SelfControlledRating";

export default {
    title: 'SelfControlledRating',
    component: SelfControlledRating,
}

const callback = action('rating changed inside');

export const EmptyRating = () => <SelfControlledRating defaultValue={0} onChange={callback} />;
export const Rating1 = () => <SelfControlledRating defaultValue={1} onChange={callback}/>;
export const Rating2 = () => <SelfControlledRating defaultValue={2} onChange={callback}/>;
export const Rating3 = () => <SelfControlledRating defaultValue={3} onChange={callback}/>;
export const Rating4 = () => <SelfControlledRating defaultValue={4} onChange={callback}/>;
export const Rating5 = () => <SelfControlledRating defaultValue={5} onChange={callback}/>;
