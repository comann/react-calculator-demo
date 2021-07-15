import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import NumericPad from './components/NumericPad'
const tiles = [ 
  { text: '7', value: 7},
  { text: '8', value: 8},
  { text: '9', value: 9},
  { text: '/', value: 0},
  { text: '4', value: 0},
  { text: '5', value: 0},
  { text: '6', value: 0},
  { text: '*', value: 0},
  { text: '1', value: 0},
  { text: '2', value: 0},
  { text: '3', value: 0},
  { text: '-', value: 0},
  { text: '0', value: 0},
  { text: '.', value: 0},
  { text: '=', value: 0},
  { text: '+', value: 0}
 ]

function App() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: "column"}}>
      
        <img src={logo} className="App-logo" alt="logo" />
       <NumericPad>
       {
  tiles.map(x => {
      return <Button text={x.text} value={x.value} onClick={handleButtonClick} />
  })
}
        </NumericPad>
      
      
    </div>
  );
}
 
function handleButtonClick(value) {
  alert(value)
  
}

export default App;
