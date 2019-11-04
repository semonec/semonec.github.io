---
layout: single
title:  "Adding GitHub pages comment system with utteranc"
categories: 
    - posts
tag:
    - jekyll
    - jekyll-101
published: true
---
Add comments area into jekyll blog.
Use utterance comments opensource.
 
[Refs](https://utteranc.es/)

## Pros ##

- We can maintain previous comments, because it's based on GitHub Issue
- Very simple


## Apply 101 ##

![Configuraion](/assets/2019-11-04-Adding-github-pages-comment-system-with-utteranc/configuration.png)

Just follow above screenshot

`repo` use as `owner/repo` style

`Blog Post ↔️ Issue Mapping` item just follow up your platform

![Enable](/assets/2019-11-04-Adding-github-pages-comment-system-with-utteranc/enable.png)

Finally press copy then,

```javascript
<script src="https://utteranc.es/client.js"
        repo="semonec/blog-comment"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

You can see above code would be copied

