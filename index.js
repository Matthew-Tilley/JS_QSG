function numz()
{
    return 5;
}

numz();  //NOTHING HAPPENS
console.log(numz());  //THE WHOLE FUNCTION RETURNS FIVE

var x = numz();
console.log(numz() + " KLIASF");  //RETURNS AS EXPECTED
console.log(x + " OIHOIHGOIHDGSOI");  //SAME AS ABOVE




/*
function getnum(){
    let num = prompt("Enter a number: ");
    return whatever(num);
}




function whatever(num)
{
    if (num < 100)
        {
            return true;
        }
    
    else
        {
            return false;
        }
}

var output = whatever();

console.log(output);
*/



/*function addemup(x,y){
    
    x = parseInt(prompt("Enter some number: "));
    y = parseInt(prompt("Enter some other number: "));
    
    return x + y;    
}

var q = addemup();

console.log("The answer is: " + q);*/

//console.log(addemup());



/*
let x = "BING";
let z = "BONG";

function whatever()
{
    let q = "octopus";
    return q;
}

console.log("This thing is not an " + whatever() + "!!!");
*/

//whatever(z);


/*
var car = new Object();

car.color = "red";
car.make = "ford";
car.model = "Mustang";

//console.log(car);

//console.log(car.color);

car.startCar = function()
{
    console.log("The engine has been started");
    console.log("You are driving a " + car.color + " " + car.make + " " + car.model);
}

car.switcheroo = function()
{
    let x = prompt("Enter the color you wish the car to be: ");
    return x;
}

othercolor = car.switcheroo();

car.changeColor = function(othercolor)
{
    this.color = othercolor;
    console.log("The car is now " + this.color);
}


car.startCar();

car.switcheroo();
*/

//console.log(car);



/*
function checkPrice(price, discount)
{   
    let total = price - discount;
    
    return total;
}

//let subtotal_1 = checkPrice(100, 20);

//console.log(subtotal_1);

console.log("The actual price is " + checkPrice(100, 30) + " dollars...cool?");
*/


/*
function bippo()
{
    x = 9099;
    return x;
}


//console.log(x);
let blurp = bippo();

console.log(blurp);




function priceCheck(price, discount)
{
    let total = price - price * discount / 100;
    return total;
}

let actualPrice = priceCheck(100,20);

document.write("The discounted price of the product excluding VAT is " + actualPrice);



function something(arg1, arg2)
{
    return data;
}
*/



/*function getData()
{
    let name = prompt("Enter your name: ");
    let age = prompt("Enter your age: ");
    return flurpo(name, age);
}

function flurpo(name, age)
{
    console.log("Okay " + name + " you're good.");
}

getData();*/



/*
function checAge(name, years)
{
    name = prompt("Enter your name: ");
    years = prompt("Enter your age:");
    
    if ( years >= 18 )
        {
            console.log("Okay, " + name +  " you may pass.");
        }
    
    else
        {
            console.log("Sorry, " + name + " you are not old enough!");
        }
}



checAge();
*/

/*function derp(flip, flop)
{
    console.log(flip + flop);
}


derp(8,2);
derp(99,1);*/


/*function getData()
{
    let age = prompt("Enter your age: ");
    return output(age);
}


function output(age)
{
    console.log("You are " + age + " years old.");
}

getData();*/



/*function getData()
{
    let age = prompt("Enter your age");
    return age;
}*/









/*
function checkAge()
{
    let age = prompt("Enter your age:");
    
    if (age >= 18)
        {
            console.log("You have attained the age of wisdom.");
        }
    
    else
        {
            console.log("You've got more learnin' to do...");
        }
}

checkAge();
*/


/*
function writeText()
{
    document.write("The answer is 42.");
}

for (let i=0; i < 10; i++)
{
    writeText();
}
*/



/*
let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

var counter = 0;

for ( let i = counter; i < months.length; i++ )
    {
        console.log(i+1 + " is the number of month " + months[i] );
    }
*/



/*
while (counter < months.length)
{
    console.log(months[counter] + " is month number " + parseInt(counter+1) + " of the year.");
    //document.write(months[counter] + " ");
    counter++;
}
*/

//console.log(months);
//console.log(months.length);


/*
let age = 15;


for (var i = age; i < 18; i++)
    {
        age++;
        console.log(age);
    }
*/



/*
while (age < 100)
    {
        console.log(age);
        age++;
    }
*/



/*
while (age > 0 && age >= 100 )
    {
        console.log(age);
        age++;
    }
*/



/*
var money = prompt("Enter the amount of money you have in your pocket: ");

if (money > 500 )
    {
        console.log("Let's go to Tony's!");
    }

else if (money > 100 && money < 500 )
    {
        console.log("Let's go to Pasta House!")
    }

else
    {
        console.log("Imo's it is!");
    }
*/



/*
let age = prompt("Enter age:");

if ( age >= 40 )
    {
        console.log("You are over 40 years old.");
    }

else
    {
        console.log("You are under 40 years old.");
    }
*/


/*
var something = ["this", "that", "the", "other"];

var a = something.length;

//console.log(a);

console.log("This array has " + a + " items in it.");
*/

//console.log(something.length);


/*
console.log(something);

something.unshift("BLURP");

console.log(something);

something.shift();

console.log(something);
*/


/*
var whatever = [];

console.log(whatever.push("LKASJF"));
console.log(whatever[0]);

whatever.pop();

console.log(whatever);
console.log(whatever[0]);
*/


/*
let age = 99;

//age++;

age--;

console.log(age);
*/



/*console.log(age -= 1);

console.log(age += 1);

console.log(age *= 50);

console.log(age /= 2)

console.log(age);*/


/*
let fname = "Joe";

let lname = "Schmuckatelli";

let fullname = fname + " " + lname;

console.log(fullname);
*/



/*const birth_year = 1957;

let current_year = 2018;

let a = current_year - birth_year;

document.getElementById("test").innerHTML = a;
*/


/*const year_of_birth = 1970;

let current_year = 2018;

var approximate_age = current_year - year_of_birth;

window.console.log(approximate_age);
*/


//console.log(year_of_birth === current_year);

/*var name = prompt("What is your name?", "Lastname, Firstname");

console.log(name);*/

//var location = "California";

/*
let name;

name = "martin";
*/

//let name = "Martin";

//document.write("This is another thing to indicate JavaScript is beginning to make sense.");

//alert("JavaScript is starting to make sense!");