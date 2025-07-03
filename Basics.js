console.log("Sree ganeshay namah!!!");
//##Variable declaration
const PI=3.14;
let Name="Pratik";
var id="0101";
city="Sambhajinagar";

//PI="1.11"; This is not allowed
console.log(PI);
Name="Gaurav";
id="0505";
city="Vaijapur"
console.table([Name,id,city]);

//##typecasting
let age="20X";
console.log(typeof(age));
let casting=Number(age);
console.log(typeof(casting));
console.log(casting);//op NAN
//value of null is 1
let a=1
let b=Boolean(a)
console.log(b);

let str=String(a);
console.log(typeof(str));
console.log(str);

//##Operations
let val=5;
let x=-val
console.log(x);
console.log(2**3);

let str1="Pratik"
let str2=" Bavche Patil"
console.log(str1+str2);

console.log(1+"2");//12
console.log("1"+1+2);//112
console.log(1+1+"2");//22
console.log(true);//true
console.log(+true);//1
console.log("2">1);
console.log(2==="2");//check datatype

/*Dynamic Typing
Variables in JavaScript do not have a fixed type. A variable can hold different types of data at different times.
so js is dynamic language

let x = 42;       // x is a number
x = "Hello";      // x is now a string
x = true;         // x is now a boolean*/

//##variable datatype
console.log(typeof "Pratik");
console.log(typeof null);//datatype of null is object
console.log(typeof undefined);

//Primitive:Number,String,Null,Boolean,Undefined,Symbol,BigInt
//Reference(Non-P):Array,Objects,Functions

//STACK memory is used to store the values of all primitive data types
//HEAP memory is used to store the values of all non-primitive data types

const id1=Symbol('1010');
const id2=Symbol('1010');
console.log(typeof(id1));
console.log(id===id1);
const n=123423n;//bigint
console.log(typeof(n));

//array
const player=["Rohit","Surya","Jasprit"]
console.log(player);

//object
let demo = {
    name:"Pratik",
    age:20,
}
console.log(demo);

//function
function Demo(params) {
    console.log("Helloww");
    
}Demo()

console.log(typeof(demo));
console.log(typeof(player));
console.log(typeof(Demo));
console.log(typeof(null));

let obj={
    price:101,
    id3:5555
}

let obj2=obj
obj2.id3=8989
console.log(obj);
console.log(obj2);

//##Strings
let name="Pratik";
let no=45;
console.log(`My name is ${name} and no is ${no}`);

let s=new String("Pratik");
console.log(s[0]);
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.charAt(0));
console.log(s.indexOf('J'));

let s1=s.substring(0,4);
console.log(s1);

let s2=s.slice(0,-3);
console.log(s2);

let s3="        Gaurav    ";
console.log(s3.trim());

let url="https://pratik.com/pratik%20bavche"
console.log(url.replace('%20','_'));
console.log(url.includes('patil'));

let s4=('pratik-bavche-patil')
console.log(s4.split('-'));

console.log(s4.toString());
let s5=s4.substr(0,6);
console.log(s5);
console.log(s5.concat(s3));

//##NUMBERS

let no1=1010;
let n2=new Number(5050)
console.log(no1);
console.log(n2);
console.log(n2.toString());

console.log(n2.toFixed(2));//00

let val1=125.5989
console.log(val1.toPrecision(3));

let hundered=1000000
console.log(hundered.toLocaleString('en-IN'));

//##MATHS

console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(4.55));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.95));
console.log(Math.sqrt(25));
console.log(Math.max(4,55));
console.log(Math.min(4,55));
console.log(Math.pow(2,3));
console.log(Math.random());//it generate random value between 0 to 1

console.log((Math.random()*10)+1);
let min=5;
let max=10;
console.log(Math.floor(Math.random()*(max-min+1))+min);

//##Dates
let x1=new Date();
console.log(x1.toString());
console.log(x1.toDateString());
console.log(x1.toLocaleString());
console.log(typeof x1);

//let createDate=new Date(2025,0,16)
//console.log(createDate.toString());
let createDate=new Date(2025,0,16,12)
console.log(createDate.toLocaleString());

let tm=Date.now();
console.log(tm);
console.log(Math.floor(Date.now()/1000));
let newdate=new Date();
console.log(newdate.getMonth());
console.log(newdate.getDay());
console.log(newdate.getYear());
console.log(`${newdate.getDay()} and month ${newdate.getMonth()}`);
