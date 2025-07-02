import { useState } from 'react';
import './App.css';

// const Person =(props)=>{
//   return (
//     <>
//     <h1>First Name: {props.name}</h1>
//     <h2>Last Name: {props.lastName}</h2>
//     <h2>Age: {props.age}</h2>
//     </>
//   )
// }

const App=()=>{
  const [] = useState();
  // const name=null;
  // const isNameShowing=false;
  // const isNameShowing=false;
  return (
    <div className="App">
      <button>-</button>
      <h1>0</h1>
      <button>+</button>
      {/* <Person name="Vedant" lastName="Jalan" age={21}/>
      <Person name="John" lastName="Doe" age={30}/> */}
      {/* <h1>Hello {isNameShowing ? name : "Buddy"}!</h1>
      {name ? (
        <>
          test
        </>
      ): (
        <>
          <h1>Test</h1>
          <h2>There is no name</h2>
        </>
      )} */}
    </div>
  );
}

export default App;
