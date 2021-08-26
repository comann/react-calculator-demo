import HoverContainer from "./Hoverable"

const styles = {
  button: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: '3px',
    margin: 6,
    width: 50,
    height: 50,
    background: 'white',
    color: 'black',
    border: '2px solid white'
    
  }
}

//Button.js
export default function Button(props) {
  return <HoverContainer onClick={() => props.onClick(props.value)}>
    <div style={styles.button}> {props.text} </div>
  </HoverContainer>
}

