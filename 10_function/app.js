"use strict";
exports.__esModule = true;
// normal
function Cals() {
    return 10 + 10;
}
console.log(Cals());
//with type
function Cals2() {
    // we can't return otehr then the number from here
    return 10 + 10;
}
console.log(Cals2());
//now the para,eter passed will be accepted only if its number
function Cals3(a) {
    // we can't return otehr then the number from here
    return a;
}
console.log(Cals3(100));
//now the para,eter passed will be accepted only if its number
function Cals4(a, b) {
    // we can't return otehr then the number from here
    return b ? a + b : a;
}
console.log(Cals4(100, 50));
