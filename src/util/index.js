
const queue = []

const PRODUCT = '*';
const DECIMAL = '.';
const DIVISION = '/'
const SUBTRACTION = '-';
const ADDITION = '+';
const EQUALS = '=';

const util = {
  PRODUCT, DECIMAL, DIVISION, SUBTRACTION, ADDITION, EQUALS,

  onUserInput(value) {
    if(value !== EQUALS){
      queue.push(value)
    }

    console.log(queue)
    
    if(value === PRODUCT){

    }else if(value === ADDITION){

    }else if(value === DIVISION){

    } else if(value === EQUALS){
      while(queue.length > 0){
        console.log(queue.shift())
      }

    }else if(value === SUBTRACTION){

    }else {
      // NUMERICAL INPUT
    }

  }
}

export default util