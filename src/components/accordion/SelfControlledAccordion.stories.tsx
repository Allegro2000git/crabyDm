
import {action} from '@storybook/addon-actions';
import  SelfControlledAccordion  from './SelfControlledAccordion';


export default {
    title: 'SelfControlledAccordion',
    component: SelfControlledAccordion,
};

const callback = action("accordion mode change event");


export const ModeChanging = () => {

    return <SelfControlledAccordion titleValue={"Users"}/>
}  