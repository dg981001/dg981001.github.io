---
layout: page
title: Authors
permalink: /authors/
image: /files/covers/authors-cover.jpg
sitemap:
  priority: 0.7
---
{% for author in site.authors %}
* [{{ author.name }}]({{ site.baseurl }}/authors/{{ author.name }})
{% endfor %}
