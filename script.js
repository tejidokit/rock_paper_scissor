
// let x ='testing'

// alert(x);


var rock = "rock";
var paper = "paper";
var scissors = "scissors";

var computerWeapons = [rock, paper, scissors];

function selectElement(element) {
  const random = Math.floor(Math.random() * computerWeapons.length);
  // alert(random);
  
// ####### placing function within a function #######
  const convertRandomToString = function (random) {

    // ####### convert integer to string #######
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
//   placing function within a function
//   another way of anonymous function
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


// ####### Accessing string from array #######

  const computerPlayer = computerWeapons[random];

  // const computerPlayer = convertRandomToString(random);

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


