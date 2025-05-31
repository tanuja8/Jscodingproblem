// // // Declare the myGlobal variable below this line

// //  let myGlobal=10;
// // function fun1() {
// //     // Assign 5 to oopsGlobal here
// //   oopsGlobal=5;
// //   }
  
// //   // Only change code above this line
  
// //   function fun2() {
// //     let output = "";
// //     if (typeof myGlobal != "undefined") {
// //       output += "myGlobal: " + myGlobal;
// //     }
// //     if (typeof oopsGlobal != "undefined") {
// //       output += " oopsGlobal: " + oopsGlobal;
// //     }
// //     console.log(output);
// //   }

// // function myTest() {
// //     const loc = "foo";
// //     console.log(loc);
// //   }
  
// //   myTest();
// // //   console.log(loc);


// let sum = 0;

// function addSum(num) {
//   sum = sum + num;
// }

// addSum(3);



function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));