const ob={
    fullname: "sachin",
    gender :"male",
    college:"lnct",
    year: 3,
    cgpa: 7.5,

    

};

console.log(ob);
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));

const { fullname,year, cgpa}=ob;


function displaystudent(name, ...subjects){
    console.log("student:",name);
    console.log("subjects:",subjects); 
    


}
displaystudent("sachin","html","java");

function sum(...n){
    return n.reduce((result=0,num)=>(result+=num));


}
const answer=sum(2,3,5,4,8,5);

console.log(answer);
