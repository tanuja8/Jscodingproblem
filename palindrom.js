// function isPalindrome(x) {
//     // Convert the integer to a string
//     const str = x.toString();
  
//     // Check if the string is the same when read forwards and backwards
//     for (let i = 0; i < str.length / 2; i++) {
//       if (str[i] !== str[str.length - 1 - i]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
//   console.log(isPalindrome(121)); // should print true
// console.log(isPalindrome(-121)); // should print false
// console.log(isPalindrome("")); // should print false

 
     let r,sum=0,temp;    
     let n=454;//It is the number variable to be checked for palindrome  
     
     temp=n;    
     while(n>0){    
      r=n%10;  //getting remainder  
      sum=(sum*10)+r;    
      n=n/10;    
     }    
     if(temp==sum)    
      console.log("palindrome number ");    
     else    {
      console.log("not palindrome");    
   }  

    