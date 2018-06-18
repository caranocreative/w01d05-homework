// console.log("javascript running");

// Conceptual Questions

// How do we assign a value of a variable? with =
// How do we change the value of variable? the variable name = new value
// How do we assign an existing variable
//   to a new variable?  variable = new variable


// Strings

// 1.
// let firstVariable = ("Hello World"); 
// firstVariable = 14;
// let secondVariable = firstVariable;
// console.log(secondVariable);
// secondVariable = "katie kitty";
// console.log(firstVariable);				
//


// 2.
// const yourName = ("Laurie");
// console.log("Hello, " + "my " + "name " + "is " + yourName);



// Booleans

// a < b
// c > d
// 'Name' === 'Name'
// a < b > d
// a === a > d
// e === 'Kevin'
// 48 != '48'



// The Farm
// let animal = ("cat"); {
// 	if (animal === "cow"){
// 	console.log("Mooooo");
// 	} else {
// 	(animal != "cow");
// 	console.log("Hey! You're not a cow");
// }
// }



// Driver's Ed

// const age = (num) => {
// 	if (num >= 16){
// 		console.log("Here are the keys");	
// 	} else {
// 		console.log("Sorry, you're too young");
// 	}
// }
//age(12);
//age(20);

// Just Loop It

// for (i = 0; i <= 10; i++) {
// 	console.log(i);
// }


// for (i = 10; i <= 4000; i++) {
// 	console.log(i);
// }

// for (i = 10; i <= 4000; i+=2) {
// 	console.log(i);
// }

// Let's get even
// for (i = 0; i <= 100; i+=2) {
// 	//console.log(i);
// 	console.log(i + " is an even number");
// }


// Give me Five
// for (i = 1; i <= 100; i++) {
// 	if(i % 5 === 0) {
// 		console.log(`${'I found a '}`, i, `${'High five!'}`);
// 	}else if (i % 3 === 0){
// 		console.log(`${'I found a '}`, i, `${'Three is a crowd'}`);
// 	}
// }


// Savings account
//let bank_account = 0;

// for (i = 1; i <= 10; i++){
// 	bank_account += i;
// 	console.log(bank_account);
// }

// for (i = 1; i <= 100; i++){
// 	bank_account += i * 2;
// }
// console.log(bank_account);


// Multiples of 3 and 5

// let counter = 0;

// for (i = 1; i < 1000; i++) {
// 	if(i % 5 === 0) {
// 		counter += i;
// 	}else if (i % 3 === 0){
// 		counter += i;
// 	}
// }
// console.log(counter);


// Easy Does It
// let quotes = ["Roses are Red", "Violets are Blue", "Something else"];



// Random
//const randomThings = [1, 10, "Hello", true];

// 1. How do you access the 1st element in the array? [0]
// console.log(randomThings[0])

// 2. Change the value of "Hello" to "World"
//randomThings[2] = "World";

// 3. Check the value to make sure updated  
//console.log(randomThings[2]);



// We've Got Class
// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];

// 1. access the 3rd element 
// console.log(ourClass[2]);
// 2. Change the value of "Github" to "Octocat"
// ourClass[2] = "Octocat";
// console.log(ourClass[2]);
// 3. Add new element "Cloud City"
// ourClass.push("Cloud City");
// console.log(ourClass);



// Mix it Up
// const myArray = [5 ,10 ,500, 20];
// myArray.push("Egon");
// // console.log(myArray);
// myArray.pop();
// //console.log(myArray);
// myArray.unshift("Bob Marley");
// // console.log(myArray);
// myArray.shift();
// //console.log(myArray);
// myArray.reverse();
// console.log(myArray);


// Biggie Smalls
// let biggieSmalls = (num) => {
// 	if (num < 100) {
// 		console.log("little number");
// 	} else {
// 		console.log('big number');
// 	}
// }
// biggieSmalls(100);



// Monkey in the Middle
// let biggieSmalls = (num) => {
// 	if (num < 5) {
// 		console.log("little number");
// 	} else if ( num > 10) {
// 		console.log("big number");
// 	} else {
// 		console.log("monkey");
// 	}
// }

// for(i = 1; i < 20; i++) {
// 	biggieSmalls(i);
// }




// What's in Your Closet?

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// console.log(`${'Kristyn is rocking that'}`, kristynsCloset[3], `${"today!"}`);
// let kristynsShoe = kristynsCloset[0];
// kristynsCloset.shift();
// console.log(kristynsCloset);

//kristynsCloset.splice(6, 0, "Raybans");
//console.log(kristynsCloset);

// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);

// console.log(thomsCloset[0][0]);
// console.log(thomsCloset[1][0]);
// console.log(thomsCloset[2][0]);

// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][0]}`);

// thomsCloset[1][2] = "Footie Pajamas";
// console.log(thomsCloset[1]);



// Functions - printGreeting

// const printGreeting = (name) => {
// 	console.log(`Hello there, ${name} !`);
// }
// printGreeting("Laurie");



// Functions - reverseWordOrder

// const reverseWordOrder = (str) => {
// 	let temp = str.split(' ');
// 	temp.reverse();
// 	return temp.join(' ');
// }
// console.log(reverseWordOrder('It was the best of times it was the worst of times'));





// Functions - calculate
// const calculate = (num1, num2, operation) => {
// 	switch(operation) {
// 		case 'add':
// 			return num1 + num2;
// 			break;
// 		case 'sub':
// 			return num1 - num2;
// 			break;
// 		case 'mult':
// 			return num1 * num2;
// 			break;
// 		case 'div':
// 			if (num2 != 0) {
// 				return num1 / num2;
// 			} else {
// 				return "Cannot divide by zero.";
// 			}
// 			break;
// 		case 'exp':
// 				return Math.pow(num1, num2);
// 			break;
// 	}
// }

// console.log(calculate(2, 5, "exp"));



// // Functions - calculate
// const calculate2 = (num1, num2, operation) => {
// 	if (operation == "add") {
// 		return num1 + num2;
// 	} else if (operation == "sub") {
// 		return num1 - num2;
// 	} else if (operation == "mult") {
// 		return num1 * num2;
// 	} else if (operation == "div") {
// 		if (num2 != 0) {
// 			return num1 / num2;
// 		} else {
// 			return "Cannot divide by zero.";
// 		}
// 	} else if (operation == "exp") {
// 		// r = return value
// 		let r = num1;
// 		for (i = 1; i < num2; i++) {
// 			r *= num1;
// 		}
// 		return r;
// 	}
// }

// console.log(calculate2(2, 5, "exp"));


// 1
// const printCool = (name) => {
// 	console.log(name + " is cool");
// }
// printCool("Theo");


// 2
// const calculateCube = (num) => {
// 	return num * num * num;
// }
// console.log(calculateCube(5));


// 3

// const isAVowel = (char) => {
// 	if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(isAVowel('f'));




// const isAVowel2 = (char) => {
// 	char = char.toLowerCase();
// 	return (char === "a" || char === "e" || char === "i" || char === "o" || char === "u");
// }
// console.log(isAVowel2('a'));
// console.log(isAVowel2('A'));
// console.log(isAVowel2('f'));
// console.log(isAVowel2('F'));




// 4
// const getTwoLengths = (s1, s2) => {
// 	return [s1.length, s2.length];
// }

// console.log(getTwoLengths("Hank", "Hippopopalous"));


// 5
// const getMultipleLengths = (arrOfStr) => {
// 	let returnValue = [];
// 	for (let i = 0; i < arrOfStr.length; i++) {
// 		returnValue.push(arrOfStr[i].length);
// 	}
// 	return returnValue;
// }
// console.log(getMultipleLengths(['peace', 'love', 'harmony', 'kitten']));



// 6 

// const maxOfThree = (num1, num2, num3) => {
// 	if (num1 > num2){
// 		if (num1 > num3){
// 			return num1;
// 		} else {
// 			return num3;
// 		}
// 	}else {
// 		if (num2 > num3){
// 			return num2;
// 		} else {
// 			return num3;
// 		}
// 	}
// }
// console.log(maxOfThree(14, 14, 14));


// const maxOfThree2 = (num1, num2, num3) => {
// 	return Math.max(num3, Math.max(num1, num2));
// }

// console.log(maxOfThree2(14, 14, 14));


// 7

// const printLongestWord = (arr) => {
// 	let lVar = 0;
// 	let idx = 0;
// 	for (i = 0; i < arr.length; i++) {
// 		if (arr[i].length > lVar) {
// 			lVar = arr[i].length;
// 			idx = i;
// 		} 
// 	} 
// 	return arr[idx];
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));




// 8
// const tran = (num1, num2, num3) => {
// 	return Math.pow(num1 * num2, num3);
// }
// console.log(tran(5, 3, 2));



// Syntax

// define object name =
// put curly braces around object
// any number of attributes that have values in the format of name: value,
// it can have a number of functions that run code 


// Me
// const me = {
// 	name: 'Laurie',
// 	age: 'old',
// 	email: 'something@email.com',
// }
// console.log(me);
// console.log(me.name);
// me.age = 1000;
// console.log(me.age);
// me['Place of residence'] = 'Colorado Spring';
// console.log(me['Place of residence']);



// Slimer
// const monster = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }
// console.log(monster.name);
// monster.type = 'creature';
// monster.age = 6;
// console.log(monster);






// Ogres

// const adventurer = {
// 	alive: true,
// 	name: 'person',
// 	hitpoints: 100,
// 	weapon: 'knife',
// 	action: 'stabs',
// 	fighting(){
// 		console.log("using weapon")
// 	},
	
// };

// const ogre = {
// 	alive: true,
// 	hitpoints: 99,
// 	weapon: 'hands',
// 	action: 'hit',
// }
// // while loop

// console.log(adventurer.name + " takes ");
// console.log(adventurer.weapon + " and ");
// console.log(adventurer.fighting());
// console.log(adventurer.action);
// console.log(adventurer.ogre() + " monster");
















