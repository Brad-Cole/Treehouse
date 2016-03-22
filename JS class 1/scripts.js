//alert("Help me fix this program!");
//alert("Can you get this message to appear?");
//document.write("<h2>My first JavaScript program</h2>");
////document.wrong("<p>I'm practicing 'debugging'.</p>");
//document.write("<h1>Hello JS</h1>");
//alert("Program Start");
//var message = "Hello!";
//alert(message);
//message = "Welcome!";
//document.write(message)
//var visitorName = prompt ("What is your name");
//alert(visitorName);
//var visitor = prompt("what is your name?");
//var message = "Hello " + visitor;
//document.write(message);
//message.length
//console.log("Program Complete")

var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('<p><h2>There are ' + secondsPerDay + ' seconds in a day');
var yearsAlive = prompt("What is your age?");
var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * parseInt(yearsAlive);
document.write('<p><h1>You have been alive for ' + secondsAlive + ' seconds!');
console.log("done");

var dieRoll = Math.floor(Math.random()) * 6 +1;