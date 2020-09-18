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

### Day 7 - Uncommon Words

Very similiar to the other problems. This solution seems really slow. I am going to research a better way of solving it.

### Day 8 - Merge Link Lists

Now are a getting spicy :fire:!!!

### Day 9 - Remove the Nth to last node

This problem is complex. To minimize time running through the list, we should use 2 counters. Space them on a size of N. When the front counter at index i + n and is the end, we can handle removing the item on the back counter.

### Day 10 - Remove value

Something similar to yesterdays problem. Use to pointers in the linked list and handle the remove when val = given val;

- Coming back to this problem after seeing the better solution. You dont need to use 2 pointers because you can always check next values by checking `.next.next`.

### Day 11 - First Middle Element

I had previously done this problem earlier this year. Interesting concept. Basically you want to have two pointers moving through the linked list. Pointer "front" needs to be moving at 2x the speed as pointer "back", what this means is when the front hits the end the "back" pointer will have hit the middle too. And you return that value.
