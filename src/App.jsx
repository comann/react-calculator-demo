import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import NumericPad from './components/NumericPad'
import utils from './util'

const tiles = [ 
  { text: '7', value: 7},
  { text: '8', value: 8},
  { text: '9', value: 9},
  { text: '/', value: utils.DIVISION},
  { text: '4', value: 4},
  { text: '5', value: 5},
  { text: '6', value: 6},
  { text: '*', value: utils.PRODUCT},
  { text: '1', value: 1},
  { text: '2', value: 2},
  { text: '3', value: 3},
  { text: '-', value: utils.SUBTRACTION},
  { text: '0', value: 0},
  { text: '.', value: utils.DECIMAL},
  { text: '=', value: utils.EQUALS},
  { text: '+', value: utils.ADDITION}
 ]

function App() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: "column"}}>
      <img src={logo} className="App-logo" alt="logo" />
      <NumericPad>
       {
          tiles.map(x => {
            return <Button text={x.text} value={x.value} onClick={utils.onUserInput} />
          })
        }
      </NumericPad>
    </div>
  );
}
 

export default App;
