let userName = prompt("Hello, What is your name?")

let responseImg = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
let greeting = document.getElementById('greeting')



//Input user name to website//
userName ? greeting.innerText=`Hello, ${userName}!` 
: greeting.innerText=`Hello Stranger!`


function shakeMagic8Ball(){
    //Get User Question//
let userQuestion = prompt("What would you like to ask the magic 8Ball?");

//DO NOT TOUCH THIS CODE!//
const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber)
let eightBall = ''
let imageChoice = ''
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    imageChoice = 'imgs/'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    imageChoice = 'imgs/'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    imageChoice = 'imgs/'
    break;
  case 3:
   eightBall = 'Cannot predict now'
   imageChoice = 'imgs/'
    break;
  case 4:
    eightBall = 'Do not count on it'
    imageChoice = 'imgs/'
    break;
  case 5:
    eightBall = 'My sources say no'
    imageChoice = 'imgs/'
    break;
  case 6:
    eightBall = 'Outlook not so good'
    imageChoice = 'imgs/'
    break;
  case 7:
    eightBall = 'Signs point to yes'
    imageChoice = 'imgs/'
    break;
}
console.log(`The eight ball answered:${eightBall}`);

responseText.innerText = `${userName} has asked ${userQuestion} to the almighty 8 Ball? The 8 ball has replied ${eightBall}!`

responseImg.src = imageChoice
}

