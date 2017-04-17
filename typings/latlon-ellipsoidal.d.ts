// Type definitions for geodesy
// Project: https://github.com/chrisveness/geodesy
// Based on definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as vector3d from './vector3d';
import * as dms from './dms';

export as namespace LatLonEllipsoidal
export = LatLonEllipsoidalStatic;
declare var LatLonEllipsoidalStatic: LatLonEllipsoidalStatic;

declare interface LatLonEllipsoidalStatic {
    new (lat: number, lon: number, datum?: LatLonEllipsoidal.datum): LatLonEllipsoidal.LatLonEllipsoidal;
    (lat: number, lon: number, datum?: LatLonEllipsoidal.datum): LatLonEllipsoidal.LatLonEllipsoidal;
    datum: LatLonEllipsoidal.datums;
    ellipsoid: LatLonEllipsoidal.ellipsoids;
}

declare namespace LatLonEllipsoidalStatic {
    export type transform = [number, number, number, number, number, number, number];

    export type ellipsoid = {
        a: number;
        b: number;
        f: number;
    }

    export type ellipsoids = {
        WGS84: ellipsoid;
        Airy1830: ellipsoid;
        AiryModified: ellipsoid;
        Bessel1841: ellipsoid;
        Clarke1866: ellipsoid;
        Clarke1880IGN: ellipsoid
        GRS80: ellipsoid;
        Intl1924: ellipsoid;
        WGS72: ellipsoid;
    }

    export type datum = {
        ellipsoid: ellipsoid;
        transform: transform;
    }

    export type datums = {
        ED50: datum;
        Irl1975: datum;
        NAD27: datum;
        NAD83: datum;
        NTF: datum;
        OSGB36: datum;
        Potsdam: datum;
        TokyoJapan: datum;
        WGS72: datum;
        WGS84: datum;
    }

    export interface LatLonEllipsoidal {
        lat: number;
        lon: number;
        datum: datum;
        convertDatum(toDatum: datum): LatLonEllipsoidal;
        toCartesian(): vector3d.Vector3d;
        toString(format?: dms.format, dp?: dms.dp): string;
    }

}

declare module './vector3d' {
    interface Vector3d {
        toLatLonE(datum: LatLonEllipsoidal.datum): LatLonEllipsoidal;
        applyTransform(t: LatLonEllipsoidal.transform): Vector3d;
    }
}

declare global {
    interface Number {
        toRadians(): number;
        toDegrees(): number;
    }
}
