var Days;
(function (Days) {
    Days[Days["mon"] = 0] = "mon";
    Days[Days["tue"] = 1] = "tue";
    Days[Days["wed"] = 2] = "wed";
    Days[Days["thu"] = 3] = "thu";
    Days[Days["fri"] = 4] = "fri";
    Days[Days["sat"] = 5] = "sat";
    Days[Days["sun"] = 6] = "sun";
})(Days || (Days = {}));
var Days3;
(function (Days3) {
    Days3[Days3["mon"] = 10] = "mon";
    Days3[Days3["tue"] = 11] = "tue";
    Days3[Days3["wed"] = 12] = "wed";
    Days3[Days3["thu"] = 13] = "thu";
    Days3[Days3["fri"] = 14] = "fri";
    Days3[Days3["sat"] = 15] = "sat";
    Days3[Days3["sun"] = 16] = "sun";
})(Days3 || (Days3 = {}));
var whichDay55;
whichDay55 = 12;
console.warn(whichDay55);
var whichDay;
var whichDay2;
whichDay = 1;
whichDay2 = Days.tue;
console.warn(whichDay);
console.warn(whichDay2);
// method 2
var Days2;
(function (Days2) {
    Days2["mon"] = "monday";
    Days2["tue"] = "tuesday";
})(Days2 || (Days2 = {}));
var whichDay3;
var whichDay4;
whichDay4 = Days2.tue;
console.warn(whichDay4);
// method3
function whichDayy(day) {
    return day;
}
console.warn(whichDayy(Days2.mon));
