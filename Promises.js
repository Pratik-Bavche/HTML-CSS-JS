const promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Completed");
        resolve()
    }, 1000);
})
promise1.then(function(){
    console.log("Promise consumed");
})

//Second way
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Completed again!!");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise consumed2");
})

//third way

const Promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"Pratik",mail:"Pratik@gmail.com"})
    },1000)
})
Promise2.then(function(user){
    console.log(user);
    
});

//Fourth way

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Patil",Pass:"12345"})
        }else{
            reject('ERROR:404')
        }
    },2000)
})

promise3
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("Promise is resolve or rejected"));


//Fifth way

const five=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"HTML",Pass:"12345"})
        }else{
            reject('ERROR: HTML 404')
        }
    },2000)
});

async function promise5() {
    try{
        const x=await five
        console.log(x);
    }catch(error){
        console.log(error);
        
    }
    
}
promise5()



// async function getAll(){
//     try{

//         const x=await fetch('url')
//         const data=await x.json()
//         console.log(data);
//     }catch(error){
//         console.log(error);
        
//     }
   
// }
// getAll()


fetch('')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error));
