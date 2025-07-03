const user={
    Name:"Pratik",
    Age:20,
    getData:function(){
        // console.log("User object");
        // console.log(`${user.Name}`);
        // console.log(user);
          console.log(this);
    }
}

// console.log(user.Name);
// console.log(user.getData());
// console.log(this);

function User(Name,loginCount,isLoggin){
    this.Name=Name;
    this.Count=loginCount;
    this.Check=isLoggin;

    this.greet=function(){
        console.log(`${this.Name}`);
        
    }
    // return this;
}

const User1=new User("Pratik",12,true)
const User2=new User("Tushar",11,false)

console.log(User1.constructor);
// console.log(User2);
