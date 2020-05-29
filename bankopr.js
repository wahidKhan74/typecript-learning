"use strict";
exports.__esModule = true;
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank(name, assets, user) {
        this.name = name;
        this.assets = assets;
        this.user = user;
    }
    Bank.prototype.getName = function () {
        return this.name;
    };
    Bank.prototype.setName = function (name) {
        this.name = name;
    };
    Bank.prototype.getAssets = function () {
        return this.assets;
    };
    Bank.prototype.setAssets = function (assets) {
        this.assets = assets;
    };
    Bank.prototype.getUser = function () {
        return this.user;
    };
    Bank.prototype.setUser = function (user) {
        this.user = user;
    };
    Bank.prototype.showBalance = function () {
        console.log("The user " + this.user.firstName + " Blance is " + this.user.balance);
    };
    Bank.prototype.withdraw = function (amount) {
        this.user.balance -= amount;
        console.log("The user " + this.user.firstName + " Blance is " + this.user.balance);
    };
    Bank.prototype.deposite = function (amount) {
        this.user.balance += amount;
        console.log("The user " + this.user.firstName + " Blance is " + this.user.balance);
    };
    return Bank;
}());
exports.Bank = Bank;
// School -> student
// print school name and address 
// show student attendence
// show student progress
// print Marks for subject, HTML CSS JS TS Angular
