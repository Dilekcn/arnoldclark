let player = prompt('Rock, Paper, Scissors, Lizard, Spock \nEnter your gesture:').toLowerCase()
const items = ['rock', 'paper', 'scissors', 'lizard', 'spock']
while(!items.includes(player)) {
  alert('Enter a valid gesture!')
  player = prompt('Rock, Paper, Scissors, Lizard, Spock \nEnter your gesture:').toLowerCase()
}

const randomItem = items[Math.floor(Math.random() * items.length)]

console.log(player, randomItem)

if(player == 'rock' && randomItem == 'lizard'){
  console.log('Congrats... You won.')
} else if(player == 'rock' && randomItem == 'scissors'){
  console.log('Congrats... You won.')
} else if(player == 'paper' && randomItem == 'rock'){
  console.log('Congrats... You won.')
} else if(player == 'paper' && randomItem == 'spock'){
  console.log('Congrats... You won.')
} else if(player == 'scissors' && randomItem == 'paper'){
  console.log('Congrats... You won.')
} else if(player == 'scissors' && randomItem == 'lizard'){
  console.log('Congrats... You won.')
} else if(player == 'lizard' && randomItem == 'spock'){
  console.log('Congrats... You won.')
} else if(player == 'lizard' && randomItem == 'paper'){
  console.log('Congrats... You won.')
} else if(player == 'spock' && randomItem == 'scissors'){
  console.log('Congrats... You won.')
} else if(player == 'spock' && randomItem == 'rock'){
  console.log('Congrats... You won.')
} else if( randomItem == 'rock' && player == 'lizard'){
  console.log('Ohhh... You lost.')
} else if( randomItem == 'rock' && player == 'scissors'){
  console.log('Ohhh... You lost.')
} else if( randomItem == 'paper' && player == 'rock'){
  console.log('Ohhh... You lost.')
} else if( randomItem == 'paper' && player == 'spock'){
  console.log('Ohhh... You lost.')
} else if( randomItem == 'scissors' && player == 'paper'){
  console.log('Ohhh... You lost.')
} else if( randomItem == 'scissors' && player == 'lizard'){
  console.log('Ohhh... You lost.')
} else if( randomItem == 'lizard' && player == 'spock'){
  console.log('Ohhh... You lost.')
} else if( randomItem == 'lizard' && player == 'paper'){
  console.log('Ohhh... You lost.')
} else if( randomItem == 'spock' && player == 'scissors'){
  console.log('Ohhh... You lost.')
} else if( randomItem == 'spock' && player == 'rock'){
  console.log('Ohhh... You lost.')
} else {
  console.log('Draw.')
}