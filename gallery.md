---
layout: default
title: "Gallery"
permalink: /gallery/
headercol: "#FFE063"
---

{% for image in site.static_files %}
    {% if image.path contains '/gallery/' %}
<img src="{{ site.baseurl }}{{ image.path }}" alt="image" style="max-width:100%">
    {% endif %}
{% endfor %}

End