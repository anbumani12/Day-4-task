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

var result = [];
var a = function (arr){
    for (var i=0;i<arr.length;i++){
        var data = arr[i].split("").reverse().join("");
        if (data===arr[i]){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a(['racecar','level','hello','git','dad']));


//IIFE function

var result = [];
(function (arr){
    for (var i=0;i<arr.length;i++){
        var data = arr[i].split("").reverse().join("");
        if (data===arr[i]){
            result.push(arr[i]);
        }
    }
    console.log(result);
})(['racecar','level','hello','git','dad']);

//Q2
//e.Return all the palindromes in an array
//Arrow function

var result = [];
var a = (arr)=>{
    for (var i=0;i<arr.length;i++){
        var data = arr[i].split("").reverse().join("");
        if (data===arr[i]){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a(['racecar','level','hello','git','dad']));


//Q1
//f.Return median of two sorted arrays of the same size
//anonymous function

var a =function MedianSortedArray(arr1,arr2){
  let arr = [...arr1,...arr2];
  arr.sort((a,b)=>a-b);
  let n = arr.length;
  if (n%2===0){
      return ((arr[n/2]+arr[n/2-1])/2);
  }
  else{
      return arr[Math.floor(n/2)];
  }
}
console.log(a([1,3,5,7],[2,4,6,8]));

//IIFE function

var result = (function MedianSortedArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  arr.sort((a,b) => a-b);
  let n = arr.length;
  if (n%2 === 0) {
      return ((arr[n/2] + arr[n/2-1])/2);
  } else {
      return arr[Math.floor(n/2)];
  }
})([1, 3, 5, 7], [2, 4, 6, 8]);

console.log(result);
  

//Q1
//g.Rotate an array by k times
//Anonymous function

var arr = [1, 2, 3, 4, 5];
var k = 3;
var a = function (arr, k) {
    for (var i=0;i<k;i++) {
        arr.push(arr[i]);
    }
    for (var i=0;i<k;i++) {
        arr.shift();
    }
}
a(arr, k);
console.log(arr);

//IIFE function

const arr1 = [1,2,3,4,5];
const k1 = 3;
(function (arr1,k1){
    for (var i=0;i<k1;i++){
        arr1.push(arr1[i]);
    }
    for (var i=0;i<k1;i++){
        arr1.shift();
    }
    console.log(arr1);
})(arr1,k1);