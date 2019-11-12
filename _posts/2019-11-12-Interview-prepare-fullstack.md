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

> Given a string, find the first non-repeating character in it. For example, if the input string is “GeeksforGeeks”, then output should be ‘f’ and if input string is “GeeksQuiz”, then output should be ‘G’.


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

> Given an array of numbers, arrange them in a way that yields the largest value. For example, if the given numbers are {54, 546, 548, 60}, the arrangement 6054854654 gives the largest value. And if the given numbers are {1, 34, 3, 98, 9, 76, 45, 4}, then the arrangement 998764543431 gives the largest value.


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
