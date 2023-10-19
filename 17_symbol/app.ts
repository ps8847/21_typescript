let s1 = Symbol();
console.warn(s1);

let s2 = Symbol();
let s3 = Symbol();
console.warn(s2 == s3);

let s4 = Symbol("heyy");
console.warn(s4);

let data = {
	[s4] : "some data"
}
console.warn(data[s4]);


//normal
class Demo{
	demof1(){
		return "heyy func"
	}
}

let d1 = new Demo();
console.warn(d1.demof1());

// with symbol

let demoof2 = Symbol()
class Demo2{
	[demoof2](){
		return "heyy func 2"
	}
}

let d2 = new Demo2();
console.warn(d2[demoof2]());
