// const arr=[]
// %DebugPrint(arr)

const arr=[1,2,3,4,5]
arr.push(6.0);//Packed double Elements
arr.push('7');//Packed Elements
arr[10]=11;//Holy Elements

console.log(arr);
console.log(arr.length);
console.log(arr[9]);

//bound check
// hasOwnProperty(arr,9)
// hasOwnProperty(arr.prototype,10)
// hasOwnProperty(Object.prototype,10)

//holes are very expensive in js

const arr3=[1,2,3,4,5]
console.log(arr3[2]);

//SMI > DOUBLE > PACKED

const arr2=new Array(3)
//just 3 holes
arr2[0]='1'//holy elements
arr2[1]='2'//holy elements
arr2[2]='3'//holy elements

const arr1=[]
arr1.push('1')//packed
arr1.push('2')//packed
arr1.push('3')//packed

const arr4=[1,2,3,4,5]
arr4.push(NaN)
arr4.push(Infinity)