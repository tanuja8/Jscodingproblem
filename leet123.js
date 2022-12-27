function findTargetIndices(nums, target) {
    // Sort nums in non-decreasing order
    nums.sort((a, b) => a - b);
  
    // Find the indices of all occurrences of target
    const indices = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == target) {
        indices.push(i);
      }
    }
  
    return indices;
  }
  console.log(findTargetIndices([1, 2, 5, 2, 3]));