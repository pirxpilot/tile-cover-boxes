module.exports = tileset;

function objectValuesPolyfill(o) {
  return Object.keys(o).map(function(key) { return o[key]; });
}

var objectValues = typeof Object.values === 'function' ? Object.values : objectValuesPolyfill;

function tileset() {
  var hash = Object.create(null);
  var self = {
    push: push,
    values: values
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
    return objectValues(hash);
  }

  return self;
}
