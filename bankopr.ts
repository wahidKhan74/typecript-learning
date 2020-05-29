export interface User{
    firstName:string;
    lastName:string;
    balance:number;
    isActive:boolean;
    email:string;
    isMarried?:boolean;
}


export class Bank{
    public name:string;
    private assets:number;
    private user:User;

    constructor(name?:string,assets?:number,user?:User){
        this.name = name;
        this.assets = assets;
        this.user = user;
    }

    public getName(){
        return this.name
    }
    public setName(name:string){
        this.name = name;
    }

    public getAssets(){
        return this.assets
    }
    public setAssets(assets:number){
        this.assets = assets;
    }

    public getUser(){
        return this.user
    }

    public setUser(user:User){
        this.user = user;
    }

    showBalance(){
        console.log(`The user ${this.user.firstName} Blance is ${this.user.balance}`)
    }

    withdraw(amount:number){
        this.user.balance -= amount;
        console.log(`The user ${this.user.firstName} Blance is ${this.user.balance}`)
    }

    deposite(amount:number){
        this.user.balance += amount;
        console.log(`The user ${this.user.firstName} Blance is ${this.user.balance}`)
    }
}






// School -> student
// print school name and address 
// show student attendence
// show student progress
// print Marks for subject, HTML CSS JS TS Angular

