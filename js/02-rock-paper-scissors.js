let computer = '',
  result = ''
let player = prompt("Enter 'ROCK', 'PAPER', or 'SCISSORS'").toUpperCase()
console.log(player)
document.write(`Player chooses: ${player} <br>`)

computerPick()
console.log(computer)
document.write(`Computer chooses: ${computer}<br>`)

declareWinner()
console.log(declareWinner())
document.write(`And the result is: ${declareWinner()}!<br>`)

function computerPick() {
  const randNum = Math.round(Math.random() * 3) + 1

  switch (randNum) {
    case 1:
      computer = 'ROCK'
      break
    case 2:
      computer = 'PAPER'
      break
    case 3:
      computer = 'SCISSORS'
      break
  }
}

function declareWinner() {
  if (player == computer) {
    return 'Draw!'
  } else if (computer == 'ROCK') {
    return player == 'PAPER' ? 'You Win!' : 'You lose!'
  } else if (computer == 'PAPER') {
    return player == 'SCISSORS' ? 'You Win!' : 'You lose!'
  } else if (computer == 'SCISSORS') {
    return player == 'ROCK' ? 'You Win!' : 'You lose!'
  }
}
