const tileset = require('./tileset');
const tools = require('./tools');

module.exports = tileCoverBoxes;

function tilesForBox(ts, zoom, box) {
  const sw = tools.llToTile(box[0], zoom);
  const ne = tools.llToTile(box[1], zoom);

  for (let x = sw[0]; x <= ne[0]; x++) {
    // please note: rows a.k.a y are reverted
    for (let y = ne[1]; y <= sw[1]; y++) {
      ts.push([x, y, zoom]);
    }
  }

  return ts;
}

function addParent(ts, tile) {
  return ts.push(tools.parent(tile));
}

function addAllParents(ts, minZoom, maxZoom) {
  let iterations = maxZoom - minZoom;
  let tiles = ts.values();
  let all = tiles;

  while (iterations-- > 0) {
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

  const ts = tileset();
  boxes.forEach(tilesForBox.bind(null, ts, maxZoom));
  return addAllParents(ts, minZoom, maxZoom);
}
