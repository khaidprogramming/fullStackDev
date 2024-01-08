/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */
// Function to return a promise that resolves after t seconds
function delay(t) {
  t*=1000;
    return new Promise(resolve => setTimeout(resolve, t));
  }
  
  // Function that returns a promise that resolves after t1 seconds
  function function1(t1) {
    return delay(t1);
  }
  
  // Function that returns a promise that resolves after t2 seconds
  function function2(t2) {
    return delay(t2);
  }
  
  // Function that returns a promise that resolves after t3 seconds
  function function3(t3) {
    return delay(t3);
  }
  
  // Function that uses Promise.all to wait for all 3 promises to resolve
  // Returns a promise that resolves with the total time taken in milliseconds
  function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
  
    const promise1 = function1(t1);
    const promise2 = function2(t2);
    const promise3 = function3(t3);
  
    return Promise.all([promise1, promise2, promise3])
      .then(() => Date.now() - startTime);
  }
  
  // Example usage:
  const t1 = 1000; // 1 second
  const t2 = 2000; // 2 seconds
  const t3 = 3000; // 3 seconds
  
  calculateTime(t1, t2, t3)
    .then(totalTime => console.log(`Total time taken: ${totalTime} milliseconds`))
    .catch(error => console.error(error));
  

    module.exports = calculateTime;