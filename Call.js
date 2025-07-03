function setName(Uname){
    this.Uname=Uname;
    console.log("done");
    
}

function user(Uname,mail,pass)
{
    setName.call(this,Uname)

    this.mail=mail
    this.pass=pass
}

const x=new user("Prayik","uhu","123")
console.log(x);
