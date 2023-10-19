enum Days{
	mon,tue,wed,thu,fri,sat,sun
}
enum Days3{
	mon=10,tue,wed,thu,fri,sat,sun
}

let whichDay55:Days3
whichDay55=12
console.warn(whichDay55);


let whichDay:Days;
let whichDay2:Days;

whichDay=1
whichDay2=Days.tue

console.warn(whichDay);
console.warn(whichDay2);


// method 2
enum Days2{
	mon="monday",tue ="tuesday"
}

let whichDay3:Days2;
let whichDay4:Days2;

whichDay4=Days2.tue

console.warn(whichDay4);


// method3

function whichDayy(day:Days){
	return day
}

console.warn(whichDayy(Days2.mon));
