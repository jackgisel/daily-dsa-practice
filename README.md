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

### Day 12 - Linked List Contains a Cycle

Using two pointers again we can increment them at different paces. Evenutally if they meet then the linked list contains a duplicate.

### Day 13 - Linked List Cycle II

:mad: This was one of the more complex problems that still hasn't really clicked for me. I am confused at the part where we increment the 2 pointers after finding the cycle. If they move at the same rate how do we ensure that they won't touch each other?

### Day 14 - Reverse Linked List

By using head, prev, next_node we can move along the linked list in linear time changing the pointers and reversing the linked list.

### Day 15 - Valid Parentheses

Using a stack we can iterate through the string adding opening brackets it the stack and popping the stack we can valid when a closing parenthese shows up.

### Day 16 - Compare Keystrokes

Given two strings s and t compare the 2 strings given that # is a backspace. To solve this we could iterate through both of the strings seperatly using stacks to compare their differences, but this would be a O(4\*N) solution which I know is just O(N), but I think we might be able to solve this using 1 loop through the strings.

### Day 17 - Remove all adjacent duplicates

This problem seems pretty simple after completing this weeks **stack** problems. Use a stack to build our word based on the current and previous character.
