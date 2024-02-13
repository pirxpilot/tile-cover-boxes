[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

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

[npm-image]: https://img.shields.io/npm/v/tile-cover-boxes
[npm-url]: https://npmjs.org/package/tile-cover-boxes

[build-url]: https://github.com/pirxpilot/tile-cover-boxes/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/pirxpilot/tile-cover-boxes/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/tile-cover-boxes
[deps-url]: https://libraries.io/npm/tile-cover-boxes
