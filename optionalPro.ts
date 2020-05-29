class Hero{
    // private name:string;
    // private age: number;
    //optional properties / argumnet 

    // Hero(){}
    // Hero(name,age){}
    // Hero(name,age,talent){}
    // Note  : A required parameter cannot follow an optional parameter.
    constructor(private name?:string,public age?:number,private talent?:string){
        this.name = name ;
        this.age = age;
        this.talent = talent;
    }

    public getName(){
        return this.name
    }
    public setName(name:string){
        this.name = name;
    }
}

let hero = new Hero("Will Smith",54);
console.log(hero.getName());

let hero2 = new Hero();
let hero3 = new Hero("John");
let hero4 = new Hero("John",54);
let hero5 = new Hero("Balaya Babu",54,"Comedy");



// Class with ecapsulation  : along with constructor with required and optional parameter

//Player
//User
//Flight
//Plane

