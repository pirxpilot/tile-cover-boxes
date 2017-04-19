module.exports = tileset;

function tileset() {
  var hash = Object.create(null);
  var self = {
    push: push,
    values: typeof Object.values === 'function' ? values : valuesLegacy
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

  // in case Object.values is not a thing
  function valuesLegacy() {
    return Object.keys(hash).map(function(key) {
      return hash[key];
    });
  }

  return self;
}
