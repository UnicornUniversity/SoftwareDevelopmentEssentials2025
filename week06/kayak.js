// Two pointers algorithm
function isPalindrome(word) {
    if (word.length === 0) return true;

    let p1 = 0;
    let p2 = word.length - 1;

    while (p1 <= p2) {
        const letter1 = word[p1];
        const letter2 = word[p2];
        console.log(letter1, letter2);
        if (letter1 !== letter2) return false;
        p1++;
        p2--;
    }

    return true;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("karbak"));
console.log(isPalindrome("123"));


