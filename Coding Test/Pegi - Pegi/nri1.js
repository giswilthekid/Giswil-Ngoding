function TimeConvert(num) { 
  // code goes here
  return `${Math.floor(num/60)}:${num % 60}`;
}
   
// keep this function call here 
console.log(TimeConvert(readline()));

function FizzBuzz(num) { 
  let ans = "";
  for (let i = 1; i <= num; i++){
    if (i % 3 == 0 && i % 5 == 0 ){
      ans += "FizzBuzz";
    }
    else if (i % 3 == 0){
      ans += "Fizz";
    }
    else if (i % 5 == 0){
      ans += "Buzz";
    }
    else{
      ans += `${i}`;
    }
    ans += " ";
  }  
  return ans;
}
   
// keep this function call here 
console.log(FizzBuzz(readline()));

function ArrayAdditionI(arr) { 
  const sortArr = arr.sort(function(a,b){return a-b;});

  const largest = sortArr.pop();

  function search(sum, i){
    if (sum == largest){
      return true;
    }

    else if (sum > largest || i==arr.length){
      return false;
    }

    else{
      return search(sum + arr[i], i+1) || search(sum, i+1);
    }
  }

  return search(0,0);
}
   
// keep this function call here 
console.log(ArrayAdditionI(readline()));

[23, 3, 6, 11, 4, 2, 9, 1]

[1, 2, 3, 4, 6, 9, 11, 23]

larget = 23

[1, 2, 3, 4, 6, 9, 11]

sum = 1                 sum = 25
i = 1                     i = 6

sum = 3                 sum = 
i = 2

sum = 6
i = 3

sum  = 10
i = 4

sum = 16
i = 5