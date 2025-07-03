
let bal=1000;
//if(bal>500) console.log(`Blanace is ${bal}`),console.log("Paisewalaa!!!");

//  if(bal<500)
//  {
//    console.log("Less than 500");
//  }
//  else if(bal<750)
//  {
//    console.log("Less than 750");
//  }
//  else if(bal<900)
// {
//    console.log("Less than 900");
// }
// else
// {
//    console.log("Less than 1200");
// }


const userLog=true
const Dcard=true
const Ccard=false
const Ppay=true
if (userLog && Dcard && 3==4 ) {
  console.log("User Allow!!!");
  
}

if (Ccard||Ppay) {
console.log("Alloww");
}

// switch (key) {
//    case value:
     
//       break;

//    default:
//       break;
// }

const month="May"
switch (month) {
  case "Jan":
     console.log("Its month 1");
     break;
  case "Feb":
     console.log("Its month 2");
     break;
  case "May":
     console.log("Its month May");
     break;
  default:console.log("Default");
     break;
}

const mail="Pratik@gmail.com"

if(mail)
{
  console.log("User mail is correct"); 
}
else
{
  console.log("Wrong");
}

//Falsy Value

// false,0,-0,BigInt 0n,null,undefined,NaN,""

//Truty Value

// "0",'false'," ",[],{},function(){}

let ar=[]
let ob={}

if(ar.length===0)
{
  console.log("Empty");
  
}

if (Object.keys(ob).length===0) {
  console.log("Its Empty!!!");
  
}

//false==0 //true

//Nullish coalescing operator (??):null undefined

let val1;
// val1=5??10
// val1=null??10
// val1=undefined??10
val1=undefined??55??10
console.log(val1);

//Terniary  operator

// condition?true:false

const price=100
price<50?console.log("less than 50"):console.log("greater than 50");

