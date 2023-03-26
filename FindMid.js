let arr=[2,8,6,9,4,5,16,1]
//2 4 5 6 8 9 16
function findMid(){
    arr.sort((a,b)=>{
        return a-b;
    });
    let upperIndex=arr[Math.floor(arr.length/2)];
    let lowerIndex=arr[Math.floor(arr.length/2-1)];
    if(arr.length%2==0){
return(upperIndex+lowerIndex)/2;
    }else{
        return upperIndex;
    }
}
console.log(findMid())