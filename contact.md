---
layout: default
title: "Contacts"
permalink: /contact/
headercol: "#FFE063"
---


{% for contact in site.data.contacts %}
{% if contact.name %}
<div class="businessCard">
	<img src="/assets/contacts/{{ contact.photo }}">
	<span>{{ contact.role }}<br>{{ contact.name }}
	<br>{{ contact.phone }}</span>
</div>
{% elsif contact.header %}

## {{ contact.header }}

{% endif %}
{% endfor %}

<br>
<hr>
{% for image in site.static_files %}
URL: {{ site.baseurl }} l/l {{ image.path }}
{% endfor %}

End