function scuberGreetingForFeet(someNumber){
  // Write your code here!
let result;
if (someNumber <=400) {
result = 'This one is on me!'
}else if (someNumber >2000 && someNumber < 2500) {
  result = 'I will gladly take your thirty bucks.'
}else if (someNumber > 2500) {
result = 'No can do.'
}
return result;
}

function ternaryCheckCity(city){
  // Write your code here!
 return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
    switch (tip) {
      case 'generous':return "Thank you so much.";
       case 'not as generous':return "Thank you.";
      default :return 'Bye.';
    }
  }