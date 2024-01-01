// >>>>>>> Examples of callback function

// Example: 1
function sum(num1,num2,fn){
    let result = num1+num2;
    fn(result,displayResultPassive)
    return result;
    
}

function displayResult(data,fn2){
    console.log("Result of the sum is : " + data);
    fn2(data)
}

function displayResultPassive(data){
    console.log("Sum's result is : "+ data);
}

const ans = sum(1,2,displayResult)
console.log(ans);



// Example: 2
function calculateArithmetic(a,b,type){
     let ans =  type(a,b);
     return ans;
}

function sum(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}


console.log(calculateArithmetic(4,6,subtract));
console.log(calculateArithmetic(4,2,sum))
console.log(calculateArithmetic(4,6,sum));
