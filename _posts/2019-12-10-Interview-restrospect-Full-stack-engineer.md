---
title:  "Interview retrospect - Fullstack Engineer"
date:   2019-12-10 18:10:00 +0900
categories: Interview
tag:
  - Interview
  - coding test
  - Javascript
---

Let assume a graph in Array.

Each array's element indicates parent's index;

so, for example

```
2 <- 3 <- 5 <-4
  <- 1 <- 0
```

with this graph, it will be represented as array, like
Input: Array [1, 2, -1, 2, 5, 3]
index         0  1   2  3  4  5

And the result will be the maximum depth of graph.
Output: Max depth = 4


```javascript
function getDepthOfGraph(arr) {
  let map = new Map();
  arr.forEach((v,i) => {
    if (map.has(v)) {
      let index = map.get(v);
      index.push(i);
      map.set(v, index);
    }
    else
      map.set(v, [i]);
  });
  let findDepth = (currDepth, parentVal) => {
    if (!map.has(parentVal))
      return currDepth;
    else {
      let childList = map.get(parentVal);
      let depthList = childList.map(child => findDepth(currDepth +1, child));
      return Math.max(...depthList);
    }
  }
  let head = arr.indexOf(-1);
  if (head === -1) {
    return 0; // exception case
  }
  return findDepth(1, head);
	// return with max depth
}
```

technical backgrounds

- how chromium works
- how renderprocesses will communicate
- pros of css grid layout
- c++ memory management in multi thread -> answered as mutex, critical section.

