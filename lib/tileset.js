module.exports = tileset;

function tileset() {
  const hash = Object.create(null);
  const self = {
    push,
    values
  };

  // use tileToQuadkey here?
  function key(tile) {
    return tile.join(':');
  }

  function push(tile) {
    hash[key(tile)] = tile;
    return self;
  }

  function values() {
    return Object.values(hash);
  }

  return self;
}
