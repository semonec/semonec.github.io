---
title:  "Interview preparation - Fullstack Engineer"
date:   2019-11-12 20:00:00 +0900
categories: Interview
tag:
  - Interview
  - coding test
  - Javascript
toc: true
toc_label: "Table of contents"
toc_icon: "file-alt"
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

<details><summary> Answer here!</summary>

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
</details>

### Given an array of numbers, arrange them in a way that yields the largest value. For example, if the given numbers are {54, 546, 548, 60}, the arrangement 6054854654 gives the largest value. And if the given numbers are {1, 34, 3, 98, 9, 76, 45, 4}, then the arrangement 998764543431 gives the largest value.

**sort by value**

- compare two element, concat each values and then compare it's value
- sorted by order and then combine sorted list

<details><summary> Answer here!</summary>

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
</details>

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

<details><summary> Answer here!</summary>

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
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
</details>

### Rotate Image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).


**Matrix rotation**

***clockwise***

- swap a[i][j] to a[j][i]
- reverse up to down

***anticlockwise***

- reverse left to right
- swap a[i][j] to a[j][i]

<details><summary> Answer here!</summary>

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    // reverse top to bottom
    for (let i = 0, j = matrix.length -1; i < j; i++, j--) {
        for (let k = 0; k < matrix[i].length; k++) {
            let tmp = matrix[i][k];
            matrix[i][k] = matrix[j][k];
            matrix[j][k] = tmp;
        }
    }
    
    // symmetric change
    for (let i = 0; i < matrix.length; i++ ) {
        for (let j = i+1; j < matrix[i].length; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    return matrix;
};

var rotateAntiClockwise = function(matrix) {
    matrix.forEach(row => {
        row = row.reverse();
    });    
    // symmetric change
    for (let i = 0; i < matrix.length; i++ ) {
        for (let j = i+1; j < matrix[i].length; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    return matrix;
};
```
</details>

### Binary Tree Level Order Traversal

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

```
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
```

***BFS***

- recursion with index
- itself -> left child -> right child (inorder) traversal

<details><summary> Answer here!</summary>

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let map = new Map();
    let traversal = function(depth, node) {
        if (node === null)
          return;
        if (!map.has(depth)) {
            map.set(depth, [node.val]);
        } else {
            let data = map.get(depth);
            data.push(node.val);
            map.set(depth, data);
        }
        if (node.left !== null)
            traversal(depth +1, node.left);
        if (node.right !== null)
            traversal(depth +1, node.right);
    }
    traversal(0, root);
    let result = [];
    for (let item of map) {
        result.push(item[1]);
    }
    return result;
};
```
</details>

***DFS***

- access node's value, then read left child's and last right child

<details><summary> Answer here!</summary>

```js 
var dfsOrder = function(root) {
    let result = [];
    let traversal = function(node) {
        if (node === null)
            return;
        result.push(node.val);
        if (node.left !== null)
            traversal(node.left);
        if (node.right !== null)
            traversal(node.right);
    }
    traversal(root)
    
    //return result;
};
```

</details>

### Group Anagrams

Given an array of strings, group anagrams together.

**Example:**

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

<details><summary> Answer here!</summary>

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let anagrams = {};
    strs.forEach(str => {
        let key = str.split('').sort().join('');
        if (!anagrams[key]) {
            anagrams[key] = [str];
        } else {
            anagrams[key] = anagrams[key].concat(str);
        }
    })
    let result = [];
    for (let key in anagrams) {
        result.push(anagrams[key]);
    }
    return result;
};
```

</details>

### Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

**DP**

tried backtracking but costs too much.

*DP[i][j] = DP[i][j-1] + DP[i-1][j]*
```
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
```

<details><summary> Answer here!</summary>

```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m+1).fill(1).map(x => new Array(n+1).fill(0));
    for (let i=1;i<=m;i++) {
        for (let j=1;j<=n;j++) {
            if (i==1 && j==1) dp[i][j] = 1;
            else dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m][n];
};
```
</details>