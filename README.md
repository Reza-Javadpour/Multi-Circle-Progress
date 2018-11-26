jquery-circle-progress
======================

[![Build status](https://travis-ci.org/kottenator/jquery-circle-progress.svg?branch=master)](https://travis-ci.org/kottenator/jquery-circle-progress)
[![Bower version](https://img.shields.io/bower/v/jquery-circle-progress.svg?maxAge=3600)](https://bower.io/search/?q=jquery-circle-progress)
[![NPM version](https://img.shields.io/npm/v/jquery-circle-progress.svg?maxAge=3600)](https://www.npmjs.com/package/jquery-circle-progress)

jQuery Plugin to draw animated circular progress bars like this:

![](http://i.imgur.com/zV5VUQG.png)

Check out [more examples](http://kottenator.github.io/jquery-circle-progress/)! Or maybe the crazy [one](http://jsbin.com/vatuza/5/)?

Install
-------

Make your choice:

* Download [latest GitHub release](https://github.com/Reza-Javadpour/Multi-Circle-Progress)

Usage
-----

```html
<script src="scripts/multi-circle-progress.js"></script>

<div id="circle"></div>

<canvas data-arc_x="200"
        data-arc_y="200"
        data-arc_radius="100"
        data-arc_per_1="20"
        data-arc_color_1="#16A085"
        data-arc_size_1="10"
        data-arc_per_2="10"
        data-arc_color_2="#F39C12"
        data-arc_size_2="10"
        data-arc_per_3="25"
        data-arc_color_3="#3498DB"
        data-arc_size_3="10"
        data-arc_per_4="10"
        data-arc_color_4="#E74C3C"
        data-arc_size_4="10"
        id="myCanvas"
        width="500"
        height="500">
        Your browser does not support the HTML5 canvas tag.
</canvas>
```

Options
-------

Specify options like in example above.

| Option | Description |
| ---- | ---- |
| data-arc_x | This is x parameter of center point <br> Default: `200px` |
| data-arc_y | This is y parameter of center point <br> Default: `200px` |
| data-arc_radius | This is circle radius value <br> Default: `100px` |
| data-arc_per_1 | this is first arc percentage ( from 0 to 100) |
| data-arc_color_1 | this is first arc color ( you can use name color or hex value ) |
| data-arc_size_1 | this is first arc size thickness |
| width | This is canvas width |
 |height | This is canvas Height |

Events
------

| Event | Description | Handler |
| ---- | ---- | ---- |
| `circle-inited` | Triggered on init or re-init. | `function(event)`: <br>- `event` - jQuery event |
| `circle-animation-start` | Triggered once the animation is started. | `function(event)`: <br>- `event` - jQuery event |
| `circle-animation-progress` | Triggered on each [animation tick](http://api.jquery.com/animate/#step). | `function(event, animationProgress, stepValue)`: <br>- `event` - jQuery event <br>- `animationProgress` - from `0.0` to `1.0` <br>- `stepValue` - current step value: from `0.0` to `value` |
| `circle-animation-end` | Triggered once the animation is finished. | `function(event)`: <br>- `event` - jQuery event |

