export {}

interface userTyped{
	name:string,
	age:number,
	//address:string
	address:any
}

let users:any={
	name:'prince',
	age:22,
	address:'india'
}
//let users:userTyped={
//	name:'prince',
//	age:22,
//	address:'india'
//}

//users.name = 200  //will give error
//users.email = "abcd@gmail"
console.log(users);
