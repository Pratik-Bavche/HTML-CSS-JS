function demo(num)
{
    return num*5;
}
demo.power=2
console.log(demo(5));
console.log(demo.power);
console.log(demo.protype);

function user(name,score)
{
    this.name=name;
    this.score=score;
}

user.prototype.increment=function(){
    this.score++;
}
user.prototype.display=function(){
    console.log(`${this.score}`);
    
}

const x=new user("Pratik",45)
const x1=new user("Bavche",55)

x.display()
x1.display()