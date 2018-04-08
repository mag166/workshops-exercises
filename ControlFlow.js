//Problem 1
var name = prompt('What is your name?');
if (name == 'Abraham Lincoln'){
  alert('Four score and seven years ago!');
}

//Problem 2
var num = prompt('Enter a Number Greater than 22');
if(num > 22) {
  alert('This number is greater than 22');
}

//Problem 3
var num = prompt('Enter a number greater than 100 but les than 2000')
if(num > 100 && num < 2000){
  alert('You are amazingly correct!');
}
else{
  alert("Awww, it looks like that number is not correct.... Try again!");
}

//Problem 4
var num = prompt('Enter a number between 1 and 5');
if(num == 1 || num == 2){
  alert('You have just won a car!');
}

else if(num == 3 || num == 4){
  alert('You have just won a gallon of milk!');
}

else if(num == 5){
  alert('Awww, sorry... it seems like you did not chose the right number... No Worries! Try again !');
}
