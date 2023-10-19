"use strict";
exports.__esModule = true;
// normal
var App = /** @class */ (function () {
    function App() {
        this.name = "prince sharma"; //property
        console.warn("constrtuctor called");
    }
    App.prototype.getName = function () {
        console.warn(this.name);
    };
    return App;
}());
var a1 = new App();
a1.getName();
var App2 = /** @class */ (function () {
    function App2(name) {
        this.name = "prince sharma"; //property
        console.warn(name);
    }
    App2.prototype.getName = function () {
        console.warn(this.name);
    };
    App2.prototype.getName2 = function () {
        return this.name;
    };
    return App2;
}());
var a2 = new App2("prince");
a2.getName();
console.log(a2.getName2());
