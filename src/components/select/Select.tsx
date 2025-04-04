import styles from "./Select.module.css"
import {useState, KeyboardEvent, useEffect} from "react";

type ItemType = {
    title: string;
    value: any;
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void;
    items: ItemType[];
}

function Select(props: SelectPropsType) {

    const [active, setActive] = useState<boolean>(false);
    const [hoveredElementValue, setHoveredElementValue] = useState<boolean>(props.value);

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value])


    const toggleItems = () => setActive(!active);

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (hoveredElementValue === props.items[i].value) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false);
        }
    }
    return (
        <>
            <div className={styles.select} tabIndex={0} onKeyUp={onKeyUp}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div onMouseEnter={()=>setHoveredElementValue(i.value)} className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                            key={i.value}
                            onClick={()=> onItemClick(i.value)}>
                            {i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    );
}

export default Select;