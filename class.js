var Employee = /** @class */ (function () {
    function Employee(name, age, dept, salary) {
        this.name = name;
        this.age = age;
        this.dept = dept;
        this.salary = salary;
        this.name = name;
        this.age = age;
        this.dept = dept;
        this.salary = salary;
    }
    Employee.prototype.getEmployee = function () {
        console.log(" Name : " + this.name + "\n        Age : " + this.age + "\n        Dept : " + this.dept + " \n        Salary : " + this.salary);
    };
    return Employee;
}());
var emp = new Employee("John Smith", 29, "dev", 2000099);
emp.getEmployee();
