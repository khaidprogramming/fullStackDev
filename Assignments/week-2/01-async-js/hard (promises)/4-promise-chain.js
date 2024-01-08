/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
// Function to return a promise that resolves after t seconds
function delay(t) {
     return new Promise(resolve => setTimeout(resolve, t));
   }
   
   // Three functions that return promises with different delays
   function task1() {
     return delay(1000); // Resolves after 1 second
   }
   
   function task2() {
     return delay(2000); // Resolves after 2 seconds
   }
   
   function task3() {
     return delay(1500); // Resolves after 1.5 seconds
   }
   
   // Function to sequentially call the three functions
   function sequentialTasks() {
     return task1()
       .then(() => task2())
       .then(() => task3());
   }
   
   // Function to measure the time it takes to complete the entire operation
   function measureTime() {
     const startTime = Date.now();
     return sequentialTasks().then(() => Date.now() - startTime);
   }
   
   // Using the measureTime function
   measureTime().then(time => {
     console.log(`Time taken: ${time} milliseconds`);
   });
   
   // Compare with results from 3-promise-all.js
   // The 3-promise-all.js code would use Promise.all to run all tasks concurrently
   // and would take the maximum time among the three tasks to complete.
   
   sequentialTasks();
   measureTime()