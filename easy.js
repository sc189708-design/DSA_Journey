//  Q1 Palindrome  Number  what is palindrom number is a number that remains the same when its digits are reveres.
//  for example 121 is a palindrome number while 123 is not a palindrome number.

function isPalindrome(num) {
    let rev = [];
    for (let i = num.length - 1; i >= 0; i--) {
        rev.push(num[i])
    }
    console.log('orignal', num);
    console.log('reverse', rev)

    if (JSON.stringify(rev) === JSON.stringify(num)) {
        console.log(rev, 'this is a plindrome value')
    }
    else {
        console.log(rev, 'this is a not a palindrome value')
    }
}
//isPalindrome([5, 5, 5])

// second way to solve -121 this palindrome qustion

function Palindrome(val) {
    let rev = [];
    let num = val.toString();
    for (let i = num.length - 1; i >= 0; i--) {
        rev.push(num[i])
    }
    if (JSON.stringify(num) === JSON.stringify(rev)) {
        console.log('this is palindrome value')
    } else {
        console.log('flase')
    }
}
//Palindrome(-123)


// Q2 Two sum - Given an array of integers nums and an integer target, return indices of the two number such that they add up to target. 
// you may assume that each input would have exactly one solution, and you may not use the same element twice. you can return the answer in any order.

function Tosum(num) {
    let target = 15;
    let seen = new Set()
    let i = 0
    while (i < num.length) {
        let y = num[i]
        let x = y - target;
        if (seen.has(x)) {
            console.log(x, y)
            return
        }
        seen.add(x)
    }
    console.log('no pair is found')
}
//Tosum([7, 4, 6, 3, 5, 9, 2, 8])


// Q3 Remove Element - Given an array nums and a value val, remove all instances of that value in-place and return 
// the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

function Remove(nums, val) {
    let newval = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            newval.push(nums[i])
        }
    }
    console.log(newval)
}
//Remove([1, 2, 4, 6, 4, 7, 2], 2)


// Q4 merge two sorted arrays - given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array. The number of elements
//  initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

function Merge(num1, num2) {
    let merge = [];
    let i = 0;
    let j = 0;
    while (i < num1.length && j < num2.length) {
        if (num1[i] < num2[j]) {
            merge.push(num1[i])
            i++
        } else {
            merge.push(num2[j])
            j++
        }
        if (i === num1.length) {
            merge.push(...num2.slice(j))
        }
    }
    console.log(merge)
}
//Merge([1, 3, 5, 7], [2, 4, 6, 8, 11, 45, 99])


//Q5 Remove Duplicates from sorted Array - Given an integer array nums sorted is non-decreaseing order, remove the duplicates in-place such that 
// each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

function shorteDuplicates(nums) {
    let add = [];
    let i = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            add.push(nums[i])
        }
    }
    console.log(add)
}
shorteDuplicates([1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9])