



//SOLUTION=

/*set function statement to repeatStr with parameters/
arguments n, s */
function repeatStr (n, s) {
    /* return s parameter with string.prototype.repeat(),
    the repeat method returns a new string with a 
    specified number of times the string gets repeated */
    return s.repeat(n);
}





/*
const solution = (n, s) => Array.from({ length: n + 1 }).join(s);

describe("Tests", function() {
  it ("Basic tests", function() {
    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
    Test.assertSimilar(repeatStr(5, ">"), ">>>>>");
    Test.assertSimilar(repeatStr(10, "!"), "!!!!!!!!!!");
    Test.assertSimilar(repeatStr(3, "hello "), "hello hello hello ");
    Test.assertSimilar(repeatStr(3, "$"), "$$$");
    Test.assertSimilar(repeatStr(5, "a"), "aaaaa");
    Test.assertSimilar(repeatStr(6, "A"), "AAAAAA");
    Test.assertSimilar(repeatStr(7, "aA"), "aAaAaAaAaAaAaA");
  });
  it ("Random tests", function() {
    for(let i = 0; i < 10; i++) {
      let num = Test.randomNumber();
      let s = Test.randomToken()[0];
      Test.assertSimilar(repeatStr(num, s), solution(num, s));
    }
  });
});
*/