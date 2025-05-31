// for(let i = 1; i <= 5; i++){
//   console.log("Number:");
// }

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++
// }

// let i=0;
// while(i<=5){
//     console.log(i);
//    i++ 
// }

// let i=6;
// do{s
//     console.log("tanuja");
//     i++;
// }
// while(i<=5);

 
// for(let num=0;num<=100;num++)
//     if(num % 2!==0){
//         console.log("Number :" ,num);
//     }

// let i=0;
// while(i<=100)
//     if(i%2===0){
//         console.log(i)
//         i++;
//     }

// console.log("tanuja")
// let i = 0;
// while(i <= 10)
//   if(i%2===0){
//     console.log("Even:", i);
//   i ++ ;
//   }
  


// let i = 0;
// while(i <= 10) {
//   if(i % 2 === 0){
//     console.log("Even:", i);
//   }
//   i++;
// }
 
// for(i=0;i<=20;i++){
//   if(i%2==0){
//     console.log(i)
//   }
// }

// let gameNumber=25;
// let userNum=prompt("Enter your guess number : ");
// while(gameNumber!=userNum){
// userNum=prompt("Try again you guess wrong number")
// }
// console.log("Congratulation you guess right Number");

// let cities=["kolkata", "Delhi","Mumbai","Bangalore"]
// for(let i of cities){
//     console.log(i.toUpperCase())
// }

// let marks=[85 ,80 ,70 ,93,71]
// let sum=0;
// for(let val of marks){
//     sum=sum+val;
// }
// let avg=sum/marks.length;

// console.log(`The average marks is = ${ avg}`)

// let marks=[85,90,78,90]
// let sum=0;
// for(let val of marks){
//     sum=sum+val;
// }
// let avg=sum/marks.length;
// console.log(avg)

// const sum=(a,b)=>{
//     console.log(a+b);
// }

// const sum=(a,b)=>{
//     console.log(a+b);
//  }

// function countVowl(str){
//     let count=0;
//     for(const val of str){
//         if(val==="a" ||val==="e" || val==="i" || val ==="o" || val==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// function add(a, b) {
//     return a + b;
// }

// let result = add(2, 3);  // return kore result = 5
// console.log(result);     // 5 output dekhabey

const countVowl=(str)=>{
    let count=0;
    for(const char of str){
    if(  char==="a" ||char==="e" || char==="i" || char ==="o" || char==="u"){
        count++;
    }

}
console.log(count)
}
    
