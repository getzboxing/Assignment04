//STEP 1
function halfNumber(num) {
  return document.write(`Half of ${num} is ${num / 2}. `)
}
halfNumber(17)
//STEP 2
function squareNumber(num) {
  return document.write(`The square of ${num} is ${num * num}. `)
}
squareNumber(4)
//STEP 3
function percentOf(num1, num2) {
  return document.write(
    `${num1} is ${(num1 / num2).toFixed(2) * 100}% of ${num2}.  `
  )
}
percentOf(13, 21)
//STEP 4
function findModulus(num1, num2) {
  return document.write(
    `(${num1} / ${num2}) leaves a remainder of ${num1 % num2}`
  )
}
findModulus(25, 7)

//STEP 5
