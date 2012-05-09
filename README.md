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

![Blog Archive Bar Width Chart](https://github.com/livibetter/BloggerGadgets.js/raw/master/BlogArchiveBarWidth.png)

See [its page for instructions][BlogArchiveBar.js].

[BlogArchiveBar.js]: https://github.com/livibetter/BloggerGadgets.js/blob/master/BlogArchiveBar.md

Gadgets
-------

 * Blog Archive - Flat mode is not done.
     * [BlogArchiveBar.js][] - Barchart'd Blog Archive script.
 * Popular Posts - There is an issue with double quotation mark `"`, workaround is to use `&quot;` or curly ones.
