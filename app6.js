//chapter 21 to 25
//Question no 1
let firstInput = prompt("write your fist name");
let lastInput = prompt("write your second name");
let fullInput = firstInput + " " + lastInput;
alert(`${fullInput}`)

//question no 2
let mobileModel = prompt("what is your fsvorite mobile model ");
let inputLength = mobileModel.length;
document.write("my favorite mobile model is: " + mobileModel + " <br> ");
document.write("length of string: " + inputLength);

//Question no 3
var str = ("pakistan");
var index = str.indexOf("n");
document.write(` string :   ${str}<br/> `);
document.write(`Index of 'n':  ${index}  <br/>`);

//Question no 4
var str = ("Hello World");
var index = str.lastIndexOf("l");
document.write(`string: + ${str} <br>`);
document.write(`Last index of "l" : ${index} <br/>`);

//question no 5
var str = ("pakistani")
document.write = str.indexOf[(3)];

//Question no 6
let str1 = prompt("Enter your first Name")
let str2 = prompt("Enter your last Name")
let fullstr = str1.concat(" ", str2)
alert(`${fullstr}`)


//Question no 7
let city = "hyderabad"
var replace = city.replace("hydera", "islama");
document.write = (`city: ${city} <br/>`)
document.write = (`After replacement: ${afterReplacement}<br/> `)


//Question no 8
var message = ("Ali and Sami are best friends. They play cricket football together.");
var updatedMessage = message.replace(/and/, "&");
document.write = (`the previous message is ${message}<br/>`);
document.write = (`the updated message is ${updatedMessage} <br/>`);


//Question no 9
var string = "472";
var num = number(string);
document.write = `value: ${string}  <br/> type: ${typeof string} <br/>`;

//Question no 10
let userinput = prompt("Enter Some text");
var ans = userinput.toUpperCase();
alert = (`Upper case: ${ans} <br/>`);


//Question no 11
var input = prompt(`whats your favorite programming language`)
var ans = input.toLowerCase();
alert = (`Lower case: ${ans}<br/>`)


//Question no 12
var num = 35.36
var newnumber = num.toString();
var result = num.replace('.', '')
document.write = (result)


//Question no 13
function isValidUsername(username) {
    const specialChars = [33, 44, 46, 64]
    for (let i = 0; i < username.length; i++) {
        var charCode = username.charCodeAt(i)
    } {
        if (specialChars.include(charCode)) {
            return Invalid;
        }
    }

    return Valid;

}
var username = prompty("enter your username")
while (!isValidUsername(username)) {
    username = prompt(`Invalid username! please enter a valid username (no special characters: @, ., !)`)
}
alert(`Your usernamer is:${username}`)


//Question no 14
let A = ["cake", "apple pie", "cookie", "chips", "pattie"]
var input = prompt("Enter an iten to search:").toLowerCase();
let foundIndex = -1;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === input)
        foundIndex = i

}
if (foundIndex !== -1) {
    alert(`${input} is available at index ${foundIndex} in our bakery.`);
    alert(`we are sorry! ${input} is not available in our bakery }`)

}

//Question no 16
  var university = " UNiversity of karachi "
  var universityArray = universityarray.split("")  ;
  for (let i = 0 ; 1 < universityArray.length[i]; i++) 
    document.write(`${universityArray[i]}<br/>`)

  
//Question no 17 
var userInput = prompt("Enter any string:");
var lastCharacter = userInput.charAt(userInput.length - 1);
document.write(`User input: ${userInput}`);
document.write(`last Character of input: ${lastCharacter}`);


//Question no 18
var sentence = "The quick brown fox jumps over the lazy dog";
var lowerCaseSentence = sentence.toLowerCase();
var  wordsArray = lowerCaseSentence.split(" ");
var count = 0;
for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === "the") {
        count++;
    }}
document.write(`Text: ${sentence}<br/>`);
document.write(`There are ${count} occurrence(s) of word 'the'`);