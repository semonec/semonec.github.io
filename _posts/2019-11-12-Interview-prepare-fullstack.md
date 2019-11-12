---
title:  "Interview preparation - Fullstack Engineer"
date:   2019-11-12 20:00:00 +0900
categories: Interview
tag:
  - Interview
  - coding test
  - Javascript
---

Interview preparation for fullstack engineer

### Given a string, find the first non-repeating character in it. For example, if the input string is “GeeksforGeeks”, then output should be ‘f’ and if input string is “GeeksQuiz”, then output should be ‘G’.

**Use Map**

- each member item push into the map
- if key exist, increase vaule, else push item
- after travelling check map

**Reason why use map**

- cheap set, get
- gaurantee element's order

```javascript
// should I have to return first non duplicated char?
// or shoulh I have to return all the non duplicated char list
function getNonDuplicateChar(str: string) {
  let map = new Map();
  
  str.split('').forEach(c => {
    if (map.has(c))
      map.set(c, map.get(c) + 1);
    else
      map.set(c, 1);
  });
  
  // in case of return the first count === 1 char
  // for ( let item of map) {
  //   if (item[1] === 1)
  //     return item[0];
  // }
  
  // in case of return whole chars, which count === 1  
  // let result = [];
  // for ( let item of map) {
  //  if (item[1] === 1)
  //    result.push(item[0]);
  //}
  //return result;
}

console.log(getNonDuplicateChar('geeksforgeeks'));
```

### Given an array of numbers, arrange them in a way that yields the largest value. For example, if the given numbers are {54, 546, 548, 60}, the arrangement 6054854654 gives the largest value. And if the given numbers are {1, 34, 3, 98, 9, 76, 45, 4}, then the arrangement 998764543431 gives the largest value.

**sort by value***

- compare two element, concat each values and then compare it's value
- sorted by order and then combine sorted list

```javascript
/*
Given an array of numbers, arrange them in a way that yields the largest value. For example, if the given numbers are {54, 546, 548, 60}, the arrangement 6054854654 gives the largest value. And if the given numbers are {1, 34, 3, 98, 9, 76, 45, 4}, then the arrangement 998764543431 gives the largest value.
*/

function getLargeestNumber(list) {
  list.sort((a,b) => {
    let ab = a.concat(b);
    let ba = b.concat(a);
    return Number(ab) > Number(ba)? 0 : 1;
  });
  return list.join('');          
}

console.log(getLargeestNumber(["1", "34", "3", "98", "9", "76", "45", "4"]));
```

### Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
### The same repeated number may be chosen from candidates unlimited number of times.

> Note:
>
> All numbers (including target) will be positive integers.
> The solution set must not contain duplicate combinations.
>
> Example 1:

~~~
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
~~~

**backtracking**

- push item into stack
- check possibility (recursion)
- pop stack
- if result meets requirements, then return stack

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    let buffer = [];
    let result = [];
    search(0, target);
    
    return result;
    
    function search(startIndex, target) {
        if (target === 0) {
            result.push(buffer.slice());
            return;
        } 
        if (target < 0)
            return undefined;
        
        if (startIndex === candidates.length)
            return undefined;
        buffer.push(candidates[startIndex]);
        search(startIndex, target-candidates[startIndex]);
        buffer.pop();
        search(startIndex + 1, target);

    }
};
```
