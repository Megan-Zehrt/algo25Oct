/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items...
*/
const myArr = [3,2,9,5,1,4,8]
const arrTest = [4, 5, 1, 3, 6, 7, 10, 2, 8, 9]

// ALGO ROLES
// 👉 Driver
// 👉 Presenter
// 👉 Navigator

function selectionSort(arr){
    // loop through the array from left to right
    for(let i = 0; i < arr.length; i++){
        // assume the current element of the array is the minimum
        let minIndex = i;
        // loop through the remaining elements to find the real minimum
        for(let j = i +1; j < arr.length; j++){
            // compare the current element with the minimum
            if (arr[j] < arr[minIndex]){
                // update the mimimum index if a smaller element is found
                minIndex = j;
            }
        }
        // swap the current element with the new minimum element
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    // return the sorted array
    return arr
 }

// test cases
console.log(selectionSort(myArr));
console.log(selectionSort(arrTest));
