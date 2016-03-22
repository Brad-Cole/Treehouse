var students = [
    {
        name: 'Brad',
        track: 'Fullstack',
        achievements: 10,
        points: 4000
    },
    {
        name: 'Erica',
        track: 'Front End Development',
        achievements: 10,
        points: 4000
    },
    {
        name: 'Heather',
        track: 'iOS',
        achievements: 10,
        points: 4000
    },
    {
        name: 'Ryan',
        track: 'Web Design',
        achievements: 0,
        points: 124
    },
    {
        name: 'Joey',
        track: 'Android',
        achievements: 8,
        points: 3500
    }
];
var message = '';
var student;
var search;

function print(message) {
    'use strict';
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function getReport(student) {
    var report = '<h2>Student: ' + student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    return report;
}
    

while (true) {
    search = prompt("Search for a student name. Type 'quit' to exit");
    if (search === null || search.toLowerCase() === 'quit') {
        break;
    }
    for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if ( student.name === search ) {
        message = getReport(student);
        print(message);
    }
    }
}

//
//for (var i = 0; i < students.length; i += 1) {
//    student = students[i];
//    message += '<h2>Student: ' + student.Name + '</h2>';
//    message += '<p>Track: ' + student.Track + '</p>';
//    message += '<p>Achievements: ' + student.Achievements + '</p>';
//    message += '<p>Points: ' + student.Points + '</p>';
//}
//
//var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
//var search;
//
//function print(message) {
//  document.write( '<p>' + message + '</p>');
//}
//
//while (true) {
//  search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
//  search = search.toLowerCase();
//  if ( search === 'quit') {
//    break;
//  } else if ( search === 'list' ) {
//    print( inStock.join(', ') ); 
//  } else {
//    if ( inStock.indexOf( search ) > -1 ) {
//      print( 'Yes, we have ' + search + ' in the store.');
//    } else {
//      print( search + ' is not in stock.'); 
//    }
//  }
//}








