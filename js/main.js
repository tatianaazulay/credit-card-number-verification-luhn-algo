// Listen for form validate button
document.querySelector('button').addEventListener('click', ()=>{
outputResult.innerHTML = '';
// Get form value
var number =document.getElementById('cardNumber').value;
// Regular expression for a string between 13 and 19 digits 
var re = /^[0-9]{13,19}$/;
if(!number){
  alert('Please enter the number');
  return false;
}else if (!re.test(number)){
    alert('Credit card number should be between 13 and 19 digits without spaces or dashes');
    return false;
  } else {
    validateWithLuhnAlgo(number);
    return true;
  }
});

function validateWithLuhnAlgo(cardNumber){
outputResult.innerHTML = '';
var sum =0;
var isEven=false;
for (var i=cardNumber.length-1; i>=0; i--){
  var digit=parseInt(cardNumber.charAt(i));
  if (isEven && ((digit *=2)>9)) digit-=9;
  sum+=digit;
  isEven=!isEven;
  }
  if(sum%10==0){
      outputResult.innerHTML += '<h3>'+cardNumber+" is a valid credit card number"+'</h3>';
      return true;
        } else {
          outputResult.innerHTML += '<h3>'+cardNumber+" is not a valid credit card number"+'</h3>';
          return false;
        }
};
document.getElementById('myForm').reset();


