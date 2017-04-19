var tilebelt = require('@mapbox/tilebelt');

module.exports = {
  llToTile: llToTile,
  parent: parent
};

function llToTile(ll, zoom) {
  return tilebelt.pointToTile(ll[0], ll[1], zoom);
}

function parent(tile) {
  return [ tile[0] >> 1, tile[1] >> 1, tile[2] - 1 ];
}
