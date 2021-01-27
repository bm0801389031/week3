/*set function expression variable summation equals function with
parameter/argument num */
var summation = function (num) {
/* let result equal 0*/
  let result = 0;
/* for loop with three expressions. first expression is a variable
i equal to 1; second expression is i less than or equal to num;
third expression is i plus plus, so that i will incroment by one 
through each loop iteration*/
  for (var i = 1; i <= num; i++) {
/*result plus equals  i... += assignment oporator, which makes 
what ever was added to equal what it was added with */
    result += i;
  }
// return result
  return result;
}




//test code

describe('summation', function () {
  it('should return the correct total', function () {
    Test.assertEquals(summation(1), 1)
    Test.assertEquals(summation(8), 36)
    Test.assertEquals(summation(22), 253)
    Test.assertEquals(summation(100), 5050)
    Test.assertEquals(summation(213), 22791)
  })
  it('random numbers test', function () {
    for (var i = 0; i < 100; i++) {
      var rand = Test.randomNumber() + 1
      Test.assertEquals(summation(rand), solution(rand))
    }
  })
  function solution (num) {
    var total = 0
    for (var i = 1; i <= num; i++) {
      total += i
    }
    return total
  }
})


