[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]

# tile-cover-boxes

Generate slippy tiles to cover plumped polyline.

## Install

```sh
$ npm install --save tile-cover-boxes
```

## Usage

Can be used to find a minimal set of covering tiles for set of bounding boxes, but the typical
usage involves plumping a polyline and then finding finding tiles that would cover the area around it.

```js
var plumper = require('plumper');

// polyline is a set of points
var polyline = [[0,2], [3,4], [7,8]];
// boxes is an array of rectangles [sw, ne]
var boxes = plumper(polyline, 5); // add some "fat" to polyline

var tileCoverBoxes = require('tile-cover-boxes');

// calculate the tiles that cover the polyline and "fat"
var tiles = tileCoverBoxes(boxes);
```

## License

MIT © [Damian Krzeminski](https://furkot.com)

[npm-image]: https://img.shields.io/npm/v/tile-cover-boxes.svg
[npm-url]: https://npmjs.org/package/tile-cover-boxes

[travis-url]: https://travis-ci.org/pirxpilot/tile-cover-boxes
[travis-image]: https://img.shields.io/travis/pirxpilot/tile-cover-boxes.svg

[gemnasium-image]: https://img.shields.io/gemnasium/pirxpilot/tile-cover-boxes.svg
[gemnasium-url]: https://gemnasium.com/pirxpilot/tile-cover-boxes
