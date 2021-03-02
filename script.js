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

// ### assigning each parameter element the corresponding logic &/or conditionals
if (element === rock) {
    // alert("rock");
    
    if (computerPlayer === rock) {
      alert("it's a tie");
    } else if (computerPlayer === paper) {
      alert("computer wins");
    } else if (computerPlayer === scissors) {
      alert("player wins");
    }
    return;
  }; 
  
if (element === paper) {
    // alert("paper");
    
    if (computerPlayer === rock) {
      alert("player wins");
    } else if (computerPlayer === paper) {
      alert("it's a tie");
    } else if (computerPlayer === scissors) {
      alert("computer wins");
    }
    return;
  }
  
if (element === scissors) {
    // alert("scissors");
    
    if (computerPlayer === rock) {
      alert("computer wins");
    } else if (computerPlayer === paper) {
      alert("player wins");
    } else if (computerPlayer === scissors) {
      alert("it's a tie");
    }
    return;
  }
}
