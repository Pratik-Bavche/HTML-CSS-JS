// let str="Pratik    "
// console.log(str.trim().length);

let arr=["Pratik","Bavche","Patil"];

let obj={
    Pratik:"Seth",
    Patil:"Brand",

    get:function(){
        console.log(`${this.Patil}`);
    }
}
Object.prototype.Dadu=function(){
    console.log("OKK Dadu!!");
}

Array.prototype.Hey=function(){
    console.log("Hello");
    
}

// obj.Dadu()
obj.Dadu();
// obj.Hey()

const user={
    name:"Cahii"
}

const Teacher={
    Makevdo:true
}

const TeachinSupport={
    isAvail:false
}

const TSupport={
    Assign:"JS",
    time:true,
    __proto__:TeachinSupport
}
Teacher.__proto__=user
Object.setPrototypeOf(TeachinSupport,Teacher)

let uname="Hello     "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
    
}

uname.trueLength()
"Pratik".trueLength()
"Vaijapur".trueLength()