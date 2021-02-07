const arr = ['a', 'b', 'c'];
// const eArr = arr[Symbol.iterator]();
// // const letterResult = document.getElementById('letterResult');
// // // your browser must support for..of loop
// // // and let-scoped variables in for loops
// // // const and var could also be used
// // for (let letter of eArr) {
// //   const li = document.createElement('li');
// //   li.textContent = letter;
// //   letterResult.appendChild(li);
// // }
console.log(arr)
console.log(arr[Symbol.species])
// console.log(eArr.next().value); // a
// console.log(eArr.next().value); // b
// console.log(eArr.next().value); // c
// console.log(eArr.next().value); // d
// console.log(eArr.next().value); // e

// function logIterable(it) {
//     if (!(Symbol.iterator in Object.getPrototypeOf(it)
//     /* or "Symbol.iterator in Object.__proto__"
//        or "it[Symbol.iterator]" */)) {
//       console.log(it, ' is not an iterable object...');
//       return;
//     }
   
//     var iterator = it[Symbol.iterator]();
//      // your browser must support for..of loop
//      // and let-scoped variables in for loops
//      // const and var could also be used

//      console.log(iterator.next().value); // a
// console.log(iterator.next().value); // b
// console.log(iterator.next().value); // c
//    }
   
//    // Array
//    logIterable(['a', 'b', 'c']);
//    // a
//    // b
//    // c
   
//    // string
//    logIterable('abc');
//    // a
//    // b
//    // c
   
//    logIterable(123);
//    // 123 " is not an iterable object..."
