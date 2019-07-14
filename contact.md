---
layout: default
title: "Contact Us"
permalink: /contact/
headercol: "#FFE063"
---
## Our Address
<p>Edwardians FC<br>
The Memorial Ground<br>
Streetsbrook Road<br>
Solihull<br>
B90 3PE</p>
<a href="tel:0121 744 6831">0121 744 6831</a>

<iframe width="600" height="450" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place?q=Edwardians%20FC%20The%20Memorial%20Ground&key=AIzaSyAUS63McAE82HKV-b1stZQG0_x5DndJ3dU" allowfullscreen style="width:100%;"></iframe>

{% for contact in site.data.contacts %}
{% if contact.name and contact.name != "" %}
<div class="card business-card">
	{% if contact.photo and contact.photo != "" %}<img src="/assets/contacts/{{ contact.photo }}">{% endif %}
	<span>
		{{ contact.name }}<br>
		{% if contact.role and contact.role != "" %}<span class="subheading">{{ contact.role }}</span>{% endif %}
		{% if contact.phone and contact.phone != "" %}<br><a href="tel:{{ contact.phone }}">{{ contact.phone }}</a>{% endif %}
		{% if contact.email and contact.email != "" %}<br><a href="mailto:{{ contact.email }}">{{ contact.email }}</a>{% endif %}
	</span>
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