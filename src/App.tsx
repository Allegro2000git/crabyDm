
import './App.css';
import { Rating } from './components/rating/Rating';
import {OnOFF} from "./components/onOFF/OnOFF";
import {SelfContolledAccordion} from "./components/accordion/SelfControlledAccordion";
import {UnContolledRating} from "./components/rating/SelfControlledRating";
import {Accordion} from "./components/accordion/Accordion";

type PageTitlePropsType = {
    title: string;
}

function App() {

    return (
        <div className="App">
            <OnOFF/>
            <PageTitle title={"This is APP component"}/>
            <UnContolledRating />
            <Rating value={5}/>
            <SelfContolledAccordion titleValue={"Menu"}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
        </div>
    );
}


function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}

export default App;
