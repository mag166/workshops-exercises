//Problem 1
var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;

for(let i = 0; i < prices.length; i++){
    sum+=prices[i];
}
console.log("The sum is: ", sum);



//Problem 2z
for(let i = 99; i > 0; i--){
    if(i > 1){
      let remainder = i - 1;
      console.log(`${i} crows on the wall. ${i} crows.
1 fell down and became a wight.
${remainder} crows on the wall
  `);
    }
    
    else{
      console.log(`1 crow on the wall. 1 single crow.
It fell down and became a wight.
There's no one left to defend Westeros now.`);
    }
  }
  

 let arr = prompt("Enter a Calculation").split();
 
  
  