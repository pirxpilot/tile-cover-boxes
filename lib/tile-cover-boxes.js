var tileset = require('./tileset');
var tools = require('./tools');

module.exports = tileCoverBoxes;

function tilesForBox(ts, zoom, box) {
  var sw = tools.llToTile(box[0], zoom);
  var ne = tools.llToTile(box[1], zoom);
  var x, y;

  for(x = sw[0]; x <= ne[0]; x++) {
    // please note: rows a.k.a y are reverted
    for(y = ne[1]; y <= sw[1]; y++) {
      ts.push([x, y, zoom]);
    }
  }

  return ts;
}

function addParent(ts, tile) {
  return ts.push(tools.parent(tile));
}

function addAllParents(ts, minZoom, maxZoom) {
  var iterations = maxZoom - minZoom;
  var tiles = ts.values();
  var all = tiles;

  while(iterations-- > 0) {
    tiles = tiles.reduce(addParent, tileset()).values();
    all = tiles.concat(all);
  }

  return all;
}

function tileCoverBoxes(boxes, minZoom, maxZoom) {
  if (typeof minZoom !== 'number' || minZoom < 0) {
    minZoom = 0;
  }
  if (typeof maxZoom !== 'number') {
    maxZoom = 14;
  }

  var ts = tileset();
  boxes.forEach(tilesForBox.bind(null, ts, maxZoom));
  return addAllParents(ts, minZoom, maxZoom);
}
