/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count = 0;
    const freq = {};

    for (const num of nums) {
        // Check if `num - k` exists in the map
        if (freq[num - k]) {
            count += freq[num - k];
        }
        // Check if `num + k` exists in the map
        if (freq[num + k]) {
            count += freq[num + k];
        }

        // Add current number to the map or increment its frequency
        freq[num] = (freq[num] || 0) + 1;
    }

    return count;
};
