
interface User {
    name:string;
    email:string;
    password?:string;
}

function displayUser(user:User){
    console.log(`The User details are, Name : ${user.name}  Email : ${user.email} Password : ${user.password} `);
}

displayUser({
    name:"John Smith",
    email:"john@gmail.com",
    password:"password123!"
});

// displayUser({});
// displayUser("john");
displayUser({name : "Will Smith",email:"john@gmail.com",password:"pass"});


displayUser({name : "Will Smith",email:"john@gmail.com"});




