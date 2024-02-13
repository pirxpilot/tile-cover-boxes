const { describe, it } = require('node:test');

var tileCoverBoxes = require('../');

describe('tile-cover-boxes', function () {
  var box1 = [
    [ -1, -2 ],
    [ 3, 4 ]
  ];
  var box2 = [
    [ -70, 40 ],
    [ -69, 42 ]
  ];

  it('should return empty set if no boxes', function () {
    tileCoverBoxes([]).should.eql([]);
  });

  it('should return exactly 1 tile for any box on zoom 0', function () {
    tileCoverBoxes([ box1 ], 0, 0).should.eql([ [0, 0, 0] ]);
    tileCoverBoxes([ box1, box2 ], 0, 0).should.eql([ [0, 0, 0] ]);
  });

  it('should return tiles for each requested zoom level for a single box', function () {
    tileCoverBoxes([box2], 5, 9).should.eql([
      [ 9, 11, 5 ],
      [ 9, 12, 5 ],
      [ 19, 23, 6 ],
      [ 19, 24, 6 ],
      [ 39, 47, 7 ],
      [ 39, 48, 7 ],
      [ 78, 95, 8 ],
      [ 78, 96, 8 ],
      [ 156, 190, 9 ],
      [ 156, 191, 9 ],
      [ 156, 192, 9 ],
      [ 156, 193, 9 ],
      [ 157, 190, 9 ],
      [ 157, 191, 9 ],
      [ 157, 192, 9 ],
      [ 157, 193, 9 ]
    ]);
  });

  it('should return tiles for each requested zoom level for multiple boxes', function () {
    tileCoverBoxes([box1, box2], 5, 6).should.eql([
      [ 15, 15, 5 ],
      [ 15, 16, 5 ],
      [ 16, 15, 5 ],
      [ 16, 16, 5 ],
      [ 9, 11, 5 ],
      [ 9, 12, 5 ],
      [ 31, 31, 6 ],
      [ 31, 32, 6 ],
      [ 32, 31, 6 ],
      [ 32, 32, 6 ],
      [ 19, 23, 6 ],
      [ 19, 24, 6 ]
    ]);
  });

});
