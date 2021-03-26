import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  const [valueA, setValueA] = useState("Learn React");
  
  const [stateA, setStateA] = useState(true);
  
  const [titleH1, setTitleH1] = useState();
  
  useEffect(() => {
    stateA ? setStateA(false) : console.log("Texto do anchor mudou!")
  }, [valueA]);

  const handleClick = () => {
    setValueA("Continue to Practice with React")
  }

  const handleClick2 = () => {
    setTitleH1('Título Original')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{titleH1}</h1>
        <Button func = {handleClick2} text = "Add Título"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Olha só.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {valueA}
        </a>
        <Button func = {handleClick} text = "Clique aqui" />
      </header>
    </div>
  );
}

export default App;
