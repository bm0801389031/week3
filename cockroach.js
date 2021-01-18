/*
The cockroach is one of the fastest insects. 
Write a function which takes its speed in km per 
hour and returns it in cm per second, rounded down 
to the integer (= floored).

For example:

cockroachSpeed(1.08) == 30
Note! The input is a Real number (actual type is 
language dependent) and is >= 0. The result should 
be an Integer.
FUNDAMENTALS
*/


/*Set regular function to cockroachSpeed with parameter
/argument of s */
function cockroachSpeed(s) {
/* return a method that will give you an integer rounded
down, then multiply s by 100000 cause there are that 
many cm in a km, then devide by 3600 seconds in a hour */
    return Math.floor(s*100000/3600)
  }





/*
Test.describe("Basic Tests", function() {
  Test.assertEquals(cockroachSpeed(1.08), 30);
  Test.assertEquals(cockroachSpeed(1.09), 30);
  Test.assertEquals(cockroachSpeed(0), 0);
});

var ans = (x) => parseInt(x / 0.036);
Test.describe("Random Tests", function() {
  for (let i = 0; i < 500; ++i) {
    let s = Math.random() + parseInt(Math.random()*4);
    
    Test.it(`s = ${s}`, function() {
      Test.assertEquals(cockroachSpeed(s), ans(s));
    });
  }
});
 */