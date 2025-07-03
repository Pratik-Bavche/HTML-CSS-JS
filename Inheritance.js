class user{
    constructor(name){
        this.name=name;
    }
    logMe(){
        console.log(`${this.name}`);
    }
}

class teacher extends user{
    constructor(name,mail,pass)
    {
        super(name)
        this.mail=mail;
        this.pass=pass;
    }

    addCourse(){
        console.log(`${this.name}`);
        
    }
}

const demo=new teacher("Keshav","ggyu","jdfsgih")
demo.logMe()

const demo1=new user("xyzz");
demo1.logMe()

console.log(demo instanceof teacher);
console.log(demo instanceof user);

 