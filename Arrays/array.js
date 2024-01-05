//Using new keyword

let arr = new Array(1 ,'cat')

console.log(arr)
console.log(typeof(arr))

arr.push(4)
console.log(arr)

arr.pop()
console.log(arr)
arr.push(40)

//splice
arr.splice(0,2,"Replace")
console.log(arr)

//slice
arr = [1,2,3,4];
let arr1 = arr.slice(0,3);
console.log(arr1);

for(let i=0;i<arr.length;i++)
    console.log(arr[i]+" ");

