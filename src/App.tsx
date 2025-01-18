import React from 'react';
import './App.css';
//import {Accordion} from "./components/accordion/Accordion";
//import { Rating } from './components/rating/Rating';
import {OnOFF} from "./components/onOFF/OnOFF";

type PageTitlePropsType = {
    title: string
}

function App() {
  return (
    <div className="App">
        <OnOFF/>



{/*   <PageTitle title={"This is APP component"}/>
      <Rating value={0}/>
      <Accordion titleValue={"Menu"} collapsed={true}/>
      <Accordion titleValue={"User"} collapsed={false}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>*/}
    </div>
  );
}


/*function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}*/

export default App;
