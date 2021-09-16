import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import NumericPad from './components/NumericPad'
import utils from './util'

const tiles = [ 
  { text: '7', textSize: "30px", textWeight: "", value: 7, backgroundColor:"lightgray", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: '8', textSize: "30px", textWeight: "", value: 8, backgroundColor:"lightgray", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: '9', textSize: "30px", textWeight: "", value: 9, backgroundColor:"lightgray", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: utils.DIVISION, textSize: "30px", textWeight: "", value: utils.DIVISION, backgroundColor:"#FF8000", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: '4', textSize: "30px", textWeight: "", value: 4, backgroundColor: "lightgray", textColor: "",buttonWidth:'50px', buttonHeight:''},
  { text: '5', textSize: "30px", textWeight: "", value: 5, backgroundColor: "lightgray", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: '6', textSize: "30px", textWeight: "", value: 6, backgroundColor: "lightgray", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: '*', textSize: "30px", textWeight: "", value: utils.PRODUCT, backgroundColor: "#FF8000", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: '1', textSize: "30px", textWeight: "", value: 1, backgroundColor: "lightgray", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: '2', textSize: "30px", textWeight: "", value: 2, backgroundColor: "lightgray", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: '3', textSize: "30px", textWeight: "", value: 3, backgroundColor: "lightgray", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: utils.SUBTRACTION, textSize: "30px", textWeight: "", value: utils.SUBTRACTION, backgroundColor: "#FF8000", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: '0', textSize: "30px", textWeight: "", value: 0, backgroundColor: "lightgray", textColor: "", buttonWidth:'116px', buttonHeight:''},
  { text: utils.DECIMAL, textSize: "30px", textWeight: "900", value: utils.DECIMAL, backgroundColor: "gray", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text:  utils.ADDITION, textSize: "30px", textWeight: "", value: utils.ADDITION, backgroundColor: "#FF8000", textColor: "", buttonWidth:'50px', buttonHeight:''},
  { text: utils.CLEAR, textSize: "30px", textWeight: "900", value: utils.CLEAR, backgroundColor: "grey", textColor: "", buttonWidth:'116px', buttonHeight:''},
  { text: utils.SUBMIT, textSize: "30px", textWeight: "900", value: utils.SUBMIT, backgroundColor: "grey", textColor: "", buttonWidth:'116px', buttonHeight:''}
 ]

function App() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: "column"}}>
      <img src={logo} className="App-logo" alt="logo" />
      <NumericPad>
        { tiles.map(x => <Button {...x} onClick={utils.onUserInput} />) }
        </NumericPad>
      
      
    </div>
  );
}
 

export default App;
