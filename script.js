//Q1 
//a. Print odd numbers in an array
//Anonymous function 

var result = [];
var a = function (arr){
    for (var i=0;i<arr.length;i=i+1){
        if (arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10])); 

//IIFE function

var result = [];
(function (arr){
    for (var i=0;i<arr.length;i=i+1){
        if (arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    console.log(result);
})([1,2,3,4,5,6,7,8,9,10]);

//Q2
//a. Print odd numbers in an array
//Arrow function

var result = [];
var odd = (arr)=>{
    for (var i=0;i<arr.length;i=i+1){
        if (arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));  


//Q1
//b.Convert all the strings to title caps in an string array
//Anonymous function 

var result = "anbu";
var a = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(a(result));

////IIFE function

var result = "anbu";
var a = (function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
})(result);

console.log(a);


//Q2
//b.Convert all the strings to title caps in an string array
// Arrow function

var result = "anbu";
var a = (str) =>{
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(a(result));

//Q1
//c.Sum of all numbers in an array
//Anonymous function 

var a = function (arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i=i+1) {
      sum += arr[i];
      }
      return sum;
    }
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//IIFE function

var sum = (function(arr){
var result = 0;
    for (var i =0; i<arr.length; i=i+1){
      result += arr[i];
    }
    return result;
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sum);

//Q2
//c.Sum of all numbers in an array
//Arrow function

var sum = ((arr) => {
    let result = 0;
    for (var i = 0; i<arr.length; i=i+1){
      result += arr[i];
    }
    return result;
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sum);
  

//Q1
//d.Return all prime Numbers in an array
//Anonymous function

var result = [];
function isPrime(num){
    if (num<=1) return false;
    if (num<=3) return true;
    if (num%2 === 0 || num%3 === 0)
     return false;
     for (var i = 5; i * i <= num; i += 6) {
        if (num%i === 0 || num % (i+2) === 0) 
        return false;
    }
    return true;
}
function findPrimes(arr){
    for (var i=0; i<arr.length; i=i+1){
        if (isPrime(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(findPrimes([1,2,3,4,5,6,7,8,9,10]));

//IIFE function

var result = (function(){
    function isPrime(num){
        if (num<=1) return false;
        if (num<=3) return true;
        if (num%2 === 0 || num%3 === 0) return false;
        for (var i=5; i*i<=num; i+=6) {
            if (num%i === 0 || num%(i+2) === 0) 
            return false;
        }
        return true;
    }
    function findPrimes(arr){
        var primes = [];
        for (var i=0; i<arr.length; i=i+1){
            if (isPrime(arr[i])) {
                primes.push(arr[i]);
            }
        }
        return primes;
    }
    return findPrimes([1,2,3,4,5,6,7,8,9,10]);
})();
console.log(result);

//Q2
//d.Return all prime numbers in an array
//Arrow function

var result = [];
var isPrime=(num)=>{
    if (num<=1) return false;
    if (num<=3) return true;
    if (num%2 === 0 || num%3 === 0)
     return false;
     for (var i = 5; i * i <= num; i += 6) {
        if (num%i === 0 || num % (i+2) === 0) 
        return false;
    }
    return true;
}
var findPrimes=(arr)=>{
    for (var i=0; i<arr.length; i=i+1){
        if (isPrime(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(findPrimes([1,2,3,4,5,6,7,8,9,10]));


//Q1
//e.Return all the palindromes in an array
//Anonymous function

var a = ["racecar", "hello", "deified", "world", "level", "moon"];
var palindromes = function(arr){
  var result = [];
  for (var i = 0; i<arr.length; i=i+1) {
    var str = arr[i].replace(/\s/g, '').toLowerCase();
    if (str === str.split('').reverse().join('')) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(palindromes(a));

//IIFE function

var a = ["racecar", "hello", "deified", "world", "level", "moon"];
(function(arr){
  var result = [];
  for (var i = 0; i<arr.length; i=i+1) {
    var str = arr[i].replace(/\s/g, '').toLowerCase();
    if (str === str.split('').reverse().join('')) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})(["racecar", "hello", "deified", "world", "level", "moon"]);

//Q2
//e.Return all the palindromes in an array
//Arrow function

var a = ["racecar", "hello", "deified", "world", "level", "moon"];
var palindromes =(arr)=>{
  var result = [];
  for (var i = 0; i<arr.length; i=i+1) {
    var str = arr[i].replace(/\s/g, '').toLowerCase();
    if (str === str.split('').reverse().join('')) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(palindromes(a));


//Q1
//f.Return median of two sorted arrays of the same size

var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = mergeSortedArrays(nums1, nums2);
    const length = mergedArray.length;
    if (length % 2 === 0) {
      const mid1 = length/2-1;
      const mid2 = length/2;
      return (mergedArray[mid1] + mergedArray[mid2])/2;
    } 
    else {
      const mid = Math.floor(length/2);
      return mergedArray[mid];
    }
  }
  function mergeSortedArrays(nums1,nums2){
    const merged = [];
    let i = 0;
    let j = 0;
    while (i<nums1.length && j<nums2.length){
      if (nums1[i] < nums2[j]){
        merged.push(nums1[i]);
        i++;
      } else
       {
        merged.push(nums2[j]);
        j++;
      }
    }
    while (i<nums1.length){
      merged.push(nums1[i]);
      i++;
    }
    while (j<nums2.length) {
      merged.push(nums2[j]);
      j++;
    }
    return merged;
  }
  const nums1 = [1,3,5,7,9];
  const nums2 = [2,4,6,8,10];
  const median = findMedianSortedArrays(nums1,nums2);
  console.log(median);
  

//IIFE function

(function () {
    var findMedianSortedArrays = function(nums1, nums2) {
      const mergedArray = mergeSortedArrays(nums1, nums2);
      const length = mergedArray.length;
      if (length % 2 === 0) {
        const mid1 = length / 2 - 1;
        const mid2 = length / 2;
        return (mergedArray[mid1] + mergedArray[mid2]) / 2;
      } else {
        const mid = Math.floor(length / 2);
        return mergedArray[mid];
      }
    }
    function mergeSortedArrays(nums1, nums2) {
      const merged = [];
      let i = 0;
      let j = 0;
      while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
          merged.push(nums1[i]);
          i++;
        } else {
          merged.push(nums2[j]);
          j++;
        }
      }
      while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
      }
      while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
      }
      return merged;
    }
    const nums1 = [1, 3, 5, 7, 9];
    const nums2 = [2, 4, 6, 8, 10];
    const median = findMedianSortedArrays(nums1, nums2);
    console.log(median);
  })();
  

//Q1
//g.Remove duplicates from an array
//Anonymous function

function removeDuplicates(arr) {
    var uniqueArr = [];
    for (var i=0;i<arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
var result = [];
function odd(arr) {
    for (var i=0;i<arr.length;i=i+1) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
var inputArray = [1,2,3,4,5,6,7,8,9,10];
var oddResult = odd(inputArray);
var uniqueOddResult = removeDuplicates(oddResult);
console.log(uniqueOddResult);

//IIFE function

(function() {
    var result = [];
    function odd(arr) {
        for (var i=0;i<arr.length;i=i+1) {
            if (arr[i] % 2 !== 0) {
                result.push(arr[i]);
            }
        }
        return result;
    }
    function removeDuplicates(arr) {
        var uniqueArr = [];
        for (var i=0;i<arr.length; i++) {
            if (uniqueArr.indexOf(arr[i]) === -1) {
                uniqueArr.push(arr[i]);
            }
        }
        return uniqueArr;
    }
    var inputArray = [1,2,3,4,5,6,7,8,9,10];
    var oddResult = odd(inputArray);
    var uniqueOddResult = removeDuplicates(oddResult);
    console.log(uniqueOddResult);
})();


//Q1
//h.Rotate an array by k times
//Anonymous function

function rotateArray(arr,k) {
    var n = arr.length;
    k = k%n;
    var rotated = new Array(n);
    for (let i=0;i<n;i=i+1) {
        var newIndex = (i+k) % n;
        rotated[newIndex] = arr[i];
    }
    return rotated;
}
var arr = [1,2,3,4,5];
var k = 2;
var result = rotateArray(arr,k);
console.log(result);

//IIFE function

var rotatedArray = (function(arr,k) {
    var n = arr.length;
    k = k%n;
    var rotated = new Array(n);
    for (let i=0;i<n; i=i+1) {
        var newIndex = (i+k) % n;
        rotated[newIndex] = arr[i];
    }
    return rotated;
})([1,2,3,4,5],2);
console.log(rotatedArray)