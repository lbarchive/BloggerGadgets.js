BlogArchiveBar.js
=================

The gadget in following image is with default options:

![Blog Archive Bar Chart](https://github.com/livibetter/BloggerGadgets.js/raw/master/BlogArchiveBar.png)

The gadget in following image is with following options:

![Blog Archive Bar Width Chart](https://github.com/livibetter/BloggerGadgets.js/raw/master/BlogArchiveBarWidth.png)

```html
<script>
var BlogArchiveBarOptions = {
  BlogArchiveBar: {
    bar_width: 20
  },
  chartArea: {
    height: 'auto'
  },
  height: 200,
  fontName: 'Gentium Book Basic',
  fontSize: 10,
  hAxis: {
    textStyle: {color: '#aaa'},
    textPosition: 'out',
    slantedText: true,
    slantedTextAngle: 90
  }
}
</script>
<style>
#BlogArchiveBarChart {
  overflow-x: auto;
}
</style>
```

Installation
------------

### Simple way

This method does not involve modifying template.

1. You need to have Blog Archive gadget installed and use *Dropdown Menu style*.
2. Add the following code into a new or existing HTML/JavaScript gadget:

```html
<script src="https://www.google.com/jsapi"></script>
<script src="http://livibetter.github.com/BloggerGadgets.js/BlogArchiveBar.js"></script>
```

### Efficient way

The previous method parses the original Blog Archive gadget, therefore it's less efficient, though barely noticeable for well-coded template.

For efficient way, you can replace the Blog Archive gadget with `BlogArchiveBar.xml` and that's all you need to do. The XML has already include the two lines of code in previous method.

Options
-------

The Dropdown menu will be converted into a bar chart, which rendered via Google Visualization API. You can customize the chart with the [API's options][visopts], e.g.:

```html
<script>
var BlogArchiveBarOptions = {
  backgroundColor: 'white'
}
</script>
```

The custom option will be merged with defaults and used to create the chart. You may need to set the options `BlogArchiveBarOptions` before the inclusion of `BlogArchiveBar.js`.

[visopts]: https://developers.google.com/chart/interactive/docs/gallery/columnchart#Configuration_Options


### bar\_width

You can set each bar section with a specific width value, e.g.

```html
<script>
var BlogArchiveBarOptions = {
  BlogArchiveBar: {
    bar_width: 20
  }
}
</script>
```

The chart's width will be automatically recalculated. You may want to set up the follow style, so you will have horizontal scroll bar if needed:

```html
<style>
#BlogArchiveBarChart {
  overflow-x: auto;
}
</style>
```

Additional notes
----------------

BlogArchiveBar.js can also check pre-defined array `BlogArchiveBarItems`, which is an array of items like:

```js
['name', count, 'URL']
```

If this variable presents, then it will be used as data instead of from parsing Dropdown menu.
