---
layout: post
title:  "Interview retrospect - Frontend Engineer"
date:   2019-11-01 07:49:00 +0900
categories: Post
comments: true
---

# Interview retrospect

## Technical backgroudn ##

### Garbage Collection ###

### Avoid Garbage, optimized memory management way ### 



## Coding Questions ##

### Implement cache memory, limited sized ###

For find way to manage the VM's memory.
It's quite important manage de-reference of unused variables, objects.


### Implement bind function ###

[Function.prototype.bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)


### Handle multiple async ###

ex)
~~~javascript
let fn1 = (cb) => { setTimeout(() => { console.log("10"); cb(); }, 10); };
let fn2 = (cb) => { setTimeout(() => { console.log("50"); cb(); }, 50); };
let fn3 = (cb) => { setTimeout(() => { console.log("20"); cb(); }, 20); };
let fn4 = (cb) => { setTimeout(() => { console.log("30"); cb(); }, 30); };
let done = () => { console.log("done"); };

let fnArr = [fn1, fn2, fn3, fn4];

// start from fn1, fn2, fn3, f4
// 1. print like
/*
10
50
20
30
done
*/
function printSeries(fns) {
  // TODO:
}
printSeries(fnArr);
// 2. print like
/*
10
20
30
50
done
*/
function printParallel(fns) {
  // TODO:
}
~~~

<b> Answer is</b>

~~~javascript
function printSeries(fns) {
  if (fns === undefined || !fns.length) {
    done();
    return;
  }  
  let fn = fns[0];
  fn(() => printSeries(fns.slice(1)));
}

function printParallel(fns) {
  let fnToPromise = (fn) => new Promise((res)=> fn(res));
  let promises = fns.map(fnToPromise);
  Promise.all(promises).then(done);
}
~~~
