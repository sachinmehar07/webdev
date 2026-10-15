function greetings(name){
    return function(){
    console.log("welcome to RICR!!!",name)
};
}
const greetsachin = greetings("sachin");
const greetsaloni = greetings("saloni");

greetsachin();
greetsaloni();