/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let p = new Promise(function(resolve){
    let startTime = Date.now();
    let currentTime = startTime+milliseconds;
    while(currentTime>=startTime){
        startTime = Date.now();
        // console.log("Busy for some seconds")

    }
    
        
    })
}

// module.exports = sleep;
console.log("I can wait")
sleep(2000);
console.log("plz don't make me to wait")



