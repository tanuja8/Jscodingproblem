// var fibo=function(n){
// const arr=[0,1];
// for(let i=2;i<=n;i++){
//     arr.push(arr[i-1]+arr[i-2]);
// }
// return(arr[n])
// }
// fibo(5);
// }

// for calculate the fibinacci series File(n)=F(n-1)+F(n-2), for n>1

// another solution using recursion******

const fib=function(n){
    if(n<=1) return n;
    return fib(n-1)+fib(n-2);
}
console.log(fib(3))