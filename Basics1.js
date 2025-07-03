//##ARRAY

const arr=[1,2,3,4,5,6,7,8];
console.log(arr);
const arr1=new Array("Pratik","Bavche");
console.log(arr1);
//Methods
arr1.push(55);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.unshift(555);
console.log(arr1);

arr1.shift();
console.log(arr1);

console.log(arr1.includes(55));
console.log(arr1.indexOf("Pratik"));

const arr2=arr.join();
console.log(arr);
//console.log(typeof arr2);
console.log(arr2);

//SLICE,SPLICE

console.log("A ",arr1);
const arr3=arr.slice(1,3);
console.log(arr3);
 
const arr4=arr.splice(1,3);//it change original array value
console.log(arr);
console.log(arr4);

//************//
const player=["Rohit","Surya"]
const student=["Pratik","Tushar"]
player.push(student);
console.log(player);
console.log(player[2][1]);

// const all=player.concat(student);
// console.log(all);

const all =[...player,...student]//spread operator
console.log(all);

const mul=[1,2,[3,4],5,[6,[7,8]]]
const x=mul.flat(Infinity)
console.log(x);

console.log(Array.isArray("Pratik"));
console.log(Array.from("Pratik"));
console.log(Array.from({name:"Pratik"}));//returns empty array

let s1=100,s2=200,s3=300,s4=400;
console.log(Array.of(s1,s2,s3,s4));

//##Objects
const sy=Symbol("101");
const stud={
    name:"Pratik",
    "full name":"Pratik Bavche",
    id:173,
    [sy]:"1010",
    email:"pratik@gmail.com"
}
stud.id=101;
//Object.freeze(stud);
stud.id=1111;
console.log(stud.name); 
console.log(stud["full name"]); 
console.log(typeof stud[sy]); 
console.log(typeof sy); 
console.log(stud);  

stud.greeting=function(){
    console.log(`Hello ${this.name}`);
}
stud.greeting();
 
const obj=new Object();
obj.name="Patil"
obj.id=1010
console.log(obj);

const obj1={
    id:1010,
    Uname:{
        fname:"Pratik",
        lname:"Bavche"
    }
}
console.log(obj1.Uname);

const obj2={
    1:"A",
    2:"B",
    3:"C"
}
const obj3={
    4:"A",
    5:"B",
    6:"C"
}
//const objj={obj2,obj3};
//const objj=Object.assign({},obj2,obj3);
const objj={...obj2,...obj3};
console.log(objj);

const users=[
    {
        id:1,
        mail:"aguvsgv"
    },
    {
        id:2,
        mail:"aglskpkuvsgv"
    }
]
//console.log(users[0]);
console.log(users);
console.log(stud);
console.log(Object.keys(stud));
console.log(Object.values(stud));
console.log(Object.entries(stud));

console.log(stud.hasOwnProperty('email'));

const {name:n}=stud
console.log(n);
