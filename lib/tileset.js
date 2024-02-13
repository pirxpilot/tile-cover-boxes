module.exports = tileset;

function objectValuesPolyfill(o) {
  return Object.keys(o).map(function (key) { return o[key]; });
}

const objectValues = typeof Object.values === 'function' ? Object.values : objectValuesPolyfill;

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
    return objectValues(hash);
  }

  return self;
}
