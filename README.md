Context-queries
===============

Context-queries is a light css/javascript solution to dinamically change element style without worrying about element position.

# Why use Context-queries?
I know, media-queries are standard, but I don't like them. :)

I mean, in a modular responsive website project, <b>the context should be the point</b>, not the media device.
The design of a news list displayed on a smartphone or on a desktop sidebar is so different?

Context-queries works by matching the correct css style depending on the container size, not on the device viewport size.

<b>What are the advantages of this approach?</b>

You can easily reuse the same element block (html+css) in many sections of your website (main section, header, sidebar,...).
No matter if the user will display it via tablet, smartphone, webtv,...

If the element container is the &lt;body&gt;, then context-queries  works identically to media-queries.

# How to

1) Include context-queries.js on your site just before &lt;body&gt;<br>
2) Insert a "breakpoints" attribute to the element container<br>
3) Set the value of the attribute with the width to wich you want to change css matching<br>
4) In css refer to width with "lt" (less than) and "gt" (greater than) keyword classes<br>

<b>HTML</b>

```html
<ul class="news" breakpoints="420 769">
	<li>News 1</li>
	<li>News 2</li>
	<li>News 3</li>
	<li>News 4</li>
	<li>News 5</li>
<ul>
```

<b>CSS</b>

```css
ul.news li{
	float:left;
	width:25%;
	height:50px;
}

ul.gt769 li{
	background-color:#ffcc00;
}

ul.lt769 li{
	width:50%;
	background-color:#ff0000;
}

ul.lt420 li{
	width:100%;
	background-color:#00ff00;
}
```

# Live demo
[http://www.moloc.net/CONTEXT-QUERIES/]
	
