/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Geodesy Test Harness - latlon-vincenty                            (c) Chris Veness 2014-2016  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

// eslint-disable-next-line strict
(function (root, factory) {
    // eslint-disable-next-line no-undef
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        // eslint-disable-next-line no-undef
        define([ 'chai', '../npm' ], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        factory(require('chai'), require('../npm.js'));
    } else {
        // Browser globals (root is window)
        root.Dms = factory();
    }
}(this, function (chai, npmjs) {
    // eslint-disable-next-line strict
    'use strict';

    var LatLon = npmjs.LatLonEllipsoidal;

    chai.should();
    var test = it; // just an alias

    describe('latlon-vincenty', function() {
        var le = new LatLon(50.06632, -5.71475), jog = new LatLon(58.64402, -3.07009);
        test('vincenty inverse distance',              function() { le.distanceTo(jog).toFixed(3).should.equal('969954.166'); });
        test('vincenty inverse initial bearing',       function() { le.initialBearingTo(jog).toFixed(4).should.equal('9.1419'); });
        test('vincenty inverse final bearing',         function() { le.finalBearingTo(jog).toFixed(4).should.equal('11.2972'); });

        var flindersPeak = new LatLon(-37.95103, 144.42487);
        var buninyong = new LatLon(-37.6528, 143.9265);
        test('vincenty direct destination',            function() { flindersPeak.destinationPoint(54972.271, 306.86816).toString('d').should.equal(buninyong.toString('d')); });
        test('vincenty direct final brng',             function() { flindersPeak.finalBearingOn(54972.271, 306.86816).toFixed(4).should.equal('307.1736'); });
        test('vincenty antipodal distance',            function() { new LatLon(0, 0).distanceTo(new LatLon(0.5, 179.5)).should.equal(19936288.579); });

        test('vincenty antipodal convergence failure', function() { new LatLon(0, 0).distanceTo(new LatLon(0.5, 179.7)).should.be.NaN; });
    });
}));
