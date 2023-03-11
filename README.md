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

### **Linear Search:** <sub><sup>given an array of 'n' elements and a target 't', find the index of 't'. return -1 if element is nod found</sup></sub>

**Pseudocode:**

- Start at the first element of an array and move towards the last
- At each element check if it is the target element
- If element is found, return its index
- If element is not found, return -1

1) Given array "arr", find the index of target "t". Return -1 if the target is not found. i.e. [1,2,3,4,5] with a target of 4 should return 3

    *Aim for O(n): linear*

### **Binary Search:** <sub><sup>given a sorted array of 'n' elements and a target 't', find the index of 't'. return -1 if element is nod found</sup></sub>

**Pseudocode:**

- If the array is empty, return -1 for the element is not found
- If the array has elements, find the middle element in the array. If the target is equal to the middle element, return the middle element's index
- If the target element is less than the middle, binary search the left half of the array
- If the target element is greater than the middle, binary search the right half of the array

(Implement with and without recursion)

1) Given a sorted array of "n" elements, find the index of target "t" in the array. Return -1 if the target is not found. i.e. [1,2,3,4,5] with a target of 4 should return 3

    *Aim for O(logn): logarithmic*

## **Sorting Algorithms**

### **Bubble Sort:** <sub><sup>given an array of integers, sort the elements</sup></sub>

**Pseudocode:**

- Compare adjacent elements in the array and swap the positions if they are not in the intended order
- Repeat the instructions as you step through each element of the array
- Once you step through the whole array with no swaps, the array is sorted
- If element is not found, return -1

1) Given an array of numbers, sort the elements in ascending order. i.e. [1,4,2,3,0] should return [0,1,2,3,4]

    *Aim for O(n): linear*

### **Insertion Sort:** <sub><sup>given an array of integers, sort the elements</sup></sub>

**Pseudocode:**

- Split the array into unsorted and sorted (the first element of the array is assumed to be sorted)
- Select an unsorted element and compare it with the sorted elements
- If the elements in the sorted array are smaller than the selected, unsorted element, proceed to the next element in the unsorted array. Otherwise, shift the larger, sorted elements to the right of the selected, unsorted element.
- Insert the selected element into the correct index
- Repeat steps until the last element is reached, and all elements are sorted

1) Given an array of numbers, sort the elements in ascending order. i.e. [1,4,2,3,0] should return [0,1,2,3,4]

    *Aim for O(n): linear*

### **Quick Sort:** <sub><sup>given an array of integers, sort the elements</sup></sub>
 
**Pseudocode:**

- Identify a pivot element: any element can be chosen as the pivot, but the first, last, and middle are most common
- Put all elements smaller than the pivot into a 'left' array, and all elements larger than the pivot into a 'right' array
- Repeat the process in the smaller arrays until they are one element in length, which is sorted by definition
- Concatenate the left array, pivot element, and right array

1) Given an array of numbers, sort the elements in ascending order. i.e. [1,4,2,3,0] should return [0,1,2,3,4]

    *Aim for O(n): linear*

### **Merge Sort:** <sub><sup>given an array of integers, sort the elements</sup></sub>
 
**Pseudocode:**

- Divide the given array into sub-arrays with a single element each
- Merge the sub-arrays into sorted sub-arrays, until a single array remains which will be sorted

1) Given an array of numbers, sort the elements in ascending order. i.e. [1,4,2,3,0] should return [0,1,2,3,4]

    *Aim for O(nlogn): logarithmic*