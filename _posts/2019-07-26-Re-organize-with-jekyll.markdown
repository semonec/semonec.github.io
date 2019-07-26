---
layout: post
title:  "Welcome to Jekyll!"
date:   2019-07-26 11:49:00 +0900
categories: Post
comments: true
---

# How to Organize Jekyll environment in Windows.

### First posting with Jekyll at Github Pages

Even though I used with hexo, almost merly not updated it.
So, re-organize with Jekyll and write posts as much well.


## Installation

Quiet tired process, so just write down, and once again  just follow it.

1. Download RubyInstaller from https://rubyinstaller.org/downloads/

    Download it with DevKit version

![ruby_site.png](https://i.loli.net/2019/07/26/5d3a6b7ea857329102.png)


2. Install that downloaded

    just follow up. default settings

3. Install jekyll

    In my case, I make <b>C:\jekyll</b> directory for download

    <code>
    cd C:\<br />
    mkdir jekyll<br />
    cd jekyll<br />
    gem install jekyll <br />
    </code> 


4. Install additiol gem's

    <code>
    gem install minima <br />
    gem install bundler <br />
    gem install jekyll-feed <br />
    gem install tzinfo-data
    </code>

5. Now you can make a jekyll workspace like

    <code>
    cd <WORKSPACE_WHEREVER_YOU_WANNA> <br />
    jekyll new .
    </code>

6. Created! Now it's time to serve

    <code>
    jekyll serve
    </code>

    After then, you can see blog by accessing to http://127.0.0.1:4000

### Useful tips while posting

- Install [PicGo](https://github.com/PicGo/vs-picgo) which can post images easily.

