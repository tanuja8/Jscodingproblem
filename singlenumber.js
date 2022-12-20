function singleNumber(nums) {
    let result = 0;
    for (const num of nums) {
      result ^= num;
    }
    return result;
  }
  console.log(singleNumber([2, 2, 1]));