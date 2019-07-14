---
layout: default
title: "Events"
permalink: /events/
---

{% for event in site.data.events %}
{% if event.name and event.name != "" %}
<div class="card event-card">
	<div>{{ event.name }}<br>
		<span class="subheading">
			{% if event.date and event.date != "" %}{{ event.date }}{% endif %}
			{% if event.time and event.time != "" %} - {{ event.time }}{% endif %}
			{% if event.description and event.description != "" %}<br>
				<a href="#" onclick="showDesc(this);">
					More Info...
					<span class="event-description" style="max-height:0px;">{{event.description }}</span>
				</a>
			{% endif %}
			{% if event.location and event.location != "" %}
				<br><!--srcset="/assets/location.svg"-->
				<img src="/assets/location.png" alt="Location Icon" style="height:1em;vertical-align:middle;"> {{ event.location }}
			{% endif %}
		</span>
	</div>
	{% if event.flyerpic and event.flyerpic != "" %}
		<img src="/assets/events/{{ event.flyerpic }}">
	{% endif %}
</div>
{% elsif event.header %}

## {{ event.header }}

{% endif %}
{% endfor %}


<hr>
Page was last updated: {{ "now" | date: "%Y-%m-%d %H:%M:%S" }}.