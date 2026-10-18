const students = ["muskan","saloni", "sachin" ,"mehar"];
console.log(students.includes("sachin"))

if (students.includes ("muskan")) {
    console.log("Eat something")
} else{
    console.log("study something")
}

const number=[43,56,23,87,54,11,34];

const filterednumbers= number.filter((number)=>number>56)
const doublednumbers= filterednumbers.map((number)=>number*2);

console.log(doublednumbers);


const or =[43,56,23,87,54,11,34];

const arraymethodchanning= or 
.filter((number)=>number<= 5) 
.map((number)=>number<= 43);
console.log(arraymethodchanning);  

const res= number.filter((number)=>(number)).includes (88);
console.log(res);



const data=[2,5,11,14,7,1,3,9,12,17,15];

let sum=0;

sum = data.reduce((sum =0,item)=>(sum+=item));

console.log(sum);