import logo from './logo.svg';
import './App.css';
import './components/Button.css'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
        <div className="Button0"> <Button text="0" value ={0} onClick={handleButtonClick} /></div>
        <div className="Button1"> <Button text="1" value ={1} onClick={handleButtonClick} /></div>
        <div className="Button2"> <Button text="2" value ={2} onClick={handleButtonClick} /></div>
        <div className="Button3"> <Button text="3" value ={3} onClick={handleButtonClick} /></div>
        <div className="Button4"> <Button text="4" value ={4} onClick={handleButtonClick} /></div>
        <div className="Button5"> <Button text="5" value ={5} onClick={handleButtonClick} /></div>
        <div className="Button6"> <Button text="6" value ={6} onClick={handleButtonClick} /></div>
        <div className="Button7"> <Button text="7" value ={7} onClick={handleButtonClick} /></div>
        <div className="Button8"> <Button text="8" value ={8} onClick={handleButtonClick} /></div>
        <div className="Button9"> <Button text="9" value ={9} onClick={handleButtonClick} /></div>
        
      
      </header>
    </div>
  );
}
 
function handleButtonClick(value) {
  alert(value)
  
}

export default App;
