const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

const tileset = require('../lib/tileset');

describe('tileset', function () {

  it('should return list when created', function () {
    assert.equal(tileset().values().length, 0);
  });

  it('should return tiles that been put in it', function () {
    const tiles = tileset()
      .push([1, 1, 4])
      .push([2, 3, 5])
      .values();

    assert.equal(tiles.length, 2);
    assert.ok(containsEql(tiles, [1, 1, 4]));
    assert.ok(containsEql(tiles, [2, 3, 5]));
  });

  it('should eliminate duplicates', function () {
    const tiles = tileset()
      .push([1, 1, 4])
      .push([2, 3, 5])
      .push([1, 1, 4])
      .values();

    assert.equal(tiles.length, 2);
    assert.ok(containsEql(tiles, [1, 1, 4]));
    assert.ok(containsEql(tiles, [2, 3, 5]));
  });

});

function containsEql(tiles, tile) {
  return tiles.some(t => t[0] === tile[0] && t[1] === tile[1] && t[2] === tile[2]);
}
