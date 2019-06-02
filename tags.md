---
layout: page
title: Tags
permalink: /tags/
image: /files/covers/tags-cover.jpg
sitemap:
  priority: 0.7
---
{% for tag in site.tags %}
* [{{ tag.name }}]({{ site.baseurl }}/tags/{{ tag.name }})
{% endfor %}
