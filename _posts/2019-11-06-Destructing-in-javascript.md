---
title:  "Javascript and memory"
date:   2019-11-05 12:49:00 +0900
categories: Interview
tag:
  - Interview
  - coding test
  - Javascript
---

이전 인터뷰 경험에서, 자바스크립트에서의 메모리 관리에 대한 질문을 받았었다.
가비지가 쌓이지 않게 하려면 어떻게 할것인가에 대해서, 그리고 메모리 관리에 대해서 전반적으로 되돌아 보는 시간을 갖고자 한다.

# Memory lifecycle #

## Memory allocation ##

**Value initialization**

Javascript will automatically allocate When values are initially declared

```javascript
let n = 1; // allocate memory for a number
let s = "string"; // allocate memory for a string

let o = {a: 1}; // allocate memory for a object

function f() {
    return 1;
} // allocate a function, callable object
```

**Allocation via function calls**

```javascript
let d = new Date(); // allocate date object

let s = [1].concat([2]) // allocate new array 
```


**Release when that memory is not needed anymore**

Garbage collector (GC) monitor memory allocation and determine when a block of allocated memory is no logner needed.

## Garbage collection ##

**References**

If A object can access another then it means references.

### Reference-counting GC ### 

If an object is not referenced by others, then it would called as *"Garbage"*, and it could be collected

But in case of, 

**Circular References**

```javascript
function f() {
    let x = {};
    let y = {};
    x.a = y;
    y.a = x;

    return;
}

f();
```
Even though above function closure is ended, each object's reference count is not 0, so it cann't be collected
Circular references are a common cause of **memory leak**

ex) DOM object

```javascript
var div = document.createElement("div");
div.onclick = function(){
  doSomething();
};
```

> Document has *div* element, and 'div' variable would reference that element.
> *div* element's onclick event listener will refers function object



## References ##
- [Memory leak patterns in JavaScript](https://www.ibm.com/developerworks/web/library/wa-memleak/wa-memleak-pdf.pdf)
- [Memory Management](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)
- [4 Types of Memory Leaks in JavaScript and How to Get Rid Of Them](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)
- [Beyond Memory Leaks in JavaScript
](https://medium.com/outsystems-experts/beyond-memory-leaks-in-javascript-d27fd48ae67e)