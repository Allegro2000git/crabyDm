
type OnOFFType = {
    title: string;
    value: boolean;

}

const OnOFF = (props: OnOFFType ) => {
    return (
        <>
        <button>{props.title}</button>
        <button>{props.title}</button>
        </>
    );
}