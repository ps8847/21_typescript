export {}
// normal

class App{ 
	constructor(){  //constructor
		console.warn("constrtuctor called");
		
	}
	name="prince sharma"  //property
	getName(){    //function
		console.warn(this.name);
	}
}

let a1 =  new App();
a1.getName();



class App2{ 
	name:string = "prince sharma"  //property
	constructor(name:string){  //constructor
		console.warn(name);
		
	}
	getName(){    //function
		console.warn(this.name);
	}
	getName2():string{    //function
		return this.name;
	}
}

let a2 =  new App2("prince");
a2.getName();
console.log(a2.getName2());
