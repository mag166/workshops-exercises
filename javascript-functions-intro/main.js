//Exercise
function nycdaWelcome(name){
  return `Welcome to NYCDA ${name}! Enjoy your stay`
}

console.log(nycdaWelcome("minhal"));
//Exercise
function brokenCalculator(num1, num2){
  return num2*3;
}

console.log(brokenCalculator(2,3))

//Exercise
function lineThemUp(num1, num2, num3){
  return [num1, num2, num3];
}

console.log(lineThemUp(1,2,3));
 
//Exercise
  function royalizer(gender, name){
    if(gender == "male"){
      return  `His Majesty ${name}`
    }

    else{
      return  `Her Majesty ${name}`
    }
  }

  //Exercise

function magicDoor(doorNum){
    let prefix = `You get a`
    return prefix + chooseDoor(doorNum)
}

function chooseDoor(doorNum){
  let output = ""
  if(doorNum == 1){
    output+=" a brand new car!"
  }

  else if(doorNum = 2){
    output+=" a NYCDA t-shirt"
  }

  else{
    output+=" a blackhole and are teleported to antarctica"
  }
  return output
}
