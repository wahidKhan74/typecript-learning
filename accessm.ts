class Company { 

   private name:string;
   private depts:string[];
   protected assets:number;

    constructor( name:string, depts:string[]){
        this.name = name;
        this.depts = depts;
    }

    public getCompany(){
        console.log(` The Company Name : ${this.name}  having Dept : ${this.depts}`);
    }
}

// let comp  = new Company("Dell",["Dev","Ops","Analytics"]);

// comp.getCompany();

class Dell extends Company{

    constructor(name:string,dept:string[]){
        super(name,dept);
        this.assets = 200000000232;
    }

    public printAssets(){
        console.log("The company assets is ",this.assets);
    }
}


let dell = new Dell("Dell",["dev","prod"]);

dell.getCompany();
dell.printAssets();



// Private , Public , Proetected.
// public properties : within and outside class (anywhere)
// private  property : within the calss itselft (this keyword)
// protected property : are accesable within subclass with inheritance