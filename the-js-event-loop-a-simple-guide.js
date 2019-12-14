/*
  The JS Event Loop


  Functions that evntually need to get executed.
  Current task is called the 'Call Stack'
  JS is single threaded - meaning only one task can be done at a time.
  A function is called a 'frame' and is added to the call stack - and
  dosn't get called til execution is complete

  Synchronous appraoches are not the most effective approach.
  It makes more sense to do things asynchronously if possible.  In JS
  we have AJAX requests or timers.

  Can use external APIs to do work. In Node - C++ APIs.
  When Web or C++ APIs finish, they notify the JS engine by pushing
  the callback function that was given to them into a 'Task Queue'.
  The 'Task Queue' is a collection of completed async tasks whose
  callback functions are read to be eexecuted and pushed onto the call stack.

  HOW A FUNCTION GETS FROM TASK QUEUE TO CALL STACK
  > When call stack is empty - JS engine will look to Task Queue to see if there are any Functions
  that need to be executed and pushed onto the call stack.
  > Only when the call stack is empty will JS engine look to see if anything is
  in the task queue.
  > This whole process is called the 'Event Loop'

*/

// The event loop in code
let callStack = []
let taskQueue = []

while(true){
  if(callStack.length === 0 && taskQueue.length > 1){
    callStack.push(taskQueue.shift())
  }
}

// Easy way to see how async JS works is with setTimeout
setTimeout(function(){
  console.log('This logs at least two seconds later')
}, 2000)
// Set timeout is non blocking. Since its non-blocking
// it means it won't sit on the call stack waiting for ms to pass.
// Instead it kicks off the whole event loop process from earlier.

// For example in the following code
console.log('First')
setTimeout(function(){
  console.log('Second')
}, 2000)
console.log('Third')
// The print out will be 'First', 'Third','Second'

console.log('First')
setTimeout(function(){
  console.log('Second')
}, 0)
console.log('Third')
// Even this will return 'First', 'Third','Second' as by the time the
// anonymous function is pushed onto the call stack, the 'Third' log is already There


// Promises in ES6 a change in the event loop was made - to have a job queue.
// Job Queue has high priority than the task queue.

/*
  Priority is:
    Call stack
    Job Queue
    Task Queue
*/

// Meaning job queue is cleared out before task queue

console.log('First')

setTimeout(function(){
  console.log('Second')
}, 0)

new Promise(function (res) {
  res('Third')
}).then(console.log)

console.log('Fourth')

// Will log - First, Fourth, Third, Second
