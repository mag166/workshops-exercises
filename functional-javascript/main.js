function calculator(func, num1, num2){
    if(func == "add"){
        return num1+num2;
    }

    else if(func == "subtract"){
        return num1-num2;
    }

    else if(func == "multiply"){
        return num1*num2
    }

    else if(func == "divide"){
        return num1/num2
    }

    else{
        return "Invalid Function"
    }
}

var answer = calculator("add", 4, 2)
console.log(answer) // 6
answer = calculator("subtract", 7, 2)
console.log(answer) // 51   
answer = calculator("divide", 4, 2)
console.log(answer) // 2
answer = calculator("multiply", 4, 2)
console.log(answer) // 8


function ask(question, answer){
    let response = prompt(`${question}`)

    if(response == answer){
        return true;
    }
    return false;
  }
  
//   var point = ask("Is Kim the best?", "yes");
//   console.log(point);
  
  
  var questions = [
    "Was Kim born in 1985?",
    "Will Rob get out of jail?",
    "Does North seem happy?",
    "Kanye released 'Heartless' in 2008?", "Is Kim the best?"];
    
  var answers = [
    "yes",
    "no",
    "no",
    "yes", "yes"];

    function quiz(questions, answers){
        let results = Array(questions.length)
        let score = 0;
        for(let i = 0;i<questions.length;i++){
           results[i] = ask(questions[i], answers[i]);
           if(results[i] == true){
                score++
           }
        }
        console.log(`Your score is ${(score/questions.length)*100} Percent!`)
    }
    
    quiz(questions,answers);




    function factorial(num){
        let total = 1;
        for(let i = num; i > 0; i--){
            total *= i
        }
        return total;
    }
    console.log(factorial(3));
    console.log(factorial(4));


    
    function recursiveFactorial(num){
        if(num == 1){
            return 1
        }

        else{
            return num * recursiveFactorial(num-1)
        }
    }

    console.log(recursiveFactorial(3));
    console.log(recursiveFactorial(4));
