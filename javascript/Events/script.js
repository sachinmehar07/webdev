function showAlert(){
    alert("click me button click using HTML Events");
}
document.getElementById("clickbutton").addEventListener("click", showAlert2);

function showAlert2(){
    alert("click me button click using js Events"); 
}

document.getElementById("box").addEventListener("click", ()=>{
 document.getElementById("box").innerText="The box was clicked"
});

function showAlert(){ 
    alert("Welcome to RICR!."); 
}
document.getElementById("showMessage()").addEventListener("click", showAlert);

document.getElementById("onmouseover").addEventListener("onmouseover", ()=>{
 document.getElementById("onmouseover").innerText=" Pointer is over the paragraph!"
});

document.getElementById("onmouseout").addEventListener("onmouseout", ()=>{
 document.getElementById("onmouseout").innerText="Move your pointer here"
}); 