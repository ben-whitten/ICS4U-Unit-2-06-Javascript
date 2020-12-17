/*
* The Main program implements an application that
* creates two objects and alters their speeds.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-12-15
*/

///////////////////////////////////////////////////////////////////////////////

// Defining require and process
/*eslint no-undef: "error"*/
/*global require*/
// Defining prompt for getting user input.

// Importing the airplane class and jet subclass from another file
const Airplane = require("./Airplane.js");
const Jet = require("./Jet.js");

// Creating object.
let biplane = new Airplane(0);

// Getting and setting speed.
biplane.setSpeed(212);
console.log(biplane.getSpeed());
    
// Creating object.
let boeing = new Jet(0);
    
// Getting and setting speed.
boeing.setSpeed(422);
console.log(boeing.getSpeed());
    
// Setting x to 0;
var x = 0;
    
while (x < 4) {
  boeing.accelerate();
  console.log(boeing.getSpeed());
  if (boeing.getSpeed() > 5000) {
    biplane.setSpeed(biplane.getSpeed() * 2);
  } else {
    boeing.accelerate();
  }
  x++;
}

console.log(biplane.getSpeed());
