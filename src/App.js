import './App.css';

const App=()=>{
  const name="Vedant";
  // const isNameShowing=false;
  const isNameShowing=true;
  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : "Buddy"}!</h1>
    </div>
  );
}

export default App;
