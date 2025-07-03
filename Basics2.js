 function demo(n1,n2)//parameter
 {
    if(typeof(n1)==Number&&typeof(n2)==Number)
    {return n1+n2;}
    else
    {
        console.log("hudbsbdsbgs");
        
    }
 }
 console.log(demo(5,7));//argument

 function check(name="patil")
 {
    if(!name)
    {
        console.log("Enter valid name");
        return
    }
    return `user ${name} just login`
 }
console.log(check());

 //function collection(...num)
 function collection(var1,var2,...num)
 {
    return num;
 }
 console.log(collection(100,200,300,400));

 const user={
    uname:"Pratik",
    id:101010
 }

 function get(u1){
    console.log(`my name is ${u1.uname}`); 
 }get(user);
 
 const arr=[100,200,300,400];
 function arrdata(arr1){
    return arr1[1];
 }
 console.log(arrdata(arr));
 
 function one()
 {
   let name="Pratik";
   function two(){
      let website="Wwe.com";
      console.log(name);
   }
   two();
   //console.log(website);
 }
 one();

 if(1)
 {
   let uname="Pratik"
   if(uname=="Pratik")
   {
      let web="keshav";
      console.log(uname+web);
   }
   //console.log(web);
 }

 
 //console.log(demo(5));
 function demo(num)
 {
   return num+1;
 }
 console.log(demo(5));
 
//console.log(fun(1));
const fun=function(num)
{
   return num+10;
}
console.log(fun(1));

const user1={
   uname:"Pratik",
   price:1111,
   Display:function(){
      console.log(`Hello ${this.uname}`);
     // console.log(this);
   }
}
user1.Display();
user1.uname="Patil";
user1.Display();
//console.log(this);

// function abc(){
//    nm:"Pratik"
//    console.log(this);
   
// }abc()


//same here
// const abc=function(){
//    console.log(this);
   
// }

const abccc=()=>{

}

// const abc=(num1,num2)=>{
//    return num1+num2;
// }
// console.log(abc(100,100));

// const abc=(num1,num2)=>num1+num2
// console.log(abc(10,20));

// const abc=(num1,num2)=>(num1+num2)
// console.log(abc(10,20));
 
const abc=(num1,num2)=>({nam:"Pratik"})
 console.log(abc(10,20));

 //Immediately invoked function expressions (IIFE)
 //remove global scope pollution problem

 (function chaii(){
   console.log("Hello!!!");
 })();

 ((nm)=>{
   console.log(`Helloo ${nm}`);
   
 })("Pratikk")
