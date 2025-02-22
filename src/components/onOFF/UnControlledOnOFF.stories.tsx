import {action} from '@storybook/addon-actions';
import UnControlledOnOFF from "./UnControlledOnOFF";



export default {
    title: 'UnControlledOnOFF',
    component: UnControlledOnOFF,
}

const callback = action("on or off clicked");

export const OnMode = () => <UnControlledOnOFF defaultOn={true} onChange={callback}/>;
export const OffMode = () => <UnControlledOnOFF defaultOn={false} onChange={callback}/>;
