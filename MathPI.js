// const x=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(x);

// console.log(Math.PI);


const obj={
    name:"Pratik",
    age:20,
    isStud:true,

    orderchai:function(){
        console.log("cgcytcft");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(obj,"name"));

Object.defineProperty(obj,"name",{
    writable: false,
    enumerable: true
})
// console.log(Object.getOwnPropertyDescriptor(obj,"name"));

for (let [key,val] of Object.entries(obj)) {
    
    if(typeof val!=='function'){
        console.log(`${key} : ${val}`);
    }
    
}