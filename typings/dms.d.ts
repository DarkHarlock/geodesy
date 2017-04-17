// Type definitions for geodesy
// Project: https://github.com/chrisveness/geodesy
// Based on definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Dms;
export = DmsStatic;
declare var DmsStatic: DmsStatic;
declare interface DmsStatic {
    separator: string;
    parseDMS(dmsStr: string | number): number;
    toDMS(deg: number, format?: Dms.format, dp?: Dms.dp): string;
    toLat(deg: number, format?: Dms.format, dp?: Dms.dp): string;
    toLon(deg: number, format?: Dms.format, dp?: Dms.dp): string;
    toBrng(deg: number, format?: Dms.format, dp?: Dms.dp): string;
    compassPoint(bearing: number, precision?: Dms.precision): string;
}
declare namespace DmsStatic {
    export type format = 'd' | 'dm' | 'dms';
    export type dp = 0 | 2 | 4;
    export type precision = 1 | 2 | 3;
}


