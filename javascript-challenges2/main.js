//Takes a string and reverse it
function reverseString(str){
    let arr = str.split("");
    let reversedString = "";
    for(i = arr.length - 1; i >= 0; i--){
        reversedString+=arr[i];
    }
    return reversedString
}


//Fizzbuzz Exercise
function fizzBuzz(){
    for(let i = 1; i <= 101; i++){
        let str = ""
        if(i%3 == 0){
            str+="Fizz"
        }
        if(i%5 == 0){
            str += "Buzz"
        }

        if(str == ""){
            console.log(i);
        }

        else{
            console.log(str)
        }
    }
}
// //PigLatin Exercise
// function pigLatin(str){
//     let words = str.split(" ")
//     for(let i = 0; i < words.length; i++){
//         words[i] = pigWord(words[i])
//     }
//     return words;

// }

// function pigWord(str){
//     return str.slice(1, str.length) + str.slice(0,1) + "ay";
// }

// pigLatin("I am using piglatin")

// //Flight length movie checker exercise
// function flightLengthChecker(flightLength, movieLengths) {
//     sortedLengths = movieLengths.sort();
//     if(flightLength > (movieLengths[0] + movieLengths[1]))
//     {
//         return true
//     }
//     // write the body of your function here
//    return false;
// }


// console.log(flightLengthChecker(100, [90,90,90,20]))

//Maria Piglatin Solution
function pigLatin(str) {
    let arr = str.split(" ")
    let newStr = ""
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (idx = 0; idx < arr.length; idx++) {
        if (vowels.includes(arr[idx][0])) {
            newStr += arr[idx].slice(0).concat("-way ")
        } else if (vowels.includes(arr[idx][1])) {
            newStr += arr[idx].slice(1).concat("-", arr[idx][0], "ay ")
        } else {
            newStr += arr[idx].slice(2).concat("-", arr[idx].slice(0, 2), "ay ")
        }
    }
    return newStr
}

console.log(pigLatin("banana mama drama anna")) // anana-bay ama-may ama-dray anna-way
console.log(pigLatin("Hello my name is Masha")) // ello-Hay y-may ame-nay is-way asha-May