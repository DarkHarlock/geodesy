// Type definitions for geodesy
// Project: https://github.com/chrisveness/geodesy
// Based on definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as utm from './utm';
import * as latlon from './latlon-ellipsoidal';

export as namespace Mgrs;
export = MgrsStatic;
declare var MgrsStatic: MgrsStatic;

declare interface MgrsStatic {
    new (
        zone: number,
        band: string,
        e100k: string,
        n100k: string,
        easting: number,
        northing: number,
        datum?: latlon.datum
    ): Mgrs.Mgrs
    (
        zone: number,
        band: string,
        e100k: string,
        n100k: string,
        easting: number,
        northing: number,
        datum?: latlon.datum
    ): Mgrs.Mgrs
    readonly latBands: 'CDEFGHJKLMNPQRSTUVWXX';
    readonly e100kLetters: ['ABCDEFGH', 'JKLMNPQR', 'STUVWXYZ'];
    readonly n100kLetters: ['ABCDEFGHJKLMNPQRSTUV', 'FGHJKLMNPQRSTUVABCDE'];
    parse(mgrsGridRef: string): Mgrs.Mgrs;
}

declare namespace MgrsStatic {
    export interface Mgrs {
        zone: number;
        band: string;
        e100k: string;
        n100k: string;
        easting: number;
        northing: number;
        datum: latlon.datum;

        toUtm(): utm.Utm;
        toString(digits?: 2 | 4 | 6 | 8 | 10): string;
    }
}

declare module './utm' {
    interface Utm {
        toMgrs(): Mgrs.Mgrs;
    }
}