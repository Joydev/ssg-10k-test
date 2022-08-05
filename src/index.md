---
title: "Srila Gurudev Archive"
layout: "base.njk"
templateEngineOverride: njk,md
---

### This is for our lecture page.

## Lectures List:

<ul>
{%- for article in collections.articles -%}
<li><a href="{{ article.url }}">{{ article.data.title }}</a></li>
{%- endfor -%}
</ul>
