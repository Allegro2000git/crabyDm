import {memo} from "react";

type ItemType = {
    title: string;
    value: any;
}

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void;
    items: ItemType[]
    onClick: (value: any) => void;
}

type AccordionTitlePropsType = {
    title: string;
    onChange: () => void;
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void;
}

function  Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBodyValues onClick={props.onClick} items={props.items}/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>props.onChange()}>{props.title}</h3>
}

const AccordionBodyValues= memo(AccordionBody);

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        { props.items.map((i, index) => <li onClick={()=> props.onClick(i.value)} key={index}>{i.title}</li> ) }
    </ul>
}

export default Accordion;
