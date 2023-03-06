// ADD A PRIVATE FUNCTION CALLED CALCULATE

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
const add = (num1, num2) => {
  let result = 0
  let firstNum = num1
  let secondNum = num2
  result = firstNum + secondNum
  return result
}
// SUBTRACT FUNCTION
const sub = (num1, num2) => {
  let result = 0
  let firstNum = num1
  let secondNum = num2
  result = firstNum - secondNum
  return result
}
// MULTIPLY FUNCTION
const mult = (num1, num2) => {
  let result = 0
  let firstNum = num1
  let secondNum = num2
  result = firstNum * secondNum
  return result
}
// DIVIDE FUNCTION
const div = (num1, num2) => {
  let result = 0
  let firstNum = num1
  let secondNum = num2
  result = firstNum / secondNum
  return result.toFixed(2)
}
// EXPORT THE FOUR PUBLIC FUNCTIONS
export { add, sub, mult, div }
