/*
* The Airplane program implements an application that
* creates an object with a speed.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-12-15
*/

///////////////////////////////////////////////////////////////////////////////

// Defining require and process
/*eslint no-undef: "error"*/
/*global module*/
// Defining prompt for getting user input.

class Airplane {

  constructor() {
    this.speed;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  getSpeed() {

    return this.speed;

  }
}
// Exporting the class
module.exports = Airplane;

///////////////////////////////////////////////////////////////////////////////
