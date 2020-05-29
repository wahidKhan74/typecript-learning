var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Company = /** @class */ (function () {
    function Company(name, depts) {
        this.name = name;
        this.depts = depts;
    }
    Company.prototype.getCompany = function () {
        console.log(" The Company Name : " + this.name + "  having Dept : " + this.depts);
    };
    return Company;
}());
// let comp  = new Company("Dell",["Dev","Ops","Analytics"]);
// comp.getCompany();
var Dell = /** @class */ (function (_super) {
    __extends(Dell, _super);
    function Dell(name, dept) {
        var _this = _super.call(this, name, dept) || this;
        _this.assets = 200000000232;
        return _this;
    }
    Dell.prototype.printAssets = function () {
        console.log("The company assets is ", this.assets);
    };
    return Dell;
}(Company));
var dell = new Dell("Dell", ["dev", "prod"]);
dell.getCompany();
dell.printAssets();
// Private , Public , Proetected.
// public properties : within and outside class (anywhere)
// private  property : within the calss itselft (this keyword)
// protected property : are accesable within subclass with inheritance
