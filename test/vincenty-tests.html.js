/* global chai, LatLon */

'use strict';

var test = it;
describe('vincenty.html', function () {
    chai.should();

    var p1 = new LatLon(50.06632, -5.71475);
    var p2 = new LatLon(58.64402, -3.07009);
    var d = p1.distanceTo(p2);
    test('distance', function () { d.toFixed(3).should.equal('969954.166'); });
});
