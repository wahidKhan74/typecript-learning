// enum  : allows to group constant value together

const  red = "#FF0000";
const blue = "#0000FF";

const color = { RED: red , BLUE:blue };

console.log(color.BLUE);
console.log(color.RED);

enum Color { RED ="#FF0000" , BLUE="#0000FF",GREEN="#00FF00"};

console.log(Color.BLUE);
console.log(Color.RED);
console.log(Color.GREEN);

//enum which is not initialized it will start with zero value
enum RGB { Red, Green ,Blue};

console.log(RGB.Red);
console.log(RGB.Green);
console.log(RGB.Blue);


enum RGB2 { Red=10, Green=200 ,Blue};

console.log(RGB2.Red);
console.log(RGB2.Green);
console.log(RGB2.Blue);

