---
layout: default
title: "Gallery"
permalink: /gallery/
headercol: "#FFE063"
---
Photos from our Instagram: <a href="https://www.instagram.com/edsrugby/" target="_blank">@edsrugby</a>
<div class='embedsocial-instagram' data-ref="77c1b58c3ba0245af58e371c220bcab97416c42b"></div><script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/in.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialInstagramScript"));</script>

{% comment %}
{% for image in site.static_files %}
    {% if image.path contains '/gallery/' %}
<img src="{{ site.baseurl }}{{ image.path }}" alt="image" style="max-width:100%">
    {% endif %}
{% endfor %}

End
{% endcomment %}
