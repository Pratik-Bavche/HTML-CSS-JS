const user={
    mail:'Keshav@gamil.com',
    _pass:'1234',

    get mail(){
        return this.mail.toUpperCase()
    },
    set mail(val){
        this.mail=val;
    }
}

const Tea= Object.create(user)
console.log(Tea.mail);
