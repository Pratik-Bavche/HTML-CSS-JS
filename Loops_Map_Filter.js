// for (let i= 0;  i<=5;  i++) {
//     if(i==3)
//     {
//         console.log ("3 is best!!!");
//     }
//     console.log (i);
// }

// for (let i = 1; i <=10; i++) {
//     for (let j = 1; j <=10; j++) {
//      // console.log(`inner ${j} and outer ${index}`);
//       console.log(i + '*' + j + '=' + i*j ); //printing table
//     }
// }

 let myarry=["Rohit","Virat","Surya"]
// console.log(myarry.length);

// for (let index = 0; index < myarry.length; ) {
//     const element = myarry[index];
//     console.log(element);
//     index++;
// }

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log("Its 5");
//         break
//     }
//     console.log(`Value of index ${index}`);
// }

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log("Its 5");
//         continue
//     }
//     console.log(`Value of index ${index}`);
// }

// let i=2
// while (i<=10) {
//     console.log(i);
//     i+=2;
// }

// let arr=0
// while (arr<myarry.length) {
//     console.log(myarry[arr]);
//     arr++;
// }

//let count=5
// let count=102
// do {
//     console.log(`Count is :- ${count}`);
//     count+=10;
// } while (count<101);

// let arr1=[1,2,3,4,5,6]
// for (const i of arr1) {
//     console.log(i);
    
// }

// const line="Pratik Bavche";
// for(const i of line)
// {
//     console.log(i);
    
// }


//MAPP
const map=new Map()
map.set('IN',"India")
map.set('Aus',"Australia")
//map.set('Aus',"Australia")
console.log(map);

// for(const [key,val] of map)
// {
//     console.log(key,":-",val);
// }

const newobj={
    name:"Pratik seth",
    age:20
}

// for (const [key,val] of newobj) {
//  console.log(key,val);
    
// }

// for (const key in newobj) {
//     console.log(`${key} :- ${newobj[key]}`);
    
// }

// for (const key in myarry) {
//    console.log(`${key} :- ${myarry[key]}`);
// }

// for (const key in map) {
//  console.log(key);
   
// }

const code=["C","C++","Java","HTML"];

// code.forEach( function (item){
//     console.log(item);
// } )

// code.forEach( (itm)=>{
//     console.log(itm);
    
// } )

// function print(itm){
//     console.log(itm);
    
// }
// code.forEach(print)

// code.forEach((itm,index,arr)=>{
//     console.log(itm,index,arr);
// })

// const codes=[
//     {
//         name:"Js",
//         Fnmae:"Javascript"
//     },
//     {
//         name:"c++",
//         Fnmae:"CPP"
//     },
//     {
//         name:"DBMS",
//         Fnmae:"Database"
//     },
// ]

// codes.forEach( (item)=>{
//     console.log(item.Fnmae);
// })

// const coding=["Java","Python","JS","C++"]

// const data=coding.forEach( (val)=>{
//     //console.log(val);
//     return val
// } )
// console.log(data);

const num1=[]
const num=[1,2,3,4,5,6,7]

// const x=num.filter((num)=>num>3)//return wru=ite this type in arrow function

// const x=num.filter( (num)=>{
//     return num>4
// } )
// console.log(x);

// num.forEach( (num)=>{
//     if(num>4){
//         num1.push(num)
//     }
// })
// console.log(num1);

const arrbook=[

    {
        name:"Book1",price:500,author:"Abc"
    },
    {
        name:"Book2",price:1000,author:"xbc"
    },
    {
        name:"Book3",price:200,author:"vbc"
    },
    {
        name:"Book2",price:10200,author:"kbc"
    },
]

// const data=arrbook.filter((val)=>val.price<=500)
// console.log(data);

// const data1=arrbook.filter((val)=>val.price>500&&val.name==="Book2")
// console.log(data1);

const number=[1,2,3]
// const no=number.map((num)=>{ return num+50})
// console.log(no);

// const no=number.
//                 map((num)=>num*10).
//                 map((num)=>num+1).//allow all values
//                 filter((num)=>num>50)//allow only unique values
// console.log(no);

// const total=number.reduce(function (acc,cur){
//     console.log(`${acc} and ${cur}`);
//     return acc+cur
    
// },0)
// console.log(total);

const total=number.reduce((acc,cur)=>acc+cur,0)
console.log(total);

const shop=[
    {
        name:"js",
        price:999
    },
    {
        name:"java",
        price:2999
    },
    {
        name:"css",
        price:599
    },
]

const cart=shop.reduce((acc,item)=>acc+item.price,0)
console.log(cart);
