// let arr=[6,4,3,7,2]
// let smallest=arr[0];
// let temp=0;
// for(let i=0;i<arr.length;i++){
//     if(smallest >arr[i]){
//         temp=smallest;
//     smallest=arr[i];
// }
// }
// console.log(temp);

// let a=[3,4,3,1,5,2];
// let min=a[0];
// let temp=0;
//   for(let i=0;i<a.length;i++){
//     if(a[i]<min){
//       temp=min;
//       min=a[i];
//     }
//     else if(a[i] <temp && a[i] != min)
//        {
//           temp = a[i];
//        }

//   }
// console.log(temp);

let arr=[1,15,45,8,0,3,60,53]
let min=Math.min(...arr)
let secondMin=Number.Max_value;
for(let i=0;i<arr.length;i++){
    if(arr[i]<secondMin && arr[i]!=min ){
        secondMin=arr[i];
    }
}
console.log(secondMin)