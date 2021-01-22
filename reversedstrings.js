
//set function statement to reverse with parameter/argument s
function solution(str){
/*return parameter s with method split(), to split the string and 
puts these substrings into an array; for the parameter, only 
quotes with no space, that way it will pull each word in to an
array.........
then reverse() method which reverses an array in place, the first
array element becomes the last and the last array element becomes
the first .reverse holds nothing in the parantheses....
then the join() method which creates and returns a new string by
concatenating all of the elements in an array.. set with parameter
with only quotations, no space, so it joins the array in to a whole 
string*/
	return str.split("").reverse().join("");
}





/*
Test.assertEquals(solution('world'), 'dlrow')
Test.assertEquals(solution('hello'), 'olleh')
Test.assertEquals(solution(''), '')
Test.assertEquals(solution('h'), 'h')
*/