module.exports = {
  llToTile,
  parent
};

const RAD = Math.PI / 180;

function lon2x(lon) {
  return (lon + 180) / 360;
}

function lat2y(lat) {
  const s = Math.sin(lat * RAD);
  return 0.5 - 0.25 * Math.log((1 + s) / (1 - s)) / Math.PI;
}

function llToTile(ll, zoom) {
  const factor = Math.pow(2, zoom);
  const x = factor * lon2x(ll[0]);
  const y = factor * lat2y(ll[1]);
  return [Math.floor(x), Math.floor(y), zoom];
}

function parent(tile) {
  return [tile[0] >> 1, tile[1] >> 1, tile[2] - 1];
}
