/*
Description:

It's pretty straightforward. Your goal is to create a function
that removes the first and last characters of a string. You're
given one parameter, the original string. You don't have to worry 
with strings with less than two characters.
FUNDAMENTALS, BASIC LANGUAGE FEATURES, STRINGS
*/







//set function to removeChar with a parameter/argument of str
function removeChar(str) {
/* return the parameter with method slice then with the two params
in slice, use the first param to grab the first letter from the string 
and the second parameter to grab the first letter from the back of the 
string.*/
  return str.slice(1, -1);
}




/*
Test.describe("Tests", function(){

Test.assertEquals(removeChar('eloquent'), 'loquen');
Test.assertEquals(removeChar('country'), 'ountr');
Test.assertEquals(removeChar('person'), 'erso');
Test.assertEquals(removeChar('place'), 'lac');
Test.assertEquals(removeChar('ooopsss'), 'oopss');

});


 
Test.describe("Random Tests", function(){
  
  function testSolution(str){
        return this.str = str.substring(1, str.length-1);      
  }
  
   for(var i = 0; i < 6; i++){
    var possible = "abc123",
        text = "";
     for(var k = 0; k < 7; k++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
     }
    Test.assertEquals(removeChar(text), testSolution(text));
  }
  
}); 
*/








