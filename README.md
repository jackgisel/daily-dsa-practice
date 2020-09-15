# daily-dsa-practice

### Day 1 - Two Sum

Bruteforce through the array and subtract current number from the sum to find the "copart" needed. Check if the array contains the copart.

### Day 2 - Anagram

Use a hash to store the number of times a character is found in the first string. Do the same logic for the second string, but subtract from the occurences. If all values are 0 then we have a valid anagram.

### Day 3 - Jewels and Stones

Use a hash to store the jewels found. Use a sum to find the number of stones are in jewels.

### Day 4 - Unique Characters

Using a hash map we can record the first index at which a character shows up. If that character has already been set we can set it equal to infinity. Then sort through the hash and find the smallest index in the hash.

### Day 5 - Spot the difference

Using a hash map we can store the number of times a character occurs and then run through the map and return the character that is unique.

### Day 6 - Intersection of Numbers

Again using a hash we can store the nums in the first array. Then go through the second array marking if numbers occured again. Then returning what was recorded twice!
