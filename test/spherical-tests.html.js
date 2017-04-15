/* global chai, LatLonSpherical */

'use strict';

var test = it;
describe('spherical.html', function () {
    chai.should();

    var p1 = new LatLonSpherical(50.06632, -5.71475);
    var p2 = new LatLonSpherical(58.64402, -3.07009);
    var d = p1.distanceTo(p2);
    test('distance', function () { d.toFixed(3).should.equal('968874.704'); });
    var mid = p1.midpointTo(p2);
    test('midpoint', function () { mid.toString().should.equal('54°21′44″N, 004°31′51″W'); });
});
