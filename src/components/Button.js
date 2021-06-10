
const styles = {
  button: {
    display: 'inline-block',
    borderRadius: '3px',
    padding: '0.5rem 0',
    margin: '0.5rem 1rem',
    width: '11rem',
    background: 'transparent',
    color: 'white',
    border: '2px solid white',

  }
}

const onButtonClick = (onClick, value) => () => {
onClick(value);
}

//Button.js
export default function Button(props) {
  return <div onClick={() => {props.onClick(props.value)}} style={styles.button}> {props.text} </div>

};