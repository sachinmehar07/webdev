const ary =["Aplle", 2.5, 99, "himachal","a"];

console.log("with for each");

var x = ary.forEach(element => {
    if (typeof element ==="number") {
         console.log(element);
    }
      
});
console.log("with map");

var x= ary.map(element=>{
console.log(element);
return(element)
});

console.log("x =",x)

const ary2 =["Aplle", 2.5, 99, "himachal","a"];

var F=ary2.filter((item) =>item==99);

console.log("F =",F);

var Fi=ary2.find((item) =>item!==2.5);

console.log("Fi =",Fi);

var Fix=ary2.findIndex((item) =>item==99);  

console.log("Fix =",Fix);

const ar3=[2,5,1,17,3,9,4,6,8];   

var s= ar3.sort((a,b)=>b-a);  

console.log("s =",s);



