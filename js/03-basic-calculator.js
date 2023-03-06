// IMPORT THE MODULE
import * as calc from './modules/calculator.js'
let again = 'y'
do {
  // COLLECT FIRST NUMBER FROM USER
  let fnum = Number(prompt('Enter first number: '))
  // COLLECT SECOND NUMBER FROM USER
  let snum = Number(prompt('Enter second number: '))
  // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
  let oper = String(prompt('Enter +, -, *, /'))
  const op = ['+', '-', '*', '/']
  if (!op.includes(oper)) {
    alert('Use operator symbol, not vocabulary!')
  }
  // // CHECK TO SEE WHAT OPERATION THEY'RE USING
  console.log(oper)
  // CALL THE APPROPRIATE FUNCTION
  switch (oper) {
    case '+':
      alert(
        'addition ' +
          fnum +
          ' ' +
          oper +
          ' ' +
          snum +
          ' ' +
          '=' +
          ' ' +
          calc.add(fnum, snum)
      )
      document.write(`addition =  + calc.add(${fnum}, ${snum})`)
      break
    case '-':
      alert(
        'subtraction ' +
          fnum +
          ' ' +
          oper +
          ' ' +
          snum +
          ' ' +
          '=' +
          ' ' +
          calc.sub(fnum, snum)
      )
      break
    case '*':
      alert(
        'multiplication ' +
          fnum +
          ' ' +
          oper +
          ' ' +
          snum +
          ' ' +
          '=' +
          ' ' +
          calc.mult(fnum, snum).toFixed(2)
      )
      break
    case '/':
      alert(
        'division ' +
          fnum +
          ' ' +
          oper +
          ' ' +
          snum +
          ' ' +
          '=' +
          ' ' +
          calc.div(fnum, snum)
      )
      break
    default:
      console.log(`Sorry, this does not compute.`)
  }
  444
  again = prompt("Run application again? ('y' or 'n')", 'y')
} while (again === 'y' || again !== 'n')
alert('Application has exited.')
