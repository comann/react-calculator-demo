import HoverContainer from "./Hoverable"

const styles = {
  button(backgroundColor, textColor, textWeight, buttonWidth, buttonHeight, textSize) {
    return {
      background: backgroundColor ? backgroundColor : "white",
      color: textColor ? textColor : "black",
      width: buttonWidth ? buttonWidth : "500px",
      fontSize: textSize ? textSize : "100px",
      height: buttonHeight ? buttonHeight : "50px",
      fontWeight: textWeight ? textWeight : "300",

    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: '4px',
    margin: 6,
    border: '2px solid white'
    }
  } 
  }



//Button.js
export default function Button(props) {

 return <HoverContainer>
    <div style={styles.button(props.backgroundColor, props.textColor, props.textWeight, props.buttonWidth, props.buttonHeight, props.textSize)}> {props.text} </div>
  </HoverContainer>
}

