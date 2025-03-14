import {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}


function UnControlledAccordion(props: AccordionPropsType) {


    let [collapsed, setCollapsed] = useState(false);


    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
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