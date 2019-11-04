---
title:  "Applying remote theme to Jekyll"
date:   2019-10-30 07:49:00 +0900
categories: Jekyll
tag:
- jekyll
- minimal-mistake
- theme
---

# Applying Remote theme to Jekyll

You can find <b>free</b> Jekyll themes [HERE!](https://jekyllthemes.io/free)

## Easiest way to build a jekyll pages 

Clone https://github.com/mmistakes/mm-github-pages-starter

Then, modify _config.yml

## From scratch approach

### Create new jekyll page with ###
> $ jekyll new .

### Edit Gemfile ###

~~~ruby
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

gem "tzinfo-data"
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-feed"
  gem "jemoji"
  gem "jekyll-include-cache"
  gem "jekyll-algolia"
end
~~~

### Update packages ###

> $ bundle

### Edit config file ###

**_config.yml**

~~~yml
# .....
# Add below remoth_theme item, right value would be github repo address
remote_theme: mmistakes/minimal-mistakes

plugins:
# ... lists
# Add below `jekyll-include-cache` if you use minimal-mistakes theme
  - jekyll-include-cache
~~~

But highly recommanded use clone previously organized repository.