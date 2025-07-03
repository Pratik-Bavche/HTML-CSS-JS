// class user{
//     constructor(uname,mail,pass){
//         this.uname=uname;
//         this.mail=mail;
//         this.pass=pass;
//     }
//     resetPass(){
//         return `${this.pass}Abc`
//     }
//     ChangeName(){
//         return `${this.uname.toUpperCase()}`
//     }
// }

// const demo=new user("Pratik","XYZ","6555")
// console.log(demo.resetPass());
// console.log(demo.ChangeName());


function user(uname,mail,pass){
    this.uname=uname;
    this.mail=mail;
    this.pass=pass;
}

user.prototype.resetPass=function(){
    return `${this.pass}Abc`
}

user.prototype.ChangeName=function(){
     return `${this.uname.toUpperCase()}`
}

const demo1=new user("Tushar","XYZZZ","65551")
console.log(demo1.resetPass());
console.log(demo1.ChangeName());


