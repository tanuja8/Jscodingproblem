function goodPairs(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          count++;
        }
      }
    }
    return count;
  }
  const nums = [5, 5, 3, 1, 5, 3,1,3,3];
console.log(goodPairs(nums)); 