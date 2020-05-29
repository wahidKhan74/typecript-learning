// enum  : allows to group constant value together
var red = "#FF0000";
var blue = "#0000FF";
var color = { RED: red, BLUE: blue };
console.log(color.BLUE);
console.log(color.RED);
var Color;
(function (Color) {
    Color["RED"] = "#FF0000";
    Color["BLUE"] = "#0000FF";
    Color["GREEN"] = "#00FF00";
})(Color || (Color = {}));
;
console.log(Color.BLUE);
console.log(Color.RED);
console.log(Color.GREEN);
//enum which is not initialized it will start with zero value
var RGB;
(function (RGB) {
    RGB[RGB["Red"] = 0] = "Red";
    RGB[RGB["Green"] = 1] = "Green";
    RGB[RGB["Blue"] = 2] = "Blue";
})(RGB || (RGB = {}));
;
console.log(RGB.Red);
console.log(RGB.Green);
console.log(RGB.Blue);
var RGB2;
(function (RGB2) {
    RGB2[RGB2["Red"] = 10] = "Red";
    RGB2[RGB2["Green"] = 200] = "Green";
    RGB2[RGB2["Blue"] = 201] = "Blue";
})(RGB2 || (RGB2 = {}));
;
console.log(RGB2.Red);
console.log(RGB2.Green);
console.log(RGB2.Blue);
