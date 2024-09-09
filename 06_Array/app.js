// normal 
var data = ['anil', 'mario', 'joyo'];
data.push('peter');
console.warn(data);

//advanced 1
//if try to insert other type of data 
//data.push(100)  // gives error

//advanced 2 (mixed array) -> it will accept only string or number only
var data2 = ['anil', 'mario', 'joyo', 10];
data2.push('peter');
data2.push(100);
console.warn(data2);

//advanced 3 
var data3 = ['anil', 'mario', 'joyo', 10, true];
data3[2] = "heyy";
console.warn(data3);

//advanced 4 (with type)
var data4 = ['anil', 'mario', 'joyo'];
console.warn(data4);
//data.push(100);
