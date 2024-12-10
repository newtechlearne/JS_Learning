/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // Stores the complement and its index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]; // Found the solution
        }
        map.set(nums[i], i); // Store the current number and index
    }
    return []; // Edge case: no solution found
};


