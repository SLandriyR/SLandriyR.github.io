/*let array = [1,4,4,4,6,8,8,7,6,7,9];
let ar = [];

for(i=0; i<array.length; i++){                          
if(ar.indexOf(array[i]) == -1){
    ar.push(array[i]);
}
}
console.log(array);
console.log(ar);*/
let arr1 = [1,2,3,4];
let arr2 = [3,8,1,9,10];
let arr3 = arr1.slice();
for(i=0; i<arr2.length; i++){
if(arr2.indexOf(arr1[i]) == -1){
arr3.push(arr2[i]);
}
}
console.log(arr1);
console.log(arr2);
console.log(arr3);