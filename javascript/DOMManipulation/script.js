const headingtext= document.getElementById("heading");
const paratext= document.getElementById("studentmessage");
const btmlable= document.getElementById("studentmessage");

console.log(headingtext.innertext);
console.log(paratext.textContent);
console.log(btmlable.innerHTML);

headingtext.innerText=("sachin ");
headingtext.innerHTML=("saloni");
headingtext.textContent=("mehar");

function updatemyname(){
    const myname =document.getElementById("myname").value.trim();
    paratext.innerText="welcome to your learning portal !!"+myname;
}
const pic=document.getElementById("somepicture");


pic.src="./6c5f45a6877ff424cf103aba4881c7e4[1].jpg";
pic.alt="somepicture"; 

function change(){
    const mynameInput= document.getElementById("myname");
    mynameInput.id="myfullname";
    mynameInput.type="password";
    mynameInput.name="fullname";


}
headingtext.style.color



//const body= document.querySelector("body")

//console.log(body);

//console.log("body.childnodes");
//console.log("innertext");
//console.log("body.innertext");





