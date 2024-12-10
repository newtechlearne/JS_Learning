/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    // Create sets from nums1 and nums2 for quick lookup
   const set1 = new Set(nums1);
   const set2 = new Set(nums2);

   // Calculate answer1: number of indices in nums1 whose elements exist in nums2
   let answer1 = nums1.reduce((count, num) => count + (set2.has(num) ? 1 : 0), 0);

   // Calculate answer2: number of indices in nums2 whose elements exist in nums1
   let answer2 = nums2.reduce((count, num) => count + (set1.has(num) ? 1 : 0), 0);

   return [answer1, answer2];
};
return [answer1,answer2];
