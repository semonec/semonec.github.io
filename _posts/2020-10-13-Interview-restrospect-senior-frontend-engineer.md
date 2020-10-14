---
title:  "Interview retrospect - Senior Frontend Engineer"
date:   2020-10-13 16:00:00 +0700
categories: Interview
tag:
  - Interview
  - coding test
  - Javascript
---

## Online coding

- Not to compile
- Just checking logic, but have to use correct syntax


### Check a string *isValid* ###

**isValid** means, all the characters in the string are appeared in a same frequency

Also tested with the test code

### Check a string *isAlmostValid* ###

**isAlmostValid** means, if removing a character in a string, then that string will be `isValid` as above mentioned.

Tried optimal way to solve, but cannot get.
So, changed mind, using brute foce,
remove a character while iterating the string, put that spliced string into the isValid function.

## Solve ##

```javascript
const isValid = (s) => {
    if (!s) return false;
    if (s.length <= 2) return true;
    const freqs = [...s.split('').reduce((map, v) => map.set(v, (map.get(v) || 0) +1), new Map).values()];
    return freqs.every(v => v === freqs[0])
}

const test = (s) => {
    console.log('isValid -- \'', s, '\'', isValid(s) ? 'success' : 'fail')
}

const isAlmostValid = (s) => {
    if (!s) return false;
    if (s.length <= 3) return true;
    for (let i = 0; i < s.length; i++) {
        const sliced = s.slice(0, i) + s.slice(i+1);
        if (isValid(sliced)) return true;
    }
    return false;
}

const test2 = (s) => {
    console.log('isAlmostValid -- \'', s, '\'', isAlmostValid(s) ? 'success' : 'fail')
}

(function main() {
    // test for isValid
    // test('aabb');
    // test('ab');
    // test('aabbb');
    // test('aaab');
    // test('aa');
    // test('');
    // test(undefined);
    // test(null);
    
    test2('aaabb');
    test2('abb');
    test2('aabb');
    test2('');
    test2('a');
    test2('ab');
    test2('abc');
    test2(undefined);
    test2(null);
}());
```
