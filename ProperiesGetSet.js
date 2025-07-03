function user(mail,pass){
    this._mail=mail;
    this._pass=pass;

    Object.defineProperty(this,'mail',{
        get:function(){
            return this._mail.toUpperCase();
        },
        set:function(val){
            this._mail=val;
        }
    })
    Object.defineProperty(this,'pass',{
        get:function(){
            return this._pass.toUpperCase();
        },
        set:function(val){
            this._pass=val;
        }
    })
}



const demo=new user("Pgufyufwuys","hugdygd")
console.log(demo.mail);
