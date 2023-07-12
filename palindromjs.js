const isPlindrom=function(x){
   
    return x<0 ? false: x===+x.toString().split("").reverse().join("");
};
    
const res=isPlindrom(151);
console.log(res)
