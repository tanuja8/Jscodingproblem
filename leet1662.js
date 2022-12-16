/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
let word1=["ab", "c"];
let word2=["a", "bc"];
var arrayStringsAreEqual = function(word1, word2) {
    let newWord1 = word1.join("");
   let newWord2 = word2.join("");
 
   if (newWord1 == newWord2) {
    console.log(true);
   } else {
    console.log(false); 
   }
 };
 arrayStringsAreEqual(word1,word2); 

