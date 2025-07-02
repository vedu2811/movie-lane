import './App.css';

const Person =()=>{
  return (
    <>
    <h1>First Name: Vedant</h1>
    <h2>Last Name: Jalan</h2>
    <h2>Age: 21</h2>
    </>
  )
}

const App=()=>{
  // const name=null;
  // const isNameShowing=false;
  // const isNameShowing=false;
  return (
    <div className="App">
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
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
