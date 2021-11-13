let chisla = [6,8,3,4,25,10];
let max = chisla[0];
let min = chisla[0];
for(i=0;i < chisla.length;i++){
if(max < chisla[i]){
max = chisla[i];
}
if(min > chisla[i]){
min = chisla[i];
}
}
console.log(max);
console.log(min);
console.log(chisla);
console.log(`MAX = ${max}
MIN = ${min}
`);