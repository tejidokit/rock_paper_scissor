// just for testing
// let x ='testing'

// alert(x);


var rock = "rock";
var paper = "paper";
var scissors = "scissors";

var computerWeapons = [rock, paper, scissors];

// ### function that creates random numbers from array elements ###
function selectElement(element) {
  const random = Math.floor(Math.random() * computerWeapons.length);
  // alert(random);

// ### placing function within a function ###
const convertRandomToString = function (random) {

// ### convert integer to string ###
    switch (random) {
      case 0 :
        return rock;
        break;
        
      case 1 :
        return paper;
        break;
        
      case 2 :
        return scissors;
        break;
        
      default :    
    }
 }

// ### another way of anonymous function within a function but using the arrow function instead ###
//   const convertRandomToString = (random) => {

//   convert integer to string
//     switch (random) {
//       case 0 :
//         return rock;
//         break;
        
//       case 1 :
//         return paper;
//         break;
        
//       case 2 :
//         return scissors;
//         break;
        
//       default :
        
//     }
//   }


// ### Accessing newly converted random strings from array and assigning it to a new variable ###
const computerPlayer = computerWeapons[random];

// OR us below
// const computerPlayer = convertRandomToString(random);
}
