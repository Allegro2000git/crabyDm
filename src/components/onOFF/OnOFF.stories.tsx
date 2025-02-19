import {action} from '@storybook/addon-actions';
import OnOFF from "./OnOFF";
import {useState} from "react";


export default {
    title: 'OnOFF',
    component: OnOFF,
}

const callback = action("on or off clicked");

export const OnMode = () => <OnOFF on={true} onChange={callback}/>;
export const OffMode = () => <OnOFF on={false} onChange={callback}/>;

export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true);
    return <OnOFF on={value} onChange={setValue}/>
};