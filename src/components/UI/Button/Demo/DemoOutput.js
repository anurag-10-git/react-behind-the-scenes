import React from 'react'

const DemoOutput = (props) => {
    console.log('this is DemoOutput.js');
  return (
    <p>{props.show ? 'This is new!' : ''}</p>
  );
}

export default DemoOutput