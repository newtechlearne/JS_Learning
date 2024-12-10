var kidsWithCandies = function(candies, extraCandies) {
    // Step 1: Find the current maximum number of candies
  const maxCandies = Math.max(...candies);

  // Step 2: Check for each kid if they can have the greatest number of candies
  return candies.map(candy => candy + extraCandies >= maxCandies);
};
