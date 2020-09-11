// add solution here
/* returns an array of strings containing what instruments each musician play 
   Create a variable with an empty array.
    * Use a `for loop`, which iterates over the array of musicians. Be careful
      about what value you set your `counter` variable to store. (Hint: Think
      about what the first index of an array is). 
    * The first time through the loop, it should create a string using the _first_
      index of the musicians array **and** the first index of the instruments
      array: `"John Lennon plays guitar"`. 
    * Add this string to the empty array you created. The loop should make the
      same sentence for every member of the musicians array. 
    * The function should return the array of new strings containing what
      instruments each musician plays. */
      
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

/* theBeatlesPlay([ahfei,keith], [piano, guitar]); */

/* returns an array of strings with exclamation points
      1) takes in any array of strings and returns a new array with exclamationpoints added to each element
       Use a while loop to loop over the facts array and add `"!!!"` to the end of//
    every fact.

    Return an array of strings with exclamation points */

function johnLennonFacts(facts) {
  var array = [];
  let i = 0;
  while ( array.length < facts.length) {
    array.push(facts[i] + "!!!");i++;
  }

  return array;
}

/* Create a function `iLoveTheBeatles` which accepts a number as a parameter. 

    * The function should create a variable that stores an empty array. 
    * Implement a do-while loop inside the function that adds `"I love the
      Beatles!"` to the empty array. 
    * The loop should then increment the number passed in as a parameter. The
      condition of the loop should check to see that the parameter number is
      less than `15`. It should contain a number of strings that represents the
      difference between the input number and `15`.
    * Return the array with the strings `"I love the Beatles!"`. */
function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1
  } while (number < 15);
  return array;}
  
  