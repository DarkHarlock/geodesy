/* global chai, OsGridRef, LatLon */

'use strict';

var test = it;
describe('osgridref.html', function() {
    chai.should();

    var gridref = new OsGridRef(651409.903, 313177.270);

    var pWgs84 = OsGridRef.osGridToLatLon(gridref);
    test('pWgs84', function() { pWgs84.toString('dms', 4).should.equal('52°39′28.7230″N, 001°42′57.7870″E'); });    

    var pOsgb = OsGridRef.osGridToLatLon(gridref, LatLon.datum.OSGB36);
    test('pOsgb', function() { pOsgb.toString('dms', 4).should.equal('52°39′27.2531″N, 001°43′04.5177″E'); });
});