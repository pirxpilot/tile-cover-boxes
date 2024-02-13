const { describe, it } = require('node:test');

const tileset = require('../lib/tileset');

describe('tileset', function () {

  it('should return list when created', function () {
    tileset().values().should.be.empty();
  });

  it('should return tiles that been put in it', function () {
    const tiles = tileset()
      .push([1, 1, 4])
      .push([2, 3, 5])
      .values();

    tiles.should.have.length(2);
    tiles.should.containEql([1, 1, 4]);
    tiles.should.containEql([2, 3, 5]);
  });

  it('should eliminate duplicates', function () {
    const tiles = tileset()
      .push([1, 1, 4])
      .push([2, 3, 5])
      .push([1, 1, 4])
      .values();

    tiles.should.have.length(2);
    tiles.should.containEql([1, 1, 4]);
    tiles.should.containEql([2, 3, 5]);
  });

});
