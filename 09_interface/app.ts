interface userType{
	name:string,
	age:number,
	getName:()=>string
}

let users:userType = {
	name: 'prince sharma',
	age:20,
	getName:function(){
		return "prince"
	}
}

console.log(users);
console.log(users.getName());