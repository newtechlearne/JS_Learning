/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const freq = {}; // To store the frequency of each number
    let count = 0;

    for (let num of nums) {
        if (freq[num]) {
            // If the number is already seen, increment the count of good pairs
            count += freq[num];
        }
        // Increment the frequency of the current number
        freq[num] = (freq[num] || 0) + 1;
    }

    return count;

};