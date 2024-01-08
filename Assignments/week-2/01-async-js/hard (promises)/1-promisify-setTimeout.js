/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    n*=1000;
    let p = new Promise(function(resolve){
        setTimeout(() => {
            resolve();
        }, n);
    })
    return p;
}

module.exports = wait;

// let result = wait(4);
// console.log(result);
// result.then(function(data){
//     console.log(data)
// })
