const jsondata = 
  {
    title: "MyPhone 18",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  };

  const datareadytostore=JSON.stringify(jsondata);

  localStorage.setItem("mynewdata",datareadytostore);
  localStorage.setItem("myname","sachin");
  localStorage.setItem("your Name","saloni");

  const getLSdata= localStorage.getItem("mynewdata");

  document.querySelector("body").appendChild((document.createElement("div").innerText=getLSdata));
