var tools = require('../lib/tools');

describe('tools', function () {

  describe('parent', function() {

    it('should return parent for tile', function() {
      tools.parent([4, 3, 6]).should.eql([2, 1, 5]);
      tools.parent([5, 2, 6]).should.eql([2, 1, 5]);
      tools.parent([4, 2, 6]).should.eql([2, 1, 5]);
      tools.parent([5, 3, 6]).should.eql([2, 1, 5]);
    });

  });

  describe('llToTile', function() {

    it('should return tile for geo coordinates', function() {

      tools.llToTile([-70, 40], 0).should.eql([0, 0, 0]);
      tools.llToTile([-70, 40], 1).should.eql([0, 0, 1]);
      tools.llToTile([170, -80], 6).should.eql([62, 56, 6]);
      tools.llToTile([170, -80], 14).should.eql([15928, 14544, 14]);
    });


  });

});
