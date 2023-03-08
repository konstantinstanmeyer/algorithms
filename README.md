# **Practice Zone**

To run all tests, type:

```
npm test
```

To run tests, but skip all after failure, type:

```
npm run test-b
```

# Prompts

## **Math Algorithms**

### **Factorial:** <sub><sup>the factorial of a non-negative integer 'n', denoted '!n', is the product of all positive integers less than or equal to 'n'</sup></sub>

(Implement with and without recursion)

1) Given "n", find its factorial. Assume all inputs are natural numbers. Factorial of 0 is 1. i.e. 4's factorial would be the product of [1,2,3,4], 24

    *Aim for O(n): linear*

### **Fibonacci Sequence:** <sub><sup>a sequence in which each number is the sum of the two proceeding values</sup></sub>

1) Given a value "n", find all values from index 0 until "n" in the fibonacci sequence. i.e. 7 should return [0,1,1,2,3,5,8]

    *Aim for O(n): linear*

2) Find the value at index "n" in the fibonacci sequence. i.e. 3 should return [0,1,1,2]

    *Aim for O(n): linear*

### **Power of Two:** <sub><sup>integers are a power of two if there exists an integer 'x' such that 'n' === 2^x</sup></sub>

1) Given number "n", determine if the value is a power of two. i.e. 1024 should return true

    *Aim for O(1): constant (use &, O(n): linear works too)*

## **Search Algorithms**

### **Linear Search:** <sub><sup></sup></sub>

1) Given array "arr", find the index of target "t". Return -1 if the target is not found. i.e. [1,2,3,4,5] with a target of 4 should return 3

    *Aim for O(n): linear*

### **Binary Search:** <sub><sup></sup></sub>

(Implement with and without recursion)

1) Given a sorted array of "n" elements, find the index of target "t" in the array. Return -1 if the target is not found. i.e. [1,2,3,4,5] with a target of 4 should return 3

    *Aim for O(logn): logarithmic*

## **Sorting Algorithms**

### **Bubble Sort:** <sub><sup></sup></sub>

1) Given an array of numbers, sort the elements in ascending order. i.e. [1,4,2,3,0] should return [0,1,2,3,4]

    *Aim for O(n): linear*