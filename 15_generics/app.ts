function users(data){
	return data
}

function users2(data:Object):Object{
	return data
}

function users3<T>(data:T):T{
	return data
}

console.warn(users({name:"prince" , age:'22'}));
console.warn(users2({name:"prince" , age:'22'}));
console.warn(users3(30));
console.warn(users3("HEYY"));
console.warn(users3({name:"prince" , age:'22'}));
