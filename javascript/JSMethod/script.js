const str ="anand kumar";

console.log(str.charAt(3));
console.log(str.at(3));

const str2= str.slice(2,6)

console.log(str2);

const s_str=str.substring(2,5)

console.log(s_str);

const text ="learn javascript";

console.log(text.indexOf("java"));
console.log(text.indexOf("script"));
console.log(text.indexOf("python")); 

const email="meharsachin29@.com";

console.log(email.includes("@"));
console.log(email.includes("gmail"));

const filename="assignment.pdf";

console.log(filename.startsWith("assignment"));
console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith(".jpg"));


const message ="HTML is useful. HTML is popular.";

console.log((message.replace("HTML","javascript")));



const message1 = "HTML is useful. HTML is popular.";

console.log(message1.replaceAll("HTML", "JavaScript"));


const text1 = "JavaScript Methods";

console.log(text1.toUpperCase());

const text2 = "JAVASCRIPT METHODS";

console.log(text2.toLowerCase());


const name = "   Rahul Sharma   ";

console.log(name.trim());

const text3 = "   Hello   ";

console.log(text3.trimStart());
console.log(text3.trimEnd());

const first = "Hello";
const second = "Students";

console.log(first.concat(" ", second));


console.log("Hi ".repeat(3));
console.log("*".repeat(5));


const subjects = "HTML,JavaScript,React";

console.log(subjects.split(","));


const sentence = "JavaScript is useful";

console.log(sentence.split(" "));


const word = "CODE";

console.log(word.split(""));


console.log("HTML CSS JS".split()); 








