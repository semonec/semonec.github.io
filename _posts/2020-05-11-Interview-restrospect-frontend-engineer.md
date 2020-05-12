---
title:  "Interview retrospect - Frontend Engineer"
date:   2020-05-12 12:54:00 +0700
categories: Interview
tag:
  - Interview
  - coding test
  - Javascript
---

## Array merge

```javascript

let mergeArray = (a,b) => {

}
const a = [1,5,5,20,30];
const b = [2,2,10,20];
    
mergeArray(a,b);

// Output 1 = [1,5,5,20,30,2,2,10,20]; // a after b
// Output 2 = [1,2,2,5,5,10,20,20,30]; // sorted
```

### Solve

<b>Output 1</b>

```javascript
let mergeArray = (a,b) => {
  return [...a, ...b];
}
```

- Asks about immutable, mutable
  - variable a and b are declared as immutable, so we cannot declare a or b as new object or value
  - But we can modify it's value
  ```javascript
  const a= [1,2,3];
  a = [1]; // impossible -> a is const so we cannot re-assign it to others
  a[1] = 0; // possible -> can modifty in-object value
  ```
- About the value changes
  - my result will not change origin array a, b's value.
  - because it will copy the value, not refer the object.
- Time complexity
  - O(n)
  
<b>Output 2</b>

1st answer
```javascript
let mergeArray = (a,b) => {
  return [...a, ...b].sort((a,b) => a-b);
}
```

- Time complexity
  - O(nlogn)
  - create new array (O(n)) + sort (O(nlogn))= O(nlogn)

2nd answer

- Try reducing time complexity to O(n)

```javascript
let mergeArray = (a,b) => {
  // check negative cases
  if (!a && !b) return []; // nothing to merge
  else if (!a || !a.length) return b;
  else if (!b || !b.length) return a;

  let i = 0;
  let j = 0;
  let c = new Array();
  while (i < a.length || j < b.length) {
    const val_a = a[i];
    const val_b = b[j];
    if (!val_a || val_a >= val_b) {
      c.push(val_b);
      j++;
    } else if (!val_b || val_a <= val_b) {
      c.push(val_a);
      i++;
    }
  }
  return c;
}
```
- Couldn't finish ontime
  - big mistake.

## technical backgrounds

- how chromium works
- how renderprocesses will communicate
- pros of css grid layout
- c++ memory management in multi thread -> answered as mutex, critical section.
