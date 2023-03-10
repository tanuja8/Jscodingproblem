var arr=[53,21,4,527,84,7,96];
let largest=arr[0];
for(let i=0;i<arr.length;i++){
    if(largest<arr[i]){
        largest=arr[i];
    }
}
console.log(largest)