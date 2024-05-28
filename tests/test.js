const exp = require('constants');
const fb = require('../fizzbuzz.js');

// Challenge 1 - Write a test for each of the constants.
//These should test be equal to the their string namesakes.
test('FIZZ should be equal to "fizz"', () => {
  expect(fb.FIZZ).toBe('fizz');
});

test('BUZZ should be equal to "buzz"', () => {
  expect(fb.BUZZ).toBe('buzz');
});

test('FIZZBUZZ should be equal to "fizzbuzz"', () => {
  expect(fb.FIZZBUZZ).toBe('fizzbuzz');
});

// Challenge 2 - Test the isFizzy(n) function.
//This takes a number and returns true if the number is divisible by 3.
test('isFizzy should return true when n is divisible by 3', () => {
	expect(fb.isFizzy(3)).toBe(true);
	expect(fb.isFizzy(6)).toBe(true);
	expect(fb.isFizzy(9)).toBe(true);
	expect(fb.isFizzy(12)).toBe(true);
	expect(fb.isFizzy(15)).toBe(true);
	expect(fb.isFizzy(18)).toBe(true);
	expect(fb.isFizzy(21)).toBe(true);
	expect(fb.isFizzy(24)).toBe(true);
	expect(fb.isFizzy(27)).toBe(true);
	expect(fb.isFizzy(30)).toBe(true);
});

test('isFizzy should return false when n is not divisible by 3', () => {
	expect(fb.isFizzy(1)).toBe(false);
	expect(fb.isFizzy(2)).toBe(false);
	expect(fb.isFizzy(4)).toBe(false);
	expect(fb.isFizzy(5)).toBe(false);
	expect(fb.isFizzy(7)).toBe(false);
	expect(fb.isFizzy(8)).toBe(false);
	expect(fb.isFizzy(10)).toBe(false);
	expect(fb.isFizzy(11)).toBe(false);
	expect(fb.isFizzy(13)).toBe(false);
	expect(fb.isFizzy(14)).toBe(false);
});


// Challenge 3 - Test the isBuzzy(n) function.
// This function takes n as a parameter and returns true if the number is divisible by 5.
test('isBuzzy should return true when n is divisible by 5', () => {
	expect(fb.isBuzzy(5)).toBe(true);
	expect(fb.isBuzzy(10)).toBe(true);
	expect(fb.isBuzzy(15)).toBe(true);
	expect(fb.isBuzzy(20)).toBe(true);
	expect(fb.isBuzzy(25)).toBe(true);
	expect(fb.isBuzzy(30)).toBe(true);
});

test('isBuzzy should return false when n is not divisible by 5', () => {
	expect(fb.isBuzzy(1)).toBe(false);
	expect(fb.isBuzzy(2)).toBe(false);
	expect(fb.isBuzzy(3)).toBe(false);
	expect(fb.isBuzzy(4)).toBe(false);
	expect(fb.isBuzzy(6)).toBe(false);
	expect(fb.isBuzzy(7)).toBe(false);
	expect(fb.isBuzzy(8)).toBe(false);
	expect(fb.isBuzzy(9)).toBe(false);
	expect(fb.isBuzzy(11)).toBe(false);
	expect(fb.isBuzzy(12)).toBe(false);
});

// Challenge 4 - Test the fizzyBuzzy(n) function.
//This function takes the parameter n and returns a string, 'fizz' if n is divisble by 3, 'buzz' if n is divisble by 5, and fizzbuzz if divisible by both 3 and 5.
test('fizzyBuzzy should return correct values for divisibility by 3 and 5', () => {
  console.log(fb.fizzyBuzzy(3));
	expect(fb.fizzyBuzzy(3)).toBe('fizz');
  expect(fb.fizzyBuzzy(5)).toBe('buzz');
	expect(fb.fizzyBuzzy(6)).toBe('fizz');
	expect(fb.fizzyBuzzy(9)).toBe('fizz');
  expect(fb.fizzyBuzzy(10)).toBe('buzz');
	expect(fb.fizzyBuzzy(12)).toBe('fizz');
	expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz');
	expect(fb.fizzyBuzzy(18)).toBe('fizz');
  expect(fb.fizzyBuzzy(20)).toBe('buzz');
	expect(fb.fizzyBuzzy(21)).toBe('fizz');
	expect(fb.fizzyBuzzy(24)).toBe('fizz');
	expect(fb.fizzyBuzzy(27)).toBe('fizz');
	expect(fb.fizzyBuzzy(30)).toBe('fizzbuzz');
  expect(fb.fizzyBuzzy(33)).toBe('fizz');
  expect(fb.fizzyBuzzy(35)).toBe('buzz');
});


// Challenge 5 - Test the fizzBuzz(count) function.
// This function generates a results object describing a sequence of fizz buzz for the count.
test('fizzBuzz should generate correct results for the given count', () => {
  let result = fb.fizzBuzz(15);
  expect(result.count).toBe(15);
  expect(result.fizz).toBe(4); // 3, 6, 9, 12 (4 times)
  expect(result.buzz).toBe(2); // 5, 10 (2 times)
  expect(result.fizzBuzz).toBe(1); // 15 (1 time)

  result = fb.fizzBuzz(30);
  expect(result.count).toBe(30);
  expect(result.fizz).toBe(8); // 3, 6, 9, 12, 18, 21, 24, 27 (8 times)
  expect(result.buzz).toBe(4); // 5, 10, 20, 25 (4 times)
  expect(result.fizzBuzz).toBe(2); // 15, 30 (2 times)
});