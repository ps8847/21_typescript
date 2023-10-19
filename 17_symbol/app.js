var _a;
var s1 = Symbol();
console.warn(s1);
var s2 = Symbol();
var s3 = Symbol();
console.warn(s2 == s3);
var s4 = Symbol("heyy");
console.warn(s4);
var data = (_a = {},
    _a[s4] = "some data",
    _a);
console.warn(data[s4]);
//normal
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.demof1 = function () {
        return "heyy func";
    };
    return Demo;
}());
var d1 = new Demo();
console.warn(d1.demof1());
// with symbol
var demoof2 = Symbol();
var Demo2 = /** @class */ (function () {
    function Demo2() {
    }
    Demo2.prototype[demoof2] = function () {
        return "heyy func 2";
    };
    return Demo2;
}());
var d2 = new Demo2();
console.warn(d2[demoof2]());
