class user {
    constructor(mail,pass)
    {
        this.mail=mail;
        this.pass=pass;
    }
    get mail(){
        return this._mail.toUpperCase();
    }
    set mail(val){
        this._mail=val;
    }
    get pass(){
        return this._pass.toUpperCase
    }
    set pass(val){
        this._pass=val;
    }
}

const demo=new user("gmail.wd","hhduh");
console.log(demo);
