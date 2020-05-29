import { Bank, User } from './bankopr';


let bank  = new Bank();
bank.setName("Apna Bank");
bank.setAssets(2389439837834);
bank.setUser({
    firstName:"John Doe",
    lastName:"Doe",
    balance:1000000,
    isActive:true,
    email:"doe@gmail.com"
});

console.log(`The Banck is ${ bank.getName() }  with Assets ${bank.getAssets()}`);

bank.showBalance();
bank.withdraw(2000);
bank.deposite(2001);