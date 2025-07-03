// let i=1;
// for(;;)
// {
//     console.log(i);
//     if(i<10)
//     {
//         i++;
//     }
//     else{
//         break;
//     }
// }


// let i=1;
// while(i<6)
// {
//     if(i==3)
//     {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;  
//     if(i==5)
//     {
//             break;
//     }  
// }


// let i=10;
// do
// {
//     console.log(i);
//     i--;
// }while(i>1);

//STRING*****

// let name="Pratik Bavche";
// // console.log(typeof(name));
// console.log(name);

// let Fname=`Pratik 
// bavche 
// patil`;

// console.log(Fname);

let v1="Pratik";
let v2="Bavche";

// console.log(`My name is ${v1} & Surname is ${v2}`);

// console.log(v1.toUpperCase());
// console.log(v1.toLowerCase());
// console.log(v1.length);

// console.log(v1.substring(0,4));
// console.log(v1.substr(0,4));

// console.log(v1+v2);

// let sen="hello i am pratik";
// let word=sen.split(' ');
// console.log(word);
// console.log(word.join(','));

//Functions*****


function abc(x){
    // console.log("Pratik Bavche Patil");

    // for(let i=0;i<5;i++)
    // {
    //     console.log(i);  
    // }

    // console.log(x);

    return x*x;    
}
// console.log(abc(50));


// let getAdd=function(a,b){
//     return a+b;
// }
// console.log (getAdd(50,100));


//ARROW FUNCTION*****

// let get=(x)=>{
//     return x*x*x;
// }
// let ans=get(25);
// console.log(ans);

//OBJECT*****

// let obj={
//     name:'pratik',
//     "my age":20,
//     greet:function(){
//         console.log("Welcome!!");
//     }
// }

// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

//ARRAY*****

let arr=[1,2,3,4,5];
// console.log(arr);

// let arr1=['Pratik',1,true]
// console.log(arr1);
// console.log(arr1[0]);


// arr.push(10);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(50);
// console.log(arr);

// arr.shift();
// console.log(arr);

// let x=arr.slice(2,4);
// console.log(x);

// arr.splice(0,2,"Pratik");
// console.log(arr);

// arr.splice(0,0,"Pratik");
// console.log(arr);


//MAPP*****

// let ans=arr.map((Number)=>{
//     return Number*Number;
// })

// console.log(ans);


// arr.map((No)=>{
//     console.log(No);
    
// })


// arr.map((index,val)=>{
// console.log(`index is ${index} & no is ${val}`);
// })

//*****FILTER*****//

// let result=arr.filter((no)=>{
//     if(no%2==0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// })

// console.log(result);

// let arr1=[1,"Pratik",2,3,"5"];

// let result=arr1.filter((data)=>{
//     if(typeof(data)=='string')
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// })

// console.log(result);


//REDUCE*****

// let sum=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0)
// //acc value 0
// console.log(sum);


// SORT*******

// let arr1=[6,4,5,3,2,54,7,5,4];
// console.log(arr1);
// arr1.sort();
// console.log(arr1);

// console.log(arr1.indexOf(5));


//FOREACH****************

// arr1.forEach((val,ind)=>{
//     console.log("Number ",val,"Index ",ind);
// })

//FORLOOP************

// for(let i=0;i<arr1.length;i++)
// {
//     console.log(arr1[i]);
    
// }

//FOR IN*****

// let obj={
//     name:'pratik',
//     "my age":20,
//     greet:function(){
//         console.log("Welcome!!");
//     }
// }

// for(let key in obj)
// {
//     console.log(key," ",obj[key]);
// }

//FOR OF*******


// let arr2=[10,20,30,40,50];
// for(let val of arr2)
// {
//     console.log(val);
    
// }


arrsum=[10,20,30,40,50];

// function getSum(arr)
// {
//     let len=arr.length;
//     let sum=0;
//     for(let i=0;i<len;i++)
//     {
//         sum=sum+arr[i];
//     }
//     return sum;
// }

// console.log(getSum(arrsum));


// function getSum(arr)
// {
//     let sum=0;
//     arr.forEach(element => {
//         sum=sum+element;
//     });
//     return sum;
// }

// console.log(getSum(arr));

// let sum=(arr)=>
// {
//     let sum=0;
//     arr.forEach(element => {
//         sum=sum+element;
//     });
//     return sum;
// }

// console.log(Sum(arr));



let sum=function(arr)
    {
        let sum=0;
        arr.forEach(element => {
            sum=sum+element;
        });
        return sum;
    }

console.log( sum(arr));
