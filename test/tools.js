const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

const tools = require('../lib/tools');

describe('tools', function () {

  describe('parent', function () {

    it('should return parent for tile', function () {
      assert.deepEqual(tools.parent([4, 3, 6]), [2, 1, 5]);
      assert.deepEqual(tools.parent([5, 2, 6]), [2, 1, 5]);
      assert.deepEqual(tools.parent([4, 2, 6]), [2, 1, 5]);
      assert.deepEqual(tools.parent([5, 3, 6]), [2, 1, 5]);
    });

  });

  describe('llToTile', function () {

    it('should return tile for geo coordinates', function () {

      assert.deepEqual(tools.llToTile([-70, 40], 0), [0, 0, 0]);
      assert.deepEqual(tools.llToTile([-70, 40], 1), [0, 0, 1]);
      assert.deepEqual(tools.llToTile([170, -80], 6), [62, 56, 6]);
      assert.deepEqual(tools.llToTile([170, -80], 14), [15928, 14544, 14]);
    });


  });

});
