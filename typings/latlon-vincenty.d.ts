// Type definitions for geodesy
// Project: https://github.com/chrisveness/geodesy
// Based on definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as latlon from './latlon-ellipsoidal';
export = latlon;

declare module './latlon-ellipsoidal' {
    export type direct = {
        point: LatLonEllipsoidal.LatLonEllipsoidal
        finalBearing: number,
        iterations: number,
    }

    export type inverse = {
        distance: number,
        initialBearing: number,
        finalBearing: number,
        iterations: number
    }

    export interface LatLonEllipsoidal {
        distanceTo(point: LatLonEllipsoidal): number;
        initialBearingTo(point: LatLonEllipsoidal): number;
        finalBearingTo(point: LatLonEllipsoidal): number;
        destinationPoint(distance: number, initialBearing: number): LatLonEllipsoidal;
        finalBearingOn(distance: number, initialBearing: LatLonEllipsoidal): number;
        direct(distance: number, initialBearing: number): direct;
        inverse(point: LatLonEllipsoidal): inverse;
    }
}

declare global {
    interface Number {
        toRadians(): number;
        toDegrees(): number;
    }
}
