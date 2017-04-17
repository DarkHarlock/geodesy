// Type definitions for geodesy
// Project: https://github.com/chrisveness/geodesy
// Based on definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as latlon from './latlon-ellipsoidal';

export as namespace Utm;
export = UtmStatic;
declare var UtmStatic: UtmStatic;

declare var UtmStatic: UtmStatic;
declare interface UtmStatic {
    new (
        zone: number,
        hemisphere: UtmStatic.hemisphere,
        easting: number,
        northing: number,
        datum?: latlon.datum,
        convergence?: number,
        scale?: number
    ): Utm.Utm;
    (
        zone: number,
        hemisphere: UtmStatic.hemisphere,
        easting: number,
        northing: number,
        datum?: latlon.datum,
        convergence?: number,
        scale?: number
    ): Utm.Utm;
    parse(utmCoord: string, datum?: latlon.datum): Utm.Utm;
}
declare namespace UtmStatic {
    export type hemisphere = 'N' | 'S';

    export interface Utm {
        zone: number;
        hemisphere: hemisphere;
        easting: number;
        northing: number;
        datum: latlon.datum;
        convergence: number;
        scale: number;

        toLatLonE(): latlon.LatLonEllipsoidal;
        toString(digits?: number): string;
    }
}

declare module './latlon-ellipsoidal' {
    interface LatLonEllipsoidal {
        toUtm(): Utm.Utm;
    }
}
