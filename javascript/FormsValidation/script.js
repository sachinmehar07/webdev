function Login() {
  const un = document.getElementById("userName").value.trim();
  const ps = document.getElementById("password").value;

  console.log(un, ps);

  const LoginFromDataJson = {
    Name: un,
    password: ps,
  };
}

const loginFrom = document.getElementById("loginForm");

loginFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("form submitted");

  const loginFromData = new FormData(loginFrom);

  const UN = loginFromData.get("userName");
  const PS = loginFromData.get("password");

  console.log(UN, PS);

  loginFromData.forEach((value, key) => console.log(key, ":", value));
});

const TestFrom = document.getElementById("testform");

const testFromDataJSON = {};
TestFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  const testFromData = new FormData(TestFrom);

  testFromData.forEach((value, key) => console.log(key, ":", value));

  testFromData.forEach((value, key) => (testFromDataJSON[key] = value));
});

console.log(testFromDataJSON);


    const collage=[{
        name:"sachin",
        age:85,
        gender: "male",
        salary:5000,
        projects:[{ projectname: "abcd", timeline:2, role:"xyz"}], 

    },
    {
        name:"saloni",
        age:82,
        gender: "female",
        salary:50000,
        projects:[
            { projectname: "abcd", timeline:2, role:"xyz"},
             { projectname: "abcd", timeline:4, role:"xyz"},

        ], 

    },
    {
        name:"preeti",
        age:22,
        gender: "female",
        salary:10000,
        project:[ { projectname: "abcd", timeline:2, role:"xyz"}],

        presonaldeatails:{
            F_name:"hgfd",
            M_name:"gfdfd",
        }
    },
]
 
 
 collage[1].salary=4000;

 collage[1].projects[1].timeline=3;

 collage[2].presonaldeatails.F_name="qwerty";

 delete collage[1];

 console.log(collage);
 

 var stdName="sachin"
 var marks= 100;


 console.log("satudent with Nmae",stdName , "scored" ,marks );
 

 
