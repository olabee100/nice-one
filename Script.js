/*******
 * variables and data type*/ 
/*
var firstName = 'john';
console.log(firstName);
var LastName = 'smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job ;
console.log(job);

job= 'Teacher';
console.log(job);

//variables naming rules
var $3years = 3;
console.log($3years);
var johnMark = 'john and Mark';
var if = 23;

/****
 * variable mutation and type coercion
 */

//const { conditionalExpression } = require("@babel/types");

//const { object } = require("prop-types");

/*var firstName='john';
var age= 28;
console.log(firstName + ' ' +age)

var job, isMarried;
job ='teacher';
isMarried = false;
console.log(firstName + ' is a ' + age +  ' year old ' + job + '. is he married? ' + isMarried);

// variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age +  ' year old ' + job + '. is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/*********
 * Basic operators
 */
/*var year, yearJohn, yearMark;
now= 2020
ageJohn = 36;
ageMark = 33;

//Math Operator
yearJohn = now - 28;
yearMark = now -33;
console.log(yearJohn);

console.log( now + 2);
console.log( now * 2);
console.log( now / 10);

//logical operator
var johnOlder = ageJohn > ageMark;
console.log(johnOlder)




//type of operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than john');
var x;
console.log(typeof x) 



/**Operator precedence */
/*
var now= 2018;
var yearJohn =1989;
var fullAge= 18;

var isfullAge = now - yearJohn >= fullAge;
console.log(isfullAge);


//Grouping
var ageJohn = now - yearJohn
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignment

var x,y;
x = y = (3 + 5) * 4 - 6;
console.log(x,y);

//More Operators

x *=2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);



/** coding challenge*/
var markHeight,markMass, johnHeight, johnMass;
markHeight = 1.69;
markMass = 78;

johnHeight = 1.95;
johnMass = 92;

markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);

johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

var ismarkhigher = markBMI > johnBMI;
console.log( 'Is Mark\'s BMI higher than John\'s? '  + ismarkhigher);

/*** if/else statement */

var firstName='john';
var civilStatus='single';

if( civilStatus==='married' ){
    console.log(firstName + ' is married')
}
else{
    console.log(firstName + ' will hopefully marry soon')
}

var isMarried =true;
if (isMarried){console.log(firstName + ' is married')

}
else{
    console.log(firstName + ' will hopefully marry soon')
}

var markHeight,markMass, johnHeight, johnMass;
markHeight = 1.69;
markMass = 78;

johnHeight = 1.2;
johnMass = 92;

markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);

johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

if(markBMI > johnBMI){
    console.log( 'Mark BMI is higher');
}

else{
    console.log( 'John BMI is higher');
}

//var ismarkhigher = markBMI > johnBMI;
//console.log( 'Is Mark\'s BMI higher than John\'s? '  + ismarkhigher);

 /** Boolean Logic */
 var firstName='John';
 var age= 100;

 if(age < 13){console.log(
     firstName + ' is still a boy');
 }

 else if(age >= 13 && age<20){console.log(
    firstName + ' is a teen');
}

else if(age >= 20 && age < 30){console.log(
    firstName + ' is a young man');
}
 else{
    console.log(
        firstName + ' is a man')
 }
/** Tenery operator and switch statement */
var firstName= 'John';
var age= 16;

age >=18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';

console.log(
    drink
);

//switch statement

var job= 'engineer';
switch(job){
    case "teacher":
    console.log(firstName +  ' teaches kids how to code.');
    break;
    case "driver":
    console.log(firstName +  ' drives an uber in Lisbon.');
    break;
    case "designer":
    console.log(firstName +  ' designs beautiful websites.');
    break;
    default:
    console.log(firstName +  ' does something else.');
}

var age = 18;
switch(true) {
case age < 13:
    console.log(firstName + ' is still a boy');
 break;
    case age >= 13 && age<20 : 
 console.log(firstName + ' is a teen');
 break;
case age >= 20 && age < 30 : console.log(
    firstName + ' is a young man');
break;
    default:

    console.log(
        firstName + ' is a man');}
/** Boolean Logic 
var firstName='John';
var age= 100;

if(age < 13){console.log(
    firstName + ' is still a boy');
}

else if(age >= 13 && age<20){console.log(
   firstName + ' is a teen');
}

else if(age >= 20 && age < 30){console.log(
   firstName + ' is a young man');
}
else{
   console.log(
       firstName + ' is a man')
}
*/

/** Truty and Falsy values */

height = 23;
var height;

if(height || height === 0) {
    console.log('variable is defined');
}
else {
    console.log('variable is not defined');
}

// Equality operator
if (height === '23') {
    console.log
    ('The == operator does type coercion!');
}


/**Coding challenge */

var John1,John2,John3,Mike1,Mike2,Mike3;
John1 = 189;
John2 = 120;
John3 = 103;
Mike1 = 129;
Mike2 = 94;
Mike3 =123;

var Mary1,Mary2,Mary3;
Mary1 = 97
Mary2 = 134
Mary3 = 105

var maryaverage = (Mary1 + Mary2 + Mary3) / 3
console.log(maryaverage);

 var johnaverage = (John1 + John2 + John3) / 3
console.log(johnaverage);

var mikeaverage = (Mike1 + Mike2 + Mike3) / 3
console.log(mikeaverage);

if (johnaverage> mikeaverage && johnaverage > maryaverage) {
    console.log('John is the winner scoring '  +  johnaverage );
}

else if (mikeaverage> johnaverage && mikeaverage > maryaverage){
    console.log(' Mike is the winner' + mikeaverage)
}

else if (maryaverage> mikeaverage && maryaverage > johnaverage){
    console.log('mary is the winner scoring '  +  maryaverage );
}
else {
    console.log('There is a draw')
}

/***Functions */
function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if( retirement > 0){ 
    console.log(firstName + ' retires in ' + retirement + ' years');
} else{
    console.log( firstName + ' is already retired'); }
}
yearsUntilRetirement(1990, 'john');
yearsUntilRetirement(1948, 'mike');
yearsUntilRetirement(1990, 'jane');


/***Function statement and expression */
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName +' drives a cab in Lisbon';
        case 'designer':
            return firstName +' designs beautiful websites';
        default:
            return firstName +' does something else';
    }
}


console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'Jane'))
console.log(whatDoYouDo('artist', 'mark'))

/***Arrays */

var names = ['John','Mark','Jane'];
var years = new Array(1990,1969,1948);

console.log(names);
console.log(names.length);

names[1] ='Ben';
console.log(names);
names[names.length] = 'Mary';
console.log(names);

var John =['John', 'Smith', 1998, 'designer', false];
John.push('blue');
John.unshift('Mr.');
console.log(John);

John.pop();
John.pop();
John.shift();
console.log(John)

console.log(John.indexOf(1998));
var isDesigner = John.indexOf('designer') === -1 ? 'John is Not a designer' : 'John is a designer';
console.log(isDesigner)

/***Coding Challenge */

function tipcalculator(bill){
    var percentage;
    if(bill < 50){
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200){
        percentage = 0.15;
    }else {
        percentage = 0.1;
    }
    return percentage * bill;
}

console.log (tipcalculator(10));

var bills = [124, 48, 268]
var tips =[tipcalculator(bills[0]), tipcalculator(bills[1]), 
tipcalculator(bills[2])];


var finalValues = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
console.log(tips, finalValues)


/***Object and properties */

var john = {
    firstname:'john',
    lastname: 'smith',
    birthYear: 1998,
    family : ['Jane', 'Mark', 'Emily'],
    job: 'teacher',
    isMarried : false
}

console.log(john.firstname);
console.log(john['lastname']);
var x = 'birthYear';
console.log(john[x]);


john.job = 'lawyer';
john['isMarried'] = true;
console.log(john);

var Jane = new Object();
Jane.firstname = 'Jane';
Jane.birthYear = 1969;
Jane['lastname'] = 'Smith';
console.log(Jane);

/***Objects and Methods */

var john = {
    firstname:'john',
    lastname: 'smith',
    birthYear: 1997,
    family : ['Jane', 'Mark', 'Emily'],
    job: 'teacher',
    isMarried : false,
    calcAge: function(birthYear){
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge(); 
console.log(john);

/******coding challenge */

var Mark = {
    fullname: 'Mark Able',
    mass: 92,
    height:  1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var John = {
    fullname: 'John Doe',
    mass: 78,
    height:  1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

/*
if(Mark.calcBMI() > John.calcBMI()){
    console.log(Mark.fullname + ' has a higher BMI of ' + Mark.bmi);
} else if (John.bmi > Mark.bmi){
    console.log(John.fullname + ' has a higher BMI of ' + John.bmi);
}
else {
    console.log('They have the same BMI')
}


/***** Loops and iteration */
/*
for (var i = 1; i <= 20; i += 2){
    console.log(i)
}

var John =['John', 'Smith', 1998, 'designer', false];

for (var i =0; i < John.length; i++){
    console.log(John[i]);
}

var i=0;
while(i < John.length){
    console.log(John[i]);
    i++;
}

*/

//Continue and  break statement

var John =['John', 'Smith', 1998, 'designer', false];

for (var i =0; i < John.length; i++){
    if(typeof John[i] !== 'string') continue;
    console.log(John[i]);
}
for (var i =0; i < John.length; i++){
    if(typeof John[i] !== 'string') break;
    console.log(John[i]);
}

//looping backward
for (var i = John.length - 1; i >= 0; i--){
    console.log(John[i]);
}

//coding challenge

var john = {
    fullname : 'John smith',
    bill: [124, 48, 268, 180, 42],
    calctip: function(){
       this.tip = [];
       this.finalValues = [];

       for ( var i = 0; i < this.bill.length; i++){
        var percentage;
        var bill = this.bill[i];
        if(this.bill[i] < 50){
            percentage = 0.2;
        } else if (this.bill[i] >= 50 && this.bill[i] < 200){
            percentage = 0.15;
        }else {
            percentage = 0.1;
        }
        this.tip[i] = percentage * bill;
        this.finalValues[i] = bill + bill * percentage;
       }
    }

}

var mark = {
    fullname : 'mark noble',
    bill: [77, 475, 118, 45],
    calctip: function(){
       this.tip = [];
       this.finalValues = [];

       for ( var i = 0; i < this.bill.length; i++){
        var percentage;
        var bill = this.bill[i];
        if(this.bill[i] < 100){
            percentage = 0.2;
        } else if (this.bill[i] >= 100 && this.bill[i] < 300){
            percentage = 0.1;
        }else {
            percentage = 0.25;
        }
        this.tip[i] = percentage * bill;
        this.finalValues[i] = bill + bill * percentage;
       }
    }

}

function calcAverage(tip) {
    var sum = 0
    for ( var i = 0; i < tip.length; i++){
        sum = sum + tip[i];
    }
   return sum /tip.length;

}


john.calctip();
mark.calctip();


john.average = calcAverage(john.tip);
mark.average = calcAverage(mark.tip);
console.log(john,mark);

if (john.average > mark.average){
    console.log(john.fullname + '\'s family pays higher tips, with an average of $' + john.average)
}
else if (mark.average > john.average){
    console.log(mark.fullname + '\'s family pays higher tips, with an average of $' + mark.average)
}


////// This keyword

calculateAge(1999);
function calculateAge(year) {
    console.log(2016 - year)
    console.log(this)
}

var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this)
        console.log(2016 - this.yearOfBirth);
        function innerFunction(){
            console.log(this)
        }
        innerFunction();
    }
}

john.calculateAge();





