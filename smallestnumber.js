let arr=[25,12,1,5,0,8,2,9,]
let smallest=arr[0];
for(let i=0;i<arr.length;i++){
    if(smallest >arr[i]){

    smallest=arr[i];
}
}
console.log(smallest)