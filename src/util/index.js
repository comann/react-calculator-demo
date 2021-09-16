
const queue = []

const PRODUCT = '*';
const DECIMAL = '.';
const DIVISION = '/'
const SUBTRACTION = '-';
const ADDITION = '+';
const SUBMIT = '=';
const CLEAR = 'CE'
const util = {
  PRODUCT, DECIMAL, DIVISION, SUBTRACTION, ADDITION, SUBMIT, CLEAR,

  onUserInput(value) {
    if(value !== SUBMIT){
      queue.push(value)
    }

    console.log(queue)
    
    if(value === PRODUCT){

    }else if(value === ADDITION){

    }else if(value === DIVISION){

    } else if(value === SUBMIT){
      while(queue.length > 0){
        console.log(queue.shift())
      }

    }else if(value === SUBTRACTION){

    }else {
      // NUMERICAL INPUT
    }

  }
}


function convertNumber(arr) {
  console.log('input is ', arr);
  let output = 0;


  console.log('output is ', output)

  return output
}

convertNumber([1,5,3])

export default util