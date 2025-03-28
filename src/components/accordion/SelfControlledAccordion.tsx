import {useReducer} from "react";
import {AccordionReducer} from "./SelfControlledAccordion-reducer";

type AccordionPropsType = {
    titleValue: string;
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}


function UnControlledAccordion(props: AccordionPropsType) {

    let [state, dispatch] = useReducer(AccordionReducer, { collapsed: false });

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={ () => dispatch({type: "TOGGLE-COLLAPSED"}) }/>
            {!state.collapsed && <AccordionBody/>}
        </div>
        )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>
        </div>

    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default UnControlledAccordion;