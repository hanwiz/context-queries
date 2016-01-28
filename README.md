Context-queries
===============

Context-queries is a light css/javascript solution to dinamically change elements style without worrying about their position in the layout.

## Why use Context-queries?
I know, media-queries are the standard, but I don't like them.......at all. :)

I mean, in a modular responsive website project, <b>the context should be the point</b>, not the media device.<br>
The designs of a news list displayed on a smartphone viewport or on a desktop sidebar are so different?

Context-queries works by matching the correct css style depending on the container size, not on the device viewport size.

<b>What are the advantages of this approach?</b>

You can easily reuse the same element block (html+css) in many sections of your website (main, header, sidebar,...).
No matter if the user will display it via tablet, smartphone, web-tv,...

If the element container is the &lt;body&gt;, then context-queries  works identically to media-queries.

## Usage

1) Include context-queries.js on your site just before &lt;/body&gt;<br>
2) Insert a "breakpoints" attribute to the element container and set the value with the width to which you want to change the css style<br>
3) In css refer to width with "eq" (equal to), "lt" (less than) or "gt" (greater than) keyword classes<br>

<b>HTML</b>

```html
<ul class="news" breakpoints="420 768">
	<li>News 1</li>
	<li>News 2</li>
	<li>News 3</li>
	<li>News 4</li>
	<li>News 5</li>
</ul>
```

<b>CSS</b>

```css
/* General style */
ul.news li{
	float:left;
	height:50px;
}

/* Style depending on context (container width) */
ul.news.gt768 li{
	width:20%;
	background-color:#00ffcc;
}

ul.news.eq768 li{
	width:25%;
	background-color:#ffcc00;
}

ul.news.gt420.lt768 li{
	width:50%;
	background-color:#ff0000;
}

ul.news.lt420 li{
	width:100%;
	background-color:#00ff00;
}
```
