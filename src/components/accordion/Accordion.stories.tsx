
import {action} from '@storybook/addon-actions';
import  Accordion  from './Accordion';
import {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event");
const onClickcallback = action("some item was clicked");

export const MenuCollapsedMode = () => <Accordion items={[]} titleValue={"Menu"} collapsed={true} onChange={callback} onClick={onClickcallback}/>

export const UsersUnCollapsedMode = () => <Accordion items={ [{title: "Alex", value: 1}, {title: "Ivan", value: 2}, {title: "Roman", value: 3},
    {title: "Oleg", value: 4}, {title: "Viktor", value: 5}] } titleValue={"Menu"} collapsed={false} onChange={callback} onClick={onClickcallback}/>

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion titleValue={"Users"} collapsed={collapsed} onChange={()=>setCollapsed(!collapsed)}
                      items={[
                          {title: "Alex", value: 1},
                          {title: "Ivan", value: 2},
                          {title: "Roman", value: 3},
                          {title: "Oleg", value: 4},
                          {title: "Viktor", value: 5}
                      ]}
                      onClick={(value) => alert(`user ${value} have to happy`)}
    />
}