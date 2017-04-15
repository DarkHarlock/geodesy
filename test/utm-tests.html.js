/* global chai, Utm */

'use strict';

var test = it;
describe('utm.html', function () {
    chai.should();
    
    var utm = Utm.parse('48 N 377298.745 1483034.794');
    var latlon = utm.toLatLonE();
    test('latlonE', function () { latlon.toString('dms', 2).should.equal('13°24′45.00″N, 103°52′00.00″E'); });
});
