
/*
* The Jet program is an extension from the airplane program.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-12-15
*/

///////////////////////////////////////////////////////////////////////////////

// Defining require and process
/*eslint no-undef: "error"*/
/*global require module*/
// Defining prompt for getting user input.

// Importing the airplane class from another file
const Airplane = require("./Airplane.js");

class Jet extends Airplane {

  constructor() {
    super();
    this.multiplier = 2;
  }

  setSpeed(newSpeed) {
    super.setSpeed(newSpeed * this.multiplier);
  }

  accelerate() {
    super.setSpeed(super.getSpeed() * this.multiplier);
  }
}
// Exporting the subclass
module.exports = Jet;

///////////////////////////////////////////////////////////////////////////////
