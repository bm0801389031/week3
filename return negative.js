/*
Description:

In this simple assignment you are given a number and have to 
make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes:

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/








//set function to makeNegative with a parameter/argument of num

function makeNegative(num) {
/*if num the parameter is less then zero*/
  if (num < 0){
//return num the parameter of the function
    return num;
//if the previous did not work, next line, else
  }else{
//num parameter is greater than zero 
    num > 0;
//return negative num parameter
  } return (-num);
}









/*
Test.assertEquals(makeNegative(42), -42);
Test.assertEquals(makeNegative(-9), -9);
Test.assertEquals(makeNegative(0), 0);
Test.assertEquals(makeNegative(1), -1);
Test.assertEquals(makeNegative(-1), -1);

Test.assertEquals(makeNegative(0.12), -0.12);
Test.assertEquals(makeNegative(0.00001), -0.00001);
Test.assertEquals(makeNegative(-0.00001), -0.00001);

var rnd = Math.floor(Math.random() * 101);
Test.assertEquals(makeNegative(rnd), -rnd);

rnd = -Math.floor(Math.random() * 101);
Test.assertEquals(makeNegative(rnd), rnd);
*/