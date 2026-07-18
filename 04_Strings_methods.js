// creation of string 
let str1 = "hellow";

let str2 = 'world';
let str3 = `hellow ${str2}`;
 console.log(str3);
 console.log(str1.length);
 console.log(str1[0]);
 console.log(str1.charAt(1));
  // case cpnversion of  strings 
 let name = "   aman sharma   ";
 console.log(name.toUpperCase());
 console.log(name.toLowerCase());
 //console.log(name.trim());
 console.log(name.trimStart());
 console.log(name.trimEnd());
 // Searching methods of string 
 let sentence = "java script is easy to learn"
 console.log( sentence.indexOf("is"))
 console.log(sentence.includes("Easy"))
 console.log (sentence.startsWith("Java"))
 console.log (sentence.endsWith("learn"))
 console.log (sentence.search('easy'))

 // slicing aur extracting of the substring 
 let text = "javascript programming"
 console.log (text.slice(0,10))
 console.log(text.substring(0,9))
 console.log(text.split(" "))
 console.log(text.split(" ").join("-"))
 //replace repeat and template litral ka use 
 let msg =  " i laove java ";
 console.log ( msg.replace("java","javascript"))
 console.log("aman".repeat(3));
 let user = " Rahul";
 let age  = 21;
 let intro =` my name is ${user} and i am ${age} years old. `;
 console.log(intro);





