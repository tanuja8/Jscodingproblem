const isPlindrom=function(x){
    return x===+x.toString().split("").reverse().join("");
};
    
const res=isPlindrom(154);
console.log(res)
