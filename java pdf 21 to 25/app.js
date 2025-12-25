// ASSIGHMENT 6:                    
// Q1
// var firstname = prompt("Enter your first name");
// var firstlast = prompt("Enter your last name");
// var fullname = "Muhammad." +" " + "Arbazkhan";
// reply = ( "Salam dear!" + fullname + "!")
// // console.log(reply);
// alert(reply)
// Q2
// document.write(" My fav mobile is: realme 12+ <br>")
// var text = "realme 12+"
// // console.log(text.lenght);
// document.write("The total String is :" + text.length)                 
// Q3
// document.write("String:Pakistani <br>")
// var text = "Pakistani"
// document.write("index of 'n' is: " + text.indexOf("n") )
// Q4
// document.write("Hello World <br>")
// var text = " HelloWrold"
// document.write("Last index of 'l' is: " + text.lastIndexOf("l"))
// Q5
//  document.write("String:Pakistani <br>")
//  var text =  "Pakistani"
// document.write("Char of index '3' is: " + text.charAt(3))
//  Q6
// var firstname = prompt("Enter your first name");
// var firstlast = prompt("Enter your last name");
// var fullname = "Muhammad." +" " + "Arbazkhan";
// reply = ( "Salam dear!" + fullname + "!")
// console.log(reply);
// Q7
// document.write("Hyderbad <br>")
// var text = "Hyderabad"
// document.write(" Replace : "+ text.replace("Hyderabad", "Islamabad"))
// Q8
// document.write("Ali and Sami are best friends. They play cricket and football together <br>")
// var text = "Ali and Sami are best friends. They play cricket and football together"
// document.write("Change 'and' to :"+ text.replaceAll("and","&"))
// Q9
// var str = "472"
// var num = Number(str)
// document.write("String of value: "+ str + "<br>" ) 
// document.write("Type of String : "+ typeof str + "<br><br>" ) 
// document.write("String of value: "+ num + "<br>" ) 
// document.write("Type of String : "+ typeof num  ) 
// Q10
// document.write("User in put 'peanut' <br>")
// var text = "peanut"
// document.write("Upper Case is : " + text.toUpperCase())
// Q11
// document.write("User in put 'javascript' <br>")
// var text = "javascript"
// document.write("Titel Case is : " + text.substring(0,1).toUpperCase() + text.substring(1).toLowerCase())
// Q12
// document.write("Value=33.36 <br>")
// var num = "33.36"
// document.write("Replace . & value is; "+ num.replace(".",""))
// Q13
// document.write("User input : Pakistan <br>")
// var text =  "Pakistan"
// var lastchar = text.charAt("text.lenght -1")
// document.write ("The Last char of is " + lastchar)
// Q14
var text = "University of Karachi"; // string, not array
var arr = text.split(""); // split into characters

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");}
