import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
 
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />{/*React.memo compares new value with old state .false is boolean that is primitive value*/}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>{/*comparision of two non-primitive values are always false even if they are same every element in js is unique*/}
    </div>
  );
}

export default App;
