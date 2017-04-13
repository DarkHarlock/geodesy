// Declares UMD module

// eslint-disable-next-line strict
(function (root, factory) {
    // eslint-disable-next-line no-undef
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        // eslint-disable-next-line no-undef
        define([
            './latlon-spherical',
            './latlon-vincenty',
            './latlon-vectors',
            './vector3d',
            './utm',
            './mgrs',
            './osgridref',
            './dms',
        ], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(
            require('./latlon-spherical.js'),
            require('./latlon-vincenty.js'),
            require('./latlon-vectors.js'),
            require('./vector3d.js'),
            require('./utm.js'),
            require('./mgrs.js'),
            require('./osgridref.js'),
            require('./dms.js')
        );
    } else {
        // Browser globals (root is window)
        root.Dms = factory();
    }
}(this, function (
    LatLonSpherical,
    LatLonEllipsoidal,
    LatLonVectors,
    Vector3d,
    Utm,
    Mgrs,
    OsGridRef,
    Dms) {
    // eslint-disable-next-line strict
    'use strict';

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {
        LatLonSpherical:   LatLonSpherical,
        LatLonEllipsoidal: LatLonEllipsoidal,
        LatLonVectors:     LatLonVectors,
        Vector3d:          Vector3d,
        Utm:               Utm,
        Mgrs:              Mgrs,
        OsGridRef:         OsGridRef,
        Dms:               Dms,
    };
}));
