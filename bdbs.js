var removeDuplicates = function(nums) {
    for (let i = 0; i<nums.length; i++){
      if (nums[i] !== nums[i+1]) {
          return (nums[i]);
      }
  }  
  };
 console.log(removeDuplicates([1,2,2,3]))