
//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance. 
console.log("MODULE ASSIGNMENT 2 - LEVEL 1\n1. Create a function that displays prototypal inheritance.\n")
//Function
function Person(first, last, age, gender, interests) {                                     
  this.name = {first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

//Prototype values to the function above.
Person.prototype = {
    nationality(){return this},                         // this refferes to the original function name (Person).
    phone (){return this}
    
};

console.log(Person);

var pOne = new Person ("Joachim", "Skog", 28, "Male", "Gaming")
pOne.nationality = "English";
pOne.phone = "+47 47605059";

console.log("Name: " + pOne.name.first + "\nNationality: " +  pOne.nationality + "\nPhone: " + pOne.phone);



//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
console.log("\n2. Create an array of numbers from 1 - 10; slice the 5th number in the array");

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("ORIGINAL: " + numArray);
var fifthNum = numArray.slice(5);
console.log("SLICED: " + fifthNum);


// 3. Delete the last number in the array that you created above.
console.log("\n3. Delete the last number in the array that you created above.");
var deleteNum = numArray.pop();
console.log("REMOVED: " + deleteNum + "\nNEW ARRAY: " + numArray);


/*4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.
*/
console.log("\n4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas");

var text = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";

function banana(text){
    text = text.replace(/strawberry/gi, "banana");                                      // replace strawberry with banana. gi makes the word serach case insensitive.
    text = text.replace(/strawberries/gi, "bananas");
    return text;                                                                        // return the new text.
}

console.log(banana(text));
//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
console.log("\n5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.\n<-------");


var btnArray = ["Liverpool ", "Cletic ", "Cardiff ", "Manchester Unitid"];              // ORIGINAL ARRAY
document.getElementById("paraId").innerHTML = btnArray;                                 // SHOW ARRAY ON WEBPAGE
var myButton = document.getElementById("btnId");                                        // GET BUTTON
myButton.addEventListener("click", myButtonFunction);                                   // ADD CLICK EVENT LISTENER
console.log(btnArray);

function myButtonFunction(btn) {                                                        // FUNCTION TO RUN WHEN BUTTON IS CLICKED
    
    var btnArrayNew = btnArray.slice(btnArray.length);                                  // REMOVE CONTENT OF ARRAY
    btnArrayNew.splice(0, 0, "Volvo ", "BMW ", "Toyota ", "Ford");                      // ADD CONTENT TO ARRAY      
    
    document.getElementById("paraId").innerHTML = btnArrayNew;                          // SHOW NEW ARRAY ON WEBPAGE
    btnArray = btnArrayNew;
    console.log(btnArray);
};


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
console.log("\n6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.");

var myArray = [
    {   firstName: "John",
        lastName: "Wick"},
    
    {   firstName: "Nick",
        lastName: "Frost"},
    
    {   firstName: "Jane",
        lastName: "Doe"   }
];

var filterName = myArray.filter(function (sort) {
    return (sort.lastName === "Wick");
});

console.log(filterName);


//7. Create a simple function that logs the date.
console.log("\n7. Create a simple function that logs the date.");

var myDate = function () {
    var month = ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "Desember"]
    var newDate = new Date();
    
    console.log("YEAR: " + newDate.getFullYear() + " MONTH: "+month[newDate.getMonth()] + " DAY: "+newDate.getDate());
    console.log("MONTH AS NUMBER: "+ (newDate.getMonth()+1));
}();


