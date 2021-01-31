/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 *
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *
 *  It will print 1, 3, then 2.  2 has a long delay of 2000ms on it, so it will
 *  take longer than 3 to print.
 *
 *
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *
 *  Step 1
 *  Step 3
 *  Step 2
 *  Async Action completed via callback
 *
 *
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *
 *  I think it will print 1, 2, then 3, as 2 shouldn't have a significant delay.
 *
 *  I was wrong, it printed 1, 3, then 2.  I think this is because just the
 *  action of calling a function asynchronously adds a bit of delay.
 *
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
  setTimeout(function () {
    action();
  }, 0);
}
console.log("Step 1");

snooze(function () {
  console.log("Step 2");
  console.log("Async Action completed via callback");
});

console.log("Step 3");
