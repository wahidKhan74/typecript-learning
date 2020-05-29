var Hero = /** @class */ (function () {
    // private name:string;
    // private age: number;
    function Hero(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Hero.prototype.getName = function () {
        return this.name;
    };
    Hero.prototype.setName = function (name) {
        this.name = name;
    };
    return Hero;
}());
var hero = new Hero("Will Smith", 54);
console.log(hero.getName());
