import './App.css';
import Rating, {RatingValueType} from './components/rating/Rating';
import OnOFF from "./components/onOFF/OnOFF";
import UnControlledAccordion from "./components/accordion/SelfControlledAccordion";
import UnControlledRating from "./components/rating/SelfControlledRating";
import Accordion from "./components/accordion/Accordion";
import {useState} from "react";
import UnControlledOnOFF from "./components/onOFF/UnControlledOnOFF";
import {Clock} from "./components/clock/Clock";

type PageTitlePropsType = {
    title: string;
}

function App() {

   let[ratingValue, setRatingValue] = useState<RatingValueType>(0);
   let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
   let [switchOn,setSwitchOn] = useState<boolean>(false);


    return (
        <div className="App">
            <OnOFF on={switchOn} onChange={setSwitchOn}/>
            <UnControlledOnOFF onChange={setSwitchOn}/>
            <PageTitle title={"This is APP component"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating onChange={setRatingValue}/>
            <UnControlledAccordion titleValue={"Menu"}/>
 {/*        <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>*/}
            <Clock/>
        </div>
    );
}


function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}

export default App;
