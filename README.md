JavaScript'd Blogger Gadgets
============================

This repo contains Blogger Gadgets which have been converted into JavaScript for rendering HTML element in order to preventing text directly visible to search engine crawler, which mostly are not related to the post content.

If you need other gadget to be converted, open an issue.

How to Use
----------

You replace the entire `<b:widget/>` with modified version.

### BlogArchiveBar.js

Barchart'd Blog Archive script.

![Blog Archive Bar Chart](https://github.com/livibetter/BloggerGadgets.js/raw/master/BlogArchiveBar.png)

1. You need to have Blog Archive gadget installed and use Drop down list mode.
2. Add the following code into a new HTML/JavaScript or an existing one:

```html
<script src="https://www.google.com/jsapi"></script>
<script src="http://livibetter.github.com/BloggerGadgets.js/BlogArchiveBar.js"></script>
```

The drop down list will be converted into a bar chart, which rendered via Google Visualization API. You can customize the chart with the [API's options][visopts], e.g.:

```html
<script>
var BlogArchiveBarOptions = {
  backgroundColor: 'white'
}
</script>
```

The custom option will be merged with defaults and used to create the chart. You need to set the options `BlogArchiveBarOptions` before the inclusion of `BlogArchiveBar.js`.

[visopts]: https://developers.google.com/chart/interactive/docs/gallery/columnchart#Configuration_Options

Gadgets
-------

 * Blog Archive - Flat mode is not done.
 * Popular Posts - There is an issue with double quotation mark `"`, workaround is to use `&quot;` or curly ones.
