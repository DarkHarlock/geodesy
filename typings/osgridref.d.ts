// Type definitions for geodesy
// Project: https://github.com/chrisveness/geodesy
// Based on definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as latlon from './latlon-ellipsoidal';

export as namespace OsGridRef;
export = OsGridRefStatic;
declare var OsGridRefStatic: OsGridRefStatic;

declare interface OsGridRefStatic {
    new (easting: number, northing: number): OsGridRef.OsGridRef;
    (easting: number, northing: number): OsGridRef.OsGridRef;

    latLonToOsGrid(point: latlon.LatLonEllipsoidal): OsGridRef.OsGridRef;
    osGridToLatLon(gridref: OsGridRef.OsGridRef, datum?: latlon.datum): latlon.LatLonEllipsoidal;
    parse(gridref: string): OsGridRef.OsGridRef;
}

declare namespace OsGridRefStatic {
    export interface OsGridRef {
        easting: number;
        northing: number;

        toString(digits?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16): string;
    }
}

