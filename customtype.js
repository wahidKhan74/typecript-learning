function displayUser(user) {
    console.log("The User details are, Name : " + user.name + "  Email : " + user.email + " Password : " + user.password + " ");
}
displayUser({
    name: "John Smith",
    email: "john@gmail.com",
    password: "password123!"
});
displayUser({});
displayUser("john");
displayUser({ name: "Will Smith" });
