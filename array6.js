/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    nums.sort((a, b) => a - b); // Sort the array
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first element

        let left = i + 1, right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Move left pointer to increase sum
            } else {
                right--; // Move right pointer to decrease sum
            }
        }
    }

    return result;


};