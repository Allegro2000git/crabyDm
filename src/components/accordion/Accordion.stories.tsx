
import {action} from '@storybook/addon-actions';
import  Accordion  from './Accordion';
import {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event");

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}/>

export const UsersUnCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={false} onChange={callback}/>

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion titleValue={"Users"} collapsed={collapsed} onChange={()=>setCollapsed(!collapsed)}/>
}