class Employee {  
   
    constructor(private name:string, private age:number, private dept:string, private salary:number){
        this.name = name;
        this.age = age;
        this.dept = dept;
        this.salary = salary;
    }

    getEmployee(){
        console.log(` Name : ${this.name}
        Age : ${this.age}
        Dept : ${this.dept} 
        Salary : ${this.salary}`);
    }
}

let emp  = new Employee("John Smith",29,"dev",2000099);

emp.getEmployee();