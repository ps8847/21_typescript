/// <reference path="./Utils.ts" />
namespace UsersUtils{
	export class Users extends Parent implements userType{
		getName(){
			return this.name;
		}
	}
}

let u1 = new UsersUtils.Users();
u1.setName("bruce")
console.warn(u1.getName());
