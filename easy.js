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
Tosum([7, 4, 6, 3, 5, 9, 2, 8])