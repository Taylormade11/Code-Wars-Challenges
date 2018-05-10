Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Take a number, convert it to a string, iterate through string, use charAt(i) to see if current char is odd or even. If even add it to new string, if odd, check next number, if both are odd insert a '-'. return new string.

Now time to refactor and try another way to solve!