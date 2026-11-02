  
    const form1=document.getElementById("form1");

form1.addEventListener("submit", (e) => {
    e.preventDefault();
   const FormData = new FormData (form1);


   const nn =FormData.get("fullname")

   for(var i=0 ;i<nn.length;i++){

      let isvalid= true;

    if ((nn.charAt(i)>="A" && nn.charAt(i)<="Z")||
       (nn.charAt(i)>="a" && nn.charAt(i)<="a")||
       nn.charAt(i)===" "
        
   )
   { 
     isvalid= true;
    } 
    else{
     isvalid= false; 
     break;
    }
    
   }
  

    console.log(isValid ? "valid" : "Invalid"); 
    
});









