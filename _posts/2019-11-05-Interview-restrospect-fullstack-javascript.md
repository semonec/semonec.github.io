---
title:  "Interview retrospect - Fullstack Engineer"
date:   2019-11-05 12:49:00 +0900
categories: Interview
tag:
  - Interview
  - coding test
  - Javascript
---
Interview restrospect for fullstack engineer.

Variority of questions and 3 coding tests

## Questions ##
 
- Data struct big o sheet(https://www.bigocheatsheet.com/)
- Pros and cons for each data structure.
- Calculate Big O
- SQL basics
- etc...


## Coding Test ##

1. Reverse string

> Give input as "I like banana" 
then reverse it with space seperated words, 
so the answer would be "banana like I"


```javascript
function reverse(data) {
  return data.split(' ').reverse().join(' ');
}
```

2. sort date

> Given date string array, ["01 Mar 2019", "15 Dec 2017", "03 Mar 2019"].
Sort it as ["15 Dec 2017", "01 Mar 2019", "03 Mar 2019"]

```javascript
function sortDates(dates) {
  let MONTH = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 
               'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8,
               'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
              };
  let parseDate = (date) => {
    let parsed = date.split(' ');
    return {
      day: Number(parsed[0]),
      month: Number(MONTH[parsed[1]]),
      year: Number(parsed[2]),
      str: date
    };
  }
  let parsedDates = [];
  dates.forEach((date)=> {
    parsedDates.push(parseDate(date));
  });

  let sorter =(a, b) => {
    if (a.year === b.year) {
      if (a.month === b.month) {
        return a.day - b.day;
      } else {
        return a.month - b.month;
      }
    } else {
      return a.year - b.year;
    }
  };

  return parsedDates.sort(sorter).map((parsed)=> parsed.str);
}

let input = ["01 Mar 2019", "15 Dec 2017", "03 Mar 2019"];

console.log(sortDates(input));
```
3. Find array's item

> Find not duplicated element in array, and return first two elements from them.
If give array is [1,2,3,4,5,1,3,5,7,8] then return [2,4]

```javascript
function findNotDuplicated(list) {
  let parsed = {};
  list.forEach(item => {
    if (!parsed[item]) {
      parsed[item] = 1;
    } else {
      parsed[item]++;
    }
  });
  let result = [];
  list.forEach(item => {
    if (parsed[item] === 1 && result.length < 2)
      result.push(item);
  });

  return result;
}


let list = [1,2,3,4,5,1,3,5,7,8];
console.log(findNotDuplicated(list));
```
