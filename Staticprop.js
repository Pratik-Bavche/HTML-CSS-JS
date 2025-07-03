class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`this.username`);
        
    }

    static createId(){
        return `123`
    }
}
// const demo=new user("Pratik")
// console.log(demo.createId());


class teacher extends user(){
    constructor(name,mail){
        super(name)
        this.mail=mail;
    }
}

const demo1=new teacher('Keshav',"hdghsv");
demo1.logMe()
