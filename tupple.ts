//array of any type
let arr : any[] = ["JOhn",29,true];
console.log(arr);


//tuple  : fix size and type

let tupple : [string,number,boolean];

tupple = ['Hello',1212,true];
console.log(tupple);



let message : any ;

message = "This is String value";

(<number>message);



console.log(typeof <string> message);

let list : any [] ;

list = [12,5,5,6];

(<number[]> list).push(10000);

console.log(list);


///advatages





