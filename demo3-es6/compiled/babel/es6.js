// let
"use strict";

var a = 10;
if (true) {
    var _a = 4;
    console.log(_a);
} else {
    var _a2 = "string";
    console.log(_a2);
}
console.log(a);
// destructing
// let {str, nbr} = {str: "string", nbr: 99};
// console.log(str);
// console.log(nbr);
// // for of
// var arr = ["item1", "item2", "item3"];
// for (var el of arr) {
//     console.log(el);
// }
// // string interpolation
// let var1 = "first";
// let var2 = 2;
// console.log(`var1 = ${var1}, var2 = ${var2}`);