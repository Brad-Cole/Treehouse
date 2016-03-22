///*global prompt*/
//var secret = prompt("What is the secret password?");
//do {
//    secret = prompt("What is the secret password?");
//} while (secret !== "sesame");
//
//document.write("You know the secret password. Welcome.");
//
///*global prompt*/
//var password = false;
//var guess;
//var secret = 'sesame';
//
//do {
//    guess = prompt('What is the secret password?');
//    if (guess === secret) {
//        password = true;
//    }
//} while (!password);
//document.write('You are correct!');

var number = '';
for (var i = 4; i <= 156; i += 1) {
    number += i;
}
console.log(number);

for ( var i = 2; i <= 24; i += 2) {
    console.log(i);
} 
Add items to the end of an array with .push()

var items = ['Hat', 'Ball', 'Shoes'];
items.push('Socks','Scarf');
// items is now ['Hat', 'Ball', 'Shoes', 'Socks', 'Scarf']
Add items to the beginning of an array with .unshift()

var items = ['Hat', 'Ball', 'Shoes'];
items.unshift('Socks','Scarf');
// items is now ['Socks', 'Scarf', 'Hat', 'Ball', 'Shoes']

Remove the First Item from an array with .shift()

var items = ['Hat', 'Ball', 'Shoes'];
var firstItem = items.shift();
// firstItem now holds 'Hat'
// and items is now ['Ball', 'Shoes']
Remove the Last Item from an array with .pop()

var items = ['Hat', 'Ball', 'Shoes'];
var lastItem = items.pop();
// lastItem now holds 'Shoes'
// and items is now ['Hat', 'Ball']